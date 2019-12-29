(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+/pm":function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return i})),a.d(e,"default",(function(){return s}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk"),a("mXGw");var n=a("/FXl"),r=a("TjRS"),l=a("EL7q");a("aD51");function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/data-types.mdx"}});var c={_frontmatter:i},o=r.a;function s(t){var e=t.components,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,["components"]);return Object(n.b)(o,b({},c,r,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"data-types"},"Data Types"),Object(n.b)("p",null,"Just one last section and then we start coding. This is not as much a theory section as is it a reference, and what it refers to is the data types (or the most important ones) that you could encounter and possibly use while using MS SQL server. Although you can can only scan through this section right now, know that if you are going to be using a lot of SQL this section of the document will come in handy many times as you hone your SQL skills."),Object(n.b)("hr",null),Object(n.b)(l.a,{src:a("Zueo"),alt:"sql banner",mdxType:"Image"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"a ",Object(n.b)("strong",{parentName:"p"},"DATA TYPE"),' is the attribute of a data object, like a column that defines the type of "stuff" it can handle. ')),Object(n.b)("p",null,"In the context of databases mostly columns or fields are associated with data types. These are usually ",Object(n.b)("a",b({parentName:"p"},{href:"https://en.wikibooks.org/wiki/Java_Programming/Primitive_Types"}),"primitive types")," also referred to as ",Object(n.b)("a",b({parentName:"p"},{href:"https://www.tutorialsteacher.com/csharp/csharp-value-type-and-reference-type"}),"value types"),". "),Object(n.b)("p",null,"In the case of databases you need not be concerned with other forms of data types / value types or simply types. (the other form of types being ",Object(n.b)("a",b({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types"}),"reference types"),", and relate to the programming principles of object orientation, and these are not related to database objects.). "),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"It is important to understand that when speaking in the domain of programming, value types and objects are not the same thing. However; when speaking in terms of databases and database objects. Data types or value types are in-fact objects, but they are objects of the database. This is related to ownership not to be confused with objects in the domain of object oriented programming.")),Object(n.b)("p",null,"These are the only important points to note in this section. You may scan over the rest of this section or move straight on to ",Object(n.b)("a",b({parentName:"p"},{href:"TODO:"}),"Data Query Language")," and let us start coding in SQL."),Object(n.b)("hr",null),Object(n.b)("h2",{id:"exact-numbers"},"Exact Numbers"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Data type"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Range/Precision"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Storage"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Tinyint"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Exact-number data types that use integer data. To save space in the database, use the smallest data type that can reliably contain all possible values."),Object(n.b)("td",b({parentName:"tr"},{align:null}),"0 to 255"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"1 byte")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Smallint"),Object(n.b)("td",b({parentName:"tr"},{align:null}),'"'),Object(n.b)("td",b({parentName:"tr"},{align:null}),"-2^15 (-32,768) to 2^15-1 (32,767)"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"2 bytes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Int"),Object(n.b)("td",b({parentName:"tr"},{align:null}),'"'),Object(n.b)("td",b({parentName:"tr"},{align:null}),"-2^31 (-2,147,483,648) to 2^31-1 (2,147,483,647)"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"4 bytes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Bigint"),Object(n.b)("td",b({parentName:"tr"},{align:null}),'"'),Object(n.b)("td",b({parentName:"tr"},{align:null}),"-2^63 (-9,223,372,036,854,775,808) to 2^63-1 (9,223,372,036,854,775,807)"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"8 bytes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Numeric"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Numeric data types that have fixed precision and scale. Decimal and numeric are synonyms and can be used interchangeably."),Object(n.b)("td",b({parentName:"tr"},{align:null}),"1-9"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"5 bytes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Decimal"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Fixed precision and scale numbers. When maximum precision is used, valid values are from - 10^38 +1 through 10^38 - 1. The ISO synonyms for decimal are dec and dec(p, s). numeric is functionally equivalent to decimal."),Object(n.b)("td",b({parentName:"tr"},{align:null}),"29-38"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"17 bytes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Money"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"The money and smallmoney data types are accurate to a ten-thousandth of the monetary units that they represent. For Informatica, the money and smallmoney data types are accurate to a one-hundredth of the monetary units that they represent."),Object(n.b)("td",b({parentName:"tr"},{align:null}),"-922,337,203,685,477.5808 to 922,337,203,685,477.5807 (-922,337,203,685,477.58 to 922,337,203,685,477.58 for Informatica. Informatica only supports two decimals, not four.)"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"8 bytes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Bit"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"The SQL Server Database Engine optimizes storage of bit columns. The string values TRUE and FALSE can be converted to bit values: TRUE is converted to 1 and FALSE is converted to 0."),Object(n.b)("td",b({parentName:"tr"},{align:null}),"1, 0, or NULL."),Object(n.b)("td",b({parentName:"tr"},{align:null}),"2 bytes")))),Object(n.b)("hr",null),Object(n.b)(l.a,{divClass:{display:"block",textAlign:"center"},src:a("HN5W"),alt:"www data",mdxType:"Image"}),Object(n.b)("h2",{id:"approximate-numbers"},"Approximate numbers"),Object(n.b)("p",null,"Approximate-number data types for use with floating point numeric data. Floating point data is approximate; therefore, not all values in the data type range can be represented exactly."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Data type"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Range/Precision"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Storage"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Float"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"The ISO synonym for real is float(24)."),Object(n.b)("td",b({parentName:"tr"},{align:null}),"7 digits"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"4 Bytes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Real"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"float ","[ (n) ]"," Where n is the number of bits that are used to store the mantissa of the float number in scientific notation and, therefore, dictates the precision and storage size. If n is specified, it must be a value between 1 and 53. The default value of n is 53."),Object(n.b)("td",b({parentName:"tr"},{align:null}),"15 digits"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"8 Bytes")))),Object(n.b)("hr",null),Object(n.b)("h2",{id:"character-strings"},"Character strings:"),Object(n.b)("p",null,"Character data types that are either fixed-length, char, or variable-length, varchar. Starting with SQL Server 2019 preview, when a UTF-8 enabled collation is used, these data types store the full range of Unicode character data and use the UTF-8 character encoding. If a non-UTF-8 collation is specified, then these data types store only a subset of characters supported by the corresponding code page of that collation."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Data type"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Range/Precision"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Storage"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Char"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"char ","[ ( n ) ]"," Fixed-length string data. n defines the string length in bytes"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"1-80000"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"8 MB")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"varchar"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Varchar [ ( n"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"max ) ] Variable-length string data n defines the string length in bytes."),Object(n.b)("td",b({parentName:"tr"},{align:null}),"1 to max")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Text"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Variable-length non-Unicode data in the code page of the server"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"2^31-1 (2,147,483,647)"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"2.1 MB")))),Object(n.b)("hr",null),Object(n.b)("h2",{id:"unicode-character-strings"},"Unicode character strings:"),Object(n.b)("p",null,"Character data types that are either fixed-length, nchar, or variable-length, nvarchar. Starting with SQL Server 2012 (11.x), when a Supplementary Character (SC) enabled collation is used, these data types store the full range of Unicode character data and use the UTF-16 character encoding. If a non-SC collation is specified, then these data types store only the subset of character data supported by the UCS-2 character encoding."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Data type"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Range/Precision"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Storage"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Nchar"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Fixed-length string data. n defines the string length in byte-pairs"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"1 through 4,000"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"2 * n")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Nvarchar"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Variable-length string data. n defines the string length in byte-pairs"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"1 through 4,000, max"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"2 GB")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Ntext"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Variable-length Unicode"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"2^30 - 1 (1,073,741,823)"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"1 MB")))),Object(n.b)("hr",null),Object(n.b)("h2",{id:"date-and-time"},"Date and time"),Object(n.b)("p",null,"The only thing worth mentioning here is the difference between ",Object(n.b)("a",b({parentName:"p"},{href:"TODO:"}),"user time")," and ",Object(n.b)("a",b({parentName:"p"},{href:"TODO:"}),"system time")," and is a extremely important concept when working with globally distributed systems. This document will eventually cover this topic."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Data type"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Range/Precision"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Storage"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Date"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Defines a date in SQL Server. Default string literal format YYYY-MM-DD"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"0001-01-01 through 9999-12-31 (1582-10-15 through 9999-12-31 for Informatica)"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"3 bytes, fixed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Datetime2"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Defines a date that is combined with a time of day that is based on 24-hour clock"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"0001-01-01 through 9999-12-31, 00:00:00 through 23:59:59.9999999"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"3 - 7 bytes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"datetime"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Defines a date that is combined with a time of day with fractional seconds that is based on a 24-hour clock."),Object(n.b)("td",b({parentName:"tr"},{align:null}),"January 1, 1753, through December 31, 9999"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"8 Bytes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"datetimeoffset"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Defines a date that is combined with a time of a day that has time zone awareness and is based on a 24-hour clock."),Object(n.b)("td",b({parentName:"tr"},{align:null}),"0001-01-01 through 9999-12-31"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"10 Bytes fixed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"smalldatetime"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Defines a date that is combined with a time of day. The time is based on a 24-hour day, with seconds always zero (:00) and without fractional seconds."),Object(n.b)("td",b({parentName:"tr"},{align:null}),"1900-01-01 through 2079-06-06"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"4 Bytes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"time"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Defines a time of a day. The time is without time zone awareness and is based on a 24-hour clock."),Object(n.b)("td",b({parentName:"tr"},{align:null}),"00:00:00.0000000 through 23:59:59.9999999 (00:00:00.000 through 23:59:59.999 for Informatica)"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"5 bytes fixed")))))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/data-types.mdx"}}),s.isMDXComponent=!0},HN5W:function(t,e,a){t.exports=a.p+"static/www-data-5cde8cd0e4bdbe9a970c3090363be933.png"},Zueo:function(t,e,a){t.exports=a.p+"static/sql-banner-b152defdca4237cb071b8725986fb912.jpg"}}]);
//# sourceMappingURL=component---src-pages-data-types-mdx-c84a37d01f0cfb185389.js.map