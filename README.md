# Simple Coding Evaluation

This task should take no longer than 2 hours to complete. 

Please complete this task in the programming language of your choice.

Write a program that takes these two files as input:

* [names.txt](https://raw.githubusercontent.com/PerformLine/Eval/master/names.txt) - Contains a list of names, one name per line.
* [list.txt](https://raw.githubusercontent.com/PerformLine/Eval/master/list.txt) - Contains a list of words, some are names, one per line.

Then prints (to stdout) the **line numbers** and **instance** in *list.txt* where names from *names.txt* are found.

For example, if *list.txt* contains three instances of the name 'james' it would output something like

```james: 51, 1450, 14123```

This means that the name 'james' appears in *list.txt* on those lines.

We are looking for the most efficient solution taking into account I/O, CPU and Memory usage as it is possible you solution may be needed to run against much larger data set, specifically one that may not fit completely in memory.  

You may state your assumptions and feel free to add additional justification as well. Please be prepared to discuss it when you come on site.

You script should be delivered in the form of a gist.
