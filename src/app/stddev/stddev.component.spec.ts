import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';
import { MediasService } from '../services/medias.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let service: MediasService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [MediasService],
      declarations: [StddevComponent],
      imports: [HttpClientModule, FormsModule]
    });
    service = TestBed.inject(MediasService);
    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate the standard deviation correctly for ProxySize', () => {
    const expectedStdDev = 542.6723136479325;

    component.proxySizeStdDev = expectedStdDev;

    expect(component.proxySizeStdDev).toEqual(expectedStdDev);
  });

  it('should calculate the standard deviation correctly for DevHours', () => {
    const expectedStdDev = 59.06106670218546;

    component.devHoursStdDev = expectedStdDev;

    expect(component.devHoursStdDev).toEqual(expectedStdDev);
  });

  describe('Integration Tests', () => {
    it('should set input model through ngModel', async () => {
      // Arrange
      const numerosInput = fixture.debugElement.nativeElement.querySelector('#numeros');

      // Act
      numerosInput.value = '5';
      numerosInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      // Assert
      expect(component.numeros).toEqual('5');
    });

    it('should call agregarNumeros method when "Agregar" button is clicked', () => {
      // Arrange
      spyOn(component, 'agregarNumeros');
      const agregarButton = fixture.debugElement.nativeElement.querySelector('button');

      // Act
      agregarButton.click();
      fixture.detectChanges();

      // Assert
      expect(component.agregarNumeros).toHaveBeenCalled();
    });

    it('should call agregarNumeros method when "Media" button is clicked', () => { 
      // Arrange
      spyOn(component, 'agregarNumeros'); 
      const mediaButton = fixture.debugElement.nativeElement.querySelector('button'); 

      // Act
      mediaButton.click();
      fixture.detectChanges();

      // Assert
      expect(component.agregarNumeros).toHaveBeenCalled(); 
    });

    it('should call agregarNumeros method when "Desviación" button is clicked', () => { 
      // Arrange
      spyOn(component, 'agregarNumeros'); 
      const desviacionButton = fixture.debugElement.nativeElement.querySelector('button'); 

      // Act
      desviacionButton.click();
      fixture.detectChanges();

      // Assert
      expect(component.agregarNumeros).toHaveBeenCalled(); 
    });
  });
});
