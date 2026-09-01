# COMBUSTION CxHy (Casio)
# air, exces d air, chaleur
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

def p(n, v):
    print(n + " = " + str(round(v, 3)))

print("=== COMBUSTION ===")
print("CxHy + O2 ->")
print("CO2 + H2O")

print("")
print("--- CARBURANT ---")
x = qr("nombre de carbone x", "x= ")
y = qr("nombre d hydrogene y", "y= ")
print("exces d air lambda")
print("vide = 1")
la = d("lambda= ")
if la is None:
    la = 1.0
    print("lambda pris = 1")

no = x + y / 4
na = no / 0.21
nar = na * la
mm = 12 * x + y

print("")
print("--- PAR MOLE CARB ---")
p("nO2 stoe", no)
p("nair stoe", na)
p("nair reel", nar)
p("nCO2", x)
p("nH2O", y / 2)
p("M carb g/mol", mm)
p("AF masse", nar * 28.9 / mm)

print("")
print("--- QUANTITES ---")
print("pas de quantite ?")
print("laisse les 2 vides")
mc = q("masse carburant kg", "mcarb= ")
if mc is None:
    nc = q("ou moles carbu mol", "ncarb= ")
else:
    nc = mc * 1000 / mm
if nc is not None:
    p("n carb mol", nc)
    p("m carb g", nc * mm)
    p("n air mol", nc * nar)
    p("m air kg", nc * nar * 28.9 / 1000)
    p("n O2 mol", nc * no * la)
    pci = q("PCI carbu kJ/kg", "PCI= ")
    if pci is not None:
        p("Q J", nc * mm / 1000 * pci * 1000)

print("")
print("=== FIN ===")
