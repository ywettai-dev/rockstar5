<?php

$file = fopen('list.txt', 'r');

echo "Process One\n";

while($line = fgets($file)){
   echo $line;
}

echo "\nProcess Two\n";

fclose($file);