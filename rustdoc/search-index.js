var searchIndex = {};
searchIndex["doc_builder"] = {"doc":"Meta, please ignore.","items":[],"paths":[]};
searchIndex["map_in_place"] = {"doc":"Reuse alloations when mapping the elements of a `Vec`, `Box&lt;[T]&gt;` or `Box&lt;T&gt;`\nif possible.","items":[[8,"MapVecInPlace","map_in_place","",null,null],[10,"map","","",0,null],[10,"map_in_place","","",0,null],[10,"filter_map","","",0,null],[10,"filter_map_in_place","","",0,null],[8,"MapSliceInPlace","","",null,null],[10,"map","","",1,null],[10,"map_in_place","","",1,null],[8,"MapBoxInPlace","","",null,null],[10,"map","","",2,null],[10,"map_in_place","","",2,null]],"paths":[[8,"MapVecInPlace"],[8,"MapSliceInPlace"],[8,"MapBoxInPlace"]]};
searchIndex["encode_unicode"] = {"doc":"Alternatives and extensions to the unstable `char.encode_utf8()` and `char.encode_utf16()`.","items":[[3,"Utf8Char","encode_unicode","Store a `char` as UTF-8 so it can be borrowed as a `str`",null,null],[3,"Utf16Char","","Store a `char` as UTF-16 so it can be borrowed as a slice",null,null],[3,"Utf8Iterator","","Read or iterate over the bytes in the UTF-8 representation of a codepoint.",null,null],[3,"Utf16Iterator","","Iterate over the units in an UTF-16 representation of a codepoint.",null,null],[11,"default","","",0,{"inputs":[],"output":{"name":"utf8char"}}],[11,"cmp","","",0,null],[11,"partial_cmp","","",0,null],[11,"lt","","",0,null],[11,"le","","",0,null],[11,"gt","","",0,null],[11,"ge","","",0,null],[11,"eq","","",0,null],[11,"ne","","",0,null],[11,"clone","","",0,null],[11,"from_str","","The string must contain exactly one codepoint",0,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"char"}],"output":{"name":"self"}}],[11,"into_iter","","Iterate over the byte values.",0,null],[11,"as_ref","","",0,null],[11,"as_ref","","",0,null],[11,"borrow","","",0,null],[11,"borrow","","",0,null],[11,"deref","","",0,null],[11,"is_ascii","","",0,null],[11,"eq_ignore_ascii_case","","",0,null],[11,"to_ascii_uppercase","","",0,null],[11,"to_ascii_lowercase","","",0,null],[11,"make_ascii_uppercase","","",0,null],[11,"make_ascii_lowercase","","",0,null],[11,"from","","",0,{"inputs":[{"name":"asciichar"}],"output":{"name":"self"}}],[11,"to_ascii_char","","",0,null],[11,"to_ascii_char_unchecked","","",0,null],[11,"hash","","",0,null],[11,"fmt","","",0,null],[11,"from_slice_start","","Validate the start of a UTF-8 slice and store it.\nAlso returns how many bytes were needed.",0,null],[11,"from_array","","Validate the array and store it.",0,null],[11,"len","","Result is 1...4 and identical to `.as_ref().len()` or `.as_char().len_utf8()`.\nThere is no .is_emty() because it would always return false.",0,null],[11,"to_char","","Convert from UTF-8 to UTF-32",0,null],[11,"to_slice","","Write the internal representation to a slice,\nand then returns the number of bytes written.",0,null],[11,"to_array","","Expose the internal array and the number of used bytes.",0,null],[11,"clone","","",1,null],[11,"from","","",1,{"inputs":[{"name":"utf8char"}],"output":{"name":"self"}}],[11,"from","","",1,{"inputs":[{"name":"char"}],"output":{"name":"self"}}],[11,"next","","",1,null],[11,"size_hint","","",1,null],[11,"len","","",1,null],[11,"read","","Always returns Ok",1,null],[11,"fmt","","",1,null],[11,"default","","",2,{"inputs":[],"output":{"name":"utf16char"}}],[11,"eq","","",2,null],[11,"ne","","",2,null],[11,"clone","","",2,null],[11,"from","","",2,{"inputs":[{"name":"char"}],"output":{"name":"self"}}],[11,"into_iter","","Iterate over the units.",2,null],[11,"as_ref","","",2,null],[11,"borrow","","",2,null],[11,"deref","","",2,null],[11,"is_ascii","","",2,null],[11,"eq_ignore_ascii_case","","",2,null],[11,"to_ascii_uppercase","","",2,null],[11,"to_ascii_lowercase","","",2,null],[11,"make_ascii_uppercase","","",2,null],[11,"make_ascii_lowercase","","",2,null],[11,"from","","",2,{"inputs":[{"name":"asciichar"}],"output":{"name":"self"}}],[11,"to_ascii_char","","",2,null],[11,"to_ascii_char_unchecked","","",2,null],[11,"hash","","",2,null],[11,"fmt","","",2,null],[11,"partial_cmp","","",2,null],[11,"cmp","","",2,null],[11,"from_slice","","Validate and store the first UTF-16 codepoint in the slice.\nAlso return how many units were needed.",2,null],[11,"from_tuple","","Validate and store a UTF-16 pair as returned from `char.to_utf16_tuple()`.",2,null],[11,"len","","Returns 1 or 2.\nThere is no `.is_emty()` because it would always return false.",2,null],[11,"to_char","","Convert from UTF-16 to UTF-32",2,null],[11,"to_slice","","Write the internal representation to a slice,\nand then returns the number of `u16`s written.",2,null],[11,"to_tuple","","The second `u16` is used for surrogate pairs.",2,null],[11,"clone","","",3,null],[11,"from","","",3,{"inputs":[{"name":"char"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"utf16char"}],"output":{"name":"self"}}],[11,"next","","",3,null],[11,"size_hint","","",3,null],[11,"len","","",3,null],[11,"fmt","","",3,null],[0,"error","","Errors returned by various conversion methods in this crate.",null,null],[4,"FromStrError","encode_unicode::error","Reasons why `Utf8Char::from_str()` failed.",null,null],[13,"MultipleCodepoints","","`Utf8Char` cannot store more than a single codepoint.",4,null],[13,"Empty","","`Utf8Char` cannot be empty.",4,null],[4,"InvalidCodepoint","","Reasons why an `u32` is not a valid UTF codepoint.",null,null],[13,"Utf16Reserved","","It&#39;s reserved for UTF-16 surrogate pairs.&quot;",5,null],[13,"TooHigh","","It&#39;s higher than the highest codepoint (which is 0x10ffff).",5,null],[4,"InvalidUtf8FirstByte","","Reasons why a byte is not the start of a UTF-8 codepoint.",null,null],[13,"TooLongSeqence","","Sequences cannot be longer than 4 bytes. Is given for values &gt;= 240.",6,null],[13,"ContinuationByte","","This byte belongs to a previous seqence. Is given for values between 128 and 192 (exclusive).",6,null],[4,"InvalidUtf8","","Reasons why a byte sequence is not valid UTF-8, excluding invalid codepoint.\nIn sinking precedence.",null,null],[13,"FirstByte","","Something is wrong with the first byte.",7,null],[13,"NotAContinuationByte","","Thee byte at index 1...3 should be a continuation byte,\nbut dosesn&#39;t fit the pattern 0b10xx_xxxx.",7,null],[13,"OverLong","","There are too many leading zeros: it could be a byte shorter.",7,null],[4,"InvalidUtf8Slice","","Reasons why a byte slice is not valid UTF-8, in sinking precedence.",null,null],[13,"Utf8","","Something is certainly wrong with the first byte.",8,null],[13,"Codepoint","","The encoded codepoint is invalid:",8,null],[13,"TooShort","","The slice is too short; n bytes was required.",8,null],[4,"InvalidUtf16Slice","","Reasons why a slice of `u16`s doesn&#39;t start with valid UTF-16.",null,null],[13,"EmptySlice","","The slice is empty.",9,null],[13,"FirstLowSurrogate","","The first unit is a low surrogate.",9,null],[13,"MissingSecond","","The first and only unit requires a second unit.",9,null],[13,"SecondNotLowSurrogate","","The first unit requires a second one, but it&#39;s not a low surrogate.",9,null],[4,"InvalidUtf8Array","","Reasons why a byte array is not valid UTF-8, in sinking precedence.",null,null],[13,"Utf8","","Not a valid UTF-8 sequence.",10,null],[13,"Codepoint","","Not a valid unicode codepoint.",10,null],[4,"InvalidUtf16Tuple","","Reasons why one or two `u16`s are not valid UTF-16, in sinking precedence.",null,null],[13,"FirstIsTrailingSurrogate","","The first unit is a trailing/low surrogate, which is never valid.",11,null],[13,"SuperfluousSecond","","You provided a second unit, but the first one stands on its own.",11,null],[13,"MissingSecond","","The first and only unit requires a second unit.",11,null],[13,"InvalidSecond","","The first unit requires a second unit, but it&#39;s not a trailing/low surrogate.",11,null],[8,"CharExt","encode_unicode","Extension trait for `char` that adds methods for converting to and from UTF-8 or UTF-16.",null,null],[10,"to_utf8","","Get the UTF-8 representation of this codepoint.",12,null],[10,"to_utf16","","Get the UTF-16 representation of this codepoint.",12,null],[10,"iter_utf8_bytes","","Iterate over or [read](https://doc.rust-lang.org/std/io/trait.Read.html)\nthe one to four bytes in the UTF-8 representation of this codepoint.",12,null],[10,"iter_utf16_units","","Iterate over the one or two units in the UTF-16 representation of this codepoint.",12,null],[10,"to_utf8_slice","","Convert this char to UTF-8, and then\nreturns the number of bytes written.",12,null],[10,"to_utf16_slice","","Convert this char to UTF-16, and then\nreturns the number of units written.",12,null],[10,"to_utf8_array","","Convert this char to an UTF-8 array and lenght,",12,null],[10,"to_utf16_tuple","","Convert this char to UTF-16.\nThe second `u16` is `Some` if a surrogate pair is required.",12,null],[10,"from_utf8_slice","","Create a `char` from the start of a slice intepreted as UTF-8, and return how many bytes were needed.",12,null],[10,"from_utf16_slice","","Read one or two UTF-16 units into a `char`, and also return how many units were needed.",12,null],[10,"from_utf8_array","","Convert an UTF-8 sequence as returned from `.to_utf8_array()` into a `char`",12,null],[10,"from_utf16_tuple","","Convert a UTF-16 pair as returned from `.to_utf16_tuple()` into a `char`.",12,null],[10,"from_utf8_exact_slice_unchecked","","Convert an UTF-8 sequence into a char.\nThe length of the slice is the length of the sequence, should be 1,2,3 or 4.",12,null],[10,"from_utf16_tuple_unchecked","","Convert a UTF-16 tuple as returned from `.to_utf16_tuple()` into a `char`.",12,null],[10,"from_u32_detailed","","Perform some extra validations compared to `char::from_u32_unchecked()`",12,{"inputs":[{"name":"u32"}],"output":{"name":"result"}}],[8,"U8UtfExt","","Methods for working with `u8`s UTF-8.",null,null],[10,"extra_utf8_bytes","","How many more bytes will you need to complete this codepoint?",13,null],[10,"extra_utf8_bytes_unchecked","","How many more bytes will you need to complete this codepoint?",13,null],[8,"U16UtfExt","","Methods for working with `u16`s as UTF-16 units.",null,null],[10,"utf16_needs_extra_unit","","Will you need an extra unit to complete this codepoint?",14,null],[10,"utf16_is_leading_surrogate","","Does this `u16` need another `u16` to complete a codepoint?\nReturns `(self &amp; 0xfc00) == 0xd800`",14,null],[11,"eq","encode_unicode::error","",5,null],[11,"fmt","","",5,null],[11,"clone","","",5,null],[11,"description","","",5,null],[11,"fmt","","",5,null],[11,"error_range","","Get the range of values for which this error would be given.",5,null],[11,"eq","","",11,null],[11,"fmt","","",11,null],[11,"clone","","",11,null],[11,"description","","",11,null],[11,"fmt","","",11,null],[11,"eq","","",9,null],[11,"fmt","","",9,null],[11,"clone","","",9,null],[11,"description","","",9,null],[11,"fmt","","",9,null],[11,"eq","","",4,null],[11,"fmt","","",4,null],[11,"clone","","",4,null],[11,"description","","",4,null],[11,"fmt","","",4,null],[11,"eq","","",6,null],[11,"fmt","","",6,null],[11,"clone","","",6,null],[11,"description","","",6,null],[11,"fmt","","",6,null],[11,"eq","","",7,null],[11,"ne","","",7,null],[11,"fmt","","",7,null],[11,"clone","","",7,null],[11,"from","","",7,{"inputs":[{"name":"invalidutf8firstbyte"}],"output":{"name":"invalidutf8"}}],[11,"description","","",7,null],[11,"cause","","Returns `Some` if the error is a `InvalidUtf8FirstByte`.",7,null],[11,"fmt","","",7,null],[11,"eq","","",10,null],[11,"ne","","",10,null],[11,"fmt","","",10,null],[11,"clone","","",10,null],[11,"from","","",10,{"inputs":[{"name":"invalidutf8"}],"output":{"name":"invalidutf8array"}}],[11,"from","","",10,{"inputs":[{"name":"invalidcodepoint"}],"output":{"name":"invalidutf8array"}}],[11,"description","","",10,null],[11,"cause","","Always returns `Some`.",10,null],[11,"fmt","","",10,null],[11,"eq","","",8,null],[11,"ne","","",8,null],[11,"fmt","","",8,null],[11,"clone","","",8,null],[11,"from","","",8,{"inputs":[{"name":"invalidutf8"}],"output":{"name":"invalidutf8slice"}}],[11,"from","","",8,{"inputs":[{"name":"invalidcodepoint"}],"output":{"name":"invalidutf8slice"}}],[11,"description","","",8,null],[11,"cause","","",8,null],[11,"fmt","","",8,null]],"paths":[[3,"Utf8Char"],[3,"Utf8Iterator"],[3,"Utf16Char"],[3,"Utf16Iterator"],[4,"FromStrError"],[4,"InvalidCodepoint"],[4,"InvalidUtf8FirstByte"],[4,"InvalidUtf8"],[4,"InvalidUtf8Slice"],[4,"InvalidUtf16Slice"],[4,"InvalidUtf8Array"],[4,"InvalidUtf16Tuple"],[8,"CharExt"],[8,"U8UtfExt"],[8,"U16UtfExt"]]};
searchIndex["scopeguard"] = {"doc":"","items":[[3,"Guard","scopeguard","`Guard` is a scope guard that may own a protected value.",null,null],[5,"guard","","Create a new `Guard` owning `v` and with deferred closure `dropfn`.",null,{"inputs":[{"name":"t"},{"name":"f"}],"output":{"name":"guard"}}],[11,"deref","","",0,null],[11,"deref_mut","","",0,null],[11,"drop","","",0,null],[14,"defer!","","Macro to create a `Guard` (without any owned value).",null,null]],"paths":[[3,"Guard"]]};
searchIndex["iterator_markers"] = {"doc":"","items":[[8,"UniqueIterator","iterator_markers","Marker trait for iterators that will never return two equal items, like a set.",null,null],[8,"AscendingIterator","","Marker trait for iterators that return items in a sorted ascending order.\nIt does not guarantee uniqueness, but equal items must come straight after each other.\nUse `I: UniqueIterator+AscendingIterator` if you need both.",null,null],[8,"DescendingIterator","","Marker trait for iterators that return items in a sorted desscending order.\nIt does not guarantee uniqueness, but equal items must come straight after each other.\nUse `I: UniqueIterator+DescendingIterator` if you need both.",null,null]],"paths":[]};
searchIndex["ascii"] = {"doc":"A library that provides ASCII-only string and character types, equivalent to the `char`, `str` and\n`String` types in the standard library.","items":[[3,"ToAsciiCharError","ascii","Error returned by `ToAsciiChar`.",null,null],[3,"AsciiStr","","AsciiStr represents a byte or string slice that only contains ASCII characters.",null,null],[3,"AsAsciiStrError","","Error that is returned when a sequence of `u8` are not all ASCII.",null,null],[3,"AsciiString","","A growable string stored as an ASCII encoded buffer.",null,null],[4,"AsciiChar","","An ASCII character. It wraps a `u8`, with the highest bit always zero.",null,null],[13,"Null","","`&#39;\\0&#39;`",0,null],[13,"SOH","","[Start Of Heading](http://en.wikipedia.org/wiki/Start_of_Heading)",0,null],[13,"SOX","","[Start Of teXt](http://en.wikipedia.org/wiki/Start_of_Text)",0,null],[13,"ETX","","[End of TeXt](http://en.wikipedia.org/wiki/End-of-Text_character)",0,null],[13,"EOT","","[End Of Transmission](http://en.wikipedia.org/wiki/End-of-Transmission_character)",0,null],[13,"ENQ","","[Enquiry](http://en.wikipedia.org/wiki/Enquiry_character)",0,null],[13,"ACK","","[Acknowledgement](http://en.wikipedia.org/wiki/Acknowledge_character)",0,null],[13,"Bell","","[bell / alarm / audible](http://en.wikipedia.org/wiki/Bell_character)",0,null],[13,"BackSpace","","[Backspace](http://en.wikipedia.org/wiki/Backspace)",0,null],[13,"Tab","","`&#39;\\t&#39;`",0,null],[13,"LineFeed","","`&#39;\\n&#39;`",0,null],[13,"VT","","[Vertical tab](http://en.wikipedia.org/wiki/Vertical_Tab)",0,null],[13,"FF","","[Form Feed](http://en.wikipedia.org/wiki/Form_Feed)",0,null],[13,"CarriageReturn","","`&#39;\\r&#39;`",0,null],[13,"SI","","[Shift In](http://en.wikipedia.org/wiki/Shift_Out_and_Shift_In_characters)",0,null],[13,"SO","","[Shift Out](http://en.wikipedia.org/wiki/Shift_Out_and_Shift_In_characters)",0,null],[13,"DLE","","[Data Link Escape](http://en.wikipedia.org/wiki/Data_Link_Escape)",0,null],[13,"DC1","","[Device control 1, often XON](http://en.wikipedia.org/wiki/Device_Control_1)",0,null],[13,"DC2","","Device control 2",0,null],[13,"DC3","","Device control 3, Often XOFF",0,null],[13,"DC4","","Device control 4",0,null],[13,"NAK","","[Negative AcKnowledgement](http://en.wikipedia.org/wiki/Negative-acknowledge_character)",0,null],[13,"SYN","","[Synchronous idle](http://en.wikipedia.org/wiki/Synchronous_Idle)",0,null],[13,"ETB","","[End of Transmission Block](http://en.wikipedia.org/wiki/End-of-Transmission-Block_character)",0,null],[13,"CAN","","[Cancel](http://en.wikipedia.org/wiki/Cancel_character)",0,null],[13,"EM","","[End of Medium](http://en.wikipedia.org/wiki/End_of_Medium)",0,null],[13,"SUB","","[Substitute](http://en.wikipedia.org/wiki/Substitute_character)",0,null],[13,"ESC","","[Escape](http://en.wikipedia.org/wiki/Escape_character)",0,null],[13,"FS","","[File Separator](http://en.wikipedia.org/wiki/File_separator)",0,null],[13,"GS","","[Group Separator](http://en.wikipedia.org/wiki/Group_separator)",0,null],[13,"RS","","[Record Separator](http://en.wikipedia.org/wiki/Record_separator)",0,null],[13,"US","","[Unit Separator](http://en.wikipedia.org/wiki/Unit_separator)",0,null],[13,"Space","","`&#39; &#39;`",0,null],[13,"Exclamation","","`&#39;!&#39;`",0,null],[13,"Quotation","","`&#39;&quot;&#39;`",0,null],[13,"Hash","","`&#39;#&#39;`",0,null],[13,"Dollar","","`&#39;$&#39;`",0,null],[13,"Percent","","`&#39;%&#39;`",0,null],[13,"Ampersand","","`&#39;&amp;&#39;`",0,null],[13,"Apostrophe","","`&#39;\\&#39;&#39;`",0,null],[13,"ParenOpen","","`&#39;(&#39;`",0,null],[13,"ParenClose","","`&#39;)&#39;`",0,null],[13,"Asterisk","","`&#39;*&#39;`",0,null],[13,"Plus","","`&#39;+&#39;`",0,null],[13,"Comma","","`&#39;,&#39;`",0,null],[13,"Minus","","`&#39;-&#39;`",0,null],[13,"Dot","","`&#39;.&#39;`",0,null],[13,"Slash","","`&#39;/&#39;`",0,null],[13,"_0","","`&#39;0&#39;`",0,null],[13,"_1","","`&#39;1&#39;`",0,null],[13,"_2","","`&#39;2&#39;`",0,null],[13,"_3","","`&#39;3&#39;`",0,null],[13,"_4","","`&#39;4&#39;`",0,null],[13,"_5","","`&#39;5&#39;`",0,null],[13,"_6","","`&#39;6&#39;`",0,null],[13,"_7","","`&#39;7&#39;`",0,null],[13,"_8","","`&#39;8&#39;`",0,null],[13,"_9","","`&#39;9&#39;`",0,null],[13,"Colon","","`&#39;:&#39;`",0,null],[13,"Semicolon","","`&#39;;&#39;`",0,null],[13,"LessThan","","`&#39;&lt;&#39;`",0,null],[13,"Equal","","`&#39;=&#39;`",0,null],[13,"GreaterThan","","`&#39;&gt;&#39;`",0,null],[13,"Question","","`&#39;?&#39;`",0,null],[13,"At","","`&#39;@&#39;`",0,null],[13,"A","","`&#39;A&#39;`",0,null],[13,"B","","`&#39;B&#39;`",0,null],[13,"C","","`&#39;C&#39;`",0,null],[13,"D","","`&#39;D&#39;`",0,null],[13,"E","","`&#39;E&#39;`",0,null],[13,"F","","`&#39;F&#39;`",0,null],[13,"G","","`&#39;G&#39;`",0,null],[13,"H","","`&#39;H&#39;`",0,null],[13,"I","","`&#39;I&#39;`",0,null],[13,"J","","`&#39;J&#39;`",0,null],[13,"K","","`&#39;K&#39;`",0,null],[13,"L","","`&#39;L&#39;`",0,null],[13,"M","","`&#39;M&#39;`",0,null],[13,"N","","`&#39;N&#39;`",0,null],[13,"O","","`&#39;O&#39;`",0,null],[13,"P","","`&#39;P&#39;`",0,null],[13,"Q","","`&#39;Q&#39;`",0,null],[13,"R","","`&#39;R&#39;`",0,null],[13,"S","","`&#39;S&#39;`",0,null],[13,"T","","`&#39;T&#39;`",0,null],[13,"U","","`&#39;U&#39;`",0,null],[13,"V","","`&#39;V&#39;`",0,null],[13,"W","","`&#39;W&#39;`",0,null],[13,"X","","`&#39;X&#39;`",0,null],[13,"Y","","`&#39;Y&#39;`",0,null],[13,"Z","","`&#39;Z&#39;`",0,null],[13,"BracketOpen","","`&#39;[&#39;`",0,null],[13,"BackSlash","","`&#39;\\&#39;`",0,null],[13,"BracketClose","","`&#39;]&#39;`",0,null],[13,"Caret","","`&#39;_&#39;`",0,null],[13,"UnderScore","","`&#39;_&#39;`",0,null],[13,"Grave","","`&#39;`&#39;`",0,null],[13,"a","","`&#39;a&#39;`",0,null],[13,"b","","`&#39;b&#39;`",0,null],[13,"c","","`&#39;c&#39;`",0,null],[13,"d","","`&#39;d&#39;`",0,null],[13,"e","","`&#39;e&#39;`",0,null],[13,"f","","`&#39;f&#39;`",0,null],[13,"g","","`&#39;g&#39;`",0,null],[13,"h","","`&#39;h&#39;`",0,null],[13,"i","","`&#39;i&#39;`",0,null],[13,"j","","`&#39;j&#39;`",0,null],[13,"k","","`&#39;k&#39;`",0,null],[13,"l","","`&#39;l&#39;`",0,null],[13,"m","","`&#39;m&#39;`",0,null],[13,"n","","`&#39;n&#39;`",0,null],[13,"o","","`&#39;o&#39;`",0,null],[13,"p","","`&#39;p&#39;`",0,null],[13,"q","","`&#39;q&#39;`",0,null],[13,"r","","`&#39;r&#39;`",0,null],[13,"s","","`&#39;s&#39;`",0,null],[13,"t","","`&#39;t&#39;`",0,null],[13,"u","","`&#39;u&#39;`",0,null],[13,"v","","`&#39;v&#39;`",0,null],[13,"w","","`&#39;w&#39;`",0,null],[13,"x","","`&#39;x&#39;`",0,null],[13,"y","","`&#39;y&#39;`",0,null],[13,"z","","`&#39;z&#39;`",0,null],[13,"CurlyBraceOpen","","`&#39;{&#39;`",0,null],[13,"VerticalBar","","`&#39;|&#39;`",0,null],[13,"CurlyBraceClose","","`&#39;}&#39;`",0,null],[13,"Tilde","","`&#39;~&#39;`",0,null],[13,"DEL","","[Delete](http://en.wikipedia.org/wiki/Delete_character)",0,null],[11,"hash","","",0,null],[11,"cmp","","",0,null],[11,"partial_cmp","","",0,null],[11,"eq","","",0,null],[11,"clone","","",0,null],[11,"from","","Constructs an ASCII character from a `u8`, `char` or other character type.",0,{"inputs":[{"name":"c"}],"output":{"name":"result"}}],[11,"from_unchecked","","Constructs an ASCII character from a `char` or `u8` without any checks.",0,{"inputs":[{"name":"c"}],"output":{"name":"self"}}],[11,"as_byte","","Converts an ASCII character into a `u8`.",0,null],[11,"as_char","","Converts an ASCII character into a `char`.",0,null],[11,"is_alphabetic","","Check if the character is a letter (a-z, A-Z)",0,null],[11,"is_digit","","Check if the character is a number (0-9)",0,null],[11,"is_alphanumeric","","Check if the character is a letter or number",0,null],[11,"is_blank","","Check if the character is a space or horizontal tab",0,null],[11,"is_whitespace","","Check if the character is a &#39; &#39;, &#39;\\t&#39;, &#39;\\n&#39; or &#39;\\r&#39;",0,null],[11,"is_control","","Check if the character is a control character",0,null],[11,"is_graph","","Checks if the character is printable (except space)",0,null],[11,"is_print","","Checks if the character is printable (including space)",0,null],[11,"is_lowercase","","Checks if the character is alphabetic and lowercase",0,null],[11,"is_uppercase","","Checks if the character is alphabetic and uppercase",0,null],[11,"is_punctuation","","Checks if the character is punctuation",0,null],[11,"is_hex","","Checks if the character is a valid hex digit",0,null],[11,"fmt","","",0,null],[11,"fmt","","",0,null],[11,"is_ascii","","",0,null],[11,"to_ascii_uppercase","","",0,null],[11,"to_ascii_lowercase","","",0,null],[11,"eq_ignore_ascii_case","","",0,null],[11,"make_ascii_uppercase","","",0,null],[11,"make_ascii_lowercase","","",0,null],[11,"eq","","",1,null],[11,"ne","","",1,null],[11,"fmt","","",1,null],[11,"fmt","","",1,null],[11,"description","","",1,null],[11,"to_ascii_char","","",0,null],[11,"to_ascii_char_unchecked","","",0,null],[11,"hash","","",2,null],[11,"cmp","","",2,null],[11,"partial_cmp","","",2,null],[11,"lt","","",2,null],[11,"le","","",2,null],[11,"gt","","",2,null],[11,"ge","","",2,null],[11,"eq","","",2,null],[11,"ne","","",2,null],[11,"new","","Coerces into an `AsciiStr` slice.",2,{"inputs":[{"name":"s"}],"output":{"name":"asciistr"}}],[11,"as_str","","Converts `&amp;self` to a `&amp;str` slice.",2,null],[11,"as_bytes","","Converts `&amp;self` into a byte slice.",2,null],[11,"as_slice","","Returns the entire string as slice of `AsciiChar`s.",2,null],[11,"as_mut_slice","","Returns the entire string as mutable slice of `AsciiChar`s.",2,null],[11,"as_ptr","","Returns a raw pointer to the `AsciiStr`&#39;s buffer.",2,null],[11,"as_mut_ptr","","Returns an unsafe mutable pointer to the `AsciiStr`&#39;s buffer.",2,null],[11,"to_ascii_string","","Copies the content of this `AsciiStr` into an owned `AsciiString`.",2,null],[11,"from_ascii","","Converts anything that can represent a byte slice into an `AsciiStr`.",2,{"inputs":[{"name":"b"}],"output":{"name":"result"}}],[11,"from_ascii_unchecked","","Converts anything that can be represented as a byte slice to an `AsciiStr` without checking\nfor non-ASCII characters..",2,{"inputs":[{"name":"b"}],"output":{"name":"asciistr"}}],[11,"len","","Returns the number of characters / bytes in this ASCII sequence.",2,null],[11,"is_empty","","Returns true if the ASCII slice contains zero bytes.",2,null],[11,"trim","","Returns an ASCII string slice with leading and trailing whitespace removed.",2,null],[11,"trim_left","","Returns an ASCII string slice with leading whitespace removed.",2,null],[11,"trim_right","","Returns an ASCII string slice with trailing whitespace removed.",2,null],[11,"eq","","",2,null],[11,"to_owned","","",2,null],[11,"as_ref","","",2,null],[11,"as_ref","","",2,null],[11,"as_ref","","",2,null],[11,"as_mut","","",2,null],[11,"fmt","","",2,null],[11,"fmt","","",2,null],[11,"index","","",2,null],[11,"index_mut","","",2,null],[11,"index","","",2,null],[11,"index_mut","","",2,null],[11,"index","","",2,null],[11,"index_mut","","",2,null],[11,"index","","",2,null],[11,"index_mut","","",2,null],[11,"index","","",2,null],[11,"index_mut","","",2,null],[11,"is_ascii","","",2,null],[11,"to_ascii_uppercase","","",2,null],[11,"to_ascii_lowercase","","",2,null],[11,"eq_ignore_ascii_case","","",2,null],[11,"make_ascii_uppercase","","",2,null],[11,"make_ascii_lowercase","","",2,null],[11,"fmt","","",3,null],[11,"eq","","",3,null],[11,"ne","","",3,null],[11,"clone","","",3,null],[11,"valid_up_to","","Returns the index of the first non-ASCII byte.",3,null],[11,"fmt","","",3,null],[11,"description","","Returns &quot;one or more bytes are not ASCII&quot;",3,null],[11,"as_ascii_str","","",2,null],[11,"as_ascii_str_unchecked","","",2,null],[11,"as_mut_ascii_str","","",2,null],[11,"as_mut_ascii_str_unchecked","","",2,null],[11,"hash","","",4,null],[11,"cmp","","",4,null],[11,"partial_cmp","","",4,null],[11,"lt","","",4,null],[11,"le","","",4,null],[11,"gt","","",4,null],[11,"ge","","",4,null],[11,"eq","","",4,null],[11,"ne","","",4,null],[11,"default","","",4,{"inputs":[],"output":{"name":"asciistring"}}],[11,"clone","","",4,null],[11,"new","","Creates a new, empty ASCII string buffer without allocating.",4,{"inputs":[],"output":{"name":"self"}}],[11,"with_capacity","","Creates a new ASCII string buffer with the given capacity.\nThe string will be able to hold exactly `capacity` bytes without reallocating.\nIf `capacity` is 0, the ASCII string will not allocate.",4,{"inputs":[{"name":"usize"}],"output":{"name":"self"}}],[11,"from_raw_parts","","Creates a new `AsciiString` from a length, capacity and pointer.",4,null],[11,"from_ascii_unchecked","","Converts a vector of bytes to an `AsciiString` without checking for non-ASCII characters.",4,{"inputs":[{"name":"b"}],"output":{"name":"self"}}],[11,"from_ascii","","Converts anything that can represent a byte buffer into an `AsciiString`.",4,{"inputs":[{"name":"b"}],"output":{"name":"result"}}],[11,"push_str","","Pushes the given ASCII string onto this ASCII string buffer.",4,null],[11,"capacity","","Returns the number of bytes that this ASCII string buffer can hold without reallocating.",4,null],[11,"reserve","","Reserves capacity for at least `additional` more bytes to be inserted in the given\n`AsciiString`. The collection may reserve more space to avoid frequent reallocations.",4,null],[11,"reserve_exact","","Reserves the minimum capacity for exactly `additional` more bytes to be inserted in the\ngiven `AsciiString`. Does nothing if the capacity is already sufficient.",4,null],[11,"shrink_to_fit","","Shrinks the capacity of this ASCII string buffer to match it&#39;s length.",4,null],[11,"push","","Adds the given ASCII character to the end of the ASCII string.",4,null],[11,"truncate","","Shortens a ASCII string to the specified length.",4,null],[11,"pop","","Removes the last character from the ASCII string buffer and returns it.\nReturns `None` if this string buffer is empty.",4,null],[11,"remove","","Removes the ASCII character at position `idx` from the buffer and returns it.",4,null],[11,"insert","","Inserts an ASCII character into the buffer at position `idx`.",4,null],[11,"len","","Returns the number of bytes in this ASCII string.",4,null],[11,"is_empty","","Returns true if the ASCII string contains zero bytes.",4,null],[11,"clear","","Truncates the ASCII string, setting length (but not capacity) to zero.",4,null],[11,"deref","","",4,null],[11,"deref_mut","","",4,null],[11,"eq","","",4,null],[11,"eq","","",4,null],[11,"ne","","",4,null],[11,"eq","","",4,null],[11,"ne","","",4,null],[11,"eq","","",4,null],[11,"ne","","",4,null],[11,"borrow","","",4,null],[11,"from","","",4,{"inputs":[{"name":"vec"}],"output":{"name":"self"}}],[11,"into","","",4,null],[11,"into","","",4,null],[11,"as_ref","","",4,null],[11,"as_mut","","",4,null],[11,"from_str","","",4,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",4,null],[11,"fmt","","",4,null],[11,"from_iter","","",4,{"inputs":[{"name":"i"}],"output":{"name":"asciistring"}}],[11,"from_iter","","",4,{"inputs":[{"name":"i"}],"output":{"name":"asciistring"}}],[11,"extend","","",4,null],[11,"extend","","",4,null],[11,"extend","","",4,null],[11,"add","","",4,null],[11,"index","","",4,null],[11,"index_mut","","",4,null],[11,"into_ascii_string_unchecked","","",4,null],[11,"into_ascii_string","","",4,null],[8,"ToAsciiChar","","Convert `char`, `u8` and other character types to `AsciiChar`.",null,null],[10,"to_ascii_char_unchecked","","Convert to `AsciiChar` without checking that it is an ASCII character.",5,null],[10,"to_ascii_char","","Convert to `AsciiChar`.",5,null],[8,"AsAsciiStr","","Convert slices of bytes to `AsciiStr`.",null,null],[10,"as_ascii_str_unchecked","","Convert to an ASCII slice without checking for non-ASCII characters.",6,null],[10,"as_ascii_str","","Convert to an ASCII slice.",6,null],[8,"AsMutAsciiStr","","Convert mutable slices of bytes to `AsciiStr`.",null,null],[10,"as_mut_ascii_str_unchecked","","Convert to a mutable ASCII slice without checking for non-ASCII characters.",7,null],[10,"as_mut_ascii_str","","Convert to a mutable ASCII slice.",7,null],[8,"IntoAsciiString","","Convert vectors into `AsciiString`.",null,null],[10,"into_ascii_string_unchecked","","Convert to `AsciiString` without checking for non-ASCII characters.",8,null],[10,"into_ascii_string","","Convert to `AsciiString`.",8,null]],"paths":[[4,"AsciiChar"],[3,"ToAsciiCharError"],[3,"AsciiStr"],[3,"AsAsciiStrError"],[3,"AsciiString"],[8,"ToAsciiChar"],[8,"AsAsciiStr"],[8,"AsMutAsciiStr"],[8,"IntoAsciiString"]]};
initSearch(searchIndex);
