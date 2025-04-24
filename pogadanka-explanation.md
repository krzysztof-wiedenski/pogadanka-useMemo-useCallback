* * *

Explanation how both hooks work
--------------------------------------

[Source - Explanation](https://www.reddit.com/r/reactjs/comments/1amtuv3/usememo_or_usecallback_which_should_i_use/)

**ENG**

Everytime the component is re-rendered, every function, const, etc. will be redefined/reallocated. Exception goes to useState and useEffect (for the last one, it simply gets re-mounted and re-unmounted eventually).

By redefined/reallocated I mean "it gets a new address on the memory (allocated for the website/webapp)", it could be a value or a function.

When using useMemo and useCallback, the "result" is saved in the same address, so it won't be redefined/reallocated on every re-render, it could save time and increase the performance is they are used well (combining with also memo(), useful for memoizing components). The trade off is "space". You will use more RAM. Memoizing everything is a bad practice, you should memoize only few stuff. They will also need a dependency array because everytime one of the values on the dependency array changes, the "result" will be redefined/reallocated.

Now that you understand this concept, I tell you the difference between useMemo and useCallback.

As the name suggest, useCallback is for the functions. It saves the function on the same address, so whenever you call the function, it will be executed in the same way it was saved on the first render or whenever the dependency array is subject to changes.

Instead, useMemo is for the values. It saves the value(s) on the same address, so whenever you call the variable/const, you will obtain the same result (for example there is some kind of long calculation, and the result is 42. On the next render, you will instantly get 42, without having again the long calculation).

At last, memo(), as I mentioned before, it's for components. If you pass memo(ComponentName) and export it, it won't be re-rendered if it's a Pure Component or the props passed have the same address (passing useMemo, useCallback and useState values as props, you will obtain this). It's useful for example when rendering a long list, and you do changes to only one elements through the parent (using a parent state for example). The other elements won't be re-rendered, but only the one that is changed.

**PL**

Za każdym razem, gdy komponent jest ponownie renderowany, każda funkcja, const itd. zostanie ponownie zdefiniowana/realokowana. Wyjątek trafia do useState i useEffect (w przypadku ostatniego, jest on po prostu ponownie montowany i ostatecznie ponownie odmontowywany).

Przez ponowne zdefiniowanie/realokację mam na myśli „otrzymuje nowy adres w pamięci (przydzielonej dla witryny/aplikacji internetowej)”, może to być wartość lub funkcja.

Podczas korzystania z useMemo i useCallback „wynik” jest zapisywany pod tym samym adresem, więc nie będzie ponownie definiowany/realokowany przy każdym ponownym renderowaniu, co może zaoszczędzić czas i zwiększyć wydajność, jeśli są dobrze używane (łącznie z memo(), przydatne do zapamiętywania komponentów). Kompromisem jest „przestrzeń”. Zużyjesz więcej pamięci RAM. Zapamiętywanie wszystkiego to zła praktyka, powinieneś zapamiętywać tylko kilka rzeczy. Będą również potrzebować tablicy zależności, ponieważ za każdym razem, gdy jedna z wartości w tablicy zależności ulegnie zmianie, „wynik” zostanie zdefiniowany ponownie/przealokowany.

Teraz, gdy rozumiesz tę koncepcję, powiem ci o różnicy między useMemo i useCallback.

Jak sugeruje nazwa, useCallback jest dla funkcji. Zapisuje funkcję pod tym samym adresem, więc kiedykolwiek wywołasz funkcję, zostanie ona wykonana w taki sam sposób, w jaki została zapisana przy pierwszym renderowaniu lub kiedykolwiek tablica zależności podlega zmianom.

Zamiast tego, useMemo jest dla wartości. Zapisuje wartość(y) pod tym samym adresem, więc kiedykolwiek wywołasz zmienną/stałą, otrzymasz ten sam wynik (na przykład istnieje jakiś rodzaj długiego obliczenia, a wynikiem jest 42. Przy następnym renderowaniu natychmiast otrzymasz 42, bez ponownego wykonywania długiego obliczenia).

Na koniec, memo(), jak wspomniałem wcześniej, jest dla komponentów. Jeśli przekażesz memo(ComponentName) i wyeksportujesz go, nie zostanie on ponownie wyrenderowany, jeśli jest czystym komponentem lub przekazane właściwości mają ten sam adres (przekazując wartości useMemo, useCallback i useState jako właściwości, uzyskasz to). Jest to przydatne na przykład podczas renderowania długiej listy i wprowadzania zmian tylko w jednym elemencie przez rodzica (na przykład używając stanu rodzica). Pozostałe elementy nie zostaną ponownie wyrenderowane, ale tylko ten, który został zmieniony.

* * *