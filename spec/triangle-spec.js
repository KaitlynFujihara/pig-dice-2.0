import {Triangle} from '../js/triangle-tracker.js';

describe('Triangle', function() {

  it('should test whether a Triangle has three sides', function() {
    var triangle = new Triangle(3,4,5)
    expect(triangle.side1).toEqual(3)
    expect(triangle.side2).toEqual(4)
    expect(triangle.side3).not.toEqual(6)
  });

  it('should correctly determine whether three lengths can be made into a triangle', function () {
    var notTriangle = new Triangle(2,3,10)
    expect(notTriangle.checkType()).toEqual("not a triangle")
  });

 it('should correctly determine whether three lengths are equal and make an equilateral triangle', function() {
   var equilateral = new Triangle(5, 5, 5)
   expect(equilateral.checkType()).toEqual("this is an equilateral triangle!")
 });

 it('should correctly determine whether two lengths are equal and make an isosceles triangle', function (){
   var isosceles = new Triangle (4, 4, 6)
   expect(isosceles.checkType()).toEqual("this is an isosceles triangle!")
 });

 it('should correctly determine whether all three lengths are different and a scalene triangle', function (){
   var scalene= new Triangle (4, 5, 7)
   expect(scalene.checkType()).toEqual("this is a scalene triangle!")
 });
});
