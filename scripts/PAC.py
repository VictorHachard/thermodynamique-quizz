# FRIGO / PAC  (Casio)
# les lignes indentees sont
# les FORMULES a recopier
# (vide = passer) : tu peux
# laisser vide, sinon la
# question est reposee

def d(t):
    while True:
        s = input(t)
        if s == "":
            return None
        try:
            return float(s)
        except:
            print("nombre invalide")

def dr(t):
    while True:
        v = d(t)
        if v is not None:
            return v
        print("obligatoire")

def q(expl, tag):
    print(expl)
    print("(vide = passer)")
    return d(tag)

def qr(expl, tag):
    print(expl)
    return dr(tag)

def ch(t, n):
    while True:
        s = input(t)
        if len(s) == 1 and s >= "1" and s <= str(n):
            return s
        print("reponds 1 a " + str(n))

def kel(v):
    if v is None:
        return None
    if uc == "1":
        return v + 273.15
    return v

def f(s):
    print("  " + s)

def p(n, v):
    print(n + " = " + str(round(v, 3)))

print("=== FRIGO / PAC ===")
print("h en kJ/kg")
print("1-2 compresseur")
print("2-3 condenseur")
print("3-4 detendeur")
print("4-1 evaporateur")

print("")
print("--- LES 4 POINTS ---")
h1 = qr("h1 sortie evapo", "h1= ")
h3 = qr("h3 sortie condens", "h3= ")
h2 = q("h2 reel sortie comp", "h2= ")
if h2 is None:
    print("h2 vide -> on passe")
    print("par l isentropique")
    h2s = qr("h2 isentropique", "h2s= ")
    ei = qr("rend. isentro 0-1", "eis= ")
    f("eis = (h2s-h1)")
    f("      /(h2-h1)")
    f("h2=h1+(h2s-h1)/eis")
    h2 = h1 + (h2s - h1) / ei
    p("h2 calcule", h2)
h4 = h3

w = h2 - h1
q1 = h3 - h2
q2 = h1 - h4

print("")
print("--- PAR KG FLUIDE ---")
f("detente isenthalpe")
f("h4 = h3")
p("h4", h4)
f("w = h2 - h1")
p("w", w)
f("q1 = h3 - h2 (<0)")
p("q1", q1)
f("q2 = h1 - h4 (>0)")
p("q2", q2)
f("cycle : q1+q2+w = 0")
p("verif somme", q1 + q2 + w)
if w != 0:
    f("frigo : PSN = q2/w")
    p("PSN", q2 / w)
    f("PAC : COP = -q1/w")
    p("COP", -q1 / w)
else:
    print("w = 0 : PSN et COP")
    print("impossibles")

print("")
print("--- CARNOT ---")
print("bornes theoriques")
print("temperatures en :")
uc = input("1=C 2=K : ")
if uc == "2":
    u = "K"
else:
    uc = "1"
    u = "C"
print("-> tout en " + u)
f("K = C + 273.15")
f("C = K - 273.15")
tf = q("T froide en " + u, "Tfroid= ")
if tf is not None:
    tc = qr("T chaude en " + u, "Tchaud= ")
    t2 = kel(tf)
    t1 = kel(tc)
    f("T en KELVIN")
    if t1 != t2:
        f("PSNmax = T2/(T1-T2)")
        p("PSNmax", t2 / (t1 - t2))
        f("COPmax = T1/(T1-T2)")
        p("COPmax", t1 / (t1 - t2))
    else:
        print("Tchaud = Tfroid :")
        print("Carnot impossible")

print("")
print("--- DEBITS ---")
pu = q("P utile en kW", "Putile= ")
if pu is not None:
    print("frigo ou PAC ?")
    m = ch("1=frigo 2=pac : ", 2)
    if m == "1":
        qu = q2
        f("utile = q2 (froid)")
    else:
        qu = -q1
        f("utile = -q1 (chaud)")
    if qu == 0:
        print("q utile = 0 :")
        print("debit impossible")
    else:
        md = pu / qu
        f("mdot = Putile/qut")
        p("mdot kg/s", md)
        f("Pcomp = mdot.w")
        p("Pcomp kW", md * w)
        if m == "1":
            f("Pcond = Pevap+Pcomp")
            p("Pcond kW", pu + md * w)
        else:
            f("Pevap = Pcond-Pcomp")
            p("Pevap kW", pu - md * w)
        ce = q("c secondaire J/kgK", "csec= ")
        if ce is not None:
            dt = qr("delta T secondaire", "dT= ")
            if ce * dt != 0:
                f("meme P des 2 cotes")
                f("mdot2 = P(W)/(c.dT)")
                p("mdot2 kg/s", pu * 1000 / (ce * dt))
            else:
                print("c ou dT = 0 :")
                print("mdot2 impossible")

print("")
print("=== FIN ===")
