// У стандартного класса Set есть фатальный недостаток. Ему недостаёт нескольких полезных методов.

// union(s) - (объединение множеств) создать новое множество, куда входят все объекты из множества this и множества s
// intersection(s) - (пересечение множеств) создать новое множество, куда входят только объекты, принадлежащие и this, и множеству s
// difference(s) - (разность множеств) создать новое множество, куда входят объекты, принадлежащие this, но не принадлежащие множеству s
// symmetricDifference(s) - (симметрическая разность) создать новое множество, куда входят объекты принадлежащие или this, или множеству s,
// но не обоим множествам одновременно
// isSuperset(s) - функция, возвращающая true, если множество s вложено в множество this
// isSubset(s) - функция, возвращающая true, если множество this вложено в множество s
// Напишите класс EnhancedSet, который наследуется от Set, и расширяет его этими шестью методами. Все методы, возвращающие множества,
// должны возвращать новый объект класса EnhancedSet.

export default class EnhancedSet extends Set {
  union(s) {
    return new EnhancedSet([...s, ...this]);
  }

  intersection(s) {
    return new EnhancedSet([...s].filter((x) => [...this].includes(x)));
  }

  difference(s) {
    return new EnhancedSet([...this].filter((x) => ![...s].includes(x)));
  }

  symmetricDifference(s) {
    let symmDiffSet = new EnhancedSet();

    for (let firstVal of this.values()) {
      if (!s.has(firstVal)) {
        symmDiffSet.add(firstVal);
      }
    }

    for (let secondVal of s.values()) {
      if (!this.has(secondVal)) {
        symmDiffSet.add(secondVal);
      }
    }
    return symmDiffSet;
  }

  isSuperset(s) {
    return [...s.values()].every((value) => this.has(value));
  }

  isSubset(s) {
    return [...this.values()].every((value) => s.has(value));
  }
}
