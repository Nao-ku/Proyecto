from interfaz import mostrar_bienvenida, mostrar_menu, mostrar_resumen
from productos import cargar_productos, gestionar_compra

productos, precios = cargar_productos()
total = 0
carrito = ""

mostrar_bienvenida()

while True:
    mostrar_menu(productos, precios)
    try:
        eleccion = int(input("Elige el número del producto que deseas comprar: "))
        
        # Validación para elegir una opción válida del producto
        if 1 <= eleccion < len(productos):  # Aún usamos len, porque es flexible
            carrito, total = gestionar_compra(eleccion, productos, precios, carrito, total)
        else:
            print("Opción no válida. Intenta de nuevo.")
    
    except ValueError:
        print("Error: Debes ingresar un número entero.")