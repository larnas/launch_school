let today = new Date();

today.getYear();
today.getFullYear();

What is the difference between the two methods and which one should you use?

The getYear() method returns the year in the specified date according to local time. Because getYear() does not return full years ("year 2000 problem"), it is no longer used and has been replaced by the getFullYear() method.

Solution:
Date.prototype.getYear() returns a number representing the year of the date on which it is invoked, minus 1900. For example, if the date is sometime in 2019, getYear() will return 119.

Date.prototype.getFullYear() returns a number representing the year of the date on which it is invoked. For example, if the date is sometime in 2019, getFullYear() will return 2019.

As the documentation notes, getYear() is deprecated and you should avoid using it. It is being replaced with getFullYear(), which returns a four-digit number representing the year, as expected.