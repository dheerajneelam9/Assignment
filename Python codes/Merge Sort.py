def mergesort(arr):
    if len(arr)<=1:
        return
    mid = len(arr)//2
    l = arr[:mid]
    r = arr[mid:]
    mergesort(l)
    mergesort(r)
    merge_lists(l,r,arr)
def merge_lists(a,b,arr):
    i=j=k=0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            arr[k]=a[i]
            i+=1
        else:
            arr[k]=b[j]
            j+=1
        k+=1
    while i < len(a):
        arr[k]=a[i]
        i+=1
        k+=1
    while j < len(b):
        arr[k]=b[j]
        j+=1
        k+=1
if __name__=='__main__':
    a = [10, 3, 15, 7, 8, 23, 98, 29]
    mergesort(a)
    print(a)
