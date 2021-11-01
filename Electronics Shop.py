def getMoneySpent(keyboards, drives, b):
    #
    # Write your code here.
    keyboards.sort(reverse = True)
    drives.sort()
    curr_max = -1
    init_j = 0
    
    for i in range(n):
        for j in range(init_j, m):
            if keyboards[i] + drives[j] > b:
                init_j = j
                break
            elif keyboards[i] + drives[j] > curr_max:
                curr_max = keyboards[i] + drives[j]
   
    return curr_max
