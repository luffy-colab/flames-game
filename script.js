function calculateFLAMES() {
    let name1 = document.getElementById("name1").value.toLowerCase().replace(/\s/g, '');
    let name2 = document.getElementById("name2").value.toLowerCase().replace(/\s/g, '');
  
    if (!name1 || !name2) {
      document.getElementById("result").innerText = "Please enter both names.";
      return;
    }
  
    // Remove common letters
    for (let i = 0; i < name1.length; i++) {
      let char = name1[i];
      if (name2.includes(char)) {
        name1 = name1.replace(char, '');
        name2 = name2.replace(char, '');
        i--;
      }
    }
    
    let count = name1.length + name2.length;
  
    const flames = ['Friend', 'Love', 'Affection', 'Marriage', 'Enemy', 'Sister'];
    let index = 0;
  
    while (flames.length > 1) {
      index = (index + count - 1) % flames.length;
      flames.splice(index, 1);
    }
  
    document.getElementById("result").innerText = "Relationship: " + flames[0];
  }
  