import { Triangle } from '../js/triangle-tracker.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#length1").val());
    var side2 = parseInt($("input#length2").val());
    var side3 = parseInt($("input#length3").val());

    var newTriangle = new Triangle(side1, side2, side3);

    var result = newTriangle.checkType();
    $("#result").text(result);
    event.preventDefault();
  });
});
