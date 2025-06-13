export function guessGender(name: string): 'male' | 'female' | 'unknown' {
    const lowerName = name.trim().toLowerCase();
  
    const femaleEndings = ['а', 'я', 'ия', 'льда', 'иня', 'ына', 'ю'];
    const maleEndings = ['й', 'н', 'р', 'в', 'д', 'м', 'т', 'л', 'г', 'б', 'п', "никита"];
  
    if (!name) return 'unknown';
  
    // Проверим на мужские окончания
    if (maleEndings.some(ending => lowerName.endsWith(ending))) {
      return 'male';
    }
  
    // Проверим на женские окончания
    if (femaleEndings.some(ending => lowerName.endsWith(ending))) {
      return 'female';
    }
  
  
  
    return 'unknown';
  }