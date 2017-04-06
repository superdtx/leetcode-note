'''
Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter at a random position.

Find the letter that was added in t.
'''

class Solution(object):
    def findTheDifference(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        ret = 0
        
        for i in range(0, len(s)):
            ret += ord(t[i]) - ord(s[i])
            
        return chr(ret + ord(t[len(t)-1]))
