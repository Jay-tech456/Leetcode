package Leetcode;

import java.util.Locale;

public class Strings {

    public static boolean isPalindrome(String s) {
        if (s.length() < 2) {
            return false;
        }
        s = s.toLowerCase(Locale.ROOT);
        char[] ch = s.toCharArray();
        int left = 0;
        int right = s.length() - 1;

        while (left < right) {
            if (!Character.isLetterOrDigit(ch[left])) {
                System.out.println(ch[left]);
                left++;
                continue;
            } else if (!Character.isLetterOrDigit(ch[right])) {
                System.out.println(ch[right]);
                right--;
                continue;
            }
            if (ch[left] != ch[right]) {
                return false;
            }
            left++;
            right--;


        }
        return true;
    }


    public static int lengthOfLastWord(String s) {
        String [] str = s.split(" ");
        return str[str.length - 1].length();
    }

    public static boolean isIsomorphic(String s, String t) {

        if(s.length() != t.length())
            return false;

        String str1 = new String("");
        String str2 = new String("");

       for(int count = 0; count < s.length(); count++) {
            if(str1.contains(String.valueOf(s.charAt(count)))) {
                continue;
            } else {
            str1 = str1 + s.charAt(count);
        }
       }

        for(int count = 0; count < t.length(); count++) {
            if(str2.contains(String.valueOf(t.charAt(count)))) {
                continue;
            } else {
                str2 = str2 + t.charAt(count);
            }
        }
        return str1.length() == str2.length();
    }

    public static void main(String[] args) {
        String str = new String("Hello World");
        Sys
        System.out.println(lengthOfLastWord(str));
    }
}
