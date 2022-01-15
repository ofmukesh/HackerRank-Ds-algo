def countingSort(arr):
    Arr=[]
    for i in range(100):
        count=0
        for j in  range(len(arr)):
            if i == arr[j]:
                Arr.append(i)
    return Arr
