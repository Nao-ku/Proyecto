def mostrar_bienvenida():
    print("Bienvenido a la Tienda de Componentes Gamer")
    print("=========================================")

def mostrar_menu(productos, precios):
    print("Productos disponibles:")
    print("------------------------")
    for i in range(1, len(productos)):
        print(f"{i}. {productos[i]} - ${precios[i]}")

def mostrar_resumen(carrito, total):
    print("Gracias por tu compra. ¡Esperamos verte pronto!")
    print("Resumen de tu compra:")
    print(carrito)
    print(f"Total de la compra: ${total}")