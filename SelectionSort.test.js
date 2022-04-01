const selectionSort = require ('./SelectionSort')

test('empty array will equal empty array', () => {
    expect(selectionSort([])).toEqual([]);
  });
  
  test('one element array will return copy', () => {
    expect(selectionSort([5])).toEqual([5]);
  });
  
  test('two elements', () => {
    expect(selectionSort([3, 1])).toEqual([1, 3]);
  });
  
  test('several elements', () => {
    expect(selectionSort([10, 4, 3, 2, 1, 5])).toEqual([1, 2, 3, 4, 5, 10]);
  });
     
  test('integers, negative and whole', () => {
    expect(selectionSort([-1, -2, 4, 2])).toEqual([-2, -1, 2, 4]);
  });
  
  test('repeating elements', () => {
    expect(selectionSort([1, 4, 2, 1, 2, 4, 20, -2])).toEqual([1, 4, 2, 1, 2, 4, 20, -2].sort((a, b) => a - b));
  });
  
  