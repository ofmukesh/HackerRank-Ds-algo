def arrayManipulation(n, queries):
    arr = [0]*n
    for a,b,k in queries:
        arr[a-1]+=k
        if b<n:
            arr[b]-=k
    running=0
    mv=-1
    for a in arr:
        running += a
        if running > mv:
            mv = running

    return mv
