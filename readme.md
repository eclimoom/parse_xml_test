### 1 
https://www.verovio.org/index.xhtml
A music notation engraving library
Designed for the Music Encoding Initiative - Fast - Light - Flexible - No dependencies
Verovio is a fast, portable and lightweight open-source library for engraving Music Encoding Initiative (MEI) music scores into SVG.


### 2
https://bneumann.github.io/vexflow-musicxml/

VexFlow backed MusicXML parser


### 3
how abcjs parse MusicXML and render page

abcjs 库本身并不直接支持解析 MusicXML 格式文件， 它主要用于解析和渲染 ABC 格式的乐谱。
然而，你可以借助其他库将 MusicXML 文件转换为 ABC 格式，然后再使用 abcjs 来进行乐谱的渲染。


### 4
demo [https://opensheetmusicdisplay.github.io/demo/]
github [https://github.com/opensheetmusicdisplay/opensheetmusicdisplay]




### abc

[//]: # (https://wim.vree.org/js/xml2abc-js.html)
To use xml2abc-js in your own script call "vertaal ()" in the following way:

    var xmldata = $.parseXML (abc_code);    // abc_code is a (unicode) string with one abc tune.
    // the options are passed as a single object, where the members have the same name and value(s)
    // as in xml2abc.py. Consult the readme of xml2abc.py for more information on these options.
    // Here we just use the defaults by setting them to zero.

    var options = { u:0, b:0, n:0,  // unfold repeats (1), bars per line, chars per line
                    c:0, v:0, d:0,  // credit text filter level (0-6), no volta on higher voice numbers (1), denominator unit length (L:)
                    m:0, x:0, t:0,  // no midi, minimal midi, all midi output (0,1,2), no line breaks (1), perc, tab staff -> voicemap (1)
                    v1:0, noped:0,  // all directions to first voice of staff (1), no pedal directions (1)
                    stm:0,          // translate stem elements (stem direction)
                    p:'f', s:0 };   // page format: scale (1.0), width, left- and right margin in cm, shift note heads in tablature (1)

    var result = vertaal (xmldata, options);
    var abcText = result [0];               // the translation (string)
    var errorTxt = result [1];              // all information and error messages (string)

Notes:
Function "vertaal ()" needs the xml document as a (parsed) DOM-tree. An easy way to achieve this is to use the parseXML function in jquery, as shown in the usage example above.
Option p is different from xml2abc.py, in that it only accepts 4 floats: scale, width, left- and right margin. In addition p can have the value 'f', or '' (empty string). With the empty string no page formatting is output at all. The string 'f' causes translation of the pageformat defined in the xml file into corresponding abc %%-commands
The usage example above is taken from this page.
