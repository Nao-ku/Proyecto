from interfaz import mostrar_bienvenida, mostrar_menu, mostrar_resumen
from productos import cargar_productos, gestionar_compra

def ejecutar_aplicacion():
    productos, precios = cargar_productos()
    total = 0
    carrito = ""
    
    mostrar_bienvenida()
    
    while True:
        mostrar_menu(productos, precios)
        eleccion = int(input("Elige el número del producto que deseas comprar (o 0 para terminar): "))
        
        if eleccion == 0:
            if total > 0:
                mostrar_resumen(carrito, total)
            else:
                print("No seleccionaste ningún producto. ¡Hasta la próxima!")
            break
        
        carrito, total = gestionar_compra(eleccion, productos, precios, carrito, total)

ejecutar_aplicacion()