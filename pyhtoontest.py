text = "Este es una frase para una prueba de un challenge que realize un dia"


def stopWords(text, k):
    dictionary = {}
    response = []
    words = text.split(" ")
    
    for word in words:
        if( dictionary.get(word) == None):
            dictionary[word] = 1
            
        else:
            dictionary[word] = dictionary[word] +1 
            
    for word in dictionary:
        count = dictionary[word]
        if( count >= k ):
            response.append(word) 
    return response  

if __name__ == '__main__':
    stopWords()



    