var searchIndex = {};
searchIndex["doc_builder"] = {"doc":"Meta, please ignore.","items":[],"paths":[]};
searchIndex["ascii"] = {"doc":"A library that provides ASCII-only string and character types, equivalent to the `char`, `str` and  `String` types in the standard library.","items":[[3,"ToAsciiCharError","ascii","Error returned by `ToAsciiChar`.",null,null],[3,"AsciiStr","","AsciiStr represents a byte or string slice that only contains ASCII characters.",null,null],[3,"AsAsciiStrError","","Error that is returned when a sequence of `u8` are not all ASCII.",null,null],[3,"Lines","","An iterator over the lines of the internal character array.",null,null],[4,"AsciiChar","","An ASCII character. It wraps a `u8`, with the highest bit always zero.",null,null],[13,"Null","","`'\\0'`",0,null],[13,"SOH","","Start Of Heading",0,null],[13,"SOX","","Start Of teXt",0,null],[13,"ETX","","End of TeXt",0,null],[13,"EOT","","End Of Transmission",0,null],[13,"ENQ","","Enquiry",0,null],[13,"ACK","","Acknowledgement",0,null],[13,"Bell","","bell / alarm / audible",0,null],[13,"BackSpace","","Backspace",0,null],[13,"Tab","","`'\\t'`",0,null],[13,"LineFeed","","`'\\n'`",0,null],[13,"VT","","Vertical tab",0,null],[13,"FF","","Form Feed",0,null],[13,"CarriageReturn","","`'\\r'`",0,null],[13,"SI","","Shift In",0,null],[13,"SO","","Shift Out",0,null],[13,"DLE","","Data Link Escape",0,null],[13,"DC1","","Device control 1, often XON",0,null],[13,"DC2","","Device control 2",0,null],[13,"DC3","","Device control 3, Often XOFF",0,null],[13,"DC4","","Device control 4",0,null],[13,"NAK","","Negative AcKnowledgement",0,null],[13,"SYN","","Synchronous idle",0,null],[13,"ETB","","End of Transmission Block",0,null],[13,"CAN","","Cancel",0,null],[13,"EM","","End of Medium",0,null],[13,"SUB","","Substitute",0,null],[13,"ESC","","Escape",0,null],[13,"FS","","File Separator",0,null],[13,"GS","","Group Separator",0,null],[13,"RS","","Record Separator",0,null],[13,"US","","Unit Separator",0,null],[13,"Space","","`' '`",0,null],[13,"Exclamation","","`'!'`",0,null],[13,"Quotation","","`'\"'`",0,null],[13,"Hash","","`'#'`",0,null],[13,"Dollar","","`'$'`",0,null],[13,"Percent","","`'%'`",0,null],[13,"Ampersand","","`'&'`",0,null],[13,"Apostrophe","","`'\\''`",0,null],[13,"ParenOpen","","`'('`",0,null],[13,"ParenClose","","`')'`",0,null],[13,"Asterisk","","`'*'`",0,null],[13,"Plus","","`'+'`",0,null],[13,"Comma","","`','`",0,null],[13,"Minus","","`'-'`",0,null],[13,"Dot","","`'.'`",0,null],[13,"Slash","","`'/'`",0,null],[13,"_0","","`'0'`",0,null],[13,"_1","","`'1'`",0,null],[13,"_2","","`'2'`",0,null],[13,"_3","","`'3'`",0,null],[13,"_4","","`'4'`",0,null],[13,"_5","","`'5'`",0,null],[13,"_6","","`'6'`",0,null],[13,"_7","","`'7'`",0,null],[13,"_8","","`'8'`",0,null],[13,"_9","","`'9'`",0,null],[13,"Colon","","`':'`",0,null],[13,"Semicolon","","`';'`",0,null],[13,"LessThan","","`'<'`",0,null],[13,"Equal","","`'='`",0,null],[13,"GreaterThan","","`'>'`",0,null],[13,"Question","","`'?'`",0,null],[13,"At","","`'@'`",0,null],[13,"A","","`'A'`",0,null],[13,"B","","`'B'`",0,null],[13,"C","","`'C'`",0,null],[13,"D","","`'D'`",0,null],[13,"E","","`'E'`",0,null],[13,"F","","`'F'`",0,null],[13,"G","","`'G'`",0,null],[13,"H","","`'H'`",0,null],[13,"I","","`'I'`",0,null],[13,"J","","`'J'`",0,null],[13,"K","","`'K'`",0,null],[13,"L","","`'L'`",0,null],[13,"M","","`'M'`",0,null],[13,"N","","`'N'`",0,null],[13,"O","","`'O'`",0,null],[13,"P","","`'P'`",0,null],[13,"Q","","`'Q'`",0,null],[13,"R","","`'R'`",0,null],[13,"S","","`'S'`",0,null],[13,"T","","`'T'`",0,null],[13,"U","","`'U'`",0,null],[13,"V","","`'V'`",0,null],[13,"W","","`'W'`",0,null],[13,"X","","`'X'`",0,null],[13,"Y","","`'Y'`",0,null],[13,"Z","","`'Z'`",0,null],[13,"BracketOpen","","`'['`",0,null],[13,"BackSlash","","`'\\'`",0,null],[13,"BracketClose","","`']'`",0,null],[13,"Caret","","`'_'`",0,null],[13,"UnderScore","","`'_'`",0,null],[13,"Grave","","`'`'`",0,null],[13,"a","","`'a'`",0,null],[13,"b","","`'b'`",0,null],[13,"c","","`'c'`",0,null],[13,"d","","`'d'`",0,null],[13,"e","","`'e'`",0,null],[13,"f","","`'f'`",0,null],[13,"g","","`'g'`",0,null],[13,"h","","`'h'`",0,null],[13,"i","","`'i'`",0,null],[13,"j","","`'j'`",0,null],[13,"k","","`'k'`",0,null],[13,"l","","`'l'`",0,null],[13,"m","","`'m'`",0,null],[13,"n","","`'n'`",0,null],[13,"o","","`'o'`",0,null],[13,"p","","`'p'`",0,null],[13,"q","","`'q'`",0,null],[13,"r","","`'r'`",0,null],[13,"s","","`'s'`",0,null],[13,"t","","`'t'`",0,null],[13,"u","","`'u'`",0,null],[13,"v","","`'v'`",0,null],[13,"w","","`'w'`",0,null],[13,"x","","`'x'`",0,null],[13,"y","","`'y'`",0,null],[13,"z","","`'z'`",0,null],[13,"CurlyBraceOpen","","`'{'`",0,null],[13,"VerticalBar","","`'|'`",0,null],[13,"CurlyBraceClose","","`'}'`",0,null],[13,"Tilde","","`'~'`",0,null],[13,"DEL","","Delete",0,null],[5,"caret_encode","","Terminals use caret notation to display some typed control codes, such as ^D for EOT and ^Z for SUB.",null,{"inputs":[{"name":"c"}],"output":{"name":"option"}}],[5,"caret_decode","","Returns the control code represented by a caret notation letter, or `None` if the letter is not used in caret notation.",null,{"inputs":[{"name":"c"}],"output":{"name":"option"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"asciichar"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"asciichar"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"self"},{"name":"asciichar"}],"output":{"name":"option"}}],[11,"cmp","","",0,{"inputs":[{"name":"self"},{"name":"asciichar"}],"output":{"name":"ordering"}}],[11,"hash","","",0,null],[11,"from","","Constructs an ASCII character from a `u8`, `char` or other character type.",0,{"inputs":[{"name":"c"}],"output":{"name":"result"}}],[11,"from_unchecked","","Constructs an ASCII character from a `char` or `u8` without any checks.",0,{"inputs":[{"name":"c"}],"output":{"name":"self"}}],[11,"as_byte","","Converts an ASCII character into a `u8`.",0,{"inputs":[{"name":"self"}],"output":{"name":"u8"}}],[11,"as_char","","Converts an ASCII character into a `char`.",0,{"inputs":[{"name":"self"}],"output":{"name":"char"}}],[11,"is_alphabetic","","Check if the character is a letter (a-z, A-Z)",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_digit","","Check if the character is a number (0-9)",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_alphanumeric","","Check if the character is a letter or number",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_blank","","Check if the character is a space or horizontal tab",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_whitespace","","Check if the character is a ' ', '\\t', '\\n' or '\\r'",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_control","","Check if the character is a control character",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_graph","","Checks if the character is printable (except space)",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_print","","Checks if the character is printable (including space)",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_lowercase","","Checks if the character is alphabetic and lowercase",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_uppercase","","Checks if the character is alphabetic and uppercase",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_punctuation","","Checks if the character is punctuation",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_hex","","Checks if the character is a valid hex digit",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"as_printable_char","","Unicode has printable versions of the ASCII control codes, like '␛'.",0,{"inputs":[{"name":"self"}],"output":{"name":"char"}}],[11,"to_ascii_uppercase","","Maps letters `a`...`z` to `A`...`Z` and returns everything else unchanged.",0,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"to_ascii_lowercase","","Maps letters `A`...`Z` to `a`...`z` and returns everything else unchanged.",0,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"eq_ignore_ascii_case","","Compares two characters case-insensitively.",0,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"u8"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"self"},{"name":"u8"}],"output":{"name":"option"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"char"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"self"},{"name":"char"}],"output":{"name":"option"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"toasciicharerror"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"toasciicharerror"}],"output":{"name":"bool"}}],[11,"description","","Returns a description for this error, like `std::error::Error::description`.",1,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"to_ascii_char","","",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"to_ascii_char_unchecked","","",0,{"inputs":[{"name":"self"}],"output":{"name":"asciichar"}}],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"asciistr"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"self"},{"name":"asciistr"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",2,{"inputs":[{"name":"self"},{"name":"asciistr"}],"output":{"name":"option"}}],[11,"lt","","",2,{"inputs":[{"name":"self"},{"name":"asciistr"}],"output":{"name":"bool"}}],[11,"le","","",2,{"inputs":[{"name":"self"},{"name":"asciistr"}],"output":{"name":"bool"}}],[11,"gt","","",2,{"inputs":[{"name":"self"},{"name":"asciistr"}],"output":{"name":"bool"}}],[11,"ge","","",2,{"inputs":[{"name":"self"},{"name":"asciistr"}],"output":{"name":"bool"}}],[11,"cmp","","",2,{"inputs":[{"name":"self"},{"name":"asciistr"}],"output":{"name":"ordering"}}],[11,"hash","","",2,null],[11,"new","","Coerces into an `AsciiStr` slice.",2,{"inputs":[{"name":"s"}],"output":{"name":"asciistr"}}],[11,"as_str","","Converts `&self` to a `&str` slice.",2,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"as_bytes","","Converts `&self` into a byte slice.",2,null],[11,"as_slice","","Returns the entire string as slice of `AsciiChar`s.",2,null],[11,"as_mut_slice","","Returns the entire string as mutable slice of `AsciiChar`s.",2,null],[11,"as_ptr","","Returns a raw pointer to the `AsciiStr`'s buffer.",2,null],[11,"as_mut_ptr","","Returns an unsafe mutable pointer to the `AsciiStr`'s buffer.",2,null],[11,"from_ascii","","Converts anything that can represent a byte slice into an `AsciiStr`.",2,{"inputs":[{"name":"b"}],"output":{"name":"result"}}],[11,"from_ascii_unchecked","","Converts anything that can be represented as a byte slice to an `AsciiStr` without checking for non-ASCII characters..",2,{"inputs":[{"name":"b"}],"output":{"name":"asciistr"}}],[11,"len","","Returns the number of characters / bytes in this ASCII sequence.",2,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true if the ASCII slice contains zero bytes.",2,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"chars","","Returns an iterator over the characters of the `AsciiStr`.",2,{"inputs":[{"name":"self"}],"output":{"name":"chars"}}],[11,"chars_mut","","Returns an iterator over the characters of the `AsciiStr` which allows you to modify the value of each `AsciiChar`.",2,{"inputs":[{"name":"self"}],"output":{"name":"charsmut"}}],[11,"lines","","Returns an iterator over the lines of the `AsciiStr`, which are themselves `AsciiStr`s.",2,{"inputs":[{"name":"self"}],"output":{"name":"lines"}}],[11,"trim","","Returns an ASCII string slice with leading and trailing whitespace removed.",2,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"trim_left","","Returns an ASCII string slice with leading whitespace removed.",2,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"trim_right","","Returns an ASCII string slice with trailing whitespace removed.",2,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"eq_ignore_ascii_case","","Compares two strings case-insensitively.",2,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"make_ascii_uppercase","","Replaces lowercase letters with their uppercase equivalent.",2,{"inputs":[{"name":"self"}],"output":null}],[11,"make_ascii_lowercase","","Replaces uppercase letters with their lowercase equivalent.",2,{"inputs":[{"name":"self"}],"output":null}],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"bool"}}],[11,"as_ref","","",2,null],[11,"as_ref","","",2,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"as_ref","","",2,null],[11,"as_mut","","",2,null],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"index","","",2,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"asciichar"}}],[11,"index_mut","","",2,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"asciichar"}}],[11,"index","","",2,{"inputs":[{"name":"self"},{"name":"range"}],"output":{"name":"asciistr"}}],[11,"index_mut","","",2,{"inputs":[{"name":"self"},{"name":"range"}],"output":{"name":"asciistr"}}],[11,"index","","",2,{"inputs":[{"name":"self"},{"name":"rangeto"}],"output":{"name":"asciistr"}}],[11,"index_mut","","",2,{"inputs":[{"name":"self"},{"name":"rangeto"}],"output":{"name":"asciistr"}}],[11,"index","","",2,{"inputs":[{"name":"self"},{"name":"rangefrom"}],"output":{"name":"asciistr"}}],[11,"index_mut","","",2,{"inputs":[{"name":"self"},{"name":"rangefrom"}],"output":{"name":"asciistr"}}],[11,"index","","",2,{"inputs":[{"name":"self"},{"name":"rangefull"}],"output":{"name":"asciistr"}}],[11,"index_mut","","",2,{"inputs":[{"name":"self"},{"name":"rangefull"}],"output":{"name":"asciistr"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"lines"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"next","","",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"asasciistrerror"}}],[11,"eq","","",4,{"inputs":[{"name":"self"},{"name":"asasciistrerror"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"self"},{"name":"asasciistrerror"}],"output":{"name":"bool"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"valid_up_to","","Returns the index of the first non-ASCII byte.",4,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"description","","Returns a description for this error, like `std::error::Error::description`.",4,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"as_ascii_str","","",2,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"as_ascii_str_unchecked","","",2,{"inputs":[{"name":"self"}],"output":{"name":"asciistr"}}],[11,"as_mut_ascii_str","","",2,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"as_mut_ascii_str_unchecked","","",2,{"inputs":[{"name":"self"}],"output":{"name":"asciistr"}}],[6,"Chars","","An immutable iterator over the characters of an `AsciiStr`.",null,null],[6,"CharsMut","","A mutable iterator over the characters of an `AsciiStr`.",null,null],[8,"ToAsciiChar","","Convert `char`, `u8` and other character types to `AsciiChar`.",null,null],[10,"to_ascii_char_unchecked","","Convert to `AsciiChar` without checking that it is an ASCII character.",5,{"inputs":[{"name":"self"}],"output":{"name":"asciichar"}}],[10,"to_ascii_char","","Convert to `AsciiChar`.",5,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[8,"AsAsciiStr","","Convert slices of bytes to `AsciiStr`.",null,null],[10,"as_ascii_str_unchecked","","Convert to an ASCII slice without checking for non-ASCII characters.",6,{"inputs":[{"name":"self"}],"output":{"name":"asciistr"}}],[10,"as_ascii_str","","Convert to an ASCII slice.",6,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[8,"AsMutAsciiStr","","Convert mutable slices of bytes to `AsciiStr`.",null,null],[10,"as_mut_ascii_str_unchecked","","Convert to a mutable ASCII slice without checking for non-ASCII characters.",7,{"inputs":[{"name":"self"}],"output":{"name":"asciistr"}}],[10,"as_mut_ascii_str","","Convert to a mutable ASCII slice.",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}]],"paths":[[4,"AsciiChar"],[3,"ToAsciiCharError"],[3,"AsciiStr"],[3,"Lines"],[3,"AsAsciiStrError"],[8,"ToAsciiChar"],[8,"AsAsciiStr"],[8,"AsMutAsciiStr"]]};
searchIndex["encode_unicode"] = {"doc":"Miscellaneous UTF-8 and UTF-16 types and methods.","items":[[3,"Utf8Char","encode_unicode","An unicode codepoint stored as UTF-8.",null,null],[3,"Utf16Char","","An unicode codepoint stored as UTF-16.",null,null],[3,"Utf8Iterator","","Read or iterate over the bytes of the UTF-8 representation of a codepoint.",null,null],[3,"Utf16Iterator","","Iterate over the units of the UTF-16 representation of a codepoint.",null,null],[11,"default","","",0,{"inputs":[],"output":{"name":"utf8char"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"utf8char"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"utf8char"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"self"},{"name":"utf8char"}],"output":{"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"self"},{"name":"utf8char"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"self"},{"name":"utf8char"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"self"},{"name":"utf8char"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"self"},{"name":"utf8char"}],"output":{"name":"bool"}}],[11,"cmp","","",0,{"inputs":[{"name":"self"},{"name":"utf8char"}],"output":{"name":"ordering"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"utf8char"}}],[11,"from_str","","The string must contain exactly one codepoint",0,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"utf16char"}],"output":{"name":"utf8char"}}],[11,"from","","",0,{"inputs":[{"name":"char"}],"output":{"name":"self"}}],[11,"into_iter","","Iterate over the byte values.",0,{"inputs":[{"name":"self"}],"output":{"name":"utf8iterator"}}],[11,"as_ref","","",0,null],[11,"as_ref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"borrow","","",0,null],[11,"borrow","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"deref","","",0,null],[11,"is_ascii","","",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"eq_ignore_ascii_case","","",0,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"to_ascii_uppercase","","",0,null],[11,"to_ascii_lowercase","","",0,null],[11,"make_ascii_uppercase","","",0,{"inputs":[{"name":"self"}],"output":null}],[11,"make_ascii_lowercase","","",0,{"inputs":[{"name":"self"}],"output":null}],[11,"from","","",0,{"inputs":[{"name":"asciichar"}],"output":{"name":"self"}}],[11,"to_ascii_char","","",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"to_ascii_char_unchecked","","",0,{"inputs":[{"name":"self"}],"output":{"name":"asciichar"}}],[11,"hash","","",0,{"inputs":[{"name":"self"},{"name":"h"}],"output":null}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_slice_start","","Validate the start of a UTF-8 slice and store it. Also returns how many bytes were needed.",0,null],[11,"from_slice_start_unchecked","","A `from_slice_start()` that doesn't validate the codepoint.",0,null],[11,"from_array","","Validate the array and store it.",0,null],[11,"from_array_unchecked","","Unused bytes must be zero",0,null],[11,"len","","Result is 1...4 and identical to `.as_ref().len()` or `.as_char().len_utf8()`. There is no .is_emty() because this type is never empty.",0,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"to_char","","Convert from UTF-8 to UTF-32",0,{"inputs":[{"name":"self"}],"output":{"name":"char"}}],[11,"to_slice","","Write the internal representation to a slice, and then returns the number of bytes written.",0,null],[11,"to_array","","Expose the internal array and the number of used bytes.",0,null],[11,"as_str","","Return a `str` view of the array the codepoint is stored as. Ns an unambiguous version of `.as_ref()`.",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"utf8iterator"}}],[11,"from","","",1,{"inputs":[{"name":"utf8char"}],"output":{"name":"self"}}],[11,"from","","",1,{"inputs":[{"name":"char"}],"output":{"name":"self"}}],[11,"next","","",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",1,null],[11,"len","","",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"read","","Always returns Ok",1,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",2,{"inputs":[],"output":{"name":"utf16char"}}],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"utf16char"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"self"},{"name":"utf16char"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"utf16char"}}],[11,"from","","",2,{"inputs":[{"name":"char"}],"output":{"name":"self"}}],[11,"from","","",2,{"inputs":[{"name":"utf8char"}],"output":{"name":"utf16char"}}],[11,"into_iter","","Iterate over the units.",2,{"inputs":[{"name":"self"}],"output":{"name":"utf16iterator"}}],[11,"as_ref","","",2,null],[11,"borrow","","",2,null],[11,"deref","","",2,null],[11,"is_ascii","","",2,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"eq_ignore_ascii_case","","",2,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"to_ascii_uppercase","","",2,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"to_ascii_lowercase","","",2,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"make_ascii_uppercase","","",2,{"inputs":[{"name":"self"}],"output":null}],[11,"make_ascii_lowercase","","",2,{"inputs":[{"name":"self"}],"output":null}],[11,"from","","",2,{"inputs":[{"name":"asciichar"}],"output":{"name":"self"}}],[11,"to_ascii_char","","",2,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"to_ascii_char_unchecked","","",2,{"inputs":[{"name":"self"}],"output":{"name":"asciichar"}}],[11,"hash","","",2,{"inputs":[{"name":"self"},{"name":"h"}],"output":null}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"partial_cmp","","",2,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"option"}}],[11,"cmp","","",2,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"ordering"}}],[11,"from_slice_start","","Validate and store the first UTF-16 codepoint in the slice. Also return how many units were needed.",2,null],[11,"from_slice_start_unchecked","","Store the first UTF-16 codepoint of the slice.",2,null],[11,"from_tuple","","Validate and store a UTF-16 pair as returned from `char.to_utf16_tuple()`.",2,null],[11,"from_tuple_unchecked","","Create an `Utf16Char` from a tuple as returned from `char.to_utf16_tuple()`.",2,null],[11,"len","","Returns 1 or 2. There is no `.is_emty()` because it would always return false.",2,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"to_char","","Convert from UTF-16 to UTF-32",2,{"inputs":[{"name":"self"}],"output":{"name":"char"}}],[11,"to_slice","","Write the internal representation to a slice, and then returns the number of `u16`s written.",2,null],[11,"to_tuple","","The second `u16` is used for surrogate pairs.",2,null],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"utf16iterator"}}],[11,"from","","",3,{"inputs":[{"name":"char"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"utf16char"}],"output":{"name":"self"}}],[11,"next","","",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",3,null],[11,"len","","",3,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"error","","Errors returned by various conversion methods in this crate.",null,null],[3,"InvalidUtf16FirstUnit","encode_unicode::error","Cannot tell wether an `u16` needs an extra unit, because it's a trailing surrogate itself.",null,null],[4,"FromStrError","","Reasons why `Utf8Char::from_str()` failed.",null,null],[13,"MultipleCodepoints","","`Utf8Char` cannot store more than a single codepoint.",4,null],[13,"Empty","","`Utf8Char` cannot be empty.",4,null],[4,"InvalidCodepoint","","Reasons why an `u32` is not a valid UTF codepoint.",null,null],[13,"Utf16Reserved","","It's reserved for UTF-16 surrogate pairs.\"",5,null],[13,"TooHigh","","It's higher than the highest codepoint (which is 0x10ffff).",5,null],[4,"InvalidUtf8","","Reasons why a byte sequence is not valid UTF-8, excluding invalid codepoint. In sinking precedence.",null,null],[13,"FirstByte","","Something is wrong with the first byte.",6,null],[13,"NotAContinuationByte","","Thee byte at index 1...3 should be a continuation byte, but dosesn't fit the pattern 0b10xx_xxxx.",6,null],[13,"OverLong","","There are too many leading zeros: it could be a byte shorter.",6,null],[4,"InvalidUtf8FirstByte","","Reasons why a byte is not the start of a UTF-8 codepoint.",null,null],[13,"TooLongSeqence","","Sequences cannot be longer than 4 bytes. Is given for values >= 240.",7,null],[13,"ContinuationByte","","This byte belongs to a previous seqence. Is given for values between 128 and 192 (exclusive).",7,null],[4,"InvalidUtf8Slice","","Reasons why a byte slice is not valid UTF-8, in sinking precedence.",null,null],[13,"Utf8","","Something is certainly wrong with the first byte.",8,null],[13,"Codepoint","","The encoded codepoint is invalid:",8,null],[13,"TooShort","","The slice is too short; n bytes was required.",8,null],[4,"InvalidUtf16Slice","","Reasons why a slice of `u16`s doesn't start with valid UTF-16.",null,null],[13,"EmptySlice","","The slice is empty.",9,null],[13,"FirstLowSurrogate","","The first unit is a low surrogate.",9,null],[13,"MissingSecond","","The first and only unit requires a second unit.",9,null],[13,"SecondNotLowSurrogate","","The first unit requires a second one, but it's not a low surrogate.",9,null],[4,"InvalidUtf8Array","","Reasons why a byte array is not valid UTF-8, in sinking precedence.",null,null],[13,"Utf8","","Not a valid UTF-8 sequence.",10,null],[13,"Codepoint","","Not a valid unicode codepoint.",10,null],[4,"InvalidUtf16Tuple","","Reasons why one or two `u16`s are not valid UTF-16, in sinking precedence.",null,null],[13,"FirstIsTrailingSurrogate","","The first unit is a trailing/low surrogate, which is never valid.",11,null],[13,"SuperfluousSecond","","You provided a second unit, but the first one stands on its own.",11,null],[13,"MissingSecond","","The first and only unit requires a second unit.",11,null],[13,"InvalidSecond","","The first unit requires a second unit, but it's not a trailing/low surrogate.",11,null],[8,"CharExt","encode_unicode","Extension trait for `char` that adds methods for converting to and from UTF-8 or UTF-16.",null,null],[10,"to_utf8","","Get the UTF-8 representation of this codepoint.",12,{"inputs":[{"name":"self"}],"output":{"name":"utf8char"}}],[10,"to_utf16","","Get the UTF-16 representation of this codepoint.",12,{"inputs":[{"name":"self"}],"output":{"name":"utf16char"}}],[10,"iter_utf8_bytes","","Iterate over or read the one to four bytes in the UTF-8 representation of this codepoint.",12,{"inputs":[{"name":"self"}],"output":{"name":"utf8iterator"}}],[10,"iter_utf16_units","","Iterate over the one or two units in the UTF-16 representation of this codepoint.",12,{"inputs":[{"name":"self"}],"output":{"name":"utf16iterator"}}],[10,"to_utf8_array","","Convert this char to an UTF-8 array and lenght,",12,null],[10,"to_utf16_tuple","","Convert this char to UTF-16. The second `u16` is `Some` if a surrogate pair is required.",12,null],[10,"from_utf8_slice_start","","Create a `char` from the start of a UTF-8 slice, and also return how many bytes were used.",12,null],[10,"from_utf16_slice_start","","Create a `char` from the start of a UTF-16 slice, and also return how many units were used.",12,null],[10,"from_utf8_array","","Convert an UTF-8 sequence as returned from `.to_utf8_array()` into a `char`",12,null],[10,"from_utf16_tuple","","Convert a UTF-16 pair as returned from `.to_utf16_tuple()` into a `char`.",12,null],[10,"from_utf8_exact_slice_unchecked","","Convert an UTF-8 sequence into a char. The length of the slice is the length of the sequence, should be 1,2,3 or 4.",12,null],[10,"from_utf16_tuple_unchecked","","Convert a UTF-16 tuple as returned from `.to_utf16_tuple()` into a `char`.",12,null],[10,"from_u32_detailed","","Perform some extra validations compared to `char::from_u32_unchecked()`",12,{"inputs":[{"name":"u32"}],"output":{"name":"result"}}],[8,"U8UtfExt","","Methods for working with `u8`s as UTF-8 bytes.",null,null],[10,"extra_utf8_bytes","","How many more bytes will you need to complete this codepoint?",13,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[10,"extra_utf8_bytes_unchecked","","How many more bytes will you need to complete this codepoint?",13,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[8,"U16UtfExt","","Methods for working with `u16`s as UTF-16 units.",null,null],[10,"utf16_needs_extra_unit","","Will you need an extra unit to complete this codepoint?",14,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[10,"is_utf16_leading_surrogate","","Does this `u16` need another `u16` to complete a codepoint? Returns `(self & 0xfc00) == 0xd800`",14,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"clone","encode_unicode::error","",15,{"inputs":[{"name":"self"}],"output":{"name":"invalidutf16firstunit"}}],[11,"fmt","","",15,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",15,{"inputs":[{"name":"self"},{"name":"invalidutf16firstunit"}],"output":{"name":"bool"}}],[11,"description","","",15,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",15,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"invalidcodepoint"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",5,{"inputs":[{"name":"self"},{"name":"invalidcodepoint"}],"output":{"name":"bool"}}],[11,"description","","",5,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"error_range","","Get the range of values for which this error would be given.",5,null],[11,"clone","","",11,{"inputs":[{"name":"self"}],"output":{"name":"invalidutf16tuple"}}],[11,"fmt","","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",11,{"inputs":[{"name":"self"},{"name":"invalidutf16tuple"}],"output":{"name":"bool"}}],[11,"description","","",11,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",9,{"inputs":[{"name":"self"}],"output":{"name":"invalidutf16slice"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",9,{"inputs":[{"name":"self"},{"name":"invalidutf16slice"}],"output":{"name":"bool"}}],[11,"description","","",9,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"fromstrerror"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",4,{"inputs":[{"name":"self"},{"name":"fromstrerror"}],"output":{"name":"bool"}}],[11,"description","","",4,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"invalidutf8firstbyte"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",7,{"inputs":[{"name":"self"},{"name":"invalidutf8firstbyte"}],"output":{"name":"bool"}}],[11,"description","","",7,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"invalidutf8"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",6,{"inputs":[{"name":"self"},{"name":"invalidutf8"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"self"},{"name":"invalidutf8"}],"output":{"name":"bool"}}],[11,"from","","",6,{"inputs":[{"name":"invalidutf8firstbyte"}],"output":{"name":"invalidutf8"}}],[11,"description","","",6,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","Returns `Some` if the error is a `InvalidUtf8FirstByte`.",6,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",10,{"inputs":[{"name":"self"}],"output":{"name":"invalidutf8array"}}],[11,"fmt","","",10,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",10,{"inputs":[{"name":"self"},{"name":"invalidutf8array"}],"output":{"name":"bool"}}],[11,"ne","","",10,{"inputs":[{"name":"self"},{"name":"invalidutf8array"}],"output":{"name":"bool"}}],[11,"from","","",10,{"inputs":[{"name":"invalidutf8"}],"output":{"name":"invalidutf8array"}}],[11,"from","","",10,{"inputs":[{"name":"invalidcodepoint"}],"output":{"name":"invalidutf8array"}}],[11,"description","","",10,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","Always returns `Some`.",10,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",10,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",8,{"inputs":[{"name":"self"}],"output":{"name":"invalidutf8slice"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",8,{"inputs":[{"name":"self"},{"name":"invalidutf8slice"}],"output":{"name":"bool"}}],[11,"ne","","",8,{"inputs":[{"name":"self"},{"name":"invalidutf8slice"}],"output":{"name":"bool"}}],[11,"from","","",8,{"inputs":[{"name":"invalidutf8"}],"output":{"name":"invalidutf8slice"}}],[11,"from","","",8,{"inputs":[{"name":"invalidcodepoint"}],"output":{"name":"invalidutf8slice"}}],[11,"description","","",8,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",8,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[3,"Utf8Char"],[3,"Utf8Iterator"],[3,"Utf16Char"],[3,"Utf16Iterator"],[4,"FromStrError"],[4,"InvalidCodepoint"],[4,"InvalidUtf8"],[4,"InvalidUtf8FirstByte"],[4,"InvalidUtf8Slice"],[4,"InvalidUtf16Slice"],[4,"InvalidUtf8Array"],[4,"InvalidUtf16Tuple"],[8,"CharExt"],[8,"U8UtfExt"],[8,"U16UtfExt"],[3,"InvalidUtf16FirstUnit"]]};
searchIndex["iterator_markers"] = {"doc":"Extra marker traits for iterators.","items":[[8,"UniqueIterator","iterator_markers","Marker trait for iterators that will never return two equal items, like a set.",null,null],[8,"AscendingIterator","","Marker trait for iterators that return items in a sorted ascending order. It does not guarantee uniqueness, but equal items must come straight after each other. Use `I: UniqueIterator+AscendingIterator` if you need both.",null,null],[8,"DescendingIterator","","Marker trait for iterators that return items in a sorted desscending order. It does not guarantee uniqueness, but equal items must come straight after each other. Use `I: UniqueIterator+DescendingIterator` if you need both.",null,null]],"paths":[]};
searchIndex["map_in_place"] = {"doc":"Reuse allocations when converting the elements of a vector, boxed slice or box to a compatible type.","items":[[8,"MapBoxInPlace","map_in_place","",null,null],[10,"map","","Replace the value with one that might have a different type.",0,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"box"}}],[10,"map_in_place","","Replace the value in the box with one that might be of another type as long the new type has identical size and alignment with the old one.",0,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"box"}}],[8,"MapSliceInPlace","","",null,null],[10,"map","","Map the elements as in an iterator, but reuse the allocation if the types have identical size and alignment.",1,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"box"}}],[10,"map_in_place","","Map the elements as in an iterator, but reuse the allocation.",1,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"box"}}],[8,"MapVecInPlace","","",null,null],[10,"map","","Shorter than `.into_iter().map(f).collect::<Vec<_>>()`, and faster if the types have identical alignment and the size of `A` is divisible by the size of `B`: Then the allocation is reused.",2,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"vec"}}],[10,"map_in_place","","Reuse the memory owned by `self` when converting the elements to a different type. For this to be safe the types must have identical alignment and the size of `A` must be divisible by the size of `B` (`size_of::<A>() % size_of::<B>() == 0`).",2,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"vec"}}],[10,"filter_map","","Shorter than `.into_iter().filter_map(f).collect::<Vec<_>>()`, and faster if the types have identical alignment and the size of `A` is divisible by the size of `B`: Then the allocation is reused.",2,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"vec"}}],[10,"filter_map_in_place","","Reuse the memory owned by `self` when filtering and converting the elements to a different type. For this to be safe the types must have identical alignment and the size of `A` must be divisible by the size of `B` (`size_of::<A>() % size_of::<B>() == 0).",2,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"vec"}}]],"paths":[[8,"MapBoxInPlace"],[8,"MapSliceInPlace"],[8,"MapVecInPlace"]]};
searchIndex["scopeguard"] = {"doc":"","items":[[3,"Guard","scopeguard","`Guard` is a scope guard that may own a protected value.",null,null],[5,"guard","","Create a new `Guard` owning `v` and with deferred closure `dropfn`.",null,{"inputs":[{"name":"t"},{"name":"f"}],"output":{"name":"guard"}}],[11,"deref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"deref_mut","","",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"drop","","",0,{"inputs":[{"name":"self"}],"output":null}],[14,"defer","","Macro to create a `Guard` (without any owned value).",null,null]],"paths":[[3,"Guard"]]};
initSearch(searchIndex);
