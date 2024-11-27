def cargar_productos():
    productos = [
        "", "Procesador Intel i9", "Tarjeta Gráfica NVIDIA RTX 3080", "Memoria RAM Corsair Vengeance 16GB",
        "Placa base ASUS ROG Strix", "Disco Duro SSD Samsung 1TB", "Fuente de poder Corsair 750W", 
        "Teclado Mecánico Logitech G Pro", "Mouse Razer DeathAdder Elite", "Monitor ASUS 24\" 144Hz", 
        "Auriculares HyperX Cloud II", "Caja PC NZXT H510", "Refrigeración líquida Corsair iCUE", 
        "Tarjeta Madre MSI MPG Z490", "Ventiladores ARCTIC P12 (Pack de 3)"
    ]
    
    precios = [
        0, 500, 700, 80, 150, 120, 100, 120, 60, 250, 100, 70, 130, 220, 40
    ]
    
    return productos, precios

def gestionar_compra(eleccion, productos, precios, carrito, total):
    try:
        cantidad = int(input(f"¿Cuántos {productos[eleccion]} deseas comprar? "))
        if cantidad > 0:
            subtotal = precios[eleccion] * cantidad
            total += subtotal
            carrito += f"{productos[eleccion]} x {cantidad} - ${subtotal}\n"
            print(f"Has añadido {cantidad} {productos[eleccion]} al carrito. Subtotal: ${subtotal}")
        else:
            print("La cantidad debe ser mayor que 0.")
    except ValueError:
        print("Por favor, ingresa un número válido.")
    
    return carrito, total