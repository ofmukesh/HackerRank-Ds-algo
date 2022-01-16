def quickSort(arr):
    NewArr=[]
    p=arr[0]
    NewArr.append(p)
    count=0
    for i in range(len(arr)):
        if arr[i]<p:
            NewArr.insert(count,arr[i])
            count=count+1
        elif arr[i]>p:
            NewArr.append(arr[i])
    return NewArr
