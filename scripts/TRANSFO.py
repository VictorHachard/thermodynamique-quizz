# TRANSFO GAZ PARFAIT (Casio)
# systeme ferme, 1 transfo
# les lignes indentees sont
# les FORMULES a recopier
# ici vide = inconnu :
# le script le calcule
# etat 1 : une seule case
# vide parmi p1, V1, T1, n

from math import log

R = 8.314

def d(t):
    while True:
        s = input(t)
        if s == "":
            return None
        try:
            return float(s)
        except:
            print("nombre invalide")

def q(expl, tag):
    print(expl)
    print("(vide = inconnu)")
    return d(tag)

def ch(t, n):
    while True:
        s = input(t)
        if len(s) == 1 and s >= "1" and s <= str(n):
            return s
        print("reponds 1 a " + str(n))

def nb(a, b, c, e):
    k = 0
    if a is None:
        k = k + 1
    if b is None:
        k = k + 1
    if c is None:
        k = k + 1
    if e is None:
        k = k + 1
    return k

def f(s):
    print("  " + s)

def p(n, v):
    print(n + " = " + str(round(v, 3)))

print("=== TRANSFO GP ===")
print("systeme ferme")
print("1 seule transfo")

print("")
print("--- GAZ ---")
print("gamma Cp/Cv")
print("vide = 1.4 (air)")
g = d("gamma= ")
if g is None:
    g = 1.4
    print("gamma pris = 1.4")
cv = R / (g - 1)
cp = g * cv
f("Cv = R/(g-1)")
p("Cv J/molK", cv)
f("Cp = g.Cv")
p("Cp J/molK", cp)

print("")
print("--- ETAT 1 ---")
print("une seule case vide")
print("sur les quatre")
while True:
    p1 = q("pression p1 bar", "p1= ")
    v1 = q("volume V1 L", "V1= ")
    t1 = q("temperature T1 C", "T1= ")
    nn = q("nombre de moles n", "n= ")
    if nb(p1, v1, t1, nn) <= 1:
        break
    print("trop de cases vides")
    print("il en faut une seule")

if p1 is not None:
    p1 = p1 * 100000
if v1 is not None:
    v1 = v1 / 1000.0
if t1 is not None:
    t1 = t1 + 273.15

f("SI : Pa, m3, K")
f("pV = nRT")
if nn is None:
    f("n = p1V1/(R.T1)")
    nn = p1 * v1 / (R * t1)
elif p1 is None:
    f("p1 = nRT1/V1")
    p1 = nn * R * t1 / v1
elif v1 is None:
    f("V1 = nRT1/p1")
    v1 = nn * R * t1 / p1
elif t1 is None:
    f("T1 = p1V1/(nR)")
    t1 = p1 * v1 / (nn * R)

p("n mol", nn)
p("p1 bar", p1 / 100000)
p("V1 L", v1 * 1000)
p("T1 K", t1)

print("")
print("--- TYPE TRANSFO ---")
print("1=isobare 2=isochore")
print("3=isotherme 4=adiab")
ty = ch("1, 2, 3 ou 4 : ", 4)

print("")
print("--- ETAT 2 ---")
if ty == "1":
    print("isobare : V2 ou T2")
    f("p = cste")
    f("V2/V1 = T2/T1")
elif ty == "2":
    print("isochore : p2 ou T2")
    f("V = cste")
    f("p2/p1 = T2/T1")
elif ty == "3":
    print("isotherme : V2 ou p2")
    f("T = cste")
    f("p1.V1 = p2.V2")
else:
    print("adiab : V2, p2 ou T2")
    f("p.V^g = cste")
    f("T.V^(g-1) = cste")

while True:
    p2 = q("pression p2 bar", "p2= ")
    v2 = q("volume V2 L", "V2= ")
    t2 = q("temperature T2 C", "T2= ")
    if ty == "1":
        ok = v2 is not None or t2 is not None
    elif ty == "2":
        ok = p2 is not None or t2 is not None
    elif ty == "3":
        ok = v2 is not None or p2 is not None
    else:
        ok = v2 is not None or p2 is not None or t2 is not None
    if ok:
        break
    print("pas assez de donnees")

if p2 is not None:
    p2 = p2 * 100000
if v2 is not None:
    v2 = v2 / 1000.0
if t2 is not None:
    t2 = t2 + 273.15

if ty == "1":
    p2 = p1
    if v2 is None:
        f("V2 = V1.T2/T1")
        v2 = v1 * t2 / t1
    else:
        f("T2 = T1.V2/V1")
        t2 = t1 * v2 / v1
elif ty == "2":
    v2 = v1
    if p2 is None:
        f("p2 = p1.T2/T1")
        p2 = p1 * t2 / t1
    else:
        f("T2 = T1.p2/p1")
        t2 = t1 * p2 / p1
elif ty == "3":
    t2 = t1
    if v2 is None:
        f("V2 = p1V1/p2")
        v2 = p1 * v1 / p2
    else:
        f("p2 = p1V1/V2")
        p2 = p1 * v1 / v2
else:
    if v2 is not None:
        f("T2=T1.(V1/V2)^(g-1)")
        f("p2 = p1.(V1/V2)^g")
        t2 = t1 * (v1 / v2) ** (g - 1)
        p2 = p1 * (v1 / v2) ** g
    elif p2 is not None:
        f("T2 = T1.(p2/p1)^")
        f("   ((g-1)/g)")
        f("V2=V1.(p1/p2)^(1/g)")
        t2 = t1 * (p2 / p1) ** ((g - 1) / g)
        v2 = v1 * (p1 / p2) ** (1 / g)
    else:
        f("V2 = V1.(T1/T2)^")
        f("   (1/(g-1))")
        f("p2 = nRT2/V2")
        v2 = v1 * (t1 / t2) ** (1 / (g - 1))
        p2 = nn * R * t2 / v2

p("p2 bar", p2 / 100000)
p("V2 L", v2 * 1000)
p("T2 K", t2)

print("")
print("--- W et Q ---")
f("dU = n.Cv.(T2-T1)")
du = nn * cv * (t2 - t1)
f("dH = n.Cp.(T2-T1)")
dh = nn * cp * (t2 - t1)
if ty == "1":
    f("W = -p.(V2-V1)")
    f("Q = dH")
    w = -p1 * (v2 - v1)
    qc = dh
elif ty == "2":
    f("W = 0 (V constant)")
    f("Q = dU")
    w = 0.0
    qc = du
elif ty == "3":
    f("dU = 0 donc Q = -W")
    f("W = -nRT.ln(V2/V1)")
    w = -nn * R * t1 * log(v2 / v1)
    qc = -w
else:
    f("Q = 0 (adiabatique)")
    f("W = dU")
    qc = 0.0
    w = du
p("W J", w)
p("Q J", qc)
p("dU J", du)
p("dH J", dh)
f("verif dU = W + Q")
p("W+Q", w + qc)

print("")
print("=== FIN ===")
