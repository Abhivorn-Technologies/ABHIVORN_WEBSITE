# Make light-theme blog cover images: python3 scripts/blog-cover.py <slug> [<slug> ...]  -> public/blog-covers/<slug>.jpg
import sys, json, re, textwrap
from PIL import Image, ImageDraw, ImageFont, ImageFilter
src=open("src/lib/blog.ts").read()
slugs=sys.argv[1:]
FB="/usr/share/fonts/opentype/inter/Inter-Bold.otf"; FM="/usr/share/fonts/opentype/inter/Inter-Medium.otf"
palette={"Healthcare":((236,253,245),(16,122,94)),"Custom Software":((239,246,255),(13,61,140)),
 "Mobile Apps":((245,243,255),(91,63,190)),"Web Development":((240,249,255),(3,105,161)),
 "Digital Marketing":((255,247,237),(194,85,12)),"AI":((250,245,255),(126,34,206)),"HRMS":((240,253,250),(15,118,110))}
for s in slugs:
    i=src.index('"slug": "%s"'%s); blk=src[i:i+3000]
    title=re.search(r'"title": "([^"]*)"',blk).group(1); cat=re.search(r'"category": "([^"]*)"',blk).group(1)
    bg,ac=palette.get(cat,((241,245,249),(13,61,140)))
    W,H=1600,900; im=Image.new("RGB",(W,H),bg); d=ImageDraw.Draw(im)
    # soft shapes
    ov=Image.new("RGBA",(W,H),(0,0,0,0)); od=ImageDraw.Draw(ov)
    od.ellipse((1050,-250,1850,550),fill=ac+(38,)); od.ellipse((1250,450,1900,1100),fill=ac+(24,))
    for k in range(6): od.rounded_rectangle((1120+k*0,300+k*70,1480,340+k*70),radius=20,fill=ac+(30+k*8,))
    ov=ov.filter(ImageFilter.GaussianBlur(2)); im.paste(ov,(0,0),ov); d=ImageDraw.Draw(im)
    f=ImageFont.truetype(FM,34); tw=d.textlength(cat.upper(),font=f)
    d.rounded_rectangle((110,150,110+tw+56,150+68),radius=34,fill=ac); d.text((138,163),cat.upper(),font=f,fill=(255,255,255))
    size,wrap,lh=84,22,104
    if len(textwrap.wrap(title,22))>3: size,wrap,lh=68,27,84
    ft=ImageFont.truetype(FB,size); lines=textwrap.wrap(title,wrap); y=290
    while max(d.textlength(l,font=ft) for l in lines)>940: size-=4; lh=int(size*1.24); ft=ImageFont.truetype(FB,size)
    for ln in lines[:5]: d.text((110,y),ln,font=ft,fill=(15,23,42)); y+=lh
    d.rectangle((110,y+30,230,y+38),fill=ac)
    d.text((110,H-120),"Abhivorn Technologies",font=ImageFont.truetype(FM,36),fill=(71,85,105))
    im.save(f"public/blog-covers/{s}.jpg",quality=86,optimize=True,progressive=True)
    print(s, cat)
