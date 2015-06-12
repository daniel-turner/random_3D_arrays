function sort_2D_array(rows,columns) {

  //generate random array
  var array = [];
  var newRow;

  for(var c = 0;c<columns;c++) {

    newRow = [];

    for(var r = 0;r<rows;r++) {

      newRow.push(Math.floor(Math.random()*99 + 1));
    }

    array.push(newRow);
  }

  //sort 1d

  var newArray = [];

  for(var i = 0;i<array.length;i++) {

    for(var j = 0;j<array[i].length;j++) {

      newArray.push(array[i][j]);
    }
  }

  newArray = newArray.sort(function(x,y) {

    return x-y;
  });



  //sort 2d

  var out = [];

  while(newArray.length > 0) {

    for(var i = 0;i<columns;i++) {

      newRow = [];

      for(var j = 0;j<rows;j++) {

        newRow.push(newArray.splice(0,1));
      }

      out.push(newRow);
    }
  }

  console.log(out);

  return out;
}

//sort_2D_array(7,8);