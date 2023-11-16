## 1. 선택정렬(Selection Sort)

<br>
- 선택정렬은 매 단계에서 가장 작은 원소를 선택해서 앞으로 보내는 정렬 
- 현재까지 처리되지 않은 원소들 중 가장 앞의 원소와 위치를 교체
- 앞으로 보내진 원소는 더이상 위치가 변경되지 않는다.
- 시간복잡도 O(N^2)로 비효율적인 정렬 알고리즘

#### 구현코드

```
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    // 스와프(swap)
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}
```

## 2. 버블정렬(Bubble Sort)

<br>
- 단순히 인접한 두 원소를 확인하여, 정렬이 안되어 있다면 위치를 서로 변경한다.
- 서로 인접한 두 원소를 비교하는 형태가 거품과 같다고 하여 붙여진 이름
- 각 단계에서 인접한 두 개의 원소를 비교하여, 필요시 위치를 변경한다.
- 첫째와 둘째를 비교, 둘째와 셋째를 비교, 셋째와 넷째를 비교하는 방식이다.
- 한 번의 단계가 수행되면, 가장 큰 원소가 맨 뒤로 이동 -> 따라서, 그 다음 단계에서는 맨 뒤로 이동한 데이터는 정렬에서 제외한다.
- 각 단계를 거칠 때마다 가장 큰 값을 하나씩 확실하게 결정하는 것으로 이해할 수 있다.
- 시간 복잡도 O(N^2)로 비효율적인 정렬 알고리즘

#### 구현코드

```
// 버블 정렬 함수
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
```

## 3. 삽입정렬

<br>
- 삽입정렬이란 각 원소를 적절한 위치에 삽입하는 정렬 기법이다.
- 삽입 정렬을 수행할 때는 처음에 첫번째 원소는 정렬이 되어 있다고 고려한다.
- 각 단계에서 현재 원소가 삽입될 위치를 찾는다.
- 적절한 위치에 도달할 때까지 반복적으로 왼쪽으로 이동한다.
- 매 단계에서 현재 처리중인 원소가 삽입될 위치를 찾기 위해 약 N번의 연산이 필요하다.
- 결과적으로 약 N개의 단계를 거친다는 점에서 최악의 경우 O(N^2)의 시간복잡도를 가진다.
- 이미 정렬이 되어 있는 경우 최선의 경우는 O(N)

#### 구현코드

```
// 삽입 정렬 함수
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 인덱스 j부터 1까지 1씩 감소하며 반복
      if (arr[j] < arr[j - 1]) {
        // 한 칸씩 왼쪽으로 이동
        // 스와프(swap)
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        } else {
          // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
          break;
        }
    }
  }
}
```

## 4. 병합정렬

<br>
- 병합정렬은 전형적인 분할 정복 알고리즘
- 분할 : 정렬할 배열을 같은 크기의 부분배열 2개로 분할
- 정복 : 부분 배열을 정렬
- 조합 : 정렬된 부분 배열을 하나의 배열로 다시 병합
- 분할 정복은 일반적으로 재귀 함수를 이용하여 구현 -> 더이상 쪼갤수 없는 크기가 될 때까지 계속하여 분할해야 하기 때문
- 시간복잡도 : O(NlogN) 보장하는 빠른 정렬 알고리즘

```
// 병합(merge) 수행 함수
function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left; // 결과 배열의 인덱스
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }
  // 왼쪽 배열에 대한 처리가 다 끝난 경우
  if (i > mid) {
    for (; j <= right; j++) sorted[k++] = arr[j];
  }
  // 오른쪽 배열에 대한 처리가 다 끝난 경우
  else {
    for (; i <= mid; i++) sorted[k++] = arr[i];
  }
  // 정렬된 배열 결과를 원본 배열에 반영하기
  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
}

// 병합 정렬(merge sort) 함수
function mergeSort(arr, left, right) {
  // 원소가 1개인 경우, 해당 배열은 정렬이 된 상태로 이해 가능
  if (left < right) {
    // 원소가 2개 이상이라면
    let mid = parseInt((left + right) / 2); // 2개의 부분 배열로 분할(divide)
    mergeSort(arr, left, mid); // 왼쪽 부분 배열 정렬 수행(conquer)
    mergeSort(arr, mid + 1, right); // 오른쪽 부분 배열 정렬 수행(conquer)
    merge(arr, left, mid, right); // 정렬된 2개의 배열을 하나로 병합(combine)
  }
}
```
