def introTutorial(V, arr):
    for i in range(0,len(arr)):
        if arr[i]==V :
            ans = i
            break
    return ans
