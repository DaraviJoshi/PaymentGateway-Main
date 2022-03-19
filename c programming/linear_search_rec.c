#include<stdio.h>
#include<conio.h>
int linear_search(int a[],int count, int search)
{
    if(count==0)
        printf("ELEMENT NOT FOUND");
    else if(a[count]==search)
        printf("FOUND");
    else
        linear_search(a,count-1,search);
    return 0;
}
int main()
{
    int count,search,i;
    printf("Enter The Number of Elements: ");
    scanf("%d",&count);
    printf("Enter the Elements: ");
    int a[count];
    for ( i = 0; i < count; i++)
    {
        scanf("%d",&a[i]);
    }
    printf("Enter the number to be found: ");
    scanf("%d",&search);
    linear_search(a, count,search);
    return 0;
}