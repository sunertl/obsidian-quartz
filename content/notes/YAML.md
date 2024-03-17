---
tags:
  - docs
---

## Overview

- It is human readable and used for [[Data Serialization]]
- Document is an unordered collection of `key:value` pais, where each key has a value
	- it's not required to sort things in a certain way
- YAML can also represent sequences or lists, either inline with the sequence in `[ ]` or the items listed where each element has a `-` in front of them.
- A YAML template has a dictionary
	- each item on a list is a dictionary which contains an unordered set of `key:value` pairs.
- Using YAML, `key:value` pairs, `lists` and `dictionaries` allows you to build complex data structures in a way which is human readable
- YAML files can be read into an application or written out by an application and are commonly used for configurations.

>[!Important]
>Indentation matters!

## AWS Relevancy
It's used within AWS as one of two (the other is [[JSON]]) [[AWS CloudFormation]] template formats.

