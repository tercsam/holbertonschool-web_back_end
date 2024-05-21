#!/usr/bin/env python3
''' Description:takes a float n as argument and returns the floor of the float
    Arguments: n: float
'''


def floor(n: float) -> int:
    ''' Return largest int value less than or equal to n. '''
    if n >= 0:
        return int(n)
    else:
        return int(n) - 1
