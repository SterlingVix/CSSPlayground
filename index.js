window.onload = function () {
  console.log('Page loaded');
  document.Pg = {};

  /******
   * The document.Pg and Pg objects
   *****/

  var Pg = document.Pg; // "Pg" is a convenience for "PlayGround." FYI. :)

  Pg.divParent = document.getElementById('parent');
  Pg.divSelectors = document.getElementById('selectors');
  Pg.selectorHeaderDiv = document.getElementById('selectorheader'); // header at top of selectors div
  Pg.divPlayground = document.getElementById('playground');
  Pg.pStyles = Pg.divPlayground.style;

  Pg.pgProperties = {};

  Pg.keyupFunction = function (element) {
    var property = element.id; // this is also the CSS property name...
    document.Pg.divPlayground.style[property] = element.value;
    var lastChar = element.value.slice(-1); // console.log(lastChar);
    console.log(document.Pg.divPlayground);
    console.log(document.Pg.divPlayground[property]);
    console.log(document.Pg.divPlayground.style);
    
    Pg.updateSelectorHeader();
    // TODO update css display here
  }; // end Pg.keyupFunction()

  Pg.getProperties = function () {
    for (var key in document.Pg) {
      console.log('document.Pg[' + key + '] =', document.Pg[key]);
    }
  }; // end Pg.getProperties()

  // Move the cssText element out of the selectable options
  Pg.updateSelectorHeader = function () {
    Pg.cssTextValue.innerHTML = 'cssText: "' + document.Pg.divPlayground.style.cssText + '"';
  } // end Pg.selectorHeader()


  //  var testBackground = document.getElementById('background');
  ////  testBackground.onkeyup = "alert('key pressed');";
  //  testBackground.setAttribute('onkeyup', 'document.Pg.keyupFunction(this)');
  //  console.log(testBackground);



  for (var key in Pg.pStyles) {
    // assigns the key & property to Pg.pgProperties;
    Pg.pgProperties[key] = Pg.pStyles[key];

    // styleselector div for containing input
    var styleSelectorDiv = document.createElement('div');
    styleSelectorDiv.className = 'styleselector';

    // formInput input field for typing values
    // formInput.value = current value
    var formInput = document.createElement('input');
    formInput.className = 'input ' + key;
    formInput.id = key;
    formInput.setAttribute('onkeyup', 'document.Pg.keyupFunction(this)');

    //    // selectInput selector field
    //    // var selectOption = document.createElement('option');
    //    // selectOption.nodeValue = 'defaultOption';
    //    var selectInput = document.createElement('select');
    //    selectInput.className = 'select ' + key;
    //    selectInput.innerHTML = '<option value="default option">default option</option>';

    // var textNode = document.createTextNode(key);
    var textNode = document.createTextNode(key + ': ');

    // selectInput.appendChild(selectOption);

    if (key !== 'cssText') {
      styleSelectorDiv.appendChild(textNode);
      styleSelectorDiv.appendChild(formInput);
      Pg.divSelectors.appendChild(styleSelectorDiv);
    } else { // apply cssText header
      Pg.cssTextValue = document.createElement('h3');
      Pg.cssTextValue.style.textAlign = 'left';
      Pg.cssTextValue.style.padding = '0.5em';

      Pg.selectorHeaderDiv.appendChild(Pg.cssTextValue);
      Pg.updateSelectorHeader();
    }
  } // end for (key in Pg.pStyles)


  //TODO: group by comparing strings with 'contains', and if one string contains the other
  // (like "borderColor" contains "border"), make a child node
  
  /////////////////////////////////////////////////////
  /////////////////////////////////////////////////////
  /////////////////////////////////////////////////////
  var model = {
    array: [1, 2, 3]
  };

  Object.observe(model, function (changes) { // Observe the data-containing model
    changes.forEach(function (change) { // This asynchronous callback runs
      //      console.log(change.type, change.name, change.oldValue); // log all the changes
    });
  });

  var string = 'hello world';

  model.string = string;
  model.array.push(4);

  //  console.log(model.array); // runs before "model.string add"! Because it's asynchronous...?
}; // end window.onload()