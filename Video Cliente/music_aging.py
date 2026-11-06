import numpy as np
from scipy import signal
from scipy.io import wavfile
SR=48000; BPM=96; beat=60/BPM; bar=4*beat; DUR=30.0
N=int(SR*(DUR+3)); rng=np.random.default_rng(7)
L=np.zeros(N); R=np.zeros(N)
def mid(n): return 440*2**((n-69)/12)
def add(sig,t0,pan=0.0,gain=1.0):
    i=int(t0*SR); 
    if i>=N: return
    s=sig[:N-i]*gain
    L[i:i+len(s)]+=s*(1-max(0,pan)); R[i:i+len(s)]+=s*(1+min(0,pan))
def env(n,a,d,s,r_):  # simple ADSR-ish for length n samples
    e=np.ones(n); a=int(a*SR); r_=int(r_*SR)
    e[:a]=np.linspace(0,1,a) if a>0 else 1
    e[-r_:]*=np.linspace(1,0,r_)
    return e
def pad(freqs,dur,detune=0.004):
    n=int(dur*SR); t=np.arange(n)/SR; out=np.zeros(n)
    for f in freqs:
        for d in (-detune,0,detune):
            ff=f*(1+d); ph=rng.random()*6.28
            out+=signal.sawtooth(2*np.pi*ff*t+ph)*0.5
    out=signal.sosfilt(signal.butter(2,1400,'low',fs=SR,output='sos'),out)
    return out*env(n,1.2,0,1,1.8)/ (len(freqs)*3)
def pluck(f,dur=1.2):
    n=int(dur*SR); t=np.arange(n)/SR
    s=np.sin(2*np.pi*f*t)+.35*np.sin(2*np.pi*2*f*t)*np.exp(-t*7)+.15*np.sin(2*np.pi*3*f*t)*np.exp(-t*12)
    return s*np.exp(-t*4.2)*(1-np.exp(-t*400))
def bass(f,dur):
    n=int(dur*SR); t=np.arange(n)/SR
    return (np.sin(2*np.pi*f*t)+.25*np.sin(2*np.pi*2*f*t))*env(n,.02,0,1,.15)
def kick(dur=.35):
    n=int(dur*SR); t=np.arange(n)/SR
    f=45+90*np.exp(-t*28); ph=2*np.pi*np.cumsum(f)/SR
    return np.sin(ph)*np.exp(-t*9)
def hat(dur=.08):
    n=int(dur*SR); x=rng.standard_normal(n)
    x=signal.sosfilt(signal.butter(2,7000,'high',fs=SR,output='sos'),x)
    return x*np.exp(-np.arange(n)/SR*55)
# A minor / hopeful: Am - F - C - G  (2 bars each)
prog=[(57,[57,60,64,67]),(53,[53,57,60,64]),(48,[48,52,55,59]),(55,[55,59,62,66])]  # root, chord tones (midi)
nbars=13
for b in range(nbars):
    t0=b*bar; ci=(b//2)%4; root,ch=prog[ci]
    last = b>=11
    if last: root,ch=prog[0]
    first_bar_of_chord=(b%2==0)
    sec=b/ nbars
    # pad every chord change, sustained 2 bars
    if first_bar_of_chord or last:
        d=bar*2 if not last else bar*2.3
        add(pad([mid(n) for n in ch[:3]]+[mid(ch[0]+12)],d),t0,0,0.55)
    # bass
    if b>=1 and b<11:
        add(bass(mid(root-12),beat*1.8),t0,0,0.55); add(bass(mid(root-12),beat*1.8),t0+2*beat,0,0.45)
    # arp 8ths
    if b>=1 and b<12:
        pat=[0,2,1,3,2,1,3,2]; acc=[1,.5,.7,.5,.9,.5,.7,.5]
        for k in range(8):
            if b<2 and k%2: continue
            f=mid(ch[pat[k]%4]+12+(12 if pat[k]==3 else 0))
            add(pluck(f),t0+k*beat/2,pan=(-.45 if k%2==0 else .45),gain=.33*acc[k])
    # melody notes (sparse, bars 8-24): upper chord tone, half notes
    if 8<=b<11 and b%2==0:
        m=[ch[3]+24,ch[2]+24,ch[3]+24,ch[1]+24][(b//2)%4]
        add(pluck(mid(m),2.2),t0+beat*1.5,0,.28)
    # drums
    if 4<=b<11:
        add(kick(),t0,0,.55); add(kick(),t0+2*beat,0,.45)
        if b>=4:
            for k in range(8): add(hat(),t0+k*beat/2+beat/4*0,pan=.2,gain=.10 if k%2 else .06)
if True:
    add(pluck(mid(81),3.0),11*bar+beat,0,.3)
# stereo reverb
ir_n=int(2.2*SR); tt=np.arange(ir_n)/SR
irL=rng.standard_normal(ir_n)*np.exp(-tt*2.6); irR=rng.standard_normal(ir_n)*np.exp(-tt*2.6)
sos=signal.butter(2,5000,'low',fs=SR,output='sos'); irL=signal.sosfilt(sos,irL); irR=signal.sosfilt(sos,irR)
wL=signal.fftconvolve(L,irL)[:N]*0.035; wR=signal.fftconvolve(R,irR)[:N]*0.035
L=L*0.8+wL; R=R*0.8+wR
# master: gentle low cut, trim, fades
hp=signal.butter(2,35,'high',fs=SR,output='sos'); L=signal.sosfilt(hp,L); R=signal.sosfilt(hp,R)
M=np.stack([L,R],1)[:int(SR*DUR)]
tn=np.arange(len(M))/SR
fade=np.minimum(1,tn/2.5)*np.minimum(1,(DUR-tn)/3.5)
M*=fade[:,None]
M*= 0.28/np.sqrt((M**2).mean())   # target RMS ~ -11 dBFS before limiter, then scale
pk=np.abs(M).max(); M*=min(1,0.85/pk)
M*=0.55  # background level under visuals
wavfile.write("music_aging.wav",SR,(M*32767).astype(np.int16))
print("peak",np.abs(M).max(),"rms dBFS",20*np.log10(np.sqrt((M**2).mean())))
