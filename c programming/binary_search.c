#include<stdio.h>
#include<conio.h>
int binary(int a[],int first,int last,int search)
{
    int mid;
    while(first<=last)
    {
        mid=(first+last-1)/2;
        if (a[mid]==search)
            return mid;
        if (a[mid]<search)
            first=mid +1;
        else
            last= mid-1;
    }
    return -1;
                 
}
int main(void)
{
    int count, search,i,last,mid,first;
    printf("Enter The number of elements:");
    scanf("%d",&count);
    int a[count];
    printf("Enter the sorted array: ");
    for ( i = 0; i < count; i++)
    {
        scanf("%d",&a[i]);
    }
    printf("Enter the number to be found: ");
    scanf("%d",&search);
    first=0;
    last=count-1;
//     while(first<=last)
//         {
//             mid=(first+last)/2;
//             if (a[mid]==search)
//             {
//                 printf("Element found at %d index",mid);
//                 break;
//             }
//             else if (a[mid]<search)
//             {
//                 last=mid-1;
//             }
//             else
//                 first=mid+1;
//         }
//     printf("Element not found");
// }
    int result = binary(a,first,last,search);
    if (result==-1)
    {
        printf("element not found");
    }
    else
        printf("element found at %d index",result);
    return 0;
}