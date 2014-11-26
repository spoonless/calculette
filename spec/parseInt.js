Description("la fonction Javascript parseInt", function() {

  elle("convertit une chaîne de caractères en nombre", function() {
    var result = parseInt("1");
    expect(result).toBe(1);
  });

  elle("convertit une chaîne de caractères commençant par des caractères numériques en nombre", function() {
    var result = parseInt("1a");
    expect(result).toBe(1);
  });

  elle("convertit une chaîne de caractères vide en un NaN", function() {
    var result = parseInt("");
    expect(result).toBeNaN(1);
  });

  elle("convertit une chaîne de caractères commençant par un caractère non numérique en un NaN", function() {
    var result = parseInt("a1");
    expect(result).toBeNaN(1);
  });

});

