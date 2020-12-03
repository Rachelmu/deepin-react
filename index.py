'''
Description: 
Author: zhangzhenyang
Date: 2020-10-21 21:42:44
LastEditTime: 2020-10-21 21:48:50
LastEditors: zhangzhenyang
'''


def fib(n):
    if n == 1 or n == 2:
        return 1
    return (fib(n - 1) + fib(n - 2))


print(fib(8))
