// Hola mundo en C++
#include<iostream> // nos permite utilizar comando como cout y el cin
#include<string> // nos permite utilizar el tipo de dato string
using namespace std; // nos permite utilizar cout y cin sin el std::


int main(void) // funcion principal
{
    cout << "Hola mundo de Archivos!" << endl;
    int a = 10;

    if(a==10){
        cout << "a es igual a 10" << endl;
    }

    while(a>0){
        cout << "a es mayor a 0" << endl;
        a--;
    }

    for(int i=0; i<10; i++){
        cout << "i vale: " << i << endl;
    }

    int b = 0;
    float c = 3.1415592654;
    double d = 3.1415592654;
    char e = 'a';
    string f = "";
    bool g = true;
    char h[40];


    // cout << "Ingrese un texto: " ;
    // cin >> f;
    // cin.getline(h, 40);
    // getline(cin,f);

    // cout << "El texto ingresado es: " << f << endl;
    
    a += 15;
    cout << "a vale: " << a << endl;

    int edades[5] = {10, 20, 30, 40, 50};
    string nombres[5] = {"Juan", "Pedro", "Maria", "Jose", "Luis"};
    char hola[4] = {'H', 'o', 'l', 'a'};

    cout << "Edades: ";
    for(int i=0; i<5; i++){
        cout << edades[i] << " ";
    }
    cout << endl;
    cout << "Nombres: ";
    for(int i=0; i<5; i++){
        cout << nombres[i] << " ";
    }
    cout << endl; // end line (salto de linea)
    cout << "var hola: ";
    for(int i=0; i<4; i++){
        cout << hola[i];
    }
    
    cout << endl;
}