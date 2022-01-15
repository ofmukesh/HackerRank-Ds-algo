def countingSort(arr):
    Arr=[]
    for i in range(100):
        count=0
        for j in  range(len(arr)):
            if i == arr[j]:
                count=count+1
        Arr.append(count)
    return Arr
