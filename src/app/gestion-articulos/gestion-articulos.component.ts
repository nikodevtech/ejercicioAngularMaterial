import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-gestion-articulos',
  templateUrl: './gestion-articulos.component.html',
  styleUrls: ['./gestion-articulos.component.css']
})
export class GestionArticulosComponent {

  articulos = [
    { id: 1, name: 'Camiseta Casual', stock: 50 },
    { id: 2, name: 'Zapatillas Deportivas', stock: 30 },
    { id: 3, name: 'Reloj Inteligente', stock: 20 },
    { id: 4, name: 'Auriculares Bluetooth', stock: 40 },
    { id: 5, name: 'Mochila Resistente al Agua', stock: 25 },
    { id: 6, name: 'Tablet Android', stock: 15 },
    { id: 7, name: 'Botella de Agua Reutilizable', stock: 60 },
    { id: 8, name: 'Portátil Ultraligero', stock: 10 },
    { id: 9, name: 'Cámara de Acción 4K', stock: 18 },
    { id: 10, name: 'Teclado Mecánico para Gaming', stock: 35 },
    { id: 11, name: 'Gafas de Sol Polarizadas', stock: 45 },
    { id: 12, name: 'Libro Electrónico', stock: 22 },
    { id: 13, name: 'Máquina de Café Automática', stock: 12 },
    { id: 14, name: 'Silla Ergonómica para Oficina', stock: 8 },
    { id: 15, name: 'Planta de Interior Decorativa', stock: 30 },
    { id: 16, name: 'Linterna Recargable', stock: 50 },
    { id: 17, name: 'Juego de Herramientas para Hogar', stock: 28 },
    { id: 18, name: 'Puzzle de 1000 Piezas', stock: 0 },
    { id: 19, name: 'Pelota de Yoga', stock: 15 },
    { id: 20, name: 'Set de Utensilios de Cocina de Acero Inoxidable', stock: 0 },
  ];
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
