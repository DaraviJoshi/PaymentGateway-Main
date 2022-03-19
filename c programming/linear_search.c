#include<stdio.h>
#include<conio.h>
void main()
{
    int f=0,n,i,t;
    printf("Enter the number of array: ");
    scanf("%d",&n);
    int a[n];
    printf("Enter The Elements: ");
    for ( i = 0; i < n; i++)
        scanf("%d",&a[i]);
    printf("Enter the element to be found: ");
    scanf("%d",&t);
    for(i=0;i<n;i++)
    {
        if(a[i]==t){
        f=f+1;
        break;}
    }
    if(f==1)
    printf("element found");
    if(f==0)
    printf("Element not found");
}