// http://www.ecma-international.org/ecma-262/#sec-algorithm-conventions

// 1. Top-level step
  // 1. a. Substep.
  // 1. b. Substep.
    // 1. b. i. Subsubstep.
      // 1. b. i. 1. Subsubsubstep
        // 1. b. i. 1. a. Subsubsubsubstep
          // 1. b. i. 1. a. i. Subsubsubsubsubstep


// http://www.ecma-international.org/ecma-262/#sec-algorithm-conventions-syntax-directed-operations

// 1. Let status be the result of performing SyntaxDirectedOperation of SomeNonTerminal.
// 2. Let someParseNode be the parse of some source text.
// 3. Perform SyntaxDirectedOperation of someParseNode.
// 4. Perform SyntaxDirectedOperation of someParseNode passing "value" as the argument.

// Block : { StatementList }

// 1. Return the result of evaluating StatementList.


// http://www.ecma-international.org/ecma-262/#sec-implicit-completion-values

// 1. Return "Infinity".

// 1. Return NormalCompletion("Infinity").

// 1. Assert: completionRecord is a Completion Record.
// 2. Return completionRecord as the Completion Record of this abstract operation.

// 1. Return NormalCompletion(undefined).


// http://www.ecma-international.org/ecma-262/#sec-throw-an-exception

// 1. Throw a TypeError exception.

// 1. Return ThrowCompletion(a newly created TypeError object).


// http://www.ecma-international.org/ecma-262/#sec-returnifabrupt

// 1. ReturnIfAbrupt(argument).

// 1. If argument is an abrupt completion, return argument.
// 2. Else if argument is a Completion Record, set argument to argument.[[Value]].

// 1. ReturnIfAbrupt(AbstractOperation()).

// 1. Let hygienicTemp be AbstractOperation().
// 2. If hygienicTemp is an abrupt completion, return hygienicTemp.
// 3. Else if hygienicTemp is a Completion Record, set hygienicTemp to hygienicTemp.[[Value]].

// 1. Let result be AbstractOperation(ReturnIfAbrupt(argument)).

// 1. If argument is an abrupt completion, return argument.
// 2. If argument is a Completion Record, set argument to argument.[[Value]].
// 3. Let result be AbstractOperation(argument).


// http://www.ecma-international.org/ecma-262/#sec-returnifabrupt-shorthands

// 1. ? OperationName().

// 1. ReturnIfAbrupt(OperationName()).

// 1. ? someValue.OperationName().

// 1. ReturnIfAbrupt(someValue.OperationName()).

// 1. Let val be ! OperationName().

// 1. Let val be OperationName().
// 2. Assert: val is never an abrupt completion.
// 3. If val is a Completion Record, set val to val.[[Value]].

// 1. Perform ! SyntaxDirectedOperation of NonTerminal.


// http://www.ecma-international.org/ecma-262/#sec-static-semantic-rules

// 1. For each child node child of this Parse Node, do
  // 1. a. If child is an instance of symbol, return true.
  // 1. b. If child is an instance of a nonterminal, then
    // 1. b. i. Let contained be the result of child Contains symbol.
    // 1. b. ii. If contained is true, return true.
// 2. Return false.


// http://www.ecma-international.org/ecma-262/#await

// 1. Let completion be Await(value).

// 1. Let asyncContext be the running execution context.
// 2. Let promise be ? PromiseResolve(%Promise%, « value »).
// 3. Let stepsFulfilled be the algorithm steps defined in Await Fulfilled Functions.
// 4. Let onFulfilled be CreateBuiltinFunction(stepsFulfilled, « [[AsyncContext]] »).
// 5. Set onFulfilled.[[AsyncContext]] to asyncContext.
// 6. Let stepsRejected be the algorithm steps defined in Await Rejected Functions.
// 7. Let onRejected be CreateBuiltinFunction(stepsRejected, « [[AsyncContext]] »).
// 8. Set onRejected.[[AsyncContext]] to asyncContext.
// 9. Perform ! PerformPromiseThen(promise, onFulfilled, onRejected).
// 10. Remove asyncContext from the execution context stack and restore the execution context that is at the top of the execution context stack as the running execution context.
// 11. Set the code evaluation state of asyncContext such that when evaluation is resumed with a Completion completion, the following steps of the algorithm that invoked Await will be performed, with completion available.
// 12. Return.
// 13. NOTE: This returns to the evaluation of the operation that had most previously resumed evaluation of asyncContext.


// http://www.ecma-international.org/ecma-262/#await-fulfilled

// 1. Let F be the active function object.
// 2. Let asyncContext be F.[[AsyncContext]].
// 3. Let prevContext be the running execution context.
// 4. Suspend prevContext.
// 5. Push asyncContext onto the execution context stack; asyncContext is now the running execution context.
// 6. Resume the suspended evaluation of asyncContext using NormalCompletion(value) as the result of the operation that suspended it.
// 7. Assert: When we reach this step, asyncContext has already been removed from the execution context stack and prevContext is the currently running execution context.
// 8. Return undefined.


// http://www.ecma-international.org/ecma-262/#await-rejected

// 1. Let F be the active function object.
// 2. Let asyncContext be F.[[AsyncContext]].
// 3. Let prevContext be the running execution context.
// 4. Suspend prevContext.
// 5. Push asyncContext onto the execution context stack; asyncContext is now the running execution context.
// 6. Resume the suspended evaluation of asyncContext using ThrowCompletion(reason) as the result of the operation that suspended it.
// 7. Assert: When we reach this step, asyncContext has already been removed from the execution context stack and prevContext is the currently running execution context.
// 8. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-normalcompletion

// 1. Return NormalCompletion(argument).

// 1. Return Completion { [[Type]]: normal, [[Value]]: argument, [[Target]]: empty }.


// http://www.ecma-international.org/ecma-262/#sec-throwcompletion

// 1. Return ThrowCompletion(argument).

// 1. Return Completion { [[Type]]: throw, [[Value]]: argument, [[Target]]: empty }.


// http://www.ecma-international.org/ecma-262/#sec-updateempty

// 1. Assert: If completionRecord.[[Type]] is either return or throw, then completionRecord.[[Value]] is not empty.
// 2. If completionRecord.[[Value]] is not empty, return Completion(completionRecord).
// 3. Return Completion { [[Type]]: completionRecord.[[Type]], [[Value]]: value, [[Target]]: completionRecord.[[Target]] }.


// http://www.ecma-international.org/ecma-262/#sec-getbase

// 1. Assert: Type(V) is Reference.
// 2. Return the base value component of V.


// http://www.ecma-international.org/ecma-262/#sec-getreferencedname

// 1. Assert: Type(V) is Reference.
// 2. Return the referenced name component of V.


// http://www.ecma-international.org/ecma-262/#sec-isstrictreference

// 1. Assert: Type(V) is Reference.
// 2. Return the strict reference flag of V.


// http://www.ecma-international.org/ecma-262/#sec-hasprimitivebase

// 1. Assert: Type(V) is Reference.
// 2. If Type(V's base value component) is Boolean, String, Symbol, or Number, return true; otherwise return false.


// http://www.ecma-international.org/ecma-262/#sec-ispropertyreference

// 1. Assert: Type(V) is Reference.
// 2. If either the base value component of V is an Object or HasPrimitiveBase(V) is true, return true; otherwise return false.


// http://www.ecma-international.org/ecma-262/#sec-isunresolvablereference

// 1. Assert: Type(V) is Reference.
// 2. If the base value component of V is undefined, return true; otherwise return false.


// http://www.ecma-international.org/ecma-262/#sec-issuperreference

// 1. Assert: Type(V) is Reference.
// 2. If V has a thisValue component, return true; otherwise return false.


// http://www.ecma-international.org/ecma-262/#sec-getvalue

// 1. ReturnIfAbrupt(V).
// 2. If Type(V) is not Reference, return V.
// 3. Let base be GetBase(V).
// 4. If IsUnresolvableReference(V) is true, throw a ReferenceError exception.
// 5. If IsPropertyReference(V) is true, then
  // 5. a. If HasPrimitiveBase(V) is true, then
    // 5. a. i. Assert: In this case, base will never be undefined or null.
    // 5. a. ii. Set base to ! ToObject(base).
  // 5. b. Return ? base.[[Get]](GetReferencedName(V), GetThisValue(V)).
// 6. Else base must be an Environment Record,
  // 6. a. Return ? base.GetBindingValue(GetReferencedName(V), IsStrictReference(V)) (see 8.1.1).


// http://www.ecma-international.org/ecma-262/#sec-putvalue

// 1. ReturnIfAbrupt(V).
// 2. ReturnIfAbrupt(W).
// 3. If Type(V) is not Reference, throw a ReferenceError exception.
// 4. Let base be GetBase(V).
// 5. If IsUnresolvableReference(V) is true, then
  // 5. a. If IsStrictReference(V) is true, then
    // 5. a. i. Throw a ReferenceError exception.
  // 5. b. Let globalObj be GetGlobalObject().
  // 5. c. Return ? Set(globalObj, GetReferencedName(V), W, false).
// 6. Else if IsPropertyReference(V) is true, then
  // 6. a. If HasPrimitiveBase(V) is true, then
    // 6. a. i. Assert: In this case, base will never be undefined or null.
    // 6. a. ii. Set base to ! ToObject(base).
  // 6. b. Let succeeded be ? base.[[Set]](GetReferencedName(V), W, GetThisValue(V)).
  // 6. c. If succeeded is false and IsStrictReference(V) is true, throw a TypeError exception.
  // 6. d. Return.
// 7. Else base must be an Environment Record,
  // 7. a. Return ? base.SetMutableBinding(GetReferencedName(V), W, IsStrictReference(V)) (see 8.1.1).


// http://www.ecma-international.org/ecma-262/#sec-getthisvalue

// 1. Assert: IsPropertyReference(V) is true.
// 2. If IsSuperReference(V) is true, then
  // 2. a. Return the value of the thisValue component of the reference V.
// 3. Return GetBase(V).


// http://www.ecma-international.org/ecma-262/#sec-initializereferencedbinding

// 1. ReturnIfAbrupt(V).
// 2. ReturnIfAbrupt(W).
// 3. Assert: Type(V) is Reference.
// 4. Assert: IsUnresolvableReference(V) is false.
// 5. Let base be GetBase(V).
// 6. Assert: base is an Environment Record.
// 7. Return base.InitializeBinding(GetReferencedName(V), W).


// http://www.ecma-international.org/ecma-262/#sec-isaccessordescriptor

// 1. If Desc is undefined, return false.
// 2. If both Desc.[[Get]] and Desc.[[Set]] are absent, return false.
// 3. Return true.


// http://www.ecma-international.org/ecma-262/#sec-isdatadescriptor

// 1. If Desc is undefined, return false.
// 2. If both Desc.[[Value]] and Desc.[[Writable]] are absent, return false.
// 3. Return true.


// http://www.ecma-international.org/ecma-262/#sec-isgenericdescriptor

// 1. If Desc is undefined, return false.
// 2. If IsAccessorDescriptor(Desc) and IsDataDescriptor(Desc) are both false, return true.
// 3. Return false.


// http://www.ecma-international.org/ecma-262/#sec-frompropertydescriptor

// 1. If Desc is undefined, return undefined.
// 2. Let obj be ObjectCreate(%ObjectPrototype%).
// 3. Assert: obj is an extensible ordinary object with no own properties.
// 4. If Desc has a [[Value]] field, then
  // 4. a. Perform CreateDataProperty(obj, "value", Desc.[[Value]]).
// 5. If Desc has a [[Writable]] field, then
  // 5. a. Perform CreateDataProperty(obj, "writable", Desc.[[Writable]]).
// 6. If Desc has a [[Get]] field, then
  // 6. a. Perform CreateDataProperty(obj, "get", Desc.[[Get]]).
// 7. If Desc has a [[Set]] field, then
  // 7. a. Perform CreateDataProperty(obj, "set", Desc.[[Set]]).
// 8. If Desc has an [[Enumerable]] field, then
  // 8. a. Perform CreateDataProperty(obj, "enumerable", Desc.[[Enumerable]]).
// 9. If Desc has a [[Configurable]] field, then
  // 9. a. Perform CreateDataProperty(obj, "configurable", Desc.[[Configurable]]).
// 10. Assert: All of the above CreateDataProperty operations return true.
// 11. Return obj.


// http://www.ecma-international.org/ecma-262/#sec-topropertydescriptor

// 1. If Type(Obj) is not Object, throw a TypeError exception.
// 2. Let desc be a new Property Descriptor that initially has no fields.
// 3. Let hasEnumerable be ? HasProperty(Obj, "enumerable").
// 4. If hasEnumerable is true, then
  // 4. a. Let enumerable be ToBoolean(? Get(Obj, "enumerable")).
  // 4. b. Set desc.[[Enumerable]] to enumerable.
// 5. Let hasConfigurable be ? HasProperty(Obj, "configurable").
// 6. If hasConfigurable is true, then
  // 6. a. Let configurable be ToBoolean(? Get(Obj, "configurable")).
  // 6. b. Set desc.[[Configurable]] to configurable.
// 7. Let hasValue be ? HasProperty(Obj, "value").
// 8. If hasValue is true, then
  // 8. a. Let value be ? Get(Obj, "value").
  // 8. b. Set desc.[[Value]] to value.
// 9. Let hasWritable be ? HasProperty(Obj, "writable").
// 10. If hasWritable is true, then
  // 10. a. Let writable be ToBoolean(? Get(Obj, "writable")).
  // 10. b. Set desc.[[Writable]] to writable.
// 11. Let hasGet be ? HasProperty(Obj, "get").
// 12. If hasGet is true, then
  // 12. a. Let getter be ? Get(Obj, "get").
  // 12. b. If IsCallable(getter) is false and getter is not undefined, throw a TypeError exception.
  // 12. c. Set desc.[[Get]] to getter.
// 13. Let hasSet be ? HasProperty(Obj, "set").
// 14. If hasSet is true, then
  // 14. a. Let setter be ? Get(Obj, "set").
  // 14. b. If IsCallable(setter) is false and setter is not undefined, throw a TypeError exception.
  // 14. c. Set desc.[[Set]] to setter.
// 15. If desc.[[Get]] is present or desc.[[Set]] is present, then
  // 15. a. If desc.[[Value]] is present or desc.[[Writable]] is present, throw a TypeError exception.
// 16. Return desc.


// http://www.ecma-international.org/ecma-262/#sec-completepropertydescriptor

// 1. Assert: Desc is a Property Descriptor.
// 2. Let like be Record { [[Value]]: undefined, [[Writable]]: false, [[Get]]: undefined, [[Set]]: undefined, [[Enumerable]]: false, [[Configurable]]: false }.
// 3. If IsGenericDescriptor(Desc) is true or IsDataDescriptor(Desc) is true, then
  // 3. a. If Desc does not have a [[Value]] field, set Desc.[[Value]] to like.[[Value]].
  // 3. b. If Desc does not have a [[Writable]] field, set Desc.[[Writable]] to like.[[Writable]].
// 4. Else,
  // 4. a. If Desc does not have a [[Get]] field, set Desc.[[Get]] to like.[[Get]].
  // 4. b. If Desc does not have a [[Set]] field, set Desc.[[Set]] to like.[[Set]].
// 5. If Desc does not have an [[Enumerable]] field, set Desc.[[Enumerable]] to like.[[Enumerable]].
// 6. If Desc does not have a [[Configurable]] field, set Desc.[[Configurable]] to like.[[Configurable]].
// 7. Return Desc.


// http://www.ecma-international.org/ecma-262/#sec-createbytedatablock

// 1. Assert: size ≥ 0.
// 2. Let db be a new Data Block value consisting of size bytes. If it is impossible to create such a Data Block, throw a RangeError exception.
// 3. Set all of the bytes of db to 0.
// 4. Return db.


// http://www.ecma-international.org/ecma-262/#sec-createsharedbytedatablock

// 1. Assert: size ≥ 0.
// 2. Let db be a new Shared Data Block value consisting of size bytes. If it is impossible to create such a Shared Data Block, throw a RangeError exception.
// 3. Let execution be the [[CandidateExecution]] field of the surrounding agent's Agent Record.
// 4. Let eventList be the [[EventList]] field of the element in execution.[[EventsRecords]] whose [[AgentSignifier]] is AgentSignifier().
// 5. Let zero be « 0 ».
// 6. For each index i of db, do
  // 6. a. Append WriteSharedMemory { [[Order]]: "Init", [[NoTear]]: true, [[Block]]: db, [[ByteIndex]]: i, [[ElementSize]]: 1, [[Payload]]: zero } to eventList.
// 7. Return db.


// http://www.ecma-international.org/ecma-262/#sec-copydatablockbytes

// 1. Assert: fromBlock and toBlock are distinct Data Block or Shared Data Block values.
// 2. Assert: fromIndex, toIndex, and count are integer values ≥ 0.
// 3. Let fromSize be the number of bytes in fromBlock.
// 4. Assert: fromIndex + count ≤ fromSize.
// 5. Let toSize be the number of bytes in toBlock.
// 6. Assert: toIndex + count ≤ toSize.
// 7. Repeat, while count > 0
  // 7. a. If fromBlock is a Shared Data Block, then
    // 7. a. i. Let execution be the [[CandidateExecution]] field of the surrounding agent's Agent Record.
    // 7. a. ii. Let eventList be the [[EventList]] field of the element in execution.[[EventsRecords]] whose [[AgentSignifier]] is AgentSignifier().
    // 7. a. iii. Let bytes be a List of length 1 that contains a nondeterministically chosen byte value.
    // 7. a. iv. NOTE: In implementations, bytes is the result of a non-atomic read instruction on the underlying hardware. The nondeterminism is a semantic prescription of the memory model to describe observable behaviour of hardware with weak consistency.
    // 7. a. v. Let readEvent be ReadSharedMemory { [[Order]]: "Unordered", [[NoTear]]: true, [[Block]]: fromBlock, [[ByteIndex]]: fromIndex, [[ElementSize]]: 1 }.
    // 7. a. vi. Append readEvent to eventList.
    // 7. a. vii. Append Chosen Value Record { [[Event]]: readEvent, [[ChosenValue]]: bytes } to execution.[[ChosenValues]].
    // 7. a. viii. If toBlock is a Shared Data Block, then
      // 7. a. viii. 1. Append WriteSharedMemory { [[Order]]: "Unordered", [[NoTear]]: true, [[Block]]: toBlock, [[ByteIndex]]: toIndex, [[ElementSize]]: 1, [[Payload]]: bytes } to eventList.
    // 7. a. ix. Else,
      // 7. a. ix. 1. Set toBlock[toIndex] to bytes[0].
  // 7. b. Else,
    // 7. b. i. Assert: toBlock is not a Shared Data Block.
    // 7. b. ii. Set toBlock[toIndex] to fromBlock[fromIndex].
  // 7. c. Increment toIndex and fromIndex each by 1.
  // 7. d. Decrement count by 1.
// 8. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-toprimitive

// 1. Assert: input is an ECMAScript language value.
// 2. If Type(input) is Object, then
  // 2. a. If PreferredType is not present, let hint be "default".
  // 2. b. Else if PreferredType is hint String, let hint be "string".
  // 2. c. Else PreferredType is hint Number, let hint be "number".
  // 2. d. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
  // 2. e. If exoticToPrim is not undefined, then
    // 2. e. i. Let result be ? Call(exoticToPrim, input, « hint »).
    // 2. e. ii. If Type(result) is not Object, return result.
    // 2. e. iii. Throw a TypeError exception.
  // 2. f. If hint is "default", set hint to "number".
  // 2. g. Return ? OrdinaryToPrimitive(input, hint).
// 3. Return input.


// http://www.ecma-international.org/ecma-262/#sec-ordinarytoprimitive

// 1. Assert: Type(O) is Object.
// 2. Assert: Type(hint) is String and its value is either "string" or "number".
// 3. If hint is "string", then
  // 3. a. Let methodNames be « "toString", "valueOf" ».
// 4. Else,
  // 4. a. Let methodNames be « "valueOf", "toString" ».
// 5. For each name in methodNames in List order, do
  // 5. a. Let method be ? Get(O, name).
  // 5. b. If IsCallable(method) is true, then
    // 5. b. i. Let result be ? Call(method, O).
    // 5. b. ii. If Type(result) is not Object, return result.
// 6. Throw a TypeError exception.


// http://www.ecma-international.org/ecma-262/#sec-tointeger

// 1. Let number be ? ToNumber(argument).
// 2. If number is NaN, return +0.
// 3. If number is +0, -0, +∞, or -∞, return number.
// 4. Return the number value that is the same sign as number and whose magnitude is floor(abs(number)).


// http://www.ecma-international.org/ecma-262/#sec-toint32

// 1. Let number be ? ToNumber(argument).
// 2. If number is NaN, +0, -0, +∞, or -∞, return +0.
// 3. Let int be the mathematical value that is the same sign as number and whose magnitude is floor(abs(number)).
// 4. Let int32bit be int modulo 232.
// 5. If int32bit ≥ 231, return int32bit - 232; otherwise return int32bit.


// http://www.ecma-international.org/ecma-262/#sec-touint32

// 1. Let number be ? ToNumber(argument).
// 2. If number is NaN, +0, -0, +∞, or -∞, return +0.
// 3. Let int be the mathematical value that is the same sign as number and whose magnitude is floor(abs(number)).
// 4. Let int32bit be int modulo 232.
// 5. Return int32bit.


// http://www.ecma-international.org/ecma-262/#sec-toint16

// 1. Let number be ? ToNumber(argument).
// 2. If number is NaN, +0, -0, +∞, or -∞, return +0.
// 3. Let int be the mathematical value that is the same sign as number and whose magnitude is floor(abs(number)).
// 4. Let int16bit be int modulo 216.
// 5. If int16bit ≥ 215, return int16bit - 216; otherwise return int16bit.


// http://www.ecma-international.org/ecma-262/#sec-touint16

// 1. Let number be ? ToNumber(argument).
// 2. If number is NaN, +0, -0, +∞, or -∞, return +0.
// 3. Let int be the mathematical value that is the same sign as number and whose magnitude is floor(abs(number)).
// 4. Let int16bit be int modulo 216.
// 5. Return int16bit.


// http://www.ecma-international.org/ecma-262/#sec-toint8

// 1. Let number be ? ToNumber(argument).
// 2. If number is NaN, +0, -0, +∞, or -∞, return +0.
// 3. Let int be the mathematical value that is the same sign as number and whose magnitude is floor(abs(number)).
// 4. Let int8bit be int modulo 28.
// 5. If int8bit ≥ 27, return int8bit - 28; otherwise return int8bit.


// http://www.ecma-international.org/ecma-262/#sec-touint8

// 1. Let number be ? ToNumber(argument).
// 2. If number is NaN, +0, -0, +∞, or -∞, return +0.
// 3. Let int be the mathematical value that is the same sign as number and whose magnitude is floor(abs(number)).
// 4. Let int8bit be int modulo 28.
// 5. Return int8bit.


// http://www.ecma-international.org/ecma-262/#sec-touint8clamp

// 1. Let number be ? ToNumber(argument).
// 2. If number is NaN, return +0.
// 3. If number ≤ 0, return +0.
// 4. If number ≥ 255, return 255.
// 5. Let f be floor(number).
// 6. If f + 0.5 < number, return f + 1.
// 7. If number < f + 0.5, return f.
// 8. If f is odd, return f + 1.
// 9. Return f.


// http://www.ecma-international.org/ecma-262/#sec-tostring-applied-to-the-number-type

// 1. If m is NaN, return the String "NaN".
// 2. If m is +0 or -0, return the String "0".
// 3. If m is less than zero, return the string-concatenation of "-" and ! NumberToString(-m).
// 4. If m is +∞, return the String "Infinity".
// 5. Otherwise, let n, k, and s be integers such that k ≥ 1, 10k - 1 ≤ s < 10k, the Number value for s × 10n - k is m, and k is as small as possible. Note that k is the number of digits in the decimal representation of s, that s is not divisible by 10, and that the least significant digit of s is not necessarily uniquely determined by these criteria.
// 6. If k ≤ n ≤ 21, return the string-concatenation of:the code units of the k digits of the decimal representation of s (in order, with no leading zeroes)n - k occurrences of the code unit 0x0030 (DIGIT ZERO)
// 7. If 0 < n ≤ 21, return the string-concatenation of:the code units of the most significant n digits of the decimal representation of sthe code unit 0x002E (FULL STOP)the code units of the remaining k - n digits of the decimal representation of s
// 8. If -6 < n ≤ 0, return the string-concatenation of:the code unit 0x0030 (DIGIT ZERO)the code unit 0x002E (FULL STOP)-n occurrences of the code unit 0x0030 (DIGIT ZERO)the code units of the k digits of the decimal representation of s
// 9. Otherwise, if k = 1, return the string-concatenation of:the code unit of the single digit of sthe code unit 0x0065 (LATIN SMALL LETTER E)the code unit 0x002B (PLUS SIGN) or the code unit 0x002D (HYPHEN-MINUS) according to whether n - 1 is positive or negativethe code units of the decimal representation of the integer abs(n - 1) (with no leading zeroes)
// 10. Return the string-concatenation of:the code units of the most significant digit of the decimal representation of sthe code unit 0x002E (FULL STOP)the code units of the remaining k - 1 digits of the decimal representation of sthe code unit 0x0065 (LATIN SMALL LETTER E)the code unit 0x002B (PLUS SIGN) or the code unit 0x002D (HYPHEN-MINUS) according to whether n - 1 is positive or negativethe code units of the decimal representation of the integer abs(n - 1) (with no leading zeroes)


// http://www.ecma-international.org/ecma-262/#sec-topropertykey

// 1. Let key be ? ToPrimitive(argument, hint String).
// 2. If Type(key) is Symbol, then
  // 2. a. Return key.
// 3. Return ! ToString(key).


// http://www.ecma-international.org/ecma-262/#sec-tolength

// 1. Let len be ? ToInteger(argument).
// 2. If len ≤ +0, return +0.
// 3. Return min(len, 253 - 1).


// http://www.ecma-international.org/ecma-262/#sec-canonicalnumericindexstring

// 1. Assert: Type(argument) is String.
// 2. If argument is "-0", return -0.
// 3. Let n be ! ToNumber(argument).
// 4. If SameValue(! ToString(n), argument) is false, return undefined.
// 5. Return n.


// http://www.ecma-international.org/ecma-262/#sec-toindex

// 1. If value is undefined, then
  // 1. a. Let index be 0.
// 2. Else,
  // 2. a. Let integerIndex be ? ToInteger(value).
  // 2. b. If integerIndex < 0, throw a RangeError exception.
  // 2. c. Let index be ! ToLength(integerIndex).
  // 2. d. If SameValueZero(integerIndex, index) is false, throw a RangeError exception.
// 3. Return index.


// http://www.ecma-international.org/ecma-262/#sec-isarray

// 1. If Type(argument) is not Object, return false.
// 2. If argument is an Array exotic object, return true.
// 3. If argument is a Proxy exotic object, then
  // 3. a. If argument.[[ProxyHandler]] is null, throw a TypeError exception.
  // 3. b. Let target be argument.[[ProxyTarget]].
  // 3. c. Return ? IsArray(target).
// 4. Return false.


// http://www.ecma-international.org/ecma-262/#sec-iscallable

// 1. If Type(argument) is not Object, return false.
// 2. If argument has a [[Call]] internal method, return true.
// 3. Return false.


// http://www.ecma-international.org/ecma-262/#sec-isconstructor

// 1. If Type(argument) is not Object, return false.
// 2. If argument has a [[Construct]] internal method, return true.
// 3. Return false.


// http://www.ecma-international.org/ecma-262/#sec-isextensible-o

// 1. Assert: Type(O) is Object.
// 2. Return ? O.[[IsExtensible]]().


// http://www.ecma-international.org/ecma-262/#sec-isinteger

// 1. If Type(argument) is not Number, return false.
// 2. If argument is NaN, +∞, or -∞, return false.
// 3. If floor(abs(argument)) ≠ abs(argument), return false.
// 4. Return true.


// http://www.ecma-international.org/ecma-262/#sec-ispropertykey

// 1. If Type(argument) is String, return true.
// 2. If Type(argument) is Symbol, return true.
// 3. Return false.


// http://www.ecma-international.org/ecma-262/#sec-isregexp

// 1. If Type(argument) is not Object, return false.
// 2. Let matcher be ? Get(argument, @@match).
// 3. If matcher is not undefined, return ToBoolean(matcher).
// 4. If argument has a [[RegExpMatcher]] internal slot, return true.
// 5. Return false.


// http://www.ecma-international.org/ecma-262/#sec-isstringprefix

// 1. Assert: Type(p) is String.
// 2. Assert: Type(q) is String.
// 3. If q can be the string-concatenation of p and some other String r, return true. Otherwise, return false.
// 4. NOTE: Any String is a prefix of itself, because r may be the empty String.


// http://www.ecma-international.org/ecma-262/#sec-samevalue

// 1. If Type(x) is different from Type(y), return false.
// 2. If Type(x) is Number, then
  // 2. a. If x is NaN and y is NaN, return true.
  // 2. b. If x is +0 and y is -0, return false.
  // 2. c. If x is -0 and y is +0, return false.
  // 2. d. If x is the same Number value as y, return true.
  // 2. e. Return false.
// 3. Return SameValueNonNumber(x, y).


// http://www.ecma-international.org/ecma-262/#sec-samevaluezero

// 1. If Type(x) is different from Type(y), return false.
// 2. If Type(x) is Number, then
  // 2. a. If x is NaN and y is NaN, return true.
  // 2. b. If x is +0 and y is -0, return true.
  // 2. c. If x is -0 and y is +0, return true.
  // 2. d. If x is the same Number value as y, return true.
  // 2. e. Return false.
// 3. Return SameValueNonNumber(x, y).


// http://www.ecma-international.org/ecma-262/#sec-samevaluenonnumber

// 1. Assert: Type(x) is not Number.
// 2. Assert: Type(x) is the same as Type(y).
// 3. If Type(x) is Undefined, return true.
// 4. If Type(x) is Null, return true.
// 5. If Type(x) is String, then
  // 5. a. If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
// 6. If Type(x) is Boolean, then
  // 6. a. If x and y are both true or both false, return true; otherwise, return false.
// 7. If Type(x) is Symbol, then
  // 7. a. If x and y are both the same Symbol value, return true; otherwise, return false.
// 8. If x and y are the same Object value, return true. Otherwise, return false.


// http://www.ecma-international.org/ecma-262/#sec-abstract-relational-comparison

// 1. If the LeftFirst flag is true, then
  // 1. a. Let px be ? ToPrimitive(x, hint Number).
  // 1. b. Let py be ? ToPrimitive(y, hint Number).
// 2. Else the order of evaluation needs to be reversed to preserve left to right evaluation,
  // 2. a. Let py be ? ToPrimitive(y, hint Number).
  // 2. b. Let px be ? ToPrimitive(x, hint Number).
// 3. If Type(px) is String and Type(py) is String, then
  // 3. a. If IsStringPrefix(py, px) is true, return false.
  // 3. b. If IsStringPrefix(px, py) is true, return true.
  // 3. c. Let k be the smallest nonnegative integer such that the code unit at index k within px is different from the code unit at index k within py. (There must be such a k, for neither String is a prefix of the other.)
  // 3. d. Let m be the integer that is the numeric value of the code unit at index k within px.
  // 3. e. Let n be the integer that is the numeric value of the code unit at index k within py.
  // 3. f. If m < n, return true. Otherwise, return false.
// 4. Else,
  // 4. a. NOTE: Because px and py are primitive values evaluation order is not important.
  // 4. b. Let nx be ? ToNumber(px).
  // 4. c. Let ny be ? ToNumber(py).
  // 4. d. If nx is NaN, return undefined.
  // 4. e. If ny is NaN, return undefined.
  // 4. f. If nx and ny are the same Number value, return false.
  // 4. g. If nx is +0 and ny is -0, return false.
  // 4. h. If nx is -0 and ny is +0, return false.
  // 4. i. If nx is +∞, return false.
  // 4. j. If ny is +∞, return true.
  // 4. k. If ny is -∞, return false.
  // 4. l. If nx is -∞, return true.
  // 4. m. If the mathematical value of nx is less than the mathematical value of ny—note that these mathematical values are both finite and not both zero—return true. Otherwise, return false.


// http://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison

// 1. If Type(x) is the same as Type(y), then
  // 1. a. Return the result of performing Strict Equality Comparison x === y.
// 2. If x is null and y is undefined, return true.
// 3. If x is undefined and y is null, return true.
// 4. If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y).
// 5. If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
// 6. If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y.
// 7. If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y).
// 8. If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
// 9. If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the comparison ToPrimitive(x) == y.
// 10. Return false.


// http://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison

// 1. If Type(x) is different from Type(y), return false.
// 2. If Type(x) is Number, then
  // 2. a. If x is NaN, return false.
  // 2. b. If y is NaN, return false.
  // 2. c. If x is the same Number value as y, return true.
  // 2. d. If x is +0 and y is -0, return true.
  // 2. e. If x is -0 and y is +0, return true.
  // 2. f. Return false.
// 3. Return SameValueNonNumber(x, y).


// http://www.ecma-international.org/ecma-262/#sec-get-o-p

// 1. Assert: Type(O) is Object.
// 2. Assert: IsPropertyKey(P) is true.
// 3. Return ? O.[[Get]](P, O).


// http://www.ecma-international.org/ecma-262/#sec-getv

// 1. Assert: IsPropertyKey(P) is true.
// 2. Let O be ? ToObject(V).
// 3. Return ? O.[[Get]](P, V).


// http://www.ecma-international.org/ecma-262/#sec-set-o-p-v-throw

// 1. Assert: Type(O) is Object.
// 2. Assert: IsPropertyKey(P) is true.
// 3. Assert: Type(Throw) is Boolean.
// 4. Let success be ? O.[[Set]](P, V, O).
// 5. If success is false and Throw is true, throw a TypeError exception.
// 6. Return success.


// http://www.ecma-international.org/ecma-262/#sec-createdataproperty

// 1. Assert: Type(O) is Object.
// 2. Assert: IsPropertyKey(P) is true.
// 3. Let newDesc be the PropertyDescriptor { [[Value]]: V, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: true }.
// 4. Return ? O.[[DefineOwnProperty]](P, newDesc).


// http://www.ecma-international.org/ecma-262/#sec-createmethodproperty

// 1. Assert: Type(O) is Object.
// 2. Assert: IsPropertyKey(P) is true.
// 3. Let newDesc be the PropertyDescriptor { [[Value]]: V, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true }.
// 4. Return ? O.[[DefineOwnProperty]](P, newDesc).


// http://www.ecma-international.org/ecma-262/#sec-createdatapropertyorthrow

// 1. Assert: Type(O) is Object.
// 2. Assert: IsPropertyKey(P) is true.
// 3. Let success be ? CreateDataProperty(O, P, V).
// 4. If success is false, throw a TypeError exception.
// 5. Return success.


// http://www.ecma-international.org/ecma-262/#sec-definepropertyorthrow

// 1. Assert: Type(O) is Object.
// 2. Assert: IsPropertyKey(P) is true.
// 3. Let success be ? O.[[DefineOwnProperty]](P, desc).
// 4. If success is false, throw a TypeError exception.
// 5. Return success.


// http://www.ecma-international.org/ecma-262/#sec-deletepropertyorthrow

// 1. Assert: Type(O) is Object.
// 2. Assert: IsPropertyKey(P) is true.
// 3. Let success be ? O.[[Delete]](P).
// 4. If success is false, throw a TypeError exception.
// 5. Return success.


// http://www.ecma-international.org/ecma-262/#sec-getmethod

// 1. Assert: IsPropertyKey(P) is true.
// 2. Let func be ? GetV(V, P).
// 3. If func is either undefined or null, return undefined.
// 4. If IsCallable(func) is false, throw a TypeError exception.
// 5. Return func.


// http://www.ecma-international.org/ecma-262/#sec-hasproperty

// 1. Assert: Type(O) is Object.
// 2. Assert: IsPropertyKey(P) is true.
// 3. Return ? O.[[HasProperty]](P).


// http://www.ecma-international.org/ecma-262/#sec-hasownproperty

// 1. Assert: Type(O) is Object.
// 2. Assert: IsPropertyKey(P) is true.
// 3. Let desc be ? O.[[GetOwnProperty]](P).
// 4. If desc is undefined, return false.
// 5. Return true.


// http://www.ecma-international.org/ecma-262/#sec-call

// 1. If argumentsList is not present, set argumentsList to a new empty List.
// 2. If IsCallable(F) is false, throw a TypeError exception.
// 3. Return ? F.[[Call]](V, argumentsList).


// http://www.ecma-international.org/ecma-262/#sec-construct

// 1. If newTarget is not present, set newTarget to F.
// 2. If argumentsList is not present, set argumentsList to a new empty List.
// 3. Assert: IsConstructor(F) is true.
// 4. Assert: IsConstructor(newTarget) is true.
// 5. Return ? F.[[Construct]](argumentsList, newTarget).


// http://www.ecma-international.org/ecma-262/#sec-setintegritylevel

// 1. Assert: Type(O) is Object.
// 2. Assert: level is either "sealed" or "frozen".
// 3. Let status be ? O.[[PreventExtensions]]().
// 4. If status is false, return false.
// 5. Let keys be ? O.[[OwnPropertyKeys]]().
// 6. If level is "sealed", then
  // 6. a. For each element k of keys, do
    // 6. a. i. Perform ? DefinePropertyOrThrow(O, k, PropertyDescriptor { [[Configurable]]: false }).
// 7. Else level is "frozen",
  // 7. a. For each element k of keys, do
    // 7. a. i. Let currentDesc be ? O.[[GetOwnProperty]](k).
    // 7. a. ii. If currentDesc is not undefined, then
      // 7. a. ii. 1. If IsAccessorDescriptor(currentDesc) is true, then
        // 7. a. ii. 1. a. Let desc be the PropertyDescriptor { [[Configurable]]: false }.
      // 7. a. ii. 2. Else,
        // 7. a. ii. 2. a. Let desc be the PropertyDescriptor { [[Configurable]]: false, [[Writable]]: false }.
      // 7. a. ii. 3. Perform ? DefinePropertyOrThrow(O, k, desc).
// 8. Return true.


// http://www.ecma-international.org/ecma-262/#sec-testintegritylevel

// 1. Assert: Type(O) is Object.
// 2. Assert: level is either "sealed" or "frozen".
// 3. Let status be ? IsExtensible(O).
// 4. If status is true, return false.
// 5. NOTE: If the object is extensible, none of its properties are examined.
// 6. Let keys be ? O.[[OwnPropertyKeys]]().
// 7. For each element k of keys, do
  // 7. a. Let currentDesc be ? O.[[GetOwnProperty]](k).
  // 7. b. If currentDesc is not undefined, then
    // 7. b. i. If currentDesc.[[Configurable]] is true, return false.
    // 7. b. ii. If level is "frozen" and IsDataDescriptor(currentDesc) is true, then
      // 7. b. ii. 1. If currentDesc.[[Writable]] is true, return false.
// 8. Return true.


// http://www.ecma-international.org/ecma-262/#sec-createarrayfromlist

// 1. Assert: elements is a List whose elements are all ECMAScript language values.
// 2. Let array be ! ArrayCreate(0).
// 3. Let n be 0.
// 4. For each element e of elements, do
  // 4. a. Let status be CreateDataProperty(array, ! ToString(n), e).
  // 4. b. Assert: status is true.
  // 4. c. Increment n by 1.
// 5. Return array.


// http://www.ecma-international.org/ecma-262/#sec-createlistfromarraylike

// 1. If elementTypes is not present, set elementTypes to « Undefined, Null, Boolean, String, Symbol, Number, Object ».
// 2. If Type(obj) is not Object, throw a TypeError exception.
// 3. Let len be ? ToLength(? Get(obj, "length")).
// 4. Let list be a new empty List.
// 5. Let index be 0.
// 6. Repeat, while index < len
  // 6. a. Let indexName be ! ToString(index).
  // 6. b. Let next be ? Get(obj, indexName).
  // 6. c. If Type(next) is not an element of elementTypes, throw a TypeError exception.
  // 6. d. Append next as the last element of list.
  // 6. e. Increase index by 1.
// 7. Return list.


// http://www.ecma-international.org/ecma-262/#sec-invoke

// 1. Assert: IsPropertyKey(P) is true.
// 2. If argumentsList is not present, set argumentsList to a new empty List.
// 3. Let func be ? GetV(V, P).
// 4. Return ? Call(func, V, argumentsList).


// http://www.ecma-international.org/ecma-262/#sec-ordinaryhasinstance

// 1. If IsCallable(C) is false, return false.
// 2. If C has a [[BoundTargetFunction]] internal slot, then
  // 2. a. Let BC be C.[[BoundTargetFunction]].
  // 2. b. Return ? InstanceofOperator(O, BC).
// 3. If Type(O) is not Object, return false.
// 4. Let P be ? Get(C, "prototype").
// 5. If Type(P) is not Object, throw a TypeError exception.
// 6. Repeat,
  // 6. a. Set O to ? O.[[GetPrototypeOf]]().
  // 6. b. If O is null, return false.
  // 6. c. If SameValue(P, O) is true, return true.


// http://www.ecma-international.org/ecma-262/#sec-speciesconstructor

// 1. Assert: Type(O) is Object.
// 2. Let C be ? Get(O, "constructor").
// 3. If C is undefined, return defaultConstructor.
// 4. If Type(C) is not Object, throw a TypeError exception.
// 5. Let S be ? Get(C, @@species).
// 6. If S is either undefined or null, return defaultConstructor.
// 7. If IsConstructor(S) is true, return S.
// 8. Throw a TypeError exception.


// http://www.ecma-international.org/ecma-262/#sec-enumerableownpropertynames

// 1. Assert: Type(O) is Object.
// 2. Let ownKeys be ? O.[[OwnPropertyKeys]]().
// 3. Let properties be a new empty List.
// 4. For each element key of ownKeys in List order, do
  // 4. a. If Type(key) is String, then
    // 4. a. i. Let desc be ? O.[[GetOwnProperty]](key).
    // 4. a. ii. If desc is not undefined and desc.[[Enumerable]] is true, then
      // 4. a. ii. 1. If kind is "key", append key to properties.
      // 4. a. ii. 2. Else,
        // 4. a. ii. 2. a. Let value be ? Get(O, key).
        // 4. a. ii. 2. b. If kind is "value", append value to properties.
        // 4. a. ii. 2. c. Else,
          // 4. a. ii. 2. c. i. Assert: kind is "key+value".
          // 4. a. ii. 2. c. ii. Let entry be CreateArrayFromList(« key, value »).
          // 4. a. ii. 2. c. iii. Append entry to properties.
// 5. Order the elements of properties so they are in the same relative order as would be produced by the Iterator that would be returned if the EnumerateObjectProperties internal method were invoked with O.
// 6. Return properties.


// http://www.ecma-international.org/ecma-262/#sec-getfunctionrealm

// 1. Assert: obj is a callable object.
// 2. If obj has a [[Realm]] internal slot, then
  // 2. a. Return obj.[[Realm]].
// 3. If obj is a Bound Function exotic object, then
  // 3. a. Let target be obj.[[BoundTargetFunction]].
  // 3. b. Return ? GetFunctionRealm(target).
// 4. If obj is a Proxy exotic object, then
  // 4. a. If obj.[[ProxyHandler]] is null, throw a TypeError exception.
  // 4. b. Let proxyTarget be obj.[[ProxyTarget]].
  // 4. c. Return ? GetFunctionRealm(proxyTarget).
// 5. Return the current Realm Record.


// http://www.ecma-international.org/ecma-262/#sec-copydataproperties

// 1. Assert: Type(target) is Object.
// 2. Assert: excludedItems is a List of property keys.
// 3. If source is undefined or null, return target.
// 4. Let from be ! ToObject(source).
// 5. Let keys be ? from.[[OwnPropertyKeys]]().
// 6. For each element nextKey of keys in List order, do
  // 6. a. Let excluded be false.
  // 6. b. For each element e of excludedItems in List order, do
    // 6. b. i. If SameValue(e, nextKey) is true, then
      // 6. b. i. 1. Set excluded to true.
  // 6. c. If excluded is false, then
    // 6. c. i. Let desc be ? from.[[GetOwnProperty]](nextKey).
    // 6. c. ii. If desc is not undefined and desc.[[Enumerable]] is true, then
      // 6. c. ii. 1. Let propValue be ? Get(from, nextKey).
      // 6. c. ii. 2. Perform ! CreateDataProperty(target, nextKey, propValue).
// 7. Return target.


// http://www.ecma-international.org/ecma-262/#sec-getiterator

// 1. If hint is not present, set hint to sync.
// 2. Assert: hint is either sync or async.
// 3. If method is not present, then
  // 3. a. If hint is async, then
    // 3. a. i. Set method to ? GetMethod(obj, @@asyncIterator).
    // 3. a. ii. If method is undefined, then
      // 3. a. ii. 1. Let syncMethod be ? GetMethod(obj, @@iterator).
      // 3. a. ii. 2. Let syncIteratorRecord be ? GetIterator(obj, sync, syncMethod).
      // 3. a. ii. 3. Return ? CreateAsyncFromSyncIterator(syncIteratorRecord).
  // 3. b. Otherwise, set method to ? GetMethod(obj, @@iterator).
// 4. Let iterator be ? Call(method, obj).
// 5. If Type(iterator) is not Object, throw a TypeError exception.
// 6. Let nextMethod be ? GetV(iterator, "next").
// 7. Let iteratorRecord be Record { [[Iterator]]: iterator, [[NextMethod]]: nextMethod, [[Done]]: false }.
// 8. Return iteratorRecord.


// http://www.ecma-international.org/ecma-262/#sec-iteratornext

// 1. If value is not present, then
  // 1. a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « »).
// 2. Else,
  // 2. a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « value »).
// 3. If Type(result) is not Object, throw a TypeError exception.
// 4. Return result.


// http://www.ecma-international.org/ecma-262/#sec-iteratorcomplete

// 1. Assert: Type(iterResult) is Object.
// 2. Return ToBoolean(? Get(iterResult, "done")).


// http://www.ecma-international.org/ecma-262/#sec-iteratorvalue

// 1. Assert: Type(iterResult) is Object.
// 2. Return ? Get(iterResult, "value").


// http://www.ecma-international.org/ecma-262/#sec-iteratorstep

// 1. Let result be ? IteratorNext(iteratorRecord).
// 2. Let done be ? IteratorComplete(result).
// 3. If done is true, return false.
// 4. Return result.


// http://www.ecma-international.org/ecma-262/#sec-iteratorclose

// 1. Assert: Type(iteratorRecord.[[Iterator]]) is Object.
// 2. Assert: completion is a Completion Record.
// 3. Let iterator be iteratorRecord.[[Iterator]].
// 4. Let return be ? GetMethod(iterator, "return").
// 5. If return is undefined, return Completion(completion).
// 6. Let innerResult be Call(return, iterator, « »).
// 7. If completion.[[Type]] is throw, return Completion(completion).
// 8. If innerResult.[[Type]] is throw, return Completion(innerResult).
// 9. If Type(innerResult.[[Value]]) is not Object, throw a TypeError exception.
// 10. Return Completion(completion).


// http://www.ecma-international.org/ecma-262/#sec-asynciteratorclose

// 1. Assert: Type(iteratorRecord.[[Iterator]]) is Object.
// 2. Assert: completion is a Completion Record.
// 3. Let iterator be iteratorRecord.[[Iterator]].
// 4. Let return be ? GetMethod(iterator, "return").
// 5. If return is undefined, return Completion(completion).
// 6. Let innerResult be Call(return, iterator, « »).
// 7. If innerResult.[[Type]] is normal, set innerResult to Await(innerResult.[[Value]]).
// 8. If completion.[[Type]] is throw, return Completion(completion).
// 9. If innerResult.[[Type]] is throw, return Completion(innerResult).
// 10. If Type(innerResult.[[Value]]) is not Object, throw a TypeError exception.
// 11. Return Completion(completion).


// http://www.ecma-international.org/ecma-262/#sec-createiterresultobject

// 1. Assert: Type(done) is Boolean.
// 2. Let obj be ObjectCreate(%ObjectPrototype%).
// 3. Perform CreateDataProperty(obj, "value", value).
// 4. Perform CreateDataProperty(obj, "done", done).
// 5. Return obj.


// http://www.ecma-international.org/ecma-262/#sec-createlistiteratorRecord

// 1. Let iterator be ObjectCreate(%IteratorPrototype%, « [[IteratedList]], [[ListIteratorNextIndex]] »).
// 2. Set iterator.[[IteratedList]] to list.
// 3. Set iterator.[[ListIteratorNextIndex]] to 0.
// 4. Let steps be the algorithm steps defined in ListIterator next (7.4.9.1).
// 5. Let next be CreateBuiltinFunction(steps, « »).
// 6. Return Record { [[Iterator]]: iterator, [[NextMethod]]: next, [[Done]]: false }.


// http://www.ecma-international.org/ecma-262/#sec-listiterator-next

// 1. Let O be the this value.
// 2. Assert: Type(O) is Object.
// 3. Assert: O has an [[IteratedList]] internal slot.
// 4. Let list be O.[[IteratedList]].
// 5. Let index be O.[[ListIteratorNextIndex]].
// 6. Let len be the number of elements of list.
// 7. If index ≥ len, then
  // 7. a. Return CreateIterResultObject(undefined, true).
// 8. Set O.[[ListIteratorNextIndex]] to index + 1.
// 9. Return CreateIterResultObject(list[index], false).


// http://www.ecma-international.org/ecma-262/#sec-declarative-environment-records-hasbinding-n

// 1. Let envRec be the declarative Environment Record for which the method was invoked.
// 2. If envRec has a binding for the name that is the value of N, return true.
// 3. Return false.


// http://www.ecma-international.org/ecma-262/#sec-declarative-environment-records-createmutablebinding-n-d

// 1. Let envRec be the declarative Environment Record for which the method was invoked.
// 2. Assert: envRec does not already have a binding for N.
// 3. Create a mutable binding in envRec for N and record that it is uninitialized. If D is true, record that the newly created binding may be deleted by a subsequent DeleteBinding call.
// 4. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-declarative-environment-records-createimmutablebinding-n-s

// 1. Let envRec be the declarative Environment Record for which the method was invoked.
// 2. Assert: envRec does not already have a binding for N.
// 3. Create an immutable binding in envRec for N and record that it is uninitialized. If S is true, record that the newly created binding is a strict binding.
// 4. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-declarative-environment-records-initializebinding-n-v

// 1. Let envRec be the declarative Environment Record for which the method was invoked.
// 2. Assert: envRec must have an uninitialized binding for N.
// 3. Set the bound value for N in envRec to V.
// 4. Record that the binding for N in envRec has been initialized.
// 5. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-declarative-environment-records-setmutablebinding-n-v-s

// 1. Let envRec be the declarative Environment Record for which the method was invoked.
// 2. If envRec does not have a binding for N, then
  // 2. a. If S is true, throw a ReferenceError exception.
  // 2. b. Perform envRec.CreateMutableBinding(N, true).
  // 2. c. Perform envRec.InitializeBinding(N, V).
  // 2. d. Return NormalCompletion(empty).
// 3. If the binding for N in envRec is a strict binding, set S to true.
// 4. If the binding for N in envRec has not yet been initialized, throw a ReferenceError exception.
// 5. Else if the binding for N in envRec is a mutable binding, change its bound value to V.
// 6. Else,
  // 6. a. Assert: This is an attempt to change the value of an immutable binding.
  // 6. b. If S is true, throw a TypeError exception.
// 7. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-declarative-environment-records-getbindingvalue-n-s

// 1. Let envRec be the declarative Environment Record for which the method was invoked.
// 2. Assert: envRec has a binding for N.
// 3. If the binding for N in envRec is an uninitialized binding, throw a ReferenceError exception.
// 4. Return the value currently bound to N in envRec.


// http://www.ecma-international.org/ecma-262/#sec-declarative-environment-records-deletebinding-n

// 1. Let envRec be the declarative Environment Record for which the method was invoked.
// 2. Assert: envRec has a binding for the name that is the value of N.
// 3. If the binding for N in envRec cannot be deleted, return false.
// 4. Remove the binding for N from envRec.
// 5. Return true.


// http://www.ecma-international.org/ecma-262/#sec-declarative-environment-records-hasthisbinding

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-declarative-environment-records-hassuperbinding

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-declarative-environment-records-withbaseobject

// 1. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-object-environment-records-hasbinding-n

// 1. Let envRec be the object Environment Record for which the method was invoked.
// 2. Let bindings be the binding object for envRec.
// 3. Let foundBinding be ? HasProperty(bindings, N).
// 4. If foundBinding is false, return false.
// 5. If the withEnvironment flag of envRec is false, return true.
// 6. Let unscopables be ? Get(bindings, @@unscopables).
// 7. If Type(unscopables) is Object, then
  // 7. a. Let blocked be ToBoolean(? Get(unscopables, N)).
  // 7. b. If blocked is true, return false.
// 8. Return true.


// http://www.ecma-international.org/ecma-262/#sec-object-environment-records-createmutablebinding-n-d

// 1. Let envRec be the object Environment Record for which the method was invoked.
// 2. Let bindings be the binding object for envRec.
// 3. Return ? DefinePropertyOrThrow(bindings, N, PropertyDescriptor { [[Value]]: undefined, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: D }).


// http://www.ecma-international.org/ecma-262/#sec-object-environment-records-initializebinding-n-v

// 1. Let envRec be the object Environment Record for which the method was invoked.
// 2. Assert: envRec must have an uninitialized binding for N.
// 3. Record that the binding for N in envRec has been initialized.
// 4. Return ? envRec.SetMutableBinding(N, V, false).


// http://www.ecma-international.org/ecma-262/#sec-object-environment-records-setmutablebinding-n-v-s

// 1. Let envRec be the object Environment Record for which the method was invoked.
// 2. Let bindings be the binding object for envRec.
// 3. Return ? Set(bindings, N, V, S).


// http://www.ecma-international.org/ecma-262/#sec-object-environment-records-getbindingvalue-n-s

// 1. Let envRec be the object Environment Record for which the method was invoked.
// 2. Let bindings be the binding object for envRec.
// 3. Let value be ? HasProperty(bindings, N).
// 4. If value is false, then
  // 4. a. If S is false, return the value undefined; otherwise throw a ReferenceError exception.
// 5. Return ? Get(bindings, N).


// http://www.ecma-international.org/ecma-262/#sec-object-environment-records-deletebinding-n

// 1. Let envRec be the object Environment Record for which the method was invoked.
// 2. Let bindings be the binding object for envRec.
// 3. Return ? bindings.[[Delete]](N).


// http://www.ecma-international.org/ecma-262/#sec-object-environment-records-hasthisbinding

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-object-environment-records-hassuperbinding

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-object-environment-records-withbaseobject

// 1. Let envRec be the object Environment Record for which the method was invoked.
// 2. If the withEnvironment flag of envRec is true, return the binding object for envRec.
// 3. Otherwise, return undefined.


// http://www.ecma-international.org/ecma-262/#sec-bindthisvalue

// 1. Let envRec be the function Environment Record for which the method was invoked.
// 2. Assert: envRec.[[ThisBindingStatus]] is not "lexical".
// 3. If envRec.[[ThisBindingStatus]] is "initialized", throw a ReferenceError exception.
// 4. Set envRec.[[ThisValue]] to V.
// 5. Set envRec.[[ThisBindingStatus]] to "initialized".
// 6. Return V.


// http://www.ecma-international.org/ecma-262/#sec-function-environment-records-hasthisbinding

// 1. Let envRec be the function Environment Record for which the method was invoked.
// 2. If envRec.[[ThisBindingStatus]] is "lexical", return false; otherwise, return true.


// http://www.ecma-international.org/ecma-262/#sec-function-environment-records-hassuperbinding

// 1. Let envRec be the function Environment Record for which the method was invoked.
// 2. If envRec.[[ThisBindingStatus]] is "lexical", return false.
// 3. If envRec.[[HomeObject]] has the value undefined, return false; otherwise, return true.


// http://www.ecma-international.org/ecma-262/#sec-function-environment-records-getthisbinding

// 1. Let envRec be the function Environment Record for which the method was invoked.
// 2. Assert: envRec.[[ThisBindingStatus]] is not "lexical".
// 3. If envRec.[[ThisBindingStatus]] is "uninitialized", throw a ReferenceError exception.
// 4. Return envRec.[[ThisValue]].


// http://www.ecma-international.org/ecma-262/#sec-getsuperbase

// 1. Let envRec be the function Environment Record for which the method was invoked.
// 2. Let home be envRec.[[HomeObject]].
// 3. If home has the value undefined, return undefined.
// 4. Assert: Type(home) is Object.
// 5. Return ? home.[[GetPrototypeOf]]().


// http://www.ecma-international.org/ecma-262/#sec-global-environment-records-hasbinding-n

// 1. Let envRec be the global Environment Record for which the method was invoked.
// 2. Let DclRec be envRec.[[DeclarativeRecord]].
// 3. If DclRec.HasBinding(N) is true, return true.
// 4. Let ObjRec be envRec.[[ObjectRecord]].
// 5. Return ? ObjRec.HasBinding(N).


// http://www.ecma-international.org/ecma-262/#sec-global-environment-records-createmutablebinding-n-d

// 1. Let envRec be the global Environment Record for which the method was invoked.
// 2. Let DclRec be envRec.[[DeclarativeRecord]].
// 3. If DclRec.HasBinding(N) is true, throw a TypeError exception.
// 4. Return DclRec.CreateMutableBinding(N, D).


// http://www.ecma-international.org/ecma-262/#sec-global-environment-records-createimmutablebinding-n-s

// 1. Let envRec be the global Environment Record for which the method was invoked.
// 2. Let DclRec be envRec.[[DeclarativeRecord]].
// 3. If DclRec.HasBinding(N) is true, throw a TypeError exception.
// 4. Return DclRec.CreateImmutableBinding(N, S).


// http://www.ecma-international.org/ecma-262/#sec-global-environment-records-initializebinding-n-v

// 1. Let envRec be the global Environment Record for which the method was invoked.
// 2. Let DclRec be envRec.[[DeclarativeRecord]].
// 3. If DclRec.HasBinding(N) is true, then
  // 3. a. Return DclRec.InitializeBinding(N, V).
// 4. Assert: If the binding exists, it must be in the object Environment Record.
// 5. Let ObjRec be envRec.[[ObjectRecord]].
// 6. Return ? ObjRec.InitializeBinding(N, V).


// http://www.ecma-international.org/ecma-262/#sec-global-environment-records-setmutablebinding-n-v-s

// 1. Let envRec be the global Environment Record for which the method was invoked.
// 2. Let DclRec be envRec.[[DeclarativeRecord]].
// 3. If DclRec.HasBinding(N) is true, then
  // 3. a. Return DclRec.SetMutableBinding(N, V, S).
// 4. Let ObjRec be envRec.[[ObjectRecord]].
// 5. Return ? ObjRec.SetMutableBinding(N, V, S).


// http://www.ecma-international.org/ecma-262/#sec-global-environment-records-getbindingvalue-n-s

// 1. Let envRec be the global Environment Record for which the method was invoked.
// 2. Let DclRec be envRec.[[DeclarativeRecord]].
// 3. If DclRec.HasBinding(N) is true, then
  // 3. a. Return DclRec.GetBindingValue(N, S).
// 4. Let ObjRec be envRec.[[ObjectRecord]].
// 5. Return ? ObjRec.GetBindingValue(N, S).


// http://www.ecma-international.org/ecma-262/#sec-global-environment-records-deletebinding-n

// 1. Let envRec be the global Environment Record for which the method was invoked.
// 2. Let DclRec be envRec.[[DeclarativeRecord]].
// 3. If DclRec.HasBinding(N) is true, then
  // 3. a. Return DclRec.DeleteBinding(N).
// 4. Let ObjRec be envRec.[[ObjectRecord]].
// 5. Let globalObject be the binding object for ObjRec.
// 6. Let existingProp be ? HasOwnProperty(globalObject, N).
// 7. If existingProp is true, then
  // 7. a. Let status be ? ObjRec.DeleteBinding(N).
  // 7. b. If status is true, then
    // 7. b. i. Let varNames be envRec.[[VarNames]].
    // 7. b. ii. If N is an element of varNames, remove that element from the varNames.
  // 7. c. Return status.
// 8. Return true.


// http://www.ecma-international.org/ecma-262/#sec-global-environment-records-hasthisbinding

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-global-environment-records-hassuperbinding

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-global-environment-records-withbaseobject

// 1. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-global-environment-records-getthisbinding

// 1. Let envRec be the global Environment Record for which the method was invoked.
// 2. Return envRec.[[GlobalThisValue]].


// http://www.ecma-international.org/ecma-262/#sec-hasvardeclaration

// 1. Let envRec be the global Environment Record for which the method was invoked.
// 2. Let varDeclaredNames be envRec.[[VarNames]].
// 3. If varDeclaredNames contains N, return true.
// 4. Return false.


// http://www.ecma-international.org/ecma-262/#sec-haslexicaldeclaration

// 1. Let envRec be the global Environment Record for which the method was invoked.
// 2. Let DclRec be envRec.[[DeclarativeRecord]].
// 3. Return DclRec.HasBinding(N).


// http://www.ecma-international.org/ecma-262/#sec-hasrestrictedglobalproperty

// 1. Let envRec be the global Environment Record for which the method was invoked.
// 2. Let ObjRec be envRec.[[ObjectRecord]].
// 3. Let globalObject be the binding object for ObjRec.
// 4. Let existingProp be ? globalObject.[[GetOwnProperty]](N).
// 5. If existingProp is undefined, return false.
// 6. If existingProp.[[Configurable]] is true, return false.
// 7. Return true.


// http://www.ecma-international.org/ecma-262/#sec-candeclareglobalvar

// 1. Let envRec be the global Environment Record for which the method was invoked.
// 2. Let ObjRec be envRec.[[ObjectRecord]].
// 3. Let globalObject be the binding object for ObjRec.
// 4. Let hasProperty be ? HasOwnProperty(globalObject, N).
// 5. If hasProperty is true, return true.
// 6. Return ? IsExtensible(globalObject).


// http://www.ecma-international.org/ecma-262/#sec-candeclareglobalfunction

// 1. Let envRec be the global Environment Record for which the method was invoked.
// 2. Let ObjRec be envRec.[[ObjectRecord]].
// 3. Let globalObject be the binding object for ObjRec.
// 4. Let existingProp be ? globalObject.[[GetOwnProperty]](N).
// 5. If existingProp is undefined, return ? IsExtensible(globalObject).
// 6. If existingProp.[[Configurable]] is true, return true.
// 7. If IsDataDescriptor(existingProp) is true and existingProp has attribute values { [[Writable]]: true, [[Enumerable]]: true }, return true.
// 8. Return false.


// http://www.ecma-international.org/ecma-262/#sec-createglobalvarbinding

// 1. Let envRec be the global Environment Record for which the method was invoked.
// 2. Let ObjRec be envRec.[[ObjectRecord]].
// 3. Let globalObject be the binding object for ObjRec.
// 4. Let hasProperty be ? HasOwnProperty(globalObject, N).
// 5. Let extensible be ? IsExtensible(globalObject).
// 6. If hasProperty is false and extensible is true, then
  // 6. a. Perform ? ObjRec.CreateMutableBinding(N, D).
  // 6. b. Perform ? ObjRec.InitializeBinding(N, undefined).
// 7. Let varDeclaredNames be envRec.[[VarNames]].
// 8. If varDeclaredNames does not contain N, then
  // 8. a. Append N to varDeclaredNames.
// 9. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-createglobalfunctionbinding

// 1. Let envRec be the global Environment Record for which the method was invoked.
// 2. Let ObjRec be envRec.[[ObjectRecord]].
// 3. Let globalObject be the binding object for ObjRec.
// 4. Let existingProp be ? globalObject.[[GetOwnProperty]](N).
// 5. If existingProp is undefined or existingProp.[[Configurable]] is true, then
  // 5. a. Let desc be the PropertyDescriptor { [[Value]]: V, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: D }.
// 6. Else,
  // 6. a. Let desc be the PropertyDescriptor { [[Value]]: V }.
// 7. Perform ? DefinePropertyOrThrow(globalObject, N, desc).
// 8. Record that the binding for N in ObjRec has been initialized.
// 9. Perform ? Set(globalObject, N, V, false).
// 10. Let varDeclaredNames be envRec.[[VarNames]].
// 11. If varDeclaredNames does not contain N, then
  // 11. a. Append N to varDeclaredNames.
// 12. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-module-environment-records-getbindingvalue-n-s

// 1. Assert: S is true.
// 2. Let envRec be the module Environment Record for which the method was invoked.
// 3. Assert: envRec has a binding for N.
// 4. If the binding for N is an indirect binding, then
  // 4. a. Let M and N2 be the indirection values provided when this binding for N was created.
  // 4. b. Let targetEnv be M.[[Environment]].
  // 4. c. If targetEnv is undefined, throw a ReferenceError exception.
  // 4. d. Let targetER be targetEnv's EnvironmentRecord.
  // 4. e. Return ? targetER.GetBindingValue(N2, true).
// 5. If the binding for N in envRec is an uninitialized binding, throw a ReferenceError exception.
// 6. Return the value currently bound to N in envRec.


// http://www.ecma-international.org/ecma-262/#sec-module-environment-records-deletebinding-n

// 1. Assert: This method is never invoked. See 12.5.3.1.


// http://www.ecma-international.org/ecma-262/#sec-module-environment-records-hasthisbinding

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-module-environment-records-getthisbinding

// 1. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-createimportbinding

// 1. Let envRec be the module Environment Record for which the method was invoked.
// 2. Assert: envRec does not already have a binding for N.
// 3. Assert: M is a Module Record.
// 4. Assert: When M.[[Environment]] is instantiated it will have a direct binding for N2.
// 5. Create an immutable indirect binding in envRec for N that references M and N2 as its target binding and record that the binding is initialized.
// 6. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-getidentifierreference

// 1. If lex is the value null, then
  // 1. a. Return a value of type Reference whose base value component is undefined, whose referenced name component is name, and whose strict reference flag is strict.
// 2. Let envRec be lex's EnvironmentRecord.
// 3. Let exists be ? envRec.HasBinding(name).
// 4. If exists is true, then
  // 4. a. Return a value of type Reference whose base value component is envRec, whose referenced name component is name, and whose strict reference flag is strict.
// 5. Else,
  // 5. a. Let outer be the value of lex's outer environment reference.
  // 5. b. Return ? GetIdentifierReference(outer, name, strict).


// http://www.ecma-international.org/ecma-262/#sec-newdeclarativeenvironment

// 1. Let env be a new Lexical Environment.
// 2. Let envRec be a new declarative Environment Record containing no bindings.
// 3. Set env's EnvironmentRecord to envRec.
// 4. Set the outer lexical environment reference of env to E.
// 5. Return env.


// http://www.ecma-international.org/ecma-262/#sec-newobjectenvironment

// 1. Let env be a new Lexical Environment.
// 2. Let envRec be a new object Environment Record containing O as the binding object.
// 3. Set env's EnvironmentRecord to envRec.
// 4. Set the outer lexical environment reference of env to E.
// 5. Return env.


// http://www.ecma-international.org/ecma-262/#sec-newfunctionenvironment

// 1. Assert: F is an ECMAScript function.
// 2. Assert: Type(newTarget) is Undefined or Object.
// 3. Let env be a new Lexical Environment.
// 4. Let envRec be a new function Environment Record containing no bindings.
// 5. Set envRec.[[FunctionObject]] to F.
// 6. If F.[[ThisMode]] is lexical, set envRec.[[ThisBindingStatus]] to "lexical".
// 7. Else, set envRec.[[ThisBindingStatus]] to "uninitialized".
// 8. Let home be F.[[HomeObject]].
// 9. Set envRec.[[HomeObject]] to home.
// 10. Set envRec.[[NewTarget]] to newTarget.
// 11. Set env's EnvironmentRecord to envRec.
// 12. Set the outer lexical environment reference of env to F.[[Environment]].
// 13. Return env.


// http://www.ecma-international.org/ecma-262/#sec-newglobalenvironment

// 1. Let env be a new Lexical Environment.
// 2. Let objRec be a new object Environment Record containing G as the binding object.
// 3. Let dclRec be a new declarative Environment Record containing no bindings.
// 4. Let globalRec be a new global Environment Record.
// 5. Set globalRec.[[ObjectRecord]] to objRec.
// 6. Set globalRec.[[GlobalThisValue]] to thisValue.
// 7. Set globalRec.[[DeclarativeRecord]] to dclRec.
// 8. Set globalRec.[[VarNames]] to a new empty List.
// 9. Set env's EnvironmentRecord to globalRec.
// 10. Set the outer lexical environment reference of env to null.
// 11. Return env.


// http://www.ecma-international.org/ecma-262/#sec-newmoduleenvironment

// 1. Let env be a new Lexical Environment.
// 2. Let envRec be a new module Environment Record containing no bindings.
// 3. Set env's EnvironmentRecord to envRec.
// 4. Set the outer lexical environment reference of env to E.
// 5. Return env.


// http://www.ecma-international.org/ecma-262/#sec-createrealm

// 1. Let realmRec be a new Realm Record.
// 2. Perform CreateIntrinsics(realmRec).
// 3. Set realmRec.[[GlobalObject]] to undefined.
// 4. Set realmRec.[[GlobalEnv]] to undefined.
// 5. Set realmRec.[[TemplateMap]] to a new empty List.
// 6. Return realmRec.


// http://www.ecma-international.org/ecma-262/#sec-createintrinsics

// 1. Let intrinsics be a new Record.
// 2. Set realmRec.[[Intrinsics]] to intrinsics.
// 3. Let objProto be ObjectCreate(null).
// 4. Set intrinsics.[[%ObjectPrototype%]] to objProto.
// 5. Let throwerSteps be the algorithm steps specified in 9.2.9.1 for the %ThrowTypeError% function.
// 6. Let thrower be CreateBuiltinFunction(throwerSteps, « », realmRec, null).
// 7. Set intrinsics.[[%ThrowTypeError%]] to thrower.
// 8. Let noSteps be an empty sequence of algorithm steps.
// 9. Let funcProto be CreateBuiltinFunction(noSteps, « », realmRec, objProto).
// 10. Set intrinsics.[[%FunctionPrototype%]] to funcProto.
// 11. Call thrower.[[SetPrototypeOf]](funcProto).
// 12. Perform AddRestrictedFunctionProperties(funcProto, realmRec).
// 13. Set fields of intrinsics with the values listed in Table 7 that have not already been handled above. The field names are the names listed in column one of the table. The value of each field is a new object value fully and recursively populated with property values as defined by the specification of each object in clauses 18-26. All object property values are newly created object values. All values that are built-in function objects are created by performing CreateBuiltinFunction(<steps>, <slots>, realmRec, <prototype>) where <steps> is the definition of that function provided by this specification, <slots> is a list of the names, if any, of the function's specified internal slots, and <prototype> is the specified value of the function's [[Prototype]] internal slot. The creation of the intrinsics and their properties must be ordered to avoid any dependencies upon objects that have not yet been created.
// 14. Return intrinsics.


// http://www.ecma-international.org/ecma-262/#sec-setrealmglobalobject

// 1. If globalObj is undefined, then
  // 1. a. Let intrinsics be realmRec.[[Intrinsics]].
  // 1. b. Set globalObj to ObjectCreate(intrinsics.[[%ObjectPrototype%]]).
// 2. Assert: Type(globalObj) is Object.
// 3. If thisValue is undefined, set thisValue to globalObj.
// 4. Set realmRec.[[GlobalObject]] to globalObj.
// 5. Let newGlobalEnv be NewGlobalEnvironment(globalObj, thisValue).
// 6. Set realmRec.[[GlobalEnv]] to newGlobalEnv.
// 7. Return realmRec.


// http://www.ecma-international.org/ecma-262/#sec-setdefaultglobalbindings

// 1. Let global be realmRec.[[GlobalObject]].
// 2. For each property of the Global Object specified in clause 18, do
  // 2. a. Let name be the String value of the property name.
  // 2. b. Let desc be the fully populated data property descriptor for the property containing the specified attributes for the property. For properties listed in 18.2, 18.3, or 18.4 the value of the [[Value]] attribute is the corresponding intrinsic object from realmRec.
  // 2. c. Perform ? DefinePropertyOrThrow(global, name, desc).
// 3. Return global.


// http://www.ecma-international.org/ecma-262/#sec-getactivescriptormodule

// 1. If the execution context stack is empty, return null.
// 2. Let ec be the topmost execution context on the execution context stack whose ScriptOrModule component is not null.
// 3. If no such execution context exists, return null. Otherwise, return ec's ScriptOrModule component.


// http://www.ecma-international.org/ecma-262/#sec-resolvebinding

// 1. If env is not present or if env is undefined, then
  // 1. a. Set env to the running execution context's LexicalEnvironment.
// 2. Assert: env is a Lexical Environment.
// 3. If the code matching the syntactic production that is being evaluated is contained in strict mode code, let strict be true, else let strict be false.
// 4. Return ? GetIdentifierReference(env, name, strict).


// http://www.ecma-international.org/ecma-262/#sec-getthisenvironment

// 1. Let lex be the running execution context's LexicalEnvironment.
// 2. Repeat,
  // 2. a. Let envRec be lex's EnvironmentRecord.
  // 2. b. Let exists be envRec.HasThisBinding().
  // 2. c. If exists is true, return envRec.
  // 2. d. Let outer be the value of lex's outer environment reference.
  // 2. e. Assert: outer is not null.
  // 2. f. Set lex to outer.


// http://www.ecma-international.org/ecma-262/#sec-resolvethisbinding

// 1. Let envRec be GetThisEnvironment().
// 2. Return ? envRec.GetThisBinding().


// http://www.ecma-international.org/ecma-262/#sec-getnewtarget

// 1. Let envRec be GetThisEnvironment().
// 2. Assert: envRec has a [[NewTarget]] field.
// 3. Return envRec.[[NewTarget]].


// http://www.ecma-international.org/ecma-262/#sec-getglobalobject

// 1. Let ctx be the running execution context.
// 2. Let currentRealm be ctx's Realm.
// 3. Return currentRealm.[[GlobalObject]].


// http://www.ecma-international.org/ecma-262/#sec-enqueuejob

// 1. Assert: Type(queueName) is String and its value is the name of a Job Queue recognized by this implementation.
// 2. Assert: job is the name of a Job.
// 3. Assert: arguments is a List that has the same number of elements as the number of parameters required by job.
// 4. Let callerContext be the running execution context.
// 5. Let callerRealm be callerContext's Realm.
// 6. Let callerScriptOrModule be callerContext's ScriptOrModule.
// 7. Let pending be PendingJob { [[Job]]: job, [[Arguments]]: arguments, [[Realm]]: callerRealm, [[ScriptOrModule]]: callerScriptOrModule, [[HostDefined]]: undefined }.
// 8. Perform any implementation or host environment defined processing of pending. This may include modifying the [[HostDefined]] field or any other field of pending.
// 9. Add pending at the back of the Job Queue named by queueName.
// 10. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-initializehostdefinedrealm

// 1. Let realm be CreateRealm().
// 2. Let newContext be a new execution context.
// 3. Set the Function of newContext to null.
// 4. Set the Realm of newContext to realm.
// 5. Set the ScriptOrModule of newContext to null.
// 6. Push newContext onto the execution context stack; newContext is now the running execution context.
// 7. If the host requires use of an exotic object to serve as realm's global object, let global be such an object created in an implementation-defined manner. Otherwise, let global be undefined, indicating that an ordinary object should be created as the global object.
// 8. If the host requires that the this binding in realm's global scope return an object other than the global object, let thisValue be such an object created in an implementation-defined manner. Otherwise, let thisValue be undefined, indicating that realm's global this binding should be the global object.
// 9. Perform SetRealmGlobalObject(realm, global, thisValue).
// 10. Let globalObj be ? SetDefaultGlobalBindings(realm).
// 11. Create any implementation-defined global object properties on globalObj.
// 12. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-runjobs

// 1. Perform ? InitializeHostDefinedRealm().
// 2. In an implementation-dependent manner, obtain the ECMAScript source texts (see clause 10) and any associated host-defined values for zero or more ECMAScript scripts and/or ECMAScript modules. For each such sourceText and hostDefined, do
  // 2. a. If sourceText is the source code of a script, then
    // 2. a. i. Perform EnqueueJob("ScriptJobs", ScriptEvaluationJob, « sourceText, hostDefined »).
  // 2. b. Else sourceText is the source code of a module,
    // 2. b. i. Perform EnqueueJob("ScriptJobs", TopLevelModuleEvaluationJob, « sourceText, hostDefined »).
// 3. Repeat,
  // 3. a. Suspend the running execution context and remove it from the execution context stack.
  // 3. b. Assert: The execution context stack is now empty.
  // 3. c. Let nextQueue be a non-empty Job Queue chosen in an implementation-defined manner. If all Job Queues are empty, the result is implementation-defined.
  // 3. d. Let nextPending be the PendingJob record at the front of nextQueue. Remove that record from nextQueue.
  // 3. e. Let newContext be a new execution context.
  // 3. f. Set newContext's Function to null.
  // 3. g. Set newContext's Realm to nextPending.[[Realm]].
  // 3. h. Set newContext's ScriptOrModule to nextPending.[[ScriptOrModule]].
  // 3. i. Push newContext onto the execution context stack; newContext is now the running execution context.
  // 3. j. Perform any implementation or host environment defined job initialization using nextPending.
  // 3. k. Let result be the result of performing the abstract operation named by nextPending.[[Job]] using the elements of nextPending.[[Arguments]] as its arguments.
  // 3. l. If result is an abrupt completion, perform HostReportErrors(« result.[[Value]] »).


// http://www.ecma-international.org/ecma-262/#sec-agentsignifier

// 1. Let AR be the Agent Record of the surrounding agent.
// 2. Return AR.[[Signifier]].


// http://www.ecma-international.org/ecma-262/#sec-agentcansuspend

// 1. Let AR be the Agent Record of the surrounding agent.
// 2. Return AR.[[CanBlock]].


// http://www.ecma-international.org/ecma-262/#sec-ordinary-object-internal-methods-and-internal-slots-getprototypeof

// 1. Return ! OrdinaryGetPrototypeOf(O).


// http://www.ecma-international.org/ecma-262/#sec-ordinarygetprototypeof

// 1. Return O.[[Prototype]].


// http://www.ecma-international.org/ecma-262/#sec-ordinary-object-internal-methods-and-internal-slots-setprototypeof-v

// 1. Return ! OrdinarySetPrototypeOf(O, V).


// http://www.ecma-international.org/ecma-262/#sec-ordinarysetprototypeof

// 1. Assert: Either Type(V) is Object or Type(V) is Null.
// 2. Let extensible be O.[[Extensible]].
// 3. Let current be O.[[Prototype]].
// 4. If SameValue(V, current) is true, return true.
// 5. If extensible is false, return false.
// 6. Let p be V.
// 7. Let done be false.
// 8. Repeat, while done is false,
  // 8. a. If p is null, set done to true.
  // 8. b. Else if SameValue(p, O) is true, return false.
  // 8. c. Else,
    // 8. c. i. If p.[[GetPrototypeOf]] is not the ordinary object internal method defined in 9.1.1, set done to true.
    // 8. c. ii. Else, set p to p.[[Prototype]].
// 9. Set O.[[Prototype]] to V.
// 10. Return true.


// http://www.ecma-international.org/ecma-262/#sec-ordinary-object-internal-methods-and-internal-slots-isextensible

// 1. Return ! OrdinaryIsExtensible(O).


// http://www.ecma-international.org/ecma-262/#sec-ordinaryisextensible

// 1. Return O.[[Extensible]].


// http://www.ecma-international.org/ecma-262/#sec-ordinary-object-internal-methods-and-internal-slots-preventextensions

// 1. Return ! OrdinaryPreventExtensions(O).


// http://www.ecma-international.org/ecma-262/#sec-ordinarypreventextensions

// 1. Set O.[[Extensible]] to false.
// 2. Return true.


// http://www.ecma-international.org/ecma-262/#sec-ordinary-object-internal-methods-and-internal-slots-getownproperty-p

// 1. Return ! OrdinaryGetOwnProperty(O, P).


// http://www.ecma-international.org/ecma-262/#sec-ordinarygetownproperty

// 1. Assert: IsPropertyKey(P) is true.
// 2. If O does not have an own property with key P, return undefined.
// 3. Let D be a newly created Property Descriptor with no fields.
// 4. Let X be O's own property whose key is P.
// 5. If X is a data property, then
  // 5. a. Set D.[[Value]] to the value of X's [[Value]] attribute.
  // 5. b. Set D.[[Writable]] to the value of X's [[Writable]] attribute.
// 6. Else X is an accessor property,
  // 6. a. Set D.[[Get]] to the value of X's [[Get]] attribute.
  // 6. b. Set D.[[Set]] to the value of X's [[Set]] attribute.
// 7. Set D.[[Enumerable]] to the value of X's [[Enumerable]] attribute.
// 8. Set D.[[Configurable]] to the value of X's [[Configurable]] attribute.
// 9. Return D.


// http://www.ecma-international.org/ecma-262/#sec-ordinary-object-internal-methods-and-internal-slots-defineownproperty-p-desc

// 1. Return ? OrdinaryDefineOwnProperty(O, P, Desc).


// http://www.ecma-international.org/ecma-262/#sec-ordinarydefineownproperty

// 1. Let current be ? O.[[GetOwnProperty]](P).
// 2. Let extensible be ? IsExtensible(O).
// 3. Return ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current).


// http://www.ecma-international.org/ecma-262/#sec-iscompatiblepropertydescriptor

// 1. Return ValidateAndApplyPropertyDescriptor(undefined, undefined, Extensible, Desc, Current).


// http://www.ecma-international.org/ecma-262/#sec-validateandapplypropertydescriptor

// 1. Assert: If O is not undefined, then IsPropertyKey(P) is true.
// 2. If current is undefined, then
  // 2. a. If extensible is false, return false.
  // 2. b. Assert: extensible is true.
  // 2. c. If IsGenericDescriptor(Desc) is true or IsDataDescriptor(Desc) is true, then
    // 2. c. i. If O is not undefined, create an own data property named P of object O whose [[Value]], [[Writable]], [[Enumerable]] and [[Configurable]] attribute values are described by Desc. If the value of an attribute field of Desc is absent, the attribute of the newly created property is set to its default value.
  // 2. d. Else Desc must be an accessor Property Descriptor,
    // 2. d. i. If O is not undefined, create an own accessor property named P of object O whose [[Get]], [[Set]], [[Enumerable]] and [[Configurable]] attribute values are described by Desc. If the value of an attribute field of Desc is absent, the attribute of the newly created property is set to its default value.
  // 2. e. Return true.
// 3. If every field in Desc is absent, return true.
// 4. If current.[[Configurable]] is false, then
  // 4. a. If Desc.[[Configurable]] is present and its value is true, return false.
  // 4. b. If Desc.[[Enumerable]] is present and the [[Enumerable]] fields of current and Desc are the Boolean negation of each other, return false.
// 5. If IsGenericDescriptor(Desc) is true, no further validation is required.
// 6. Else if IsDataDescriptor(current) and IsDataDescriptor(Desc) have different results, then
  // 6. a. If current.[[Configurable]] is false, return false.
  // 6. b. If IsDataDescriptor(current) is true, then
    // 6. b. i. If O is not undefined, convert the property named P of object O from a data property to an accessor property. Preserve the existing values of the converted property's [[Configurable]] and [[Enumerable]] attributes and set the rest of the property's attributes to their default values.
  // 6. c. Else,
    // 6. c. i. If O is not undefined, convert the property named P of object O from an accessor property to a data property. Preserve the existing values of the converted property's [[Configurable]] and [[Enumerable]] attributes and set the rest of the property's attributes to their default values.
// 7. Else if IsDataDescriptor(current) and IsDataDescriptor(Desc) are both true, then
  // 7. a. If current.[[Configurable]] is false and current.[[Writable]] is false, then
    // 7. a. i. If Desc.[[Writable]] is present and Desc.[[Writable]] is true, return false.
    // 7. a. ii. If Desc.[[Value]] is present and SameValue(Desc.[[Value]], current.[[Value]]) is false, return false.
    // 7. a. iii. Return true.
// 8. Else IsAccessorDescriptor(current) and IsAccessorDescriptor(Desc) are both true,
  // 8. a. If current.[[Configurable]] is false, then
    // 8. a. i. If Desc.[[Set]] is present and SameValue(Desc.[[Set]], current.[[Set]]) is false, return false.
    // 8. a. ii. If Desc.[[Get]] is present and SameValue(Desc.[[Get]], current.[[Get]]) is false, return false.
    // 8. a. iii. Return true.
// 9. If O is not undefined, then
  // 9. a. For each field of Desc that is present, set the corresponding attribute of the property named P of object O to the value of the field.
// 10. Return true.


// http://www.ecma-international.org/ecma-262/#sec-ordinary-object-internal-methods-and-internal-slots-hasproperty-p

// 1. Return ? OrdinaryHasProperty(O, P).


// http://www.ecma-international.org/ecma-262/#sec-ordinaryhasproperty

// 1. Assert: IsPropertyKey(P) is true.
// 2. Let hasOwn be ? O.[[GetOwnProperty]](P).
// 3. If hasOwn is not undefined, return true.
// 4. Let parent be ? O.[[GetPrototypeOf]]().
// 5. If parent is not null, then
  // 5. a. Return ? parent.[[HasProperty]](P).
// 6. Return false.


// http://www.ecma-international.org/ecma-262/#sec-ordinary-object-internal-methods-and-internal-slots-get-p-receiver

// 1. Return ? OrdinaryGet(O, P, Receiver).


// http://www.ecma-international.org/ecma-262/#sec-ordinaryget

// 1. Assert: IsPropertyKey(P) is true.
// 2. Let desc be ? O.[[GetOwnProperty]](P).
// 3. If desc is undefined, then
  // 3. a. Let parent be ? O.[[GetPrototypeOf]]().
  // 3. b. If parent is null, return undefined.
  // 3. c. Return ? parent.[[Get]](P, Receiver).
// 4. If IsDataDescriptor(desc) is true, return desc.[[Value]].
// 5. Assert: IsAccessorDescriptor(desc) is true.
// 6. Let getter be desc.[[Get]].
// 7. If getter is undefined, return undefined.
// 8. Return ? Call(getter, Receiver).


// http://www.ecma-international.org/ecma-262/#sec-ordinary-object-internal-methods-and-internal-slots-set-p-v-receiver

// 1. Return ? OrdinarySet(O, P, V, Receiver).


// http://www.ecma-international.org/ecma-262/#sec-ordinaryset

// 1. Assert: IsPropertyKey(P) is true.
// 2. Let ownDesc be ? O.[[GetOwnProperty]](P).
// 3. Return OrdinarySetWithOwnDescriptor(O, P, V, Receiver, ownDesc).


// http://www.ecma-international.org/ecma-262/#sec-ordinarysetwithowndescriptor

// 1. Assert: IsPropertyKey(P) is true.
// 2. If ownDesc is undefined, then
  // 2. a. Let parent be ? O.[[GetPrototypeOf]]().
  // 2. b. If parent is not null, then
    // 2. b. i. Return ? parent.[[Set]](P, V, Receiver).
  // 2. c. Else,
    // 2. c. i. Set ownDesc to the PropertyDescriptor { [[Value]]: undefined, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: true }.
// 3. If IsDataDescriptor(ownDesc) is true, then
  // 3. a. If ownDesc.[[Writable]] is false, return false.
  // 3. b. If Type(Receiver) is not Object, return false.
  // 3. c. Let existingDescriptor be ? Receiver.[[GetOwnProperty]](P).
  // 3. d. If existingDescriptor is not undefined, then
    // 3. d. i. If IsAccessorDescriptor(existingDescriptor) is true, return false.
    // 3. d. ii. If existingDescriptor.[[Writable]] is false, return false.
    // 3. d. iii. Let valueDesc be the PropertyDescriptor { [[Value]]: V }.
    // 3. d. iv. Return ? Receiver.[[DefineOwnProperty]](P, valueDesc).
  // 3. e. Else Receiver does not currently have a property P,
    // 3. e. i. Return ? CreateDataProperty(Receiver, P, V).
// 4. Assert: IsAccessorDescriptor(ownDesc) is true.
// 5. Let setter be ownDesc.[[Set]].
// 6. If setter is undefined, return false.
// 7. Perform ? Call(setter, Receiver, « V »).
// 8. Return true.


// http://www.ecma-international.org/ecma-262/#sec-ordinary-object-internal-methods-and-internal-slots-delete-p

// 1. Return ? OrdinaryDelete(O, P).


// http://www.ecma-international.org/ecma-262/#sec-ordinarydelete

// 1. Assert: IsPropertyKey(P) is true.
// 2. Let desc be ? O.[[GetOwnProperty]](P).
// 3. If desc is undefined, return true.
// 4. If desc.[[Configurable]] is true, then
  // 4. a. Remove the own property with name P from O.
  // 4. b. Return true.
// 5. Return false.


// http://www.ecma-international.org/ecma-262/#sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys

// 1. Return ! OrdinaryOwnPropertyKeys(O).


// http://www.ecma-international.org/ecma-262/#sec-ordinaryownpropertykeys

// 1. Let keys be a new empty List.
// 2. For each own property key P of O that is an array index, in ascending numeric index order, do
  // 2. a. Add P as the last element of keys.
// 3. For each own property key P of O that is a String but is not an array index, in ascending chronological order of property creation, do
  // 3. a. Add P as the last element of keys.
// 4. For each own property key P of O that is a Symbol, in ascending chronological order of property creation, do
  // 4. a. Add P as the last element of keys.
// 5. Return keys.


// http://www.ecma-international.org/ecma-262/#sec-objectcreate

// 1. If internalSlotsList is not present, set internalSlotsList to a new empty List.
// 2. Let obj be a newly created object with an internal slot for each name in internalSlotsList.
// 3. Set obj's essential internal methods to the default ordinary object definitions specified in 9.1.
// 4. Set obj.[[Prototype]] to proto.
// 5. Set obj.[[Extensible]] to true.
// 6. Return obj.


// http://www.ecma-international.org/ecma-262/#sec-ordinarycreatefromconstructor

// 1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object. The corresponding object must be an intrinsic that is intended to be used as the [[Prototype]] value of an object.
// 2. Let proto be ? GetPrototypeFromConstructor(constructor, intrinsicDefaultProto).
// 3. Return ObjectCreate(proto, internalSlotsList).


// http://www.ecma-international.org/ecma-262/#sec-getprototypefromconstructor

// 1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object. The corresponding object must be an intrinsic that is intended to be used as the [[Prototype]] value of an object.
// 2. Assert: IsCallable(constructor) is true.
// 3. Let proto be ? Get(constructor, "prototype").
// 4. If Type(proto) is not Object, then
  // 4. a. Let realm be ? GetFunctionRealm(constructor).
  // 4. b. Set proto to realm's intrinsic object named intrinsicDefaultProto.
// 5. Return proto.


// http://www.ecma-international.org/ecma-262/#sec-ecmascript-function-objects-call-thisargument-argumentslist

// 1. Assert: F is an ECMAScript function object.
// 2. If F.[[FunctionKind]] is "classConstructor", throw a TypeError exception.
// 3. Let callerContext be the running execution context.
// 4. Let calleeContext be PrepareForOrdinaryCall(F, undefined).
// 5. Assert: calleeContext is now the running execution context.
// 6. Perform OrdinaryCallBindThis(F, calleeContext, thisArgument).
// 7. Let result be OrdinaryCallEvaluateBody(F, argumentsList).
// 8. Remove calleeContext from the execution context stack and restore callerContext as the running execution context.
// 9. If result.[[Type]] is return, return NormalCompletion(result.[[Value]]).
// 10. ReturnIfAbrupt(result).
// 11. Return NormalCompletion(undefined).


// http://www.ecma-international.org/ecma-262/#sec-prepareforordinarycall

// 1. Assert: Type(newTarget) is Undefined or Object.
// 2. Let callerContext be the running execution context.
// 3. Let calleeContext be a new ECMAScript code execution context.
// 4. Set the Function of calleeContext to F.
// 5. Let calleeRealm be F.[[Realm]].
// 6. Set the Realm of calleeContext to calleeRealm.
// 7. Set the ScriptOrModule of calleeContext to F.[[ScriptOrModule]].
// 8. Let localEnv be NewFunctionEnvironment(F, newTarget).
// 9. Set the LexicalEnvironment of calleeContext to localEnv.
// 10. Set the VariableEnvironment of calleeContext to localEnv.
// 11. If callerContext is not already suspended, suspend callerContext.
// 12. Push calleeContext onto the execution context stack; calleeContext is now the running execution context.
// 13. NOTE: Any exception objects produced after this point are associated with calleeRealm.
// 14. Return calleeContext.


// http://www.ecma-international.org/ecma-262/#sec-ordinarycallbindthis

// 1. Let thisMode be F.[[ThisMode]].
// 2. If thisMode is lexical, return NormalCompletion(undefined).
// 3. Let calleeRealm be F.[[Realm]].
// 4. Let localEnv be the LexicalEnvironment of calleeContext.
// 5. If thisMode is strict, let thisValue be thisArgument.
// 6. Else,
  // 6. a. If thisArgument is undefined or null, then
    // 6. a. i. Let globalEnv be calleeRealm.[[GlobalEnv]].
    // 6. a. ii. Let globalEnvRec be globalEnv's EnvironmentRecord.
    // 6. a. iii. Assert: globalEnvRec is a global Environment Record.
    // 6. a. iv. Let thisValue be globalEnvRec.[[GlobalThisValue]].
  // 6. b. Else,
    // 6. b. i. Let thisValue be ! ToObject(thisArgument).
    // 6. b. ii. NOTE: ToObject produces wrapper objects using calleeRealm.
// 7. Let envRec be localEnv's EnvironmentRecord.
// 8. Assert: envRec is a function Environment Record.
// 9. Assert: The next step never returns an abrupt completion because envRec.[[ThisBindingStatus]] is not "initialized".
// 10. Return envRec.BindThisValue(thisValue).


// http://www.ecma-international.org/ecma-262/#sec-ordinarycallevaluatebody

// 1. Return the result of EvaluateBody of the parsed code that is F.[[ECMAScriptCode]] passing F and argumentsList as the arguments.


// http://www.ecma-international.org/ecma-262/#sec-ecmascript-function-objects-construct-argumentslist-newtarget

// 1. Assert: F is an ECMAScript function object.
// 2. Assert: Type(newTarget) is Object.
// 3. Let callerContext be the running execution context.
// 4. Let kind be F.[[ConstructorKind]].
// 5. If kind is "base", then
  // 5. a. Let thisArgument be ? OrdinaryCreateFromConstructor(newTarget, "%ObjectPrototype%").
// 6. Let calleeContext be PrepareForOrdinaryCall(F, newTarget).
// 7. Assert: calleeContext is now the running execution context.
// 8. If kind is "base", perform OrdinaryCallBindThis(F, calleeContext, thisArgument).
// 9. Let constructorEnv be the LexicalEnvironment of calleeContext.
// 10. Let envRec be constructorEnv's EnvironmentRecord.
// 11. Let result be OrdinaryCallEvaluateBody(F, argumentsList).
// 12. Remove calleeContext from the execution context stack and restore callerContext as the running execution context.
// 13. If result.[[Type]] is return, then
  // 13. a. If Type(result.[[Value]]) is Object, return NormalCompletion(result.[[Value]]).
  // 13. b. If kind is "base", return NormalCompletion(thisArgument).
  // 13. c. If result.[[Value]] is not undefined, throw a TypeError exception.
// 14. Else, ReturnIfAbrupt(result).
// 15. Return ? envRec.GetThisBinding().


// http://www.ecma-international.org/ecma-262/#sec-functionallocate

// 1. Assert: Type(functionPrototype) is Object.
// 2. Assert: functionKind is either "normal", "non-constructor", "generator", "async", or "async generator".
// 3. If functionKind is "normal", let needsConstruct be true.
// 4. Else, let needsConstruct be false.
// 5. If functionKind is "non-constructor", set functionKind to "normal".
// 6. Let F be a newly created ECMAScript function object with the internal slots listed in Table 27. All of those internal slots are initialized to undefined.
// 7. Set F's essential internal methods to the default ordinary object definitions specified in 9.1.
// 8. Set F.[[Call]] to the definition specified in 9.2.1.
// 9. If needsConstruct is true, then
  // 9. a. Set F.[[Construct]] to the definition specified in 9.2.2.
  // 9. b. Set F.[[ConstructorKind]] to "base".
// 10. Set F.[[Strict]] to strict.
// 11. Set F.[[FunctionKind]] to functionKind.
// 12. Set F.[[Prototype]] to functionPrototype.
// 13. Set F.[[Extensible]] to true.
// 14. Set F.[[Realm]] to the current Realm Record.
// 15. Return F.


// http://www.ecma-international.org/ecma-262/#sec-functioninitialize

// 1. Let len be the ExpectedArgumentCount of ParameterList.
// 2. Perform ! SetFunctionLength(F, len).
// 3. Let Strict be F.[[Strict]].
// 4. Set F.[[Environment]] to Scope.
// 5. Set F.[[FormalParameters]] to ParameterList.
// 6. Set F.[[ECMAScriptCode]] to Body.
// 7. Set F.[[ScriptOrModule]] to GetActiveScriptOrModule().
// 8. If kind is Arrow, set F.[[ThisMode]] to lexical.
// 9. Else if Strict is true, set F.[[ThisMode]] to strict.
// 10. Else, set F.[[ThisMode]] to global.
// 11. Return F.


// http://www.ecma-international.org/ecma-262/#sec-functioncreate

// 1. If prototype is not present, then
  // 1. a. Set prototype to the intrinsic object %FunctionPrototype%.
// 2. If kind is not Normal, let allocKind be "non-constructor".
// 3. Else, let allocKind be "normal".
// 4. Let F be FunctionAllocate(prototype, Strict, allocKind).
// 5. Return FunctionInitialize(F, kind, ParameterList, Body, Scope).


// http://www.ecma-international.org/ecma-262/#sec-generatorfunctioncreate

// 1. Let functionPrototype be the intrinsic object %Generator%.
// 2. Let F be FunctionAllocate(functionPrototype, Strict, "generator").
// 3. Return FunctionInitialize(F, kind, ParameterList, Body, Scope).


// http://www.ecma-international.org/ecma-262/#sec-asyncgeneratorfunctioncreate

// 1. Let functionPrototype be the intrinsic object %AsyncGenerator%.
// 2. Let F be ! FunctionAllocate(functionPrototype, Strict, "generator").
// 3. Return ! FunctionInitialize(F, kind, ParameterList, Body, Scope).


// http://www.ecma-international.org/ecma-262/#sec-async-functions-abstract-operations-async-function-create

// 1. Let functionPrototype be the intrinsic object %AsyncFunctionPrototype%.
// 2. Let F be ! FunctionAllocate(functionPrototype, Strict, "async").
// 3. Return ! FunctionInitialize(F, kind, parameters, body, Scope).


// http://www.ecma-international.org/ecma-262/#sec-addrestrictedfunctionproperties

// 1. Assert: realm.[[Intrinsics]].[[%ThrowTypeError%]] exists and has been initialized.
// 2. Let thrower be realm.[[Intrinsics]].[[%ThrowTypeError%]].
// 3. Perform ! DefinePropertyOrThrow(F, "caller", PropertyDescriptor { [[Get]]: thrower, [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: true }).
// 4. Return ! DefinePropertyOrThrow(F, "arguments", PropertyDescriptor { [[Get]]: thrower, [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: true }).


// http://www.ecma-international.org/ecma-262/#sec-%throwtypeerror%

// 1. Throw a TypeError exception.


// http://www.ecma-international.org/ecma-262/#sec-makeconstructor

// 1. Assert: F is an ECMAScript function object.
// 2. Assert: IsConstructor(F) is true.
// 3. Assert: F is an extensible object that does not have a prototype own property.
// 4. If writablePrototype is not present, set writablePrototype to true.
// 5. If prototype is not present, then
  // 5. a. Set prototype to ObjectCreate(%ObjectPrototype%).
  // 5. b. Perform ! DefinePropertyOrThrow(prototype, "constructor", PropertyDescriptor { [[Value]]: F, [[Writable]]: writablePrototype, [[Enumerable]]: false, [[Configurable]]: true }).
// 6. Perform ! DefinePropertyOrThrow(F, "prototype", PropertyDescriptor { [[Value]]: prototype, [[Writable]]: writablePrototype, [[Enumerable]]: false, [[Configurable]]: false }).
// 7. Return NormalCompletion(undefined).


// http://www.ecma-international.org/ecma-262/#sec-makeclassconstructor

// 1. Assert: F is an ECMAScript function object.
// 2. Assert: F.[[FunctionKind]] is "normal".
// 3. Set F.[[FunctionKind]] to "classConstructor".
// 4. Return NormalCompletion(undefined).


// http://www.ecma-international.org/ecma-262/#sec-makemethod

// 1. Assert: F is an ECMAScript function object.
// 2. Assert: Type(homeObject) is Object.
// 3. Set F.[[HomeObject]] to homeObject.
// 4. Return NormalCompletion(undefined).


// http://www.ecma-international.org/ecma-262/#sec-setfunctionname

// 1. Assert: F is an extensible object that does not have a name own property.
// 2. Assert: Type(name) is either Symbol or String.
// 3. Assert: If prefix is present, then Type(prefix) is String.
// 4. If Type(name) is Symbol, then
  // 4. a. Let description be name's [[Description]] value.
  // 4. b. If description is undefined, set name to the empty String.
  // 4. c. Else, set name to the string-concatenation of "[", description, and "]".
// 5. If prefix is present, then
  // 5. a. Set name to the string-concatenation of prefix, the code unit 0x0020 (SPACE), and name.
// 6. Return ! DefinePropertyOrThrow(F, "name", PropertyDescriptor { [[Value]]: name, [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }).


// http://www.ecma-international.org/ecma-262/#sec-setfunctionlength

// 1. Assert: F is an extensible object that does not have a "length" own property.
// 2. Assert: Type(length) is Number.
// 3. Assert: length ≥ 0 and ! ToInteger(length) is equal to length.
// 4. Return ! DefinePropertyOrThrow(F, "length", PropertyDescriptor { [[Value]]: length, [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }).


// http://www.ecma-international.org/ecma-262/#sec-functiondeclarationinstantiation

// 1. Let calleeContext be the running execution context.
// 2. Let env be the LexicalEnvironment of calleeContext.
// 3. Let envRec be env's EnvironmentRecord.
// 4. Let code be func.[[ECMAScriptCode]].
// 5. Let strict be func.[[Strict]].
// 6. Let formals be func.[[FormalParameters]].
// 7. Let parameterNames be the BoundNames of formals.
// 8. If parameterNames has any duplicate entries, let hasDuplicates be true. Otherwise, let hasDuplicates be false.
// 9. Let simpleParameterList be IsSimpleParameterList of formals.
// 10. Let hasParameterExpressions be ContainsExpression of formals.
// 11. Let varNames be the VarDeclaredNames of code.
// 12. Let varDeclarations be the VarScopedDeclarations of code.
// 13. Let lexicalNames be the LexicallyDeclaredNames of code.
// 14. Let functionNames be a new empty List.
// 15. Let functionsToInitialize be a new empty List.
// 16. For each d in varDeclarations, in reverse list order, do
  // 16. a. If d is neither a VariableDeclaration nor a ForBinding nor a BindingIdentifier, then
    // 16. a. i. Assert: d is either a FunctionDeclaration, a GeneratorDeclaration, an AsyncFunctionDeclaration, or an AsyncGeneratorDeclaration.
    // 16. a. ii. Let fn be the sole element of the BoundNames of d.
    // 16. a. iii. If fn is not an element of functionNames, then
      // 16. a. iii. 1. Insert fn as the first element of functionNames.
      // 16. a. iii. 2. NOTE: If there are multiple function declarations for the same name, the last declaration is used.
      // 16. a. iii. 3. Insert d as the first element of functionsToInitialize.
// 17. Let argumentsObjectNeeded be true.
// 18. If func.[[ThisMode]] is lexical, then
  // 18. a. NOTE: Arrow functions never have an arguments objects.
  // 18. b. Set argumentsObjectNeeded to false.
// 19. Else if "arguments" is an element of parameterNames, then
  // 19. a. Set argumentsObjectNeeded to false.
// 20. Else if hasParameterExpressions is false, then
  // 20. a. If "arguments" is an element of functionNames or if "arguments" is an element of lexicalNames, then
    // 20. a. i. Set argumentsObjectNeeded to false.
// 21. For each String paramName in parameterNames, do
  // 21. a. Let alreadyDeclared be envRec.HasBinding(paramName).
  // 21. b. NOTE: Early errors ensure that duplicate parameter names can only occur in non-strict functions that do not have parameter default values or rest parameters.
  // 21. c. If alreadyDeclared is false, then
    // 21. c. i. Perform ! envRec.CreateMutableBinding(paramName, false).
    // 21. c. ii. If hasDuplicates is true, then
      // 21. c. ii. 1. Perform ! envRec.InitializeBinding(paramName, undefined).
// 22. If argumentsObjectNeeded is true, then
  // 22. a. If strict is true or if simpleParameterList is false, then
    // 22. a. i. Let ao be CreateUnmappedArgumentsObject(argumentsList).
  // 22. b. Else,
    // 22. b. i. NOTE: mapped argument object is only provided for non-strict functions that don't have a rest parameter, any parameter default value initializers, or any destructured parameters.
    // 22. b. ii. Let ao be CreateMappedArgumentsObject(func, formals, argumentsList, envRec).
  // 22. c. If strict is true, then
    // 22. c. i. Perform ! envRec.CreateImmutableBinding("arguments", false).
  // 22. d. Else,
    // 22. d. i. Perform ! envRec.CreateMutableBinding("arguments", false).
  // 22. e. Call envRec.InitializeBinding("arguments", ao).
  // 22. f. Let parameterBindings be a new List of parameterNames with "arguments" appended.
// 23. Else,
  // 23. a. Let parameterBindings be parameterNames.
// 24. Let iteratorRecord be CreateListIteratorRecord(argumentsList).
// 25. If hasDuplicates is true, then
  // 25. a. Perform ? IteratorBindingInitialization for formals with iteratorRecord and undefined as arguments.
// 26. Else,
  // 26. a. Perform ? IteratorBindingInitialization for formals with iteratorRecord and env as arguments.
// 27. If hasParameterExpressions is false, then
  // 27. a. NOTE: Only a single lexical environment is needed for the parameters and top-level vars.
  // 27. b. Let instantiatedVarNames be a copy of the List parameterBindings.
  // 27. c. For each n in varNames, do
    // 27. c. i. If n is not an element of instantiatedVarNames, then
      // 27. c. i. 1. Append n to instantiatedVarNames.
      // 27. c. i. 2. Perform ! envRec.CreateMutableBinding(n, false).
      // 27. c. i. 3. Call envRec.InitializeBinding(n, undefined).
  // 27. d. Let varEnv be env.
  // 27. e. Let varEnvRec be envRec.
// 28. Else,
  // 28. a. NOTE: A separate Environment Record is needed to ensure that closures created by expressions in the formal parameter list do not have visibility of declarations in the function body.
  // 28. b. Let varEnv be NewDeclarativeEnvironment(env).
  // 28. c. Let varEnvRec be varEnv's EnvironmentRecord.
  // 28. d. Set the VariableEnvironment of calleeContext to varEnv.
  // 28. e. Let instantiatedVarNames be a new empty List.
  // 28. f. For each n in varNames, do
    // 28. f. i. If n is not an element of instantiatedVarNames, then
      // 28. f. i. 1. Append n to instantiatedVarNames.
      // 28. f. i. 2. Perform ! varEnvRec.CreateMutableBinding(n, false).
      // 28. f. i. 3. If n is not an element of parameterBindings or if n is an element of functionNames, let initialValue be undefined.
      // 28. f. i. 4. Else,
        // 28. f. i. 4. a. Let initialValue be ! envRec.GetBindingValue(n, false).
      // 28. f. i. 5. Call varEnvRec.InitializeBinding(n, initialValue).
      // 28. f. i. 6. NOTE: vars whose names are the same as a formal parameter, initially have the same value as the corresponding initialized parameter.
// 29. NOTE: Annex B.3.3.1 adds additional steps at this point.
// 30. If strict is false, then
  // 30. a. Let lexEnv be NewDeclarativeEnvironment(varEnv).
  // 30. b. NOTE: Non-strict functions use a separate lexical Environment Record for top-level lexical declarations so that a direct eval can determine whether any var scoped declarations introduced by the eval code conflict with pre-existing top-level lexically scoped declarations. This is not needed for strict functions because a strict direct eval always places all declarations into a new Environment Record.
// 31. Else, let lexEnv be varEnv.
// 32. Let lexEnvRec be lexEnv's EnvironmentRecord.
// 33. Set the LexicalEnvironment of calleeContext to lexEnv.
// 34. Let lexDeclarations be the LexicallyScopedDeclarations of code.
// 35. For each element d in lexDeclarations, do
  // 35. a. NOTE: A lexically declared name cannot be the same as a function/generator declaration, formal parameter, or a var name. Lexically declared names are only instantiated here but not initialized.
  // 35. b. For each element dn of the BoundNames of d, do
    // 35. b. i. If IsConstantDeclaration of d is true, then
      // 35. b. i. 1. Perform ! lexEnvRec.CreateImmutableBinding(dn, true).
    // 35. b. ii. Else,
      // 35. b. ii. 1. Perform ! lexEnvRec.CreateMutableBinding(dn, false).
// 36. For each Parse Node f in functionsToInitialize, do
  // 36. a. Let fn be the sole element of the BoundNames of f.
  // 36. b. Let fo be the result of performing InstantiateFunctionObject for f with argument lexEnv.
  // 36. c. Perform ! varEnvRec.SetMutableBinding(fn, fo, false).
// 37. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-built-in-function-objects-call-thisargument-argumentslist

// 1. Let callerContext be the running execution context.
// 2. If callerContext is not already suspended, suspend callerContext.
// 3. Let calleeContext be a new ECMAScript code execution context.
// 4. Set the Function of calleeContext to F.
// 5. Let calleeRealm be F.[[Realm]].
// 6. Set the Realm of calleeContext to calleeRealm.
// 7. Set the ScriptOrModule of calleeContext to F.[[ScriptOrModule]].
// 8. Perform any necessary implementation-defined initialization of calleeContext.
// 9. Push calleeContext onto the execution context stack; calleeContext is now the running execution context.
// 10. Let result be the Completion Record that is the result of evaluating F in an implementation-defined manner that conforms to the specification of F. thisArgument is the this value, argumentsList provides the named parameters, and the NewTarget value is undefined.
// 11. Remove calleeContext from the execution context stack and restore callerContext as the running execution context.
// 12. Return result.


// http://www.ecma-international.org/ecma-262/#sec-built-in-function-objects-construct-argumentslist-newtarget

// 1. Let result be the Completion Record that is the result of evaluating F in an implementation-defined manner that conforms to the specification of F. The this value is uninitialized, argumentsList provides the named parameters, and newTarget provides the NewTarget value.


// http://www.ecma-international.org/ecma-262/#sec-createbuiltinfunction

// 1. Assert: steps is either a set of algorithm steps or other definition of a function's behaviour provided in this specification.
// 2. If realm is not present, set realm to the current Realm Record.
// 3. Assert: realm is a Realm Record.
// 4. If prototype is not present, set prototype to realm.[[Intrinsics]].[[%FunctionPrototype%]].
// 5. Let func be a new built-in function object that when called performs the action described by steps. The new function object has internal slots whose names are the elements of internalSlotsList. The initial value of each of those internal slots is undefined.
// 6. Set func.[[Realm]] to realm.
// 7. Set func.[[Prototype]] to prototype.
// 8. Set func.[[Extensible]] to true.
// 9. Set func.[[ScriptOrModule]] to null.
// 10. Return func.


// http://www.ecma-international.org/ecma-262/#sec-bound-function-exotic-objects-call-thisargument-argumentslist

// 1. Let target be F.[[BoundTargetFunction]].
// 2. Let boundThis be F.[[BoundThis]].
// 3. Let boundArgs be F.[[BoundArguments]].
// 4. Let args be a new list containing the same values as the list boundArgs in the same order followed by the same values as the list argumentsList in the same order.
// 5. Return ? Call(target, boundThis, args).


// http://www.ecma-international.org/ecma-262/#sec-bound-function-exotic-objects-construct-argumentslist-newtarget

// 1. Let target be F.[[BoundTargetFunction]].
// 2. Assert: IsConstructor(target) is true.
// 3. Let boundArgs be F.[[BoundArguments]].
// 4. Let args be a new list containing the same values as the list boundArgs in the same order followed by the same values as the list argumentsList in the same order.
// 5. If SameValue(F, newTarget) is true, set newTarget to target.
// 6. Return ? Construct(target, args, newTarget).


// http://www.ecma-international.org/ecma-262/#sec-boundfunctioncreate

// 1. Assert: Type(targetFunction) is Object.
// 2. Let proto be ? targetFunction.[[GetPrototypeOf]]().
// 3. Let obj be a newly created object.
// 4. Set obj's essential internal methods to the default ordinary object definitions specified in 9.1.
// 5. Set obj.[[Call]] as described in 9.4.1.1.
// 6. If IsConstructor(targetFunction) is true, then
  // 6. a. Set obj.[[Construct]] as described in 9.4.1.2.
// 7. Set obj.[[Prototype]] to proto.
// 8. Set obj.[[Extensible]] to true.
// 9. Set obj.[[BoundTargetFunction]] to targetFunction.
// 10. Set obj.[[BoundThis]] to boundThis.
// 11. Set obj.[[BoundArguments]] to boundArgs.
// 12. Return obj.


// http://www.ecma-international.org/ecma-262/#sec-array-exotic-objects-defineownproperty-p-desc

// 1. Assert: IsPropertyKey(P) is true.
// 2. If P is "length", then
  // 2. a. Return ? ArraySetLength(A, Desc).
// 3. Else if P is an array index, then
  // 3. a. Let oldLenDesc be OrdinaryGetOwnProperty(A, "length").
  // 3. b. Assert: oldLenDesc will never be undefined or an accessor descriptor because Array objects are created with a length data property that cannot be deleted or reconfigured.
  // 3. c. Let oldLen be oldLenDesc.[[Value]].
  // 3. d. Let index be ! ToUint32(P).
  // 3. e. If index ≥ oldLen and oldLenDesc.[[Writable]] is false, return false.
  // 3. f. Let succeeded be ! OrdinaryDefineOwnProperty(A, P, Desc).
  // 3. g. If succeeded is false, return false.
  // 3. h. If index ≥ oldLen, then
    // 3. h. i. Set oldLenDesc.[[Value]] to index + 1.
    // 3. h. ii. Let succeeded be OrdinaryDefineOwnProperty(A, "length", oldLenDesc).
    // 3. h. iii. Assert: succeeded is true.
  // 3. i. Return true.
// 4. Return OrdinaryDefineOwnProperty(A, P, Desc).


// http://www.ecma-international.org/ecma-262/#sec-arraycreate

// 1. Assert: length is an integer Number ≥ 0.
// 2. If length is -0, set length to +0.
// 3. If length > 232 - 1, throw a RangeError exception.
// 4. If proto is not present, set proto to the intrinsic object %ArrayPrototype%.
// 5. Let A be a newly created Array exotic object.
// 6. Set A's essential internal methods except for [[DefineOwnProperty]] to the default ordinary object definitions specified in 9.1.
// 7. Set A.[[DefineOwnProperty]] as specified in 9.4.2.1.
// 8. Set A.[[Prototype]] to proto.
// 9. Set A.[[Extensible]] to true.
// 10. Perform ! OrdinaryDefineOwnProperty(A, "length", PropertyDescriptor { [[Value]]: length, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false }).
// 11. Return A.


// http://www.ecma-international.org/ecma-262/#sec-arrayspeciescreate

// 1. Assert: length is an integer Number ≥ 0.
// 2. If length is -0, set length to +0.
// 3. Let isArray be ? IsArray(originalArray).
// 4. If isArray is false, return ? ArrayCreate(length).
// 5. Let C be ? Get(originalArray, "constructor").
// 6. If IsConstructor(C) is true, then
  // 6. a. Let thisRealm be the current Realm Record.
  // 6. b. Let realmC be ? GetFunctionRealm(C).
  // 6. c. If thisRealm and realmC are not the same Realm Record, then
    // 6. c. i. If SameValue(C, realmC.[[Intrinsics]].[[%Array%]]) is true, set C to undefined.
// 7. If Type(C) is Object, then
  // 7. a. Set C to ? Get(C, @@species).
  // 7. b. If C is null, set C to undefined.
// 8. If C is undefined, return ? ArrayCreate(length).
// 9. If IsConstructor(C) is false, throw a TypeError exception.
// 10. Return ? Construct(C, « length »).


// http://www.ecma-international.org/ecma-262/#sec-arraysetlength

// 1. If Desc.[[Value]] is absent, then
  // 1. a. Return OrdinaryDefineOwnProperty(A, "length", Desc).
// 2. Let newLenDesc be a copy of Desc.
// 3. Let newLen be ? ToUint32(Desc.[[Value]]).
// 4. Let numberLen be ? ToNumber(Desc.[[Value]]).
// 5. If newLen ≠ numberLen, throw a RangeError exception.
// 6. Set newLenDesc.[[Value]] to newLen.
// 7. Let oldLenDesc be OrdinaryGetOwnProperty(A, "length").
// 8. Assert: oldLenDesc will never be undefined or an accessor descriptor because Array objects are created with a length data property that cannot be deleted or reconfigured.
// 9. Let oldLen be oldLenDesc.[[Value]].
// 10. If newLen ≥ oldLen, then
  // 10. a. Return OrdinaryDefineOwnProperty(A, "length", newLenDesc).
// 11. If oldLenDesc.[[Writable]] is false, return false.
// 12. If newLenDesc.[[Writable]] is absent or has the value true, let newWritable be true.
// 13. Else,
  // 13. a. Need to defer setting the [[Writable]] attribute to false in case any elements cannot be deleted.
  // 13. b. Let newWritable be false.
  // 13. c. Set newLenDesc.[[Writable]] to true.
// 14. Let succeeded be ! OrdinaryDefineOwnProperty(A, "length", newLenDesc).
// 15. If succeeded is false, return false.
// 16. Repeat, while newLen < oldLen,
  // 16. a. Decrease oldLen by 1.
  // 16. b. Let deleteSucceeded be ! A.[[Delete]](! ToString(oldLen)).
  // 16. c. If deleteSucceeded is false, then
    // 16. c. i. Set newLenDesc.[[Value]] to oldLen + 1.
    // 16. c. ii. If newWritable is false, set newLenDesc.[[Writable]] to false.
    // 16. c. iii. Perform ! OrdinaryDefineOwnProperty(A, "length", newLenDesc).
    // 16. c. iv. Return false.
// 17. If newWritable is false, then
  // 17. a. Return OrdinaryDefineOwnProperty(A, "length", PropertyDescriptor { [[Writable]]: false }). This call will always return true.
// 18. Return true.


// http://www.ecma-international.org/ecma-262/#sec-string-exotic-objects-getownproperty-p

// 1. Assert: IsPropertyKey(P) is true.
// 2. Let desc be OrdinaryGetOwnProperty(S, P).
// 3. If desc is not undefined, return desc.
// 4. Return ! StringGetOwnProperty(S, P).


// http://www.ecma-international.org/ecma-262/#sec-string-exotic-objects-defineownproperty-p-desc

// 1. Assert: IsPropertyKey(P) is true.
// 2. Let stringDesc be ! StringGetOwnProperty(S, P).
// 3. If stringDesc is not undefined, then
  // 3. a. Let extensible be S.[[Extensible]].
  // 3. b. Return ! IsCompatiblePropertyDescriptor(extensible, Desc, stringDesc).
// 4. Return ! OrdinaryDefineOwnProperty(S, P, Desc).


// http://www.ecma-international.org/ecma-262/#sec-string-exotic-objects-ownpropertykeys

// 1. Let keys be a new empty List.
// 2. Let str be O.[[StringData]].
// 3. Assert: Type(str) is String.
// 4. Let len be the length of str.
// 5. For each integer i starting with 0 such that i < len, in ascending order, do
  // 5. a. Add ! ToString(i) as the last element of keys.
// 6. For each own property key P of O such that P is an array index and ToInteger(P) ≥ len, in ascending numeric index order, do
  // 6. a. Add P as the last element of keys.
// 7. For each own property key P of O such that Type(P) is String and P is not an array index, in ascending chronological order of property creation, do
  // 7. a. Add P as the last element of keys.
// 8. For each own property key P of O such that Type(P) is Symbol, in ascending chronological order of property creation, do
  // 8. a. Add P as the last element of keys.
// 9. Return keys.


// http://www.ecma-international.org/ecma-262/#sec-stringcreate

// 1. Assert: Type(value) is String.
// 2. Let S be a newly created String exotic object.
// 3. Set S.[[StringData]] to value.
// 4. Set S's essential internal methods to the default ordinary object definitions specified in 9.1.
// 5. Set S.[[GetOwnProperty]] as specified in 9.4.3.1.
// 6. Set S.[[DefineOwnProperty]] as specified in 9.4.3.2.
// 7. Set S.[[OwnPropertyKeys]] as specified in 9.4.3.3.
// 8. Set S.[[Prototype]] to prototype.
// 9. Set S.[[Extensible]] to true.
// 10. Let length be the number of code unit elements in value.
// 11. Perform ! DefinePropertyOrThrow(S, "length", PropertyDescriptor { [[Value]]: length, [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }).
// 12. Return S.


// http://www.ecma-international.org/ecma-262/#sec-stringgetownproperty

// 1. Assert: S is an Object that has a [[StringData]] internal slot.
// 2. Assert: IsPropertyKey(P) is true.
// 3. If Type(P) is not String, return undefined.
// 4. Let index be ! CanonicalNumericIndexString(P).
// 5. If index is undefined, return undefined.
// 6. If IsInteger(index) is false, return undefined.
// 7. If index = -0, return undefined.
// 8. Let str be S.[[StringData]].
// 9. Assert: Type(str) is String.
// 10. Let len be the length of str.
// 11. If index < 0 or len ≤ index, return undefined.
// 12. Let resultStr be the String value of length 1, containing one code unit from str, specifically the code unit at index index.
// 13. Return a PropertyDescriptor { [[Value]]: resultStr, [[Writable]]: false, [[Enumerable]]: true, [[Configurable]]: false }.


// http://www.ecma-international.org/ecma-262/#sec-arguments-exotic-objects-getownproperty-p

// 1. Let args be the arguments object.
// 2. Let desc be OrdinaryGetOwnProperty(args, P).
// 3. If desc is undefined, return desc.
// 4. Let map be args.[[ParameterMap]].
// 5. Let isMapped be ! HasOwnProperty(map, P).
// 6. If isMapped is true, then
  // 6. a. Set desc.[[Value]] to Get(map, P).
// 7. Return desc.


// http://www.ecma-international.org/ecma-262/#sec-arguments-exotic-objects-defineownproperty-p-desc

// 1. Let args be the arguments object.
// 2. Let map be args.[[ParameterMap]].
// 3. Let isMapped be HasOwnProperty(map, P).
// 4. Let newArgDesc be Desc.
// 5. If isMapped is true and IsDataDescriptor(Desc) is true, then
  // 5. a. If Desc.[[Value]] is not present and Desc.[[Writable]] is present and its value is false, then
    // 5. a. i. Set newArgDesc to a copy of Desc.
    // 5. a. ii. Set newArgDesc.[[Value]] to Get(map, P).
// 6. Let allowed be ? OrdinaryDefineOwnProperty(args, P, newArgDesc).
// 7. If allowed is false, return false.
// 8. If isMapped is true, then
  // 8. a. If IsAccessorDescriptor(Desc) is true, then
    // 8. a. i. Call map.[[Delete]](P).
  // 8. b. Else,
    // 8. b. i. If Desc.[[Value]] is present, then
      // 8. b. i. 1. Let setStatus be Set(map, P, Desc.[[Value]], false).
      // 8. b. i. 2. Assert: setStatus is true because formal parameters mapped by argument objects are always writable.
    // 8. b. ii. If Desc.[[Writable]] is present and its value is false, then
      // 8. b. ii. 1. Call map.[[Delete]](P).
// 9. Return true.


// http://www.ecma-international.org/ecma-262/#sec-arguments-exotic-objects-get-p-receiver

// 1. Let args be the arguments object.
// 2. Let map be args.[[ParameterMap]].
// 3. Let isMapped be ! HasOwnProperty(map, P).
// 4. If isMapped is false, then
  // 4. a. Return ? OrdinaryGet(args, P, Receiver).
// 5. Else map contains a formal parameter mapping for P,
  // 5. a. Return Get(map, P).


// http://www.ecma-international.org/ecma-262/#sec-arguments-exotic-objects-set-p-v-receiver

// 1. Let args be the arguments object.
// 2. If SameValue(args, Receiver) is false, then
  // 2. a. Let isMapped be false.
// 3. Else,
  // 3. a. Let map be args.[[ParameterMap]].
  // 3. b. Let isMapped be ! HasOwnProperty(map, P).
// 4. If isMapped is true, then
  // 4. a. Let setStatus be Set(map, P, V, false).
  // 4. b. Assert: setStatus is true because formal parameters mapped by argument objects are always writable.
// 5. Return ? OrdinarySet(args, P, V, Receiver).


// http://www.ecma-international.org/ecma-262/#sec-arguments-exotic-objects-delete-p

// 1. Let args be the arguments object.
// 2. Let map be args.[[ParameterMap]].
// 3. Let isMapped be ! HasOwnProperty(map, P).
// 4. Let result be ? OrdinaryDelete(args, P).
// 5. If result is true and isMapped is true, then
  // 5. a. Call map.[[Delete]](P).
// 6. Return result.


// http://www.ecma-international.org/ecma-262/#sec-createunmappedargumentsobject

// 1. Let len be the number of elements in argumentsList.
// 2. Let obj be ObjectCreate(%ObjectPrototype%, « [[ParameterMap]] »).
// 3. Set obj.[[ParameterMap]] to undefined.
// 4. Perform DefinePropertyOrThrow(obj, "length", PropertyDescriptor { [[Value]]: len, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true }).
// 5. Let index be 0.
// 6. Repeat, while index < len,
  // 6. a. Let val be argumentsList[index].
  // 6. b. Perform CreateDataProperty(obj, ! ToString(index), val).
  // 6. c. Increase index by 1.
// 7. Perform ! DefinePropertyOrThrow(obj, @@iterator, PropertyDescriptor { [[Value]]: %ArrayProto_values%, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true }).
// 8. Perform ! DefinePropertyOrThrow(obj, "callee", PropertyDescriptor { [[Get]]: %ThrowTypeError%, [[Set]]: %ThrowTypeError%, [[Enumerable]]: false, [[Configurable]]: false }).
// 9. Return obj.


// http://www.ecma-international.org/ecma-262/#sec-createmappedargumentsobject

// 1. Assert: formals does not contain a rest parameter, any binding patterns, or any initializers. It may contain duplicate identifiers.
// 2. Let len be the number of elements in argumentsList.
// 3. Let obj be a newly created arguments exotic object with a [[ParameterMap]] internal slot.
// 4. Set obj.[[GetOwnProperty]] as specified in 9.4.4.1.
// 5. Set obj.[[DefineOwnProperty]] as specified in 9.4.4.2.
// 6. Set obj.[[Get]] as specified in 9.4.4.3.
// 7. Set obj.[[Set]] as specified in 9.4.4.4.
// 8. Set obj.[[Delete]] as specified in 9.4.4.5.
// 9. Set the remainder of obj's essential internal methods to the default ordinary object definitions specified in 9.1.
// 10. Set obj.[[Prototype]] to %ObjectPrototype%.
// 11. Set obj.[[Extensible]] to true.
// 12. Let map be ObjectCreate(null).
// 13. Set obj.[[ParameterMap]] to map.
// 14. Let parameterNames be the BoundNames of formals.
// 15. Let numberOfParameters be the number of elements in parameterNames.
// 16. Let index be 0.
// 17. Repeat, while index < len,
  // 17. a. Let val be argumentsList[index].
  // 17. b. Perform CreateDataProperty(obj, ! ToString(index), val).
  // 17. c. Increase index by 1.
// 18. Perform DefinePropertyOrThrow(obj, "length", PropertyDescriptor { [[Value]]: len, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true }).
// 19. Let mappedNames be a new empty List.
// 20. Let index be numberOfParameters - 1.
// 21. Repeat, while index ≥ 0,
  // 21. a. Let name be parameterNames[index].
  // 21. b. If name is not an element of mappedNames, then
    // 21. b. i. Add name as an element of the list mappedNames.
    // 21. b. ii. If index < len, then
      // 21. b. ii. 1. Let g be MakeArgGetter(name, env).
      // 21. b. ii. 2. Let p be MakeArgSetter(name, env).
      // 21. b. ii. 3. Perform map.[[DefineOwnProperty]](! ToString(index), PropertyDescriptor { [[Set]]: p, [[Get]]: g, [[Enumerable]]: false, [[Configurable]]: true }).
  // 21. c. Decrease index by 1.
// 22. Perform ! DefinePropertyOrThrow(obj, @@iterator, PropertyDescriptor { [[Value]]: %ArrayProto_values%, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true }).
// 23. Perform ! DefinePropertyOrThrow(obj, "callee", PropertyDescriptor { [[Value]]: func, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true }).
// 24. Return obj.


// http://www.ecma-international.org/ecma-262/#sec-makearggetter

// 1. Let steps be the steps of an ArgGetter function as specified below.
// 2. Let getter be CreateBuiltinFunction(steps, « [[Name]], [[Env]] »).
// 3. Set getter.[[Name]] to name.
// 4. Set getter.[[Env]] to env.
// 5. Return getter.

// 1. Let f be the active function object.
// 2. Let name be f.[[Name]].
// 3. Let env be f.[[Env]].
// 4. Return env.GetBindingValue(name, false).


// http://www.ecma-international.org/ecma-262/#sec-makeargsetter

// 1. Let steps be the steps of an ArgSetter function as specified below.
// 2. Let setter be CreateBuiltinFunction(steps, « [[Name]], [[Env]] »).
// 3. Set setter.[[Name]] to name.
// 4. Set setter.[[Env]] to env.
// 5. Return setter.

// 1. Let f be the active function object.
// 2. Let name be f.[[Name]].
// 3. Let env be f.[[Env]].
// 4. Return env.SetMutableBinding(name, value, false).


// http://www.ecma-international.org/ecma-262/#sec-integer-indexed-exotic-objects-getownproperty-p

// 1. Assert: IsPropertyKey(P) is true.
// 2. Assert: O is an Object that has a [[ViewedArrayBuffer]] internal slot.
// 3. If Type(P) is String, then
  // 3. a. Let numericIndex be ! CanonicalNumericIndexString(P).
  // 3. b. If numericIndex is not undefined, then
    // 3. b. i. Let value be ? IntegerIndexedElementGet(O, numericIndex).
    // 3. b. ii. If value is undefined, return undefined.
    // 3. b. iii. Return a PropertyDescriptor { [[Value]]: value, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: false }.
// 4. Return OrdinaryGetOwnProperty(O, P).


// http://www.ecma-international.org/ecma-262/#sec-integer-indexed-exotic-objects-hasproperty-p

// 1. Assert: IsPropertyKey(P) is true.
// 2. Assert: O is an Object that has a [[ViewedArrayBuffer]] internal slot.
// 3. If Type(P) is String, then
  // 3. a. Let numericIndex be ! CanonicalNumericIndexString(P).
  // 3. b. If numericIndex is not undefined, then
    // 3. b. i. Let buffer be O.[[ViewedArrayBuffer]].
    // 3. b. ii. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
    // 3. b. iii. If IsInteger(numericIndex) is false, return false.
    // 3. b. iv. If numericIndex = -0, return false.
    // 3. b. v. If numericIndex < 0, return false.
    // 3. b. vi. If numericIndex ≥ O.[[ArrayLength]], return false.
    // 3. b. vii. Return true.
// 4. Return ? OrdinaryHasProperty(O, P).


// http://www.ecma-international.org/ecma-262/#sec-integer-indexed-exotic-objects-defineownproperty-p-desc

// 1. Assert: IsPropertyKey(P) is true.
// 2. Assert: O is an Object that has a [[ViewedArrayBuffer]] internal slot.
// 3. If Type(P) is String, then
  // 3. a. Let numericIndex be ! CanonicalNumericIndexString(P).
  // 3. b. If numericIndex is not undefined, then
    // 3. b. i. If IsInteger(numericIndex) is false, return false.
    // 3. b. ii. If numericIndex = -0, return false.
    // 3. b. iii. If numericIndex < 0, return false.
    // 3. b. iv. Let length be O.[[ArrayLength]].
    // 3. b. v. If numericIndex ≥ length, return false.
    // 3. b. vi. If IsAccessorDescriptor(Desc) is true, return false.
    // 3. b. vii. If Desc has a [[Configurable]] field and if Desc.[[Configurable]] is true, return false.
    // 3. b. viii. If Desc has an [[Enumerable]] field and if Desc.[[Enumerable]] is false, return false.
    // 3. b. ix. If Desc has a [[Writable]] field and if Desc.[[Writable]] is false, return false.
    // 3. b. x. If Desc has a [[Value]] field, then
      // 3. b. x. 1. Let value be Desc.[[Value]].
      // 3. b. x. 2. Return ? IntegerIndexedElementSet(O, numericIndex, value).
    // 3. b. undefined. Return true.
// 4. Return ! OrdinaryDefineOwnProperty(O, P, Desc).


// http://www.ecma-international.org/ecma-262/#sec-integer-indexed-exotic-objects-get-p-receiver

// 1. Assert: IsPropertyKey(P) is true.
// 2. If Type(P) is String, then
  // 2. a. Let numericIndex be ! CanonicalNumericIndexString(P).
  // 2. b. If numericIndex is not undefined, then
    // 2. b. i. Return ? IntegerIndexedElementGet(O, numericIndex).
// 3. Return ? OrdinaryGet(O, P, Receiver).


// http://www.ecma-international.org/ecma-262/#sec-integer-indexed-exotic-objects-set-p-v-receiver

// 1. Assert: IsPropertyKey(P) is true.
// 2. If Type(P) is String, then
  // 2. a. Let numericIndex be ! CanonicalNumericIndexString(P).
  // 2. b. If numericIndex is not undefined, then
    // 2. b. i. Return ? IntegerIndexedElementSet(O, numericIndex, V).
// 3. Return ? OrdinarySet(O, P, V, Receiver).


// http://www.ecma-international.org/ecma-262/#sec-integer-indexed-exotic-objects-ownpropertykeys

// 1. Let keys be a new empty List.
// 2. Assert: O is an Object that has [[ViewedArrayBuffer]], [[ArrayLength]], [[ByteOffset]], and [[TypedArrayName]] internal slots.
// 3. Let len be O.[[ArrayLength]].
// 4. For each integer i starting with 0 such that i < len, in ascending order, do
  // 4. a. Add ! ToString(i) as the last element of keys.
// 5. For each own property key P of O such that Type(P) is String and P is not an integer index, in ascending chronological order of property creation, do
  // 5. a. Add P as the last element of keys.
// 6. For each own property key P of O such that Type(P) is Symbol, in ascending chronological order of property creation, do
  // 6. a. Add P as the last element of keys.
// 7. Return keys.


// http://www.ecma-international.org/ecma-262/#sec-integerindexedobjectcreate

// 1. Assert: internalSlotsList contains the names [[ViewedArrayBuffer]], [[ArrayLength]], [[ByteOffset]], and [[TypedArrayName]].
// 2. Let A be a newly created object with an internal slot for each name in internalSlotsList.
// 3. Set A's essential internal methods to the default ordinary object definitions specified in 9.1.
// 4. Set A.[[GetOwnProperty]] as specified in 9.4.5.1.
// 5. Set A.[[HasProperty]] as specified in 9.4.5.2.
// 6. Set A.[[DefineOwnProperty]] as specified in 9.4.5.3.
// 7. Set A.[[Get]] as specified in 9.4.5.4.
// 8. Set A.[[Set]] as specified in 9.4.5.5.
// 9. Set A.[[OwnPropertyKeys]] as specified in 9.4.5.6.
// 10. Set A.[[Prototype]] to prototype.
// 11. Set A.[[Extensible]] to true.
// 12. Return A.


// http://www.ecma-international.org/ecma-262/#sec-integerindexedelementget

// 1. Assert: Type(index) is Number.
// 2. Assert: O is an Object that has [[ViewedArrayBuffer]], [[ArrayLength]], [[ByteOffset]], and [[TypedArrayName]] internal slots.
// 3. Let buffer be O.[[ViewedArrayBuffer]].
// 4. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
// 5. If IsInteger(index) is false, return undefined.
// 6. If index = -0, return undefined.
// 7. Let length be O.[[ArrayLength]].
// 8. If index < 0 or index ≥ length, return undefined.
// 9. Let offset be O.[[ByteOffset]].
// 10. Let arrayTypeName be the String value of O.[[TypedArrayName]].
// 11. Let elementSize be the Number value of the Element Size value specified in Table 59 for arrayTypeName.
// 12. Let indexedPosition be (index × elementSize) + offset.
// 13. Let elementType be the String value of the Element Type value in Table 59 for arrayTypeName.
// 14. Return GetValueFromBuffer(buffer, indexedPosition, elementType, true, "Unordered").


// http://www.ecma-international.org/ecma-262/#sec-integerindexedelementset

// 1. Assert: Type(index) is Number.
// 2. Assert: O is an Object that has [[ViewedArrayBuffer]], [[ArrayLength]], [[ByteOffset]], and [[TypedArrayName]] internal slots.
// 3. Let numValue be ? ToNumber(value).
// 4. Let buffer be O.[[ViewedArrayBuffer]].
// 5. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
// 6. If IsInteger(index) is false, return false.
// 7. If index = -0, return false.
// 8. Let length be O.[[ArrayLength]].
// 9. If index < 0 or index ≥ length, return false.
// 10. Let offset be O.[[ByteOffset]].
// 11. Let arrayTypeName be the String value of O.[[TypedArrayName]].
// 12. Let elementSize be the Number value of the Element Size value specified in Table 59 for arrayTypeName.
// 13. Let indexedPosition be (index × elementSize) + offset.
// 14. Let elementType be the String value of the Element Type value in Table 59 for arrayTypeName.
// 15. Perform SetValueInBuffer(buffer, indexedPosition, elementType, numValue, true, "Unordered").
// 16. Return true.


// http://www.ecma-international.org/ecma-262/#sec-module-namespace-exotic-objects-setprototypeof-v

// 1. Return ? SetImmutablePrototype(O, V).


// http://www.ecma-international.org/ecma-262/#sec-module-namespace-exotic-objects-isextensible

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-module-namespace-exotic-objects-preventextensions

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-module-namespace-exotic-objects-getownproperty-p

// 1. If Type(P) is Symbol, return OrdinaryGetOwnProperty(O, P).
// 2. Let exports be O.[[Exports]].
// 3. If P is not an element of exports, return undefined.
// 4. Let value be ? O.[[Get]](P, O).
// 5. Return PropertyDescriptor { [[Value]]: value, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: false }.


// http://www.ecma-international.org/ecma-262/#sec-module-namespace-exotic-objects-defineownproperty-p-desc

// 1. If Type(P) is Symbol, return OrdinaryDefineOwnProperty(O, P, Desc).
// 2. Let current be ? O.[[GetOwnProperty]](P).
// 3. If current is undefined, return false.
// 4. If IsAccessorDescriptor(Desc) is true, return false.
// 5. If Desc.[[Writable]] is present and has value false, return false.
// 6. If Desc.[[Enumerable]] is present and has value false, return false.
// 7. If Desc.[[Configurable]] is present and has value true, return false.
// 8. If Desc.[[Value]] is present, return SameValue(Desc.[[Value]], current.[[Value]]).
// 9. Return true.


// http://www.ecma-international.org/ecma-262/#sec-module-namespace-exotic-objects-hasproperty-p

// 1. If Type(P) is Symbol, return OrdinaryHasProperty(O, P).
// 2. Let exports be O.[[Exports]].
// 3. If P is an element of exports, return true.
// 4. Return false.


// http://www.ecma-international.org/ecma-262/#sec-module-namespace-exotic-objects-get-p-receiver

// 1. Assert: IsPropertyKey(P) is true.
// 2. If Type(P) is Symbol, then
  // 2. a. Return ? OrdinaryGet(O, P, Receiver).
// 3. Let exports be O.[[Exports]].
// 4. If P is not an element of exports, return undefined.
// 5. Let m be O.[[Module]].
// 6. Let binding be ! m.ResolveExport(P, « »).
// 7. Assert: binding is a ResolvedBinding Record.
// 8. Let targetModule be binding.[[Module]].
// 9. Assert: targetModule is not undefined.
// 10. Let targetEnv be targetModule.[[Environment]].
// 11. If targetEnv is undefined, throw a ReferenceError exception.
// 12. Let targetEnvRec be targetEnv's EnvironmentRecord.
// 13. Return ? targetEnvRec.GetBindingValue(binding.[[BindingName]], true).


// http://www.ecma-international.org/ecma-262/#sec-module-namespace-exotic-objects-set-p-v-receiver

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-module-namespace-exotic-objects-delete-p

// 1. Assert: IsPropertyKey(P) is true.
// 2. If Type(P) is Symbol, then
  // 2. a. Return ? OrdinaryDelete(O, P).
// 3. Let exports be O.[[Exports]].
// 4. If P is an element of exports, return false.
// 5. Return true.


// http://www.ecma-international.org/ecma-262/#sec-module-namespace-exotic-objects-ownpropertykeys

// 1. Let exports be a copy of O.[[Exports]].
// 2. Let symbolKeys be ! OrdinaryOwnPropertyKeys(O).
// 3. Append all the entries of symbolKeys to the end of exports.
// 4. Return exports.


// http://www.ecma-international.org/ecma-262/#sec-modulenamespacecreate

// 1. Assert: module is a Module Record.
// 2. Assert: module.[[Namespace]] is undefined.
// 3. Assert: exports is a List of String values.
// 4. Let M be a newly created object.
// 5. Set M's essential internal methods to the definitions specified in 9.4.6.
// 6. Set M.[[Module]] to module.
// 7. Let sortedExports be a new List containing the same values as the list exports where the values are ordered as if an Array of the same values had been sorted using Array.prototype.sort using undefined as comparefn.
// 8. Set M.[[Exports]] to sortedExports.
// 9. Create own properties of M corresponding to the definitions in 26.3.
// 10. Set module.[[Namespace]] to M.
// 11. Return M.


// http://www.ecma-international.org/ecma-262/#sec-immutable-prototype-exotic-objects-setprototypeof-v

// 1. Return ? SetImmutablePrototype(O, V).


// http://www.ecma-international.org/ecma-262/#sec-set-immutable-prototype

// 1. Assert: Either Type(V) is Object or Type(V) is Null.
// 2. Let current be ? O.[[GetPrototypeOf]]().
// 3. If SameValue(V, current) is true, return true.
// 4. Return false.


// http://www.ecma-international.org/ecma-262/#sec-proxy-object-internal-methods-and-internal-slots-getprototypeof

// 1. Let handler be O.[[ProxyHandler]].
// 2. If handler is null, throw a TypeError exception.
// 3. Assert: Type(handler) is Object.
// 4. Let target be O.[[ProxyTarget]].
// 5. Let trap be ? GetMethod(handler, "getPrototypeOf").
// 6. If trap is undefined, then
  // 6. a. Return ? target.[[GetPrototypeOf]]().
// 7. Let handlerProto be ? Call(trap, handler, « target »).
// 8. If Type(handlerProto) is neither Object nor Null, throw a TypeError exception.
// 9. Let extensibleTarget be ? IsExtensible(target).
// 10. If extensibleTarget is true, return handlerProto.
// 11. Let targetProto be ? target.[[GetPrototypeOf]]().
// 12. If SameValue(handlerProto, targetProto) is false, throw a TypeError exception.
// 13. Return handlerProto.


// http://www.ecma-international.org/ecma-262/#sec-proxy-object-internal-methods-and-internal-slots-setprototypeof-v

// 1. Assert: Either Type(V) is Object or Type(V) is Null.
// 2. Let handler be O.[[ProxyHandler]].
// 3. If handler is null, throw a TypeError exception.
// 4. Assert: Type(handler) is Object.
// 5. Let target be O.[[ProxyTarget]].
// 6. Let trap be ? GetMethod(handler, "setPrototypeOf").
// 7. If trap is undefined, then
  // 7. a. Return ? target.[[SetPrototypeOf]](V).
// 8. Let booleanTrapResult be ToBoolean(? Call(trap, handler, « target, V »)).
// 9. If booleanTrapResult is false, return false.
// 10. Let extensibleTarget be ? IsExtensible(target).
// 11. If extensibleTarget is true, return true.
// 12. Let targetProto be ? target.[[GetPrototypeOf]]().
// 13. If SameValue(V, targetProto) is false, throw a TypeError exception.
// 14. Return true.


// http://www.ecma-international.org/ecma-262/#sec-proxy-object-internal-methods-and-internal-slots-isextensible

// 1. Let handler be O.[[ProxyHandler]].
// 2. If handler is null, throw a TypeError exception.
// 3. Assert: Type(handler) is Object.
// 4. Let target be O.[[ProxyTarget]].
// 5. Let trap be ? GetMethod(handler, "isExtensible").
// 6. If trap is undefined, then
  // 6. a. Return ? target.[[IsExtensible]]().
// 7. Let booleanTrapResult be ToBoolean(? Call(trap, handler, « target »)).
// 8. Let targetResult be ? target.[[IsExtensible]]().
// 9. If SameValue(booleanTrapResult, targetResult) is false, throw a TypeError exception.
// 10. Return booleanTrapResult.


// http://www.ecma-international.org/ecma-262/#sec-proxy-object-internal-methods-and-internal-slots-preventextensions

// 1. Let handler be O.[[ProxyHandler]].
// 2. If handler is null, throw a TypeError exception.
// 3. Assert: Type(handler) is Object.
// 4. Let target be O.[[ProxyTarget]].
// 5. Let trap be ? GetMethod(handler, "preventExtensions").
// 6. If trap is undefined, then
  // 6. a. Return ? target.[[PreventExtensions]]().
// 7. Let booleanTrapResult be ToBoolean(? Call(trap, handler, « target »)).
// 8. If booleanTrapResult is true, then
  // 8. a. Let targetIsExtensible be ? target.[[IsExtensible]]().
  // 8. b. If targetIsExtensible is true, throw a TypeError exception.
// 9. Return booleanTrapResult.


// http://www.ecma-international.org/ecma-262/#sec-proxy-object-internal-methods-and-internal-slots-getownproperty-p

// 1. Assert: IsPropertyKey(P) is true.
// 2. Let handler be O.[[ProxyHandler]].
// 3. If handler is null, throw a TypeError exception.
// 4. Assert: Type(handler) is Object.
// 5. Let target be O.[[ProxyTarget]].
// 6. Let trap be ? GetMethod(handler, "getOwnPropertyDescriptor").
// 7. If trap is undefined, then
  // 7. a. Return ? target.[[GetOwnProperty]](P).
// 8. Let trapResultObj be ? Call(trap, handler, « target, P »).
// 9. If Type(trapResultObj) is neither Object nor Undefined, throw a TypeError exception.
// 10. Let targetDesc be ? target.[[GetOwnProperty]](P).
// 11. If trapResultObj is undefined, then
  // 11. a. If targetDesc is undefined, return undefined.
  // 11. b. If targetDesc.[[Configurable]] is false, throw a TypeError exception.
  // 11. c. Let extensibleTarget be ? IsExtensible(target).
  // 11. d. If extensibleTarget is false, throw a TypeError exception.
  // 11. e. Return undefined.
// 12. Let extensibleTarget be ? IsExtensible(target).
// 13. Let resultDesc be ? ToPropertyDescriptor(trapResultObj).
// 14. Call CompletePropertyDescriptor(resultDesc).
// 15. Let valid be IsCompatiblePropertyDescriptor(extensibleTarget, resultDesc, targetDesc).
// 16. If valid is false, throw a TypeError exception.
// 17. If resultDesc.[[Configurable]] is false, then
  // 17. a. If targetDesc is undefined or targetDesc.[[Configurable]] is true, then
    // 17. a. i. Throw a TypeError exception.
// 18. Return resultDesc.


// http://www.ecma-international.org/ecma-262/#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc

// 1. Assert: IsPropertyKey(P) is true.
// 2. Let handler be O.[[ProxyHandler]].
// 3. If handler is null, throw a TypeError exception.
// 4. Assert: Type(handler) is Object.
// 5. Let target be O.[[ProxyTarget]].
// 6. Let trap be ? GetMethod(handler, "defineProperty").
// 7. If trap is undefined, then
  // 7. a. Return ? target.[[DefineOwnProperty]](P, Desc).
// 8. Let descObj be FromPropertyDescriptor(Desc).
// 9. Let booleanTrapResult be ToBoolean(? Call(trap, handler, « target, P, descObj »)).
// 10. If booleanTrapResult is false, return false.
// 11. Let targetDesc be ? target.[[GetOwnProperty]](P).
// 12. Let extensibleTarget be ? IsExtensible(target).
// 13. If Desc has a [[Configurable]] field and if Desc.[[Configurable]] is false, then
  // 13. a. Let settingConfigFalse be true.
// 14. Else, let settingConfigFalse be false.
// 15. If targetDesc is undefined, then
  // 15. a. If extensibleTarget is false, throw a TypeError exception.
  // 15. b. If settingConfigFalse is true, throw a TypeError exception.
// 16. Else targetDesc is not undefined,
  // 16. a. If IsCompatiblePropertyDescriptor(extensibleTarget, Desc, targetDesc) is false, throw a TypeError exception.
  // 16. b. If settingConfigFalse is true and targetDesc.[[Configurable]] is true, throw a TypeError exception.
// 17. Return true.


// http://www.ecma-international.org/ecma-262/#sec-proxy-object-internal-methods-and-internal-slots-hasproperty-p

// 1. Assert: IsPropertyKey(P) is true.
// 2. Let handler be O.[[ProxyHandler]].
// 3. If handler is null, throw a TypeError exception.
// 4. Assert: Type(handler) is Object.
// 5. Let target be O.[[ProxyTarget]].
// 6. Let trap be ? GetMethod(handler, "has").
// 7. If trap is undefined, then
  // 7. a. Return ? target.[[HasProperty]](P).
// 8. Let booleanTrapResult be ToBoolean(? Call(trap, handler, « target, P »)).
// 9. If booleanTrapResult is false, then
  // 9. a. Let targetDesc be ? target.[[GetOwnProperty]](P).
  // 9. b. If targetDesc is not undefined, then
    // 9. b. i. If targetDesc.[[Configurable]] is false, throw a TypeError exception.
    // 9. b. ii. Let extensibleTarget be ? IsExtensible(target).
    // 9. b. iii. If extensibleTarget is false, throw a TypeError exception.
// 10. Return booleanTrapResult.


// http://www.ecma-international.org/ecma-262/#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver

// 1. Assert: IsPropertyKey(P) is true.
// 2. Let handler be O.[[ProxyHandler]].
// 3. If handler is null, throw a TypeError exception.
// 4. Assert: Type(handler) is Object.
// 5. Let target be O.[[ProxyTarget]].
// 6. Let trap be ? GetMethod(handler, "get").
// 7. If trap is undefined, then
  // 7. a. Return ? target.[[Get]](P, Receiver).
// 8. Let trapResult be ? Call(trap, handler, « target, P, Receiver »).
// 9. Let targetDesc be ? target.[[GetOwnProperty]](P).
// 10. If targetDesc is not undefined and targetDesc.[[Configurable]] is false, then
  // 10. a. If IsDataDescriptor(targetDesc) is true and targetDesc.[[Writable]] is false, then
    // 10. a. i. If SameValue(trapResult, targetDesc.[[Value]]) is false, throw a TypeError exception.
  // 10. b. If IsAccessorDescriptor(targetDesc) is true and targetDesc.[[Get]] is undefined, then
    // 10. b. i. If trapResult is not undefined, throw a TypeError exception.
// 11. Return trapResult.


// http://www.ecma-international.org/ecma-262/#sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver

// 1. Assert: IsPropertyKey(P) is true.
// 2. Let handler be O.[[ProxyHandler]].
// 3. If handler is null, throw a TypeError exception.
// 4. Assert: Type(handler) is Object.
// 5. Let target be O.[[ProxyTarget]].
// 6. Let trap be ? GetMethod(handler, "set").
// 7. If trap is undefined, then
  // 7. a. Return ? target.[[Set]](P, V, Receiver).
// 8. Let booleanTrapResult be ToBoolean(? Call(trap, handler, « target, P, V, Receiver »)).
// 9. If booleanTrapResult is false, return false.
// 10. Let targetDesc be ? target.[[GetOwnProperty]](P).
// 11. If targetDesc is not undefined and targetDesc.[[Configurable]] is false, then
  // 11. a. If IsDataDescriptor(targetDesc) is true and targetDesc.[[Writable]] is false, then
    // 11. a. i. If SameValue(V, targetDesc.[[Value]]) is false, throw a TypeError exception.
  // 11. b. If IsAccessorDescriptor(targetDesc) is true, then
    // 11. b. i. If targetDesc.[[Set]] is undefined, throw a TypeError exception.
// 12. Return true.


// http://www.ecma-international.org/ecma-262/#sec-proxy-object-internal-methods-and-internal-slots-delete-p

// 1. Assert: IsPropertyKey(P) is true.
// 2. Let handler be O.[[ProxyHandler]].
// 3. If handler is null, throw a TypeError exception.
// 4. Assert: Type(handler) is Object.
// 5. Let target be O.[[ProxyTarget]].
// 6. Let trap be ? GetMethod(handler, "deleteProperty").
// 7. If trap is undefined, then
  // 7. a. Return ? target.[[Delete]](P).
// 8. Let booleanTrapResult be ToBoolean(? Call(trap, handler, « target, P »)).
// 9. If booleanTrapResult is false, return false.
// 10. Let targetDesc be ? target.[[GetOwnProperty]](P).
// 11. If targetDesc is undefined, return true.
// 12. If targetDesc.[[Configurable]] is false, throw a TypeError exception.
// 13. Return true.


// http://www.ecma-international.org/ecma-262/#sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys

// 1. Let handler be O.[[ProxyHandler]].
// 2. If handler is null, throw a TypeError exception.
// 3. Assert: Type(handler) is Object.
// 4. Let target be O.[[ProxyTarget]].
// 5. Let trap be ? GetMethod(handler, "ownKeys").
// 6. If trap is undefined, then
  // 6. a. Return ? target.[[OwnPropertyKeys]]().
// 7. Let trapResultArray be ? Call(trap, handler, « target »).
// 8. Let trapResult be ? CreateListFromArrayLike(trapResultArray, « String, Symbol »).
// 9. If trapResult contains any duplicate entries, throw a TypeError exception.
// 10. Let extensibleTarget be ? IsExtensible(target).
// 11. Let targetKeys be ? target.[[OwnPropertyKeys]]().
// 12. Assert: targetKeys is a List containing only String and Symbol values.
// 13. Assert: targetKeys contains no duplicate entries.
// 14. Let targetConfigurableKeys be a new empty List.
// 15. Let targetNonconfigurableKeys be a new empty List.
// 16. For each element key of targetKeys, do
  // 16. a. Let desc be ? target.[[GetOwnProperty]](key).
  // 16. b. If desc is not undefined and desc.[[Configurable]] is false, then
    // 16. b. i. Append key as an element of targetNonconfigurableKeys.
  // 16. c. Else,
    // 16. c. i. Append key as an element of targetConfigurableKeys.
// 17. If extensibleTarget is true and targetNonconfigurableKeys is empty, then
  // 17. a. Return trapResult.
// 18. Let uncheckedResultKeys be a new List which is a copy of trapResult.
// 19. For each key that is an element of targetNonconfigurableKeys, do
  // 19. a. If key is not an element of uncheckedResultKeys, throw a TypeError exception.
  // 19. b. Remove key from uncheckedResultKeys.
// 20. If extensibleTarget is true, return trapResult.
// 21. For each key that is an element of targetConfigurableKeys, do
  // 21. a. If key is not an element of uncheckedResultKeys, throw a TypeError exception.
  // 21. b. Remove key from uncheckedResultKeys.
// 22. If uncheckedResultKeys is not empty, throw a TypeError exception.
// 23. Return trapResult.


// http://www.ecma-international.org/ecma-262/#sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist

// 1. Let handler be O.[[ProxyHandler]].
// 2. If handler is null, throw a TypeError exception.
// 3. Assert: Type(handler) is Object.
// 4. Let target be O.[[ProxyTarget]].
// 5. Let trap be ? GetMethod(handler, "apply").
// 6. If trap is undefined, then
  // 6. a. Return ? Call(target, thisArgument, argumentsList).
// 7. Let argArray be CreateArrayFromList(argumentsList).
// 8. Return ? Call(trap, handler, « target, thisArgument, argArray »).


// http://www.ecma-international.org/ecma-262/#sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget

// 1. Let handler be O.[[ProxyHandler]].
// 2. If handler is null, throw a TypeError exception.
// 3. Assert: Type(handler) is Object.
// 4. Let target be O.[[ProxyTarget]].
// 5. Assert: IsConstructor(target) is true.
// 6. Let trap be ? GetMethod(handler, "construct").
// 7. If trap is undefined, then
  // 7. a. Return ? Construct(target, argumentsList, newTarget).
// 8. Let argArray be CreateArrayFromList(argumentsList).
// 9. Let newObj be ? Call(trap, handler, « target, argArray, newTarget »).
// 10. If Type(newObj) is not Object, throw a TypeError exception.
// 11. Return newObj.


// http://www.ecma-international.org/ecma-262/#sec-proxycreate

// 1. If Type(target) is not Object, throw a TypeError exception.
// 2. If target is a Proxy exotic object and target.[[ProxyHandler]] is null, throw a TypeError exception.
// 3. If Type(handler) is not Object, throw a TypeError exception.
// 4. If handler is a Proxy exotic object and handler.[[ProxyHandler]] is null, throw a TypeError exception.
// 5. Let P be a newly created object.
// 6. Set P's essential internal methods (except for [[Call]] and [[Construct]]) to the definitions specified in 9.5.
// 7. If IsCallable(target) is true, then
  // 7. a. Set P.[[Call]] as specified in 9.5.12.
  // 7. b. If IsConstructor(target) is true, then
    // 7. b. i. Set P.[[Construct]] as specified in 9.5.13.
// 8. Set P.[[ProxyTarget]] to target.
// 9. Set P.[[ProxyHandler]] to handler.
// 10. Return P.


// http://www.ecma-international.org/ecma-262/#sec-utf16encoding

// 1. Assert: 0 ≤ cp ≤ 0x10FFFF.
// 2. If cp ≤ 0xFFFF, return cp.
// 3. Let cu1 be floor((cp - 0x10000) / 0x400) + 0xD800.
// 4. Let cu2 be ((cp - 0x10000) modulo 0x400) + 0xDC00.
// 5. Return the code unit sequence consisting of cu1 followed by cu2.


// http://www.ecma-international.org/ecma-262/#sec-utf16decode

// 1. Assert: lead is a leading surrogate and trail is a trailing surrogate.
// 2. Let cp be (lead - 0xD800) × 0x400 + (trail - 0xDC00) + 0x10000.
// 3. Return the code point cp.


// http://www.ecma-international.org/ecma-262/#sec-identifier-names-static-semantics-stringvalue

// IdentifierName :: IdentifierStart IdentifierName IdentifierPart

// 1. Return the String value consisting of the sequence of code units corresponding to IdentifierName. In determining the sequence any occurrences of \ UnicodeEscapeSequence are first replaced with the code point represented by the UnicodeEscapeSequence and then the code points of the entire IdentifierName are converted to code units by UTF16Encoding each code point.


// http://www.ecma-international.org/ecma-262/#sec-string-literals-static-semantics-stringvalue

// StringLiteral :: " DoubleStringCharacters opt " ' SingleStringCharacters opt '

// 1. Return the String value whose code units are the SV of this StringLiteral.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-bodytext

// RegularExpressionLiteral :: / RegularExpressionBody / RegularExpressionFlags

// 1. Return the source text that was recognized as RegularExpressionBody.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-flagtext

// RegularExpressionLiteral :: / RegularExpressionBody / RegularExpressionFlags

// 1. Return the source text that was recognized as RegularExpressionFlags.


// http://www.ecma-international.org/ecma-262/#sec-identifiers-static-semantics-boundnames

// BindingIdentifier : Identifier

// 1. Return a new List containing the StringValue of Identifier.

// BindingIdentifier : yield

// 1. Return a new List containing "yield".

// BindingIdentifier : await

// 1. Return a new List containing "await".


// http://www.ecma-international.org/ecma-262/#sec-identifiers-static-semantics-assignmenttargettype

// IdentifierReference : Identifier

// 1. If this IdentifierReference is contained in strict mode code and StringValue of Identifier is "eval" or "arguments", return strict.
// 2. Return simple.

// IdentifierReference : yield

// 1. Return simple.

// IdentifierReference : await

// 1. Return simple.


// http://www.ecma-international.org/ecma-262/#sec-identifiers-static-semantics-stringvalue

// IdentifierReference : yield BindingIdentifier : yield LabelIdentifier : yield

// 1. Return "yield".

// IdentifierReference : await BindingIdentifier : await LabelIdentifier : await

// 1. Return "await".

// Identifier : IdentifierName but not ReservedWord

// 1. Return the StringValue of IdentifierName.


// http://www.ecma-international.org/ecma-262/#sec-identifiers-runtime-semantics-bindinginitialization

// BindingIdentifier : Identifier

// 1. Let name be StringValue of Identifier.
// 2. Return ? InitializeBoundName(name, value, environment).

// BindingIdentifier : yield

// 1. Return ? InitializeBoundName("yield", value, environment).

// BindingIdentifier : await

// 1. Return ? InitializeBoundName("await", value, environment).


// http://www.ecma-international.org/ecma-262/#sec-initializeboundname

// 1. Assert: Type(name) is String.
// 2. If environment is not undefined, then
  // 2. a. Let env be the EnvironmentRecord component of environment.
  // 2. b. Perform env.InitializeBinding(name, value).
  // 2. c. Return NormalCompletion(undefined).
// 3. Else,
  // 3. a. Let lhs be ResolveBinding(name).
  // 3. b. Return ? PutValue(lhs, value).


// http://www.ecma-international.org/ecma-262/#sec-identifiers-runtime-semantics-evaluation

// IdentifierReference : Identifier

// 1. Return ? ResolveBinding(StringValue of Identifier).

// IdentifierReference : yield

// 1. Return ? ResolveBinding("yield").

// IdentifierReference : await

// 1. Return ? ResolveBinding("await").


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-coveredparenthesizedexpression

// CoverParenthesizedExpressionAndArrowParameterList : ( Expression )

// 1. Return the ParenthesizedExpression that is covered by CoverParenthesizedExpressionAndArrowParameterList.


// http://www.ecma-international.org/ecma-262/#sec-semantics-static-semantics-hasname

// PrimaryExpression : CoverParenthesizedExpressionAndArrowParameterList

// 1. Let expr be CoveredParenthesizedExpression of CoverParenthesizedExpressionAndArrowParameterList.
// 2. If IsFunctionDefinition of expr is false, return false.
// 3. Return HasName of expr.


// http://www.ecma-international.org/ecma-262/#sec-semantics-static-semantics-isfunctiondefinition

// PrimaryExpression : this IdentifierReference Literal ArrayLiteral ObjectLiteral RegularExpressionLiteral TemplateLiteral

// 1. Return false.

// PrimaryExpression : CoverParenthesizedExpressionAndArrowParameterList

// 1. Let expr be CoveredParenthesizedExpression of CoverParenthesizedExpressionAndArrowParameterList.
// 2. Return IsFunctionDefinition of expr.


// http://www.ecma-international.org/ecma-262/#sec-semantics-static-semantics-isidentifierref

// PrimaryExpression : IdentifierReference

// 1. Return true.

// PrimaryExpression : this Literal ArrayLiteral ObjectLiteral FunctionExpression ClassExpression GeneratorExpression AsyncFunctionExpression AsyncGeneratorExpression RegularExpressionLiteral TemplateLiteral CoverParenthesizedExpressionAndArrowParameterList

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-semantics-static-semantics-assignmenttargettype

// PrimaryExpression : this Literal ArrayLiteral ObjectLiteral FunctionExpression ClassExpression GeneratorExpression AsyncFunctionExpression AsyncGeneratorExpression RegularExpressionLiteral TemplateLiteral

// 1. Return invalid.

// PrimaryExpression : CoverParenthesizedExpressionAndArrowParameterList

// 1. Let expr be CoveredParenthesizedExpression of CoverParenthesizedExpressionAndArrowParameterList.
// 2. Return AssignmentTargetType of expr.


// http://www.ecma-international.org/ecma-262/#sec-this-keyword-runtime-semantics-evaluation

// PrimaryExpression : this

// 1. Return ? ResolveThisBinding().


// http://www.ecma-international.org/ecma-262/#sec-literals-runtime-semantics-evaluation

// Literal : NullLiteral

// 1. Return null.

// Literal : BooleanLiteral

// 1. If BooleanLiteral is the token false, return false.
// 2. If BooleanLiteral is the token true, return true.

// Literal : NumericLiteral

// 1. Return the number whose value is MV of NumericLiteral as defined in 11.8.3.

// Literal : StringLiteral

// 1. Return the StringValue of StringLiteral as defined in 11.8.4.1.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-elisionwidth

// Elision : ,

// 1. Return the numeric value 1.

// Elision : Elision ,

// 1. Let preceding be the ElisionWidth of Elision.
// 2. Return preceding + 1.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-arrayaccumulation

// ElementList : Elision opt AssignmentExpression

// 1. Let padding be the ElisionWidth of Elision; if Elision is not present, use the numeric value zero.
// 2. Let initResult be the result of evaluating AssignmentExpression.
// 3. Let initValue be ? GetValue(initResult).
// 4. Let created be CreateDataProperty(array, ToString(ToUint32(nextIndex + padding)), initValue).
// 5. Assert: created is true.
// 6. Return nextIndex + padding + 1.

// ElementList : Elision opt SpreadElement

// 1. Let padding be the ElisionWidth of Elision; if Elision is not present, use the numeric value zero.
// 2. Return the result of performing ArrayAccumulation for SpreadElement with arguments array and nextIndex + padding.

// ElementList : ElementList , Elision opt AssignmentExpression

// 1. Let postIndex be the result of performing ArrayAccumulation for ElementList with arguments array and nextIndex.
// 2. ReturnIfAbrupt(postIndex).
// 3. Let padding be the ElisionWidth of Elision; if Elision is not present, use the numeric value zero.
// 4. Let initResult be the result of evaluating AssignmentExpression.
// 5. Let initValue be ? GetValue(initResult).
// 6. Let created be CreateDataProperty(array, ToString(ToUint32(postIndex + padding)), initValue).
// 7. Assert: created is true.
// 8. Return postIndex + padding + 1.

// ElementList : ElementList , Elision opt SpreadElement

// 1. Let postIndex be the result of performing ArrayAccumulation for ElementList with arguments array and nextIndex.
// 2. ReturnIfAbrupt(postIndex).
// 3. Let padding be the ElisionWidth of Elision; if Elision is not present, use the numeric value zero.
// 4. Return the result of performing ArrayAccumulation for SpreadElement with arguments array and postIndex + padding.

// SpreadElement : ... AssignmentExpression

// 1. Let spreadRef be the result of evaluating AssignmentExpression.
// 2. Let spreadObj be ? GetValue(spreadRef).
// 3. Let iteratorRecord be ? GetIterator(spreadObj).
// 4. Repeat,
  // 4. a. Let next be ? IteratorStep(iteratorRecord).
  // 4. b. If next is false, return nextIndex.
  // 4. c. Let nextValue be ? IteratorValue(next).
  // 4. d. Let status be CreateDataProperty(array, ToString(ToUint32(nextIndex)), nextValue).
  // 4. e. Assert: status is true.
  // 4. f. Increase nextIndex by 1.


// http://www.ecma-international.org/ecma-262/#sec-array-initializer-runtime-semantics-evaluation

// ArrayLiteral : [ Elision opt ]

// 1. Let array be ! ArrayCreate(0).
// 2. Let pad be the ElisionWidth of Elision; if Elision is not present, use the numeric value zero.
// 3. Perform Set(array, "length", ToUint32(pad), false).
// 4. NOTE: The above Set cannot fail because of the nature of the object returned by ArrayCreate.
// 5. Return array.

// ArrayLiteral : [ ElementList ]

// 1. Let array be ! ArrayCreate(0).
// 2. Let len be the result of performing ArrayAccumulation for ElementList with arguments array and 0.
// 3. ReturnIfAbrupt(len).
// 4. Perform Set(array, "length", ToUint32(len), false).
// 5. NOTE: The above Set cannot fail because of the nature of the object returned by ArrayCreate.
// 6. Return array.

// ArrayLiteral : [ ElementList , Elision opt ]

// 1. Let array be ! ArrayCreate(0).
// 2. Let len be the result of performing ArrayAccumulation for ElementList with arguments array and 0.
// 3. ReturnIfAbrupt(len).
// 4. Let padding be the ElisionWidth of Elision; if Elision is not present, use the numeric value zero.
// 5. Perform Set(array, "length", ToUint32(padding + len), false).
// 6. NOTE: The above Set cannot fail because of the nature of the object returned by ArrayCreate.
// 7. Return array.


// http://www.ecma-international.org/ecma-262/#sec-object-initializer-static-semantics-computedpropertycontains

// PropertyName : LiteralPropertyName

// 1. Return false.

// PropertyName : ComputedPropertyName

// 1. Return the result of ComputedPropertyName Contains symbol.


// http://www.ecma-international.org/ecma-262/#sec-object-initializer-static-semantics-contains

// PropertyDefinition : MethodDefinition

// 1. If symbol is MethodDefinition, return true.
// 2. Return the result of ComputedPropertyContains for MethodDefinition with argument symbol.

// LiteralPropertyName : IdentifierName

// 1. If symbol is a ReservedWord, return false.
// 2. If symbol is an Identifier and StringValue of symbol is the same value as the StringValue of IdentifierName, return true.
// 3. Return false.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-iscomputedpropertykey

// PropertyName : LiteralPropertyName

// 1. Return false.

// PropertyName : ComputedPropertyName

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-object-initializer-static-semantics-propname

// PropertyDefinition : IdentifierReference

// 1. Return StringValue of IdentifierReference.

// PropertyDefinition : ... AssignmentExpression

// 1. Return empty.

// PropertyDefinition : PropertyName : AssignmentExpression

// 1. Return PropName of PropertyName.

// LiteralPropertyName : IdentifierName

// 1. Return StringValue of IdentifierName.

// LiteralPropertyName : StringLiteral

// 1. Return the String value whose code units are the SV of the StringLiteral.

// LiteralPropertyName : NumericLiteral

// 1. Let nbr be the result of forming the value of the NumericLiteral.
// 2. Return ! ToString(nbr).

// ComputedPropertyName : [ AssignmentExpression ]

// 1. Return empty.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-propertynamelist

// PropertyDefinitionList : PropertyDefinition

// 1. If PropName of PropertyDefinition is empty, return a new empty List.
// 2. Return a new List containing PropName of PropertyDefinition.

// PropertyDefinitionList : PropertyDefinitionList , PropertyDefinition

// 1. Let list be PropertyNameList of PropertyDefinitionList.
// 2. If PropName of PropertyDefinition is empty, return list.
// 3. Append PropName of PropertyDefinition to the end of list.
// 4. Return list.


// http://www.ecma-international.org/ecma-262/#sec-object-initializer-runtime-semantics-evaluation

// ObjectLiteral : { }

// 1. Return ObjectCreate(%ObjectPrototype%).

// ObjectLiteral : { PropertyDefinitionList } { PropertyDefinitionList , }

// 1. Let obj be ObjectCreate(%ObjectPrototype%).
// 2. Perform ? PropertyDefinitionEvaluation of PropertyDefinitionList with arguments obj and true.
// 3. Return obj.

// LiteralPropertyName : IdentifierName

// 1. Return StringValue of IdentifierName.

// LiteralPropertyName : StringLiteral

// 1. Return the String value whose code units are the SV of the StringLiteral.

// LiteralPropertyName : NumericLiteral

// 1. Let nbr be the result of forming the value of the NumericLiteral.
// 2. Return ! ToString(nbr).

// ComputedPropertyName : [ AssignmentExpression ]

// 1. Let exprValue be the result of evaluating AssignmentExpression.
// 2. Let propName be ? GetValue(exprValue).
// 3. Return ? ToPropertyKey(propName).


// http://www.ecma-international.org/ecma-262/#sec-object-initializer-runtime-semantics-propertydefinitionevaluation

// PropertyDefinitionList : PropertyDefinitionList , PropertyDefinition

// 1. Perform ? PropertyDefinitionEvaluation of PropertyDefinitionList with arguments object and enumerable.
// 2. Return the result of performing PropertyDefinitionEvaluation of PropertyDefinition with arguments object and enumerable.

// PropertyDefinition : ... AssignmentExpression

// 1. Let exprValue be the result of evaluating AssignmentExpression.
// 2. Let fromValue be ? GetValue(exprValue).
// 3. Let excludedNames be a new empty List.
// 4. Return ? CopyDataProperties(object, fromValue, excludedNames).

// PropertyDefinition : IdentifierReference

// 1. Let propName be StringValue of IdentifierReference.
// 2. Let exprValue be the result of evaluating IdentifierReference.
// 3. Let propValue be ? GetValue(exprValue).
// 4. Assert: enumerable is true.
// 5. Assert: object is an ordinary, extensible object with no non-configurable properties.
// 6. Return ! CreateDataPropertyOrThrow(object, propName, propValue).

// PropertyDefinition : PropertyName : AssignmentExpression

// 1. Let propKey be the result of evaluating PropertyName.
// 2. ReturnIfAbrupt(propKey).
// 3. If IsAnonymousFunctionDefinition(AssignmentExpression) is true, then
  // 3. a. Let propValue be the result of performing NamedEvaluation for AssignmentExpression with argument propKey.
// 4. Else,
  // 4. a. Let exprValueRef be the result of evaluating AssignmentExpression.
  // 4. b. Let propValue be ? GetValue(exprValueRef).
// 5. Assert: enumerable is true.
// 6. Assert: object is an ordinary, extensible object with no non-configurable properties.
// 7. Return ! CreateDataPropertyOrThrow(object, propKey, propValue).


// http://www.ecma-international.org/ecma-262/#sec-regular-expression-literals-runtime-semantics-evaluation

// PrimaryExpression : RegularExpressionLiteral

// 1. Let pattern be the String value consisting of the UTF16Encoding of each code point of BodyText of RegularExpressionLiteral.
// 2. Let flags be the String value consisting of the UTF16Encoding of each code point of FlagText of RegularExpressionLiteral.
// 3. Return RegExpCreate(pattern, flags).


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-templatestrings

// TemplateLiteral : NoSubstitutionTemplate

// 1. If raw is false, then
  // 1. a. Let string be the TV of NoSubstitutionTemplate.
// 2. Else,
  // 2. a. Let string be the TRV of NoSubstitutionTemplate.
// 3. Return a List containing the single element, string.

// SubstitutionTemplate : TemplateHead Expression TemplateSpans

// 1. If raw is false, then
  // 1. a. Let head be the TV of TemplateHead.
// 2. Else,
  // 2. a. Let head be the TRV of TemplateHead.
// 3. Let tail be TemplateStrings of TemplateSpans with argument raw.
// 4. Return a List containing head followed by the elements, in order, of tail.

// TemplateSpans : TemplateTail

// 1. If raw is false, then
  // 1. a. Let tail be the TV of TemplateTail.
// 2. Else,
  // 2. a. Let tail be the TRV of TemplateTail.
// 3. Return a List containing the single element, tail.

// TemplateSpans : TemplateMiddleList TemplateTail

// 1. Let middle be TemplateStrings of TemplateMiddleList with argument raw.
// 2. If raw is false, then
  // 2. a. Let tail be the TV of TemplateTail.
// 3. Else,
  // 3. a. Let tail be the TRV of TemplateTail.
// 4. Return a List containing the elements, in order, of middle followed by tail.

// TemplateMiddleList : TemplateMiddle Expression

// 1. If raw is false, then
  // 1. a. Let string be the TV of TemplateMiddle.
// 2. Else,
  // 2. a. Let string be the TRV of TemplateMiddle.
// 3. Return a List containing the single element, string.

// TemplateMiddleList : TemplateMiddleList TemplateMiddle Expression

// 1. Let front be TemplateStrings of TemplateMiddleList with argument raw.
// 2. If raw is false, then
  // 2. a. Let last be the TV of TemplateMiddle.
// 3. Else,
  // 3. a. Let last be the TRV of TemplateMiddle.
// 4. Append last as the last element of the List front.
// 5. Return front.


// http://www.ecma-international.org/ecma-262/#sec-template-literals-runtime-semantics-argumentlistevaluation

// TemplateLiteral : NoSubstitutionTemplate

// 1. Let templateLiteral be this TemplateLiteral.
// 2. Let siteObj be GetTemplateObject(templateLiteral).
// 3. Return a List containing the one element which is siteObj.

// SubstitutionTemplate : TemplateHead Expression TemplateSpans

// 1. Let templateLiteral be this TemplateLiteral.
// 2. Let siteObj be GetTemplateObject(templateLiteral).
// 3. Let firstSubRef be the result of evaluating Expression.
// 4. Let firstSub be ? GetValue(firstSubRef).
// 5. Let restSub be SubstitutionEvaluation of TemplateSpans.
// 6. ReturnIfAbrupt(restSub).
// 7. Assert: restSub is a List.
// 8. Return a List whose first element is siteObj, whose second elements is firstSub, and whose subsequent elements are the elements of restSub, in order. restSub may contain no elements.


// http://www.ecma-international.org/ecma-262/#sec-gettemplateobject

// 1. Let rawStrings be TemplateStrings of templateLiteral with argument true.
// 2. Let realm be the current Realm Record.
// 3. Let templateRegistry be realm.[[TemplateMap]].
// 4. For each element e of templateRegistry, do
  // 4. a. If e.[[Site]] is the same Parse Node as templateLiteral, then
    // 4. a. i. Return e.[[Array]].
// 5. Let cookedStrings be TemplateStrings of templateLiteral with argument false.
// 6. Let count be the number of elements in the List cookedStrings.
// 7. Assert: count ≤ 232 - 1.
// 8. Let template be ! ArrayCreate(count).
// 9. Let rawObj be ! ArrayCreate(count).
// 10. Let index be 0.
// 11. Repeat, while index < count
  // 11. a. Let prop be ! ToString(index).
  // 11. b. Let cookedValue be the String value cookedStrings[index].
  // 11. c. Call template.[[DefineOwnProperty]](prop, PropertyDescriptor { [[Value]]: cookedValue, [[Writable]]: false, [[Enumerable]]: true, [[Configurable]]: false }).
  // 11. d. Let rawValue be the String value rawStrings[index].
  // 11. e. Call rawObj.[[DefineOwnProperty]](prop, PropertyDescriptor { [[Value]]: rawValue, [[Writable]]: false, [[Enumerable]]: true, [[Configurable]]: false }).
  // 11. f. Increase index by 1.
// 12. Perform SetIntegrityLevel(rawObj, "frozen").
// 13. Call template.[[DefineOwnProperty]]("raw", PropertyDescriptor { [[Value]]: rawObj, [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }).
// 14. Perform SetIntegrityLevel(template, "frozen").
// 15. Append the Record { [[Site]]: templateLiteral, [[Array]]: template } to templateRegistry.
// 16. Return template.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-substitutionevaluation

// TemplateSpans : TemplateTail

// 1. Return a new empty List.

// TemplateSpans : TemplateMiddleList TemplateTail

// 1. Return the result of SubstitutionEvaluation of TemplateMiddleList.

// TemplateMiddleList : TemplateMiddle Expression

// 1. Let subRef be the result of evaluating Expression.
// 2. Let sub be ? GetValue(subRef).
// 3. Return a List containing only sub.

// TemplateMiddleList : TemplateMiddleList TemplateMiddle Expression

// 1. Let preceding be the result of SubstitutionEvaluation of TemplateMiddleList.
// 2. ReturnIfAbrupt(preceding).
// 3. Let nextRef be the result of evaluating Expression.
// 4. Let next be ? GetValue(nextRef).
// 5. Append next as the last element of the List preceding.
// 6. Return preceding.


// http://www.ecma-international.org/ecma-262/#sec-template-literals-runtime-semantics-evaluation

// TemplateLiteral : NoSubstitutionTemplate

// 1. Return the String value whose code units are the elements of the TV of NoSubstitutionTemplate as defined in 11.8.6.

// SubstitutionTemplate : TemplateHead Expression TemplateSpans

// 1. Let head be the TV of TemplateHead as defined in 11.8.6.
// 2. Let subRef be the result of evaluating Expression.
// 3. Let sub be ? GetValue(subRef).
// 4. Let middle be ? ToString(sub).
// 5. Let tail be the result of evaluating TemplateSpans.
// 6. ReturnIfAbrupt(tail).
// 7. Return the string-concatenation of head, middle, and tail.

// TemplateSpans : TemplateTail

// 1. Let tail be the TV of TemplateTail as defined in 11.8.6.
// 2. Return the String value consisting of the code units of tail.

// TemplateSpans : TemplateMiddleList TemplateTail

// 1. Let head be the result of evaluating TemplateMiddleList.
// 2. ReturnIfAbrupt(head).
// 3. Let tail be the TV of TemplateTail as defined in 11.8.6.
// 4. Return the string-concatenation of head and tail.

// TemplateMiddleList : TemplateMiddle Expression

// 1. Let head be the TV of TemplateMiddle as defined in 11.8.6.
// 2. Let subRef be the result of evaluating Expression.
// 3. Let sub be ? GetValue(subRef).
// 4. Let middle be ? ToString(sub).
// 5. Return the sequence of code units consisting of the code units of head followed by the elements of middle.

// TemplateMiddleList : TemplateMiddleList TemplateMiddle Expression

// 1. Let rest be the result of evaluating TemplateMiddleList.
// 2. ReturnIfAbrupt(rest).
// 3. Let middle be the TV of TemplateMiddle as defined in 11.8.6.
// 4. Let subRef be the result of evaluating Expression.
// 5. Let sub be ? GetValue(subRef).
// 6. Let last be ? ToString(sub).
// 7. Return the sequence of code units consisting of the elements of rest followed by the code units of middle followed by the elements of last.


// http://www.ecma-international.org/ecma-262/#sec-grouping-operator-static-semantics-isfunctiondefinition

// ParenthesizedExpression : ( Expression )

// 1. Return IsFunctionDefinition of Expression.


// http://www.ecma-international.org/ecma-262/#sec-grouping-operator-static-semantics-assignmenttargettype

// ParenthesizedExpression : ( Expression )

// 1. Return AssignmentTargetType of Expression.


// http://www.ecma-international.org/ecma-262/#sec-grouping-operator-runtime-semantics-namedevaluation

// PrimaryExpression : CoverParenthesizedExpressionAndArrowParameterList

// 1. Let expr be CoveredParenthesizedExpression of CoverParenthesizedExpressionAndArrowParameterList.
// 2. Return the result of performing NamedEvaluation for expr with argument name.

// ParenthesizedExpression : ( Expression )

// 1. Assert: IsAnonymousFunctionDefinition(Expression) is true.
// 2. Return the result of performing NamedEvaluation for Expression with argument name.


// http://www.ecma-international.org/ecma-262/#sec-grouping-operator-runtime-semantics-evaluation

// PrimaryExpression : CoverParenthesizedExpressionAndArrowParameterList

// 1. Let expr be CoveredParenthesizedExpression of CoverParenthesizedExpressionAndArrowParameterList.
// 2. Return the result of evaluating expr.

// ParenthesizedExpression : ( Expression )

// 1. Return the result of evaluating Expression. This may be of type Reference.


// http://www.ecma-international.org/ecma-262/#sec-left-hand-side-expressions-static-semantics-coveredcallexpression

// CallExpression : CoverCallExpressionAndAsyncArrowHead

// 1. Return the CallMemberExpression that is covered by CoverCallExpressionAndAsyncArrowHead.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-static-semantics-contains

// MemberExpression : MemberExpression . IdentifierName

// 1. If MemberExpression Contains symbol is true, return true.
// 2. If symbol is a ReservedWord, return false.
// 3. If symbol is an Identifier and StringValue of symbol is the same value as the StringValue of IdentifierName, return true.
// 4. Return false.

// SuperProperty : super . IdentifierName

// 1. If symbol is the ReservedWord super, return true.
// 2. If symbol is a ReservedWord, return false.
// 3. If symbol is an Identifier and StringValue of symbol is the same value as the StringValue of IdentifierName, return true.
// 4. Return false.

// CallExpression : CallExpression . IdentifierName

// 1. If CallExpression Contains symbol is true, return true.
// 2. If symbol is a ReservedWord, return false.
// 3. If symbol is an Identifier and StringValue of symbol is the same value as the StringValue of IdentifierName, return true.
// 4. Return false.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-static-semantics-isfunctiondefinition

// MemberExpression : MemberExpression [ Expression ] MemberExpression . IdentifierName MemberExpression TemplateLiteral SuperProperty MetaProperty new MemberExpression Arguments NewExpression : new NewExpression LeftHandSideExpression : CallExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-static-semantics-isdestructuring

// MemberExpression : PrimaryExpression

// 1. If PrimaryExpression is either an ObjectLiteral or an ArrayLiteral, return true.
// 2. Return false.

// MemberExpression : MemberExpression [ Expression ] MemberExpression . IdentifierName MemberExpression TemplateLiteral SuperProperty MetaProperty new MemberExpression Arguments NewExpression : new NewExpression LeftHandSideExpression : CallExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-static-semantics-isidentifierref

// MemberExpression : MemberExpression [ Expression ] MemberExpression . IdentifierName MemberExpression TemplateLiteral SuperProperty MetaProperty new MemberExpression Arguments NewExpression : new NewExpression LeftHandSideExpression : CallExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-static-semantics-assignmenttargettype

// CallExpression : CallExpression [ Expression ] CallExpression . IdentifierName MemberExpression : MemberExpression [ Expression ] MemberExpression . IdentifierName SuperProperty

// 1. Return simple.

// CallExpression : CoverCallExpressionAndAsyncArrowHead SuperCall CallExpression Arguments CallExpression TemplateLiteral NewExpression : new NewExpression MemberExpression : MemberExpression TemplateLiteral new MemberExpression Arguments NewTarget : new . target

// 1. Return invalid.


// http://www.ecma-international.org/ecma-262/#sec-property-accessors-runtime-semantics-evaluation

// MemberExpression : MemberExpression [ Expression ]

// 1. Let baseReference be the result of evaluating MemberExpression.
// 2. Let baseValue be ? GetValue(baseReference).
// 3. Let propertyNameReference be the result of evaluating Expression.
// 4. Let propertyNameValue be ? GetValue(propertyNameReference).
// 5. Let bv be ? RequireObjectCoercible(baseValue).
// 6. Let propertyKey be ? ToPropertyKey(propertyNameValue).
// 7. If the code matched by this MemberExpression is strict mode code, let strict be true, else let strict be false.
// 8. Return a value of type Reference whose base value component is bv, whose referenced name component is propertyKey, and whose strict reference flag is strict.

// MemberExpression : MemberExpression . IdentifierName

// 1. Let baseReference be the result of evaluating MemberExpression.
// 2. Let baseValue be ? GetValue(baseReference).
// 3. Let bv be ? RequireObjectCoercible(baseValue).
// 4. Let propertyNameString be StringValue of IdentifierName.
// 5. If the code matched by this MemberExpression is strict mode code, let strict be true, else let strict be false.
// 6. Return a value of type Reference whose base value component is bv, whose referenced name component is propertyNameString, and whose strict reference flag is strict.


// http://www.ecma-international.org/ecma-262/#sec-new-operator-runtime-semantics-evaluation

// NewExpression : new NewExpression

// 1. Return ? EvaluateNew(NewExpression, empty).

// MemberExpression : new MemberExpression Arguments

// 1. Return ? EvaluateNew(MemberExpression, Arguments).


// http://www.ecma-international.org/ecma-262/#sec-evaluatenew

// 1. Assert: constructExpr is either a NewExpression or a MemberExpression.
// 2. Assert: arguments is either empty or an Arguments.
// 3. Let ref be the result of evaluating constructExpr.
// 4. Let constructor be ? GetValue(ref).
// 5. If arguments is empty, let argList be a new empty List.
// 6. Else,
  // 6. a. Let argList be ArgumentListEvaluation of arguments.
  // 6. b. ReturnIfAbrupt(argList).
// 7. If IsConstructor(constructor) is false, throw a TypeError exception.
// 8. Return ? Construct(constructor, argList).


// http://www.ecma-international.org/ecma-262/#sec-function-calls-runtime-semantics-evaluation

// CallExpression : CoverCallExpressionAndAsyncArrowHead

// 1. Let expr be CoveredCallExpression of CoverCallExpressionAndAsyncArrowHead.
// 2. Let memberExpr be the MemberExpression of expr.
// 3. Let arguments be the Arguments of expr.
// 4. Let ref be the result of evaluating memberExpr.
// 5. Let func be ? GetValue(ref).
// 6. If Type(ref) is Reference and IsPropertyReference(ref) is false and GetReferencedName(ref) is "eval", then
  // 6. a. If SameValue(func, %eval%) is true, then
    // 6. a. i. Let argList be ? ArgumentListEvaluation of arguments.
    // 6. a. ii. If argList has no elements, return undefined.
    // 6. a. iii. Let evalText be the first element of argList.
    // 6. a. iv. If the source code matching this CallExpression is strict mode code, let strictCaller be true. Otherwise let strictCaller be false.
    // 6. a. v. Let evalRealm be the current Realm Record.
    // 6. a. vi. Perform ? HostEnsureCanCompileStrings(evalRealm, evalRealm).
    // 6. a. vii. Return ? PerformEval(evalText, evalRealm, strictCaller, true).
// 7. Let thisCall be this CallExpression.
// 8. Let tailCall be IsInTailPosition(thisCall).
// 9. Return ? EvaluateCall(func, ref, arguments, tailCall).

// CallExpression : CallExpression Arguments

// 1. Let ref be the result of evaluating CallExpression.
// 2. Let func be ? GetValue(ref).
// 3. Let thisCall be this CallExpression.
// 4. Let tailCall be IsInTailPosition(thisCall).
// 5. Return ? EvaluateCall(func, ref, Arguments, tailCall).


// http://www.ecma-international.org/ecma-262/#sec-evaluatecall

// 1. If Type(ref) is Reference, then
  // 1. a. If IsPropertyReference(ref) is true, then
    // 1. a. i. Let thisValue be GetThisValue(ref).
  // 1. b. Else the base of ref is an Environment Record,
    // 1. b. i. Let refEnv be GetBase(ref).
    // 1. b. ii. Let thisValue be refEnv.WithBaseObject().
// 2. Else Type(ref) is not Reference,
  // 2. a. Let thisValue be undefined.
// 3. Let argList be ArgumentListEvaluation of arguments.
// 4. ReturnIfAbrupt(argList).
// 5. If Type(func) is not Object, throw a TypeError exception.
// 6. If IsCallable(func) is false, throw a TypeError exception.
// 7. If tailPosition is true, perform PrepareForTailCall().
// 8. Let result be Call(func, thisValue, argList).
// 9. Assert: If tailPosition is true, the above call will not return here, but instead evaluation will continue as if the following return has already occurred.
// 10. Assert: If result is not an abrupt completion, then Type(result) is an ECMAScript language type.
// 11. Return result.


// http://www.ecma-international.org/ecma-262/#sec-super-keyword-runtime-semantics-evaluation

// SuperProperty : super [ Expression ]

// 1. Let env be GetThisEnvironment().
// 2. Let actualThis be ? env.GetThisBinding().
// 3. Let propertyNameReference be the result of evaluating Expression.
// 4. Let propertyNameValue be ? GetValue(propertyNameReference).
// 5. Let propertyKey be ? ToPropertyKey(propertyNameValue).
// 6. If the code matched by this SuperProperty is strict mode code, let strict be true, else let strict be false.
// 7. Return ? MakeSuperPropertyReference(actualThis, propertyKey, strict).

// SuperProperty : super . IdentifierName

// 1. Let env be GetThisEnvironment().
// 2. Let actualThis be ? env.GetThisBinding().
// 3. Let propertyKey be StringValue of IdentifierName.
// 4. If the code matched by this SuperProperty is strict mode code, let strict be true, else let strict be false.
// 5. Return ? MakeSuperPropertyReference(actualThis, propertyKey, strict).

// SuperCall : super Arguments

// 1. Let newTarget be GetNewTarget().
// 2. Assert: Type(newTarget) is Object.
// 3. Let func be ? GetSuperConstructor().
// 4. Let argList be ArgumentListEvaluation of Arguments.
// 5. ReturnIfAbrupt(argList).
// 6. Let result be ? Construct(func, argList, newTarget).
// 7. Let thisER be GetThisEnvironment().
// 8. Return ? thisER.BindThisValue(result).


// http://www.ecma-international.org/ecma-262/#sec-getsuperconstructor

// 1. Let envRec be GetThisEnvironment().
// 2. Assert: envRec is a function Environment Record.
// 3. Let activeFunction be envRec.[[FunctionObject]].
// 4. Assert: activeFunction is an ECMAScript function object.
// 5. Let superConstructor be ! activeFunction.[[GetPrototypeOf]]().
// 6. If IsConstructor(superConstructor) is false, throw a TypeError exception.
// 7. Return superConstructor.


// http://www.ecma-international.org/ecma-262/#sec-makesuperpropertyreference

// 1. Let env be GetThisEnvironment().
// 2. Assert: env.HasSuperBinding() is true.
// 3. Let baseValue be ? env.GetSuperBase().
// 4. Let bv be ? RequireObjectCoercible(baseValue).
// 5. Return a value of type Reference that is a Super Reference whose base value component is bv, whose referenced name component is propertyKey, whose thisValue component is actualThis, and whose strict reference flag is strict.


// http://www.ecma-international.org/ecma-262/#sec-argument-lists-runtime-semantics-argumentlistevaluation

// Arguments : ( )

// 1. Return a new empty List.

// ArgumentList : AssignmentExpression

// 1. Let ref be the result of evaluating AssignmentExpression.
// 2. Let arg be ? GetValue(ref).
// 3. Return a List whose sole item is arg.

// ArgumentList : ... AssignmentExpression

// 1. Let list be a new empty List.
// 2. Let spreadRef be the result of evaluating AssignmentExpression.
// 3. Let spreadObj be ? GetValue(spreadRef).
// 4. Let iteratorRecord be ? GetIterator(spreadObj).
// 5. Repeat,
  // 5. a. Let next be ? IteratorStep(iteratorRecord).
  // 5. b. If next is false, return list.
  // 5. c. Let nextArg be ? IteratorValue(next).
  // 5. d. Append nextArg as the last element of list.

// ArgumentList : ArgumentList , AssignmentExpression

// 1. Let precedingArgs be ArgumentListEvaluation of ArgumentList.
// 2. ReturnIfAbrupt(precedingArgs).
// 3. Let ref be the result of evaluating AssignmentExpression.
// 4. Let arg be ? GetValue(ref).
// 5. Append arg to the end of precedingArgs.
// 6. Return precedingArgs.

// ArgumentList : ArgumentList , ... AssignmentExpression

// 1. Let precedingArgs be ArgumentListEvaluation of ArgumentList.
// 2. ReturnIfAbrupt(precedingArgs).
// 3. Let spreadRef be the result of evaluating AssignmentExpression.
// 4. Let iteratorRecord be ? GetIterator(? GetValue(spreadRef)).
// 5. Repeat,
  // 5. a. Let next be ? IteratorStep(iteratorRecord).
  // 5. b. If next is false, return precedingArgs.
  // 5. c. Let nextArg be ? IteratorValue(next).
  // 5. d. Append nextArg as the last element of precedingArgs.


// http://www.ecma-international.org/ecma-262/#sec-tagged-templates-runtime-semantics-evaluation

// MemberExpression : MemberExpression TemplateLiteral

// 1. Let tagRef be the result of evaluating MemberExpression.
// 2. Let tagFunc be ? GetValue(tagRef).
// 3. Let thisCall be this MemberExpression.
// 4. Let tailCall be IsInTailPosition(thisCall).
// 5. Return ? EvaluateCall(tagFunc, tagRef, TemplateLiteral, tailCall).

// CallExpression : CallExpression TemplateLiteral

// 1. Let tagRef be the result of evaluating CallExpression.
// 2. Let tagFunc be ? GetValue(tagRef).
// 3. Let thisCall be this CallExpression.
// 4. Let tailCall be IsInTailPosition(thisCall).
// 5. Return ? EvaluateCall(tagFunc, tagRef, TemplateLiteral, tailCall).


// http://www.ecma-international.org/ecma-262/#sec-meta-properties-runtime-semantics-evaluation

// NewTarget : new . target

// 1. Return GetNewTarget().


// http://www.ecma-international.org/ecma-262/#sec-update-expressions-static-semantics-isfunctiondefinition

// UpdateExpression : LeftHandSideExpression ++ LeftHandSideExpression -- ++ UnaryExpression -- UnaryExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-update-expressions-static-semantics-assignmenttargettype

// UpdateExpression : LeftHandSideExpression ++ LeftHandSideExpression -- ++ UnaryExpression -- UnaryExpression

// 1. Return invalid.


// http://www.ecma-international.org/ecma-262/#sec-postfix-increment-operator-runtime-semantics-evaluation

// UpdateExpression : LeftHandSideExpression ++

// 1. Let lhs be the result of evaluating LeftHandSideExpression.
// 2. Let oldValue be ? ToNumber(? GetValue(lhs)).
// 3. Let newValue be the result of adding the value 1 to oldValue, using the same rules as for the + operator (see 12.8.5).
// 4. Perform ? PutValue(lhs, newValue).
// 5. Return oldValue.


// http://www.ecma-international.org/ecma-262/#sec-postfix-decrement-operator-runtime-semantics-evaluation

// UpdateExpression : LeftHandSideExpression --

// 1. Let lhs be the result of evaluating LeftHandSideExpression.
// 2. Let oldValue be ? ToNumber(? GetValue(lhs)).
// 3. Let newValue be the result of subtracting the value 1 from oldValue, using the same rules as for the - operator (see 12.8.5).
// 4. Perform ? PutValue(lhs, newValue).
// 5. Return oldValue.


// http://www.ecma-international.org/ecma-262/#sec-prefix-increment-operator-runtime-semantics-evaluation

// UpdateExpression : ++ UnaryExpression

// 1. Let expr be the result of evaluating UnaryExpression.
// 2. Let oldValue be ? ToNumber(? GetValue(expr)).
// 3. Let newValue be the result of adding the value 1 to oldValue, using the same rules as for the + operator (see 12.8.5).
// 4. Perform ? PutValue(expr, newValue).
// 5. Return newValue.


// http://www.ecma-international.org/ecma-262/#sec-prefix-decrement-operator-runtime-semantics-evaluation

// UpdateExpression : -- UnaryExpression

// 1. Let expr be the result of evaluating UnaryExpression.
// 2. Let oldValue be ? ToNumber(? GetValue(expr)).
// 3. Let newValue be the result of subtracting the value 1 from oldValue, using the same rules as for the - operator (see 12.8.5).
// 4. Perform ? PutValue(expr, newValue).
// 5. Return newValue.


// http://www.ecma-international.org/ecma-262/#sec-unary-operators-static-semantics-isfunctiondefinition

// UnaryExpression : delete UnaryExpression void UnaryExpression typeof UnaryExpression + UnaryExpression - UnaryExpression ~ UnaryExpression ! UnaryExpression AwaitExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-unary-operators-static-semantics-assignmenttargettype

// UnaryExpression : delete UnaryExpression void UnaryExpression typeof UnaryExpression + UnaryExpression - UnaryExpression ~ UnaryExpression ! UnaryExpression AwaitExpression

// 1. Return invalid.


// http://www.ecma-international.org/ecma-262/#sec-delete-operator-runtime-semantics-evaluation

// UnaryExpression : delete UnaryExpression

// 1. Let ref be the result of evaluating UnaryExpression.
// 2. ReturnIfAbrupt(ref).
// 3. If Type(ref) is not Reference, return true.
// 4. If IsUnresolvableReference(ref) is true, then
  // 4. a. Assert: IsStrictReference(ref) is false.
  // 4. b. Return true.
// 5. If IsPropertyReference(ref) is true, then
  // 5. a. If IsSuperReference(ref) is true, throw a ReferenceError exception.
  // 5. b. Let baseObj be ! ToObject(GetBase(ref)).
  // 5. c. Let deleteStatus be ? baseObj.[[Delete]](GetReferencedName(ref)).
  // 5. d. If deleteStatus is false and IsStrictReference(ref) is true, throw a TypeError exception.
  // 5. e. Return deleteStatus.
// 6. Else ref is a Reference to an Environment Record binding,
  // 6. a. Let bindings be GetBase(ref).
  // 6. b. Return ? bindings.DeleteBinding(GetReferencedName(ref)).


// http://www.ecma-international.org/ecma-262/#sec-void-operator-runtime-semantics-evaluation

// UnaryExpression : void UnaryExpression

// 1. Let expr be the result of evaluating UnaryExpression.
// 2. Perform ? GetValue(expr).
// 3. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-typeof-operator-runtime-semantics-evaluation

// UnaryExpression : typeof UnaryExpression

// 1. Let val be the result of evaluating UnaryExpression.
// 2. If Type(val) is Reference, then
  // 2. a. If IsUnresolvableReference(val) is true, return "undefined".
// 3. Set val to ? GetValue(val).
// 4. Return a String according to Table 35.


// http://www.ecma-international.org/ecma-262/#sec-unary-plus-operator-runtime-semantics-evaluation

// UnaryExpression : + UnaryExpression

// 1. Let expr be the result of evaluating UnaryExpression.
// 2. Return ? ToNumber(? GetValue(expr)).


// http://www.ecma-international.org/ecma-262/#sec-unary-minus-operator-runtime-semantics-evaluation

// UnaryExpression : - UnaryExpression

// 1. Let expr be the result of evaluating UnaryExpression.
// 2. Let oldValue be ? ToNumber(? GetValue(expr)).
// 3. If oldValue is NaN, return NaN.
// 4. Return the result of negating oldValue; that is, compute a Number with the same magnitude but opposite sign.


// http://www.ecma-international.org/ecma-262/#sec-bitwise-not-operator-runtime-semantics-evaluation

// UnaryExpression : ~ UnaryExpression

// 1. Let expr be the result of evaluating UnaryExpression.
// 2. Let oldValue be ? ToInt32(? GetValue(expr)).
// 3. Return the result of applying bitwise complement to oldValue. The result is a signed 32-bit integer.


// http://www.ecma-international.org/ecma-262/#sec-logical-not-operator-runtime-semantics-evaluation

// UnaryExpression : ! UnaryExpression

// 1. Let expr be the result of evaluating UnaryExpression.
// 2. Let oldValue be ToBoolean(? GetValue(expr)).
// 3. If oldValue is true, return false.
// 4. Return true.


// http://www.ecma-international.org/ecma-262/#sec-exp-operator-static-semantics-isfunctiondefinition

// ExponentiationExpression : UpdateExpression ** ExponentiationExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-exp-operator-static-semantics-assignmenttargettype

// ExponentiationExpression : UpdateExpression ** ExponentiationExpression

// 1. Return invalid.


// http://www.ecma-international.org/ecma-262/#sec-exp-operator-runtime-semantics-evaluation

// ExponentiationExpression : UpdateExpression ** ExponentiationExpression

// 1. Let left be the result of evaluating UpdateExpression.
// 2. Let leftValue be ? GetValue(left).
// 3. Let right be the result of evaluating ExponentiationExpression.
// 4. Let rightValue be ? GetValue(right).
// 5. Let base be ? ToNumber(leftValue).
// 6. Let exponent be ? ToNumber(rightValue).
// 7. Return the result of Applying the ** operator with base and exponent as specified in 12.6.4.


// http://www.ecma-international.org/ecma-262/#sec-multiplicative-operators-static-semantics-isfunctiondefinition

// MultiplicativeExpression : MultiplicativeExpression MultiplicativeOperator ExponentiationExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-multiplicative-operators-static-semantics-assignmenttargettype

// MultiplicativeExpression : MultiplicativeExpression MultiplicativeOperator ExponentiationExpression

// 1. Return invalid.


// http://www.ecma-international.org/ecma-262/#sec-multiplicative-operators-runtime-semantics-evaluation

// MultiplicativeExpression : MultiplicativeExpression MultiplicativeOperator ExponentiationExpression

// 1. Let left be the result of evaluating MultiplicativeExpression.
// 2. Let leftValue be ? GetValue(left).
// 3. Let right be the result of evaluating ExponentiationExpression.
// 4. Let rightValue be ? GetValue(right).
// 5. Let lnum be ? ToNumber(leftValue).
// 6. Let rnum be ? ToNumber(rightValue).
// 7. Return the result of applying the MultiplicativeOperator (*, /, or %) to lnum and rnum as specified in 12.7.3.1, 12.7.3.2, or 12.7.3.3.


// http://www.ecma-international.org/ecma-262/#sec-additive-operators-static-semantics-isfunctiondefinition

// AdditiveExpression : AdditiveExpression + MultiplicativeExpression AdditiveExpression - MultiplicativeExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-additive-operators-static-semantics-assignmenttargettype

// AdditiveExpression : AdditiveExpression + MultiplicativeExpression AdditiveExpression - MultiplicativeExpression

// 1. Return invalid.


// http://www.ecma-international.org/ecma-262/#sec-addition-operator-plus-runtime-semantics-evaluation

// AdditiveExpression : AdditiveExpression + MultiplicativeExpression

// 1. Let lref be the result of evaluating AdditiveExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating MultiplicativeExpression.
// 4. Let rval be ? GetValue(rref).
// 5. Let lprim be ? ToPrimitive(lval).
// 6. Let rprim be ? ToPrimitive(rval).
// 7. If Type(lprim) is String or Type(rprim) is String, then
  // 7. a. Let lstr be ? ToString(lprim).
  // 7. b. Let rstr be ? ToString(rprim).
  // 7. c. Return the string-concatenation of lstr and rstr.
// 8. Let lnum be ? ToNumber(lprim).
// 9. Let rnum be ? ToNumber(rprim).
// 10. Return the result of applying the addition operation to lnum and rnum. See the Note below 12.8.5.


// http://www.ecma-international.org/ecma-262/#sec-subtraction-operator-minus-runtime-semantics-evaluation

// AdditiveExpression : AdditiveExpression - MultiplicativeExpression

// 1. Let lref be the result of evaluating AdditiveExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating MultiplicativeExpression.
// 4. Let rval be ? GetValue(rref).
// 5. Let lnum be ? ToNumber(lval).
// 6. Let rnum be ? ToNumber(rval).
// 7. Return the result of applying the subtraction operation to lnum and rnum. See the note below 12.8.5.


// http://www.ecma-international.org/ecma-262/#sec-bitwise-shift-operators-static-semantics-isfunctiondefinition

// ShiftExpression : ShiftExpression << AdditiveExpression ShiftExpression >> AdditiveExpression ShiftExpression >>> AdditiveExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-bitwise-shift-operators-static-semantics-assignmenttargettype

// ShiftExpression : ShiftExpression << AdditiveExpression ShiftExpression >> AdditiveExpression ShiftExpression >>> AdditiveExpression

// 1. Return invalid.


// http://www.ecma-international.org/ecma-262/#sec-left-shift-operator-runtime-semantics-evaluation

// ShiftExpression : ShiftExpression << AdditiveExpression

// 1. Let lref be the result of evaluating ShiftExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating AdditiveExpression.
// 4. Let rval be ? GetValue(rref).
// 5. Let lnum be ? ToInt32(lval).
// 6. Let rnum be ? ToUint32(rval).
// 7. Let shiftCount be the result of masking out all but the least significant 5 bits of rnum, that is, compute rnum & 0x1F.
// 8. Return the result of left shifting lnum by shiftCount bits. The result is a signed 32-bit integer.


// http://www.ecma-international.org/ecma-262/#sec-signed-right-shift-operator-runtime-semantics-evaluation

// ShiftExpression : ShiftExpression >> AdditiveExpression

// 1. Let lref be the result of evaluating ShiftExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating AdditiveExpression.
// 4. Let rval be ? GetValue(rref).
// 5. Let lnum be ? ToInt32(lval).
// 6. Let rnum be ? ToUint32(rval).
// 7. Let shiftCount be the result of masking out all but the least significant 5 bits of rnum, that is, compute rnum & 0x1F.
// 8. Return the result of performing a sign-extending right shift of lnum by shiftCount bits. The most significant bit is propagated. The result is a signed 32-bit integer.


// http://www.ecma-international.org/ecma-262/#sec-unsigned-right-shift-operator-runtime-semantics-evaluation

// ShiftExpression : ShiftExpression >>> AdditiveExpression

// 1. Let lref be the result of evaluating ShiftExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating AdditiveExpression.
// 4. Let rval be ? GetValue(rref).
// 5. Let lnum be ? ToUint32(lval).
// 6. Let rnum be ? ToUint32(rval).
// 7. Let shiftCount be the result of masking out all but the least significant 5 bits of rnum, that is, compute rnum & 0x1F.
// 8. Return the result of performing a zero-filling right shift of lnum by shiftCount bits. Vacated bits are filled with zero. The result is an unsigned 32-bit integer.


// http://www.ecma-international.org/ecma-262/#sec-relational-operators-static-semantics-isfunctiondefinition

// RelationalExpression : RelationalExpression < ShiftExpression RelationalExpression > ShiftExpression RelationalExpression <= ShiftExpression RelationalExpression >= ShiftExpression RelationalExpression instanceof ShiftExpression RelationalExpression in ShiftExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-relational-operators-static-semantics-assignmenttargettype

// RelationalExpression : RelationalExpression < ShiftExpression RelationalExpression > ShiftExpression RelationalExpression <= ShiftExpression RelationalExpression >= ShiftExpression RelationalExpression instanceof ShiftExpression RelationalExpression in ShiftExpression

// 1. Return invalid.


// http://www.ecma-international.org/ecma-262/#sec-relational-operators-runtime-semantics-evaluation

// RelationalExpression : RelationalExpression < ShiftExpression

// 1. Let lref be the result of evaluating RelationalExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating ShiftExpression.
// 4. Let rval be ? GetValue(rref).
// 5. Let r be the result of performing Abstract Relational Comparison lval < rval.
// 6. ReturnIfAbrupt(r).
// 7. If r is undefined, return false. Otherwise, return r.

// RelationalExpression : RelationalExpression > ShiftExpression

// 1. Let lref be the result of evaluating RelationalExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating ShiftExpression.
// 4. Let rval be ? GetValue(rref).
// 5. Let r be the result of performing Abstract Relational Comparison rval < lval with LeftFirst equal to false.
// 6. ReturnIfAbrupt(r).
// 7. If r is undefined, return false. Otherwise, return r.

// RelationalExpression : RelationalExpression <= ShiftExpression

// 1. Let lref be the result of evaluating RelationalExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating ShiftExpression.
// 4. Let rval be ? GetValue(rref).
// 5. Let r be the result of performing Abstract Relational Comparison rval < lval with LeftFirst equal to false.
// 6. ReturnIfAbrupt(r).
// 7. If r is true or undefined, return false. Otherwise, return true.

// RelationalExpression : RelationalExpression >= ShiftExpression

// 1. Let lref be the result of evaluating RelationalExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating ShiftExpression.
// 4. Let rval be ? GetValue(rref).
// 5. Let r be the result of performing Abstract Relational Comparison lval < rval.
// 6. ReturnIfAbrupt(r).
// 7. If r is true or undefined, return false. Otherwise, return true.

// RelationalExpression : RelationalExpression instanceof ShiftExpression

// 1. Let lref be the result of evaluating RelationalExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating ShiftExpression.
// 4. Let rval be ? GetValue(rref).
// 5. Return ? InstanceofOperator(lval, rval).

// RelationalExpression : RelationalExpression in ShiftExpression

// 1. Let lref be the result of evaluating RelationalExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating ShiftExpression.
// 4. Let rval be ? GetValue(rref).
// 5. If Type(rval) is not Object, throw a TypeError exception.
// 6. Return ? HasProperty(rval, ToPropertyKey(lval)).


// http://www.ecma-international.org/ecma-262/#sec-instanceofoperator

// 1. If Type(target) is not Object, throw a TypeError exception.
// 2. Let instOfHandler be ? GetMethod(target, @@hasInstance).
// 3. If instOfHandler is not undefined, then
  // 3. a. Return ToBoolean(? Call(instOfHandler, target, « V »)).
// 4. If IsCallable(target) is false, throw a TypeError exception.
// 5. Return ? OrdinaryHasInstance(target, V).


// http://www.ecma-international.org/ecma-262/#sec-equality-operators-static-semantics-isfunctiondefinition

// EqualityExpression : EqualityExpression == RelationalExpression EqualityExpression != RelationalExpression EqualityExpression === RelationalExpression EqualityExpression !== RelationalExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-equality-operators-static-semantics-assignmenttargettype

// EqualityExpression : EqualityExpression == RelationalExpression EqualityExpression != RelationalExpression EqualityExpression === RelationalExpression EqualityExpression !== RelationalExpression

// 1. Return invalid.


// http://www.ecma-international.org/ecma-262/#sec-equality-operators-runtime-semantics-evaluation

// EqualityExpression : EqualityExpression == RelationalExpression

// 1. Let lref be the result of evaluating EqualityExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating RelationalExpression.
// 4. Let rval be ? GetValue(rref).
// 5. Return the result of performing Abstract Equality Comparison rval == lval.

// EqualityExpression : EqualityExpression != RelationalExpression

// 1. Let lref be the result of evaluating EqualityExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating RelationalExpression.
// 4. Let rval be ? GetValue(rref).
// 5. Let r be the result of performing Abstract Equality Comparison rval == lval.
// 6. If r is true, return false. Otherwise, return true.

// EqualityExpression : EqualityExpression === RelationalExpression

// 1. Let lref be the result of evaluating EqualityExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating RelationalExpression.
// 4. Let rval be ? GetValue(rref).
// 5. Return the result of performing Strict Equality Comparison rval === lval.

// EqualityExpression : EqualityExpression !== RelationalExpression

// 1. Let lref be the result of evaluating EqualityExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating RelationalExpression.
// 4. Let rval be ? GetValue(rref).
// 5. Let r be the result of performing Strict Equality Comparison rval === lval.
// 6. If r is true, return false. Otherwise, return true.


// http://www.ecma-international.org/ecma-262/#sec-binary-bitwise-operators-static-semantics-isfunctiondefinition

// BitwiseANDExpression : BitwiseANDExpression & EqualityExpression BitwiseXORExpression : BitwiseXORExpression ^ BitwiseANDExpression BitwiseORExpression : BitwiseORExpression | BitwiseXORExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-binary-bitwise-operators-static-semantics-assignmenttargettype

// BitwiseANDExpression : BitwiseANDExpression & EqualityExpression BitwiseXORExpression : BitwiseXORExpression ^ BitwiseANDExpression BitwiseORExpression : BitwiseORExpression | BitwiseXORExpression

// 1. Return invalid.


// http://www.ecma-international.org/ecma-262/#sec-binary-bitwise-operators-runtime-semantics-evaluation

// 1. Let lref be the result of evaluating A.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating B.
// 4. Let rval be ? GetValue(rref).
// 5. Let lnum be ? ToInt32(lval).
// 6. Let rnum be ? ToInt32(rval).
// 7. Return the result of applying the bitwise operator @ to lnum and rnum. The result is a signed 32-bit integer.


// http://www.ecma-international.org/ecma-262/#sec-binary-logical-operators-static-semantics-isfunctiondefinition

// LogicalANDExpression : LogicalANDExpression && BitwiseORExpression LogicalORExpression : LogicalORExpression || LogicalANDExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-binary-logical-operators-static-semantics-assignmenttargettype

// LogicalANDExpression : LogicalANDExpression && BitwiseORExpression LogicalORExpression : LogicalORExpression || LogicalANDExpression

// 1. Return invalid.


// http://www.ecma-international.org/ecma-262/#sec-binary-logical-operators-runtime-semantics-evaluation

// LogicalANDExpression : LogicalANDExpression && BitwiseORExpression

// 1. Let lref be the result of evaluating LogicalANDExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let lbool be ToBoolean(lval).
// 4. If lbool is false, return lval.
// 5. Let rref be the result of evaluating BitwiseORExpression.
// 6. Return ? GetValue(rref).

// LogicalORExpression : LogicalORExpression || LogicalANDExpression

// 1. Let lref be the result of evaluating LogicalORExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let lbool be ToBoolean(lval).
// 4. If lbool is true, return lval.
// 5. Let rref be the result of evaluating LogicalANDExpression.
// 6. Return ? GetValue(rref).


// http://www.ecma-international.org/ecma-262/#sec-conditional-operator-static-semantics-isfunctiondefinition

// ConditionalExpression : LogicalORExpression ? AssignmentExpression : AssignmentExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-conditional-operator-static-semantics-assignmenttargettype

// ConditionalExpression : LogicalORExpression ? AssignmentExpression : AssignmentExpression

// 1. Return invalid.


// http://www.ecma-international.org/ecma-262/#sec-conditional-operator-runtime-semantics-evaluation

// ConditionalExpression : LogicalORExpression ? AssignmentExpression : AssignmentExpression

// 1. Let lref be the result of evaluating LogicalORExpression.
// 2. Let lval be ToBoolean(? GetValue(lref)).
// 3. If lval is true, then
  // 3. a. Let trueRef be the result of evaluating the first AssignmentExpression.
  // 3. b. Return ? GetValue(trueRef).
// 4. Else,
  // 4. a. Let falseRef be the result of evaluating the second AssignmentExpression.
  // 4. b. Return ? GetValue(falseRef).


// http://www.ecma-international.org/ecma-262/#sec-assignment-operators-static-semantics-isfunctiondefinition

// AssignmentExpression : ArrowFunction AsyncArrowFunction

// 1. Return true.

// AssignmentExpression : YieldExpression LeftHandSideExpression = AssignmentExpression LeftHandSideExpression AssignmentOperator AssignmentExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-assignment-operators-static-semantics-assignmenttargettype

// AssignmentExpression : YieldExpression ArrowFunction AsyncArrowFunction LeftHandSideExpression = AssignmentExpression LeftHandSideExpression AssignmentOperator AssignmentExpression

// 1. Return invalid.


// http://www.ecma-international.org/ecma-262/#sec-assignment-operators-runtime-semantics-evaluation

// AssignmentExpression : LeftHandSideExpression = AssignmentExpression

// 1. If LeftHandSideExpression is neither an ObjectLiteral nor an ArrayLiteral, then
  // 1. a. Let lref be the result of evaluating LeftHandSideExpression.
  // 1. b. ReturnIfAbrupt(lref).
  // 1. c. If IsAnonymousFunctionDefinition(AssignmentExpression) and IsIdentifierRef of LeftHandSideExpression are both true, then
    // 1. c. i. Let rval be the result of performing NamedEvaluation for AssignmentExpression with argument GetReferencedName(lref).
  // 1. d. Else,
    // 1. d. i. Let rref be the result of evaluating AssignmentExpression.
    // 1. d. ii. Let rval be ? GetValue(rref).
  // 1. e. Perform ? PutValue(lref, rval).
  // 1. f. Return rval.
// 2. Let assignmentPattern be the AssignmentPattern that is covered by LeftHandSideExpression.
// 3. Let rref be the result of evaluating AssignmentExpression.
// 4. Let rval be ? GetValue(rref).
// 5. Perform ? DestructuringAssignmentEvaluation of assignmentPattern using rval as the argument.
// 6. Return rval.

// AssignmentExpression : LeftHandSideExpression AssignmentOperator AssignmentExpression

// 1. Let lref be the result of evaluating LeftHandSideExpression.
// 2. Let lval be ? GetValue(lref).
// 3. Let rref be the result of evaluating AssignmentExpression.
// 4. Let rval be ? GetValue(rref).
// 5. Let op be the @ where AssignmentOperator is @=.
// 6. Let r be the result of applying op to lval and rval as if evaluating the expression lval op rval.
// 7. Perform ? PutValue(lref, r).
// 8. Return r.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-destructuringassignmentevaluation

// ObjectAssignmentPattern : { }

// 1. Perform ? RequireObjectCoercible(value).
// 2. Return NormalCompletion(empty).

// ObjectAssignmentPattern : { AssignmentPropertyList } { AssignmentPropertyList , }

// 1. Perform ? RequireObjectCoercible(value).
// 2. Perform ? PropertyDestructuringAssignmentEvaluation for AssignmentPropertyList using value as the argument.
// 3. Return NormalCompletion(empty).

// ArrayAssignmentPattern : [ ]

// 1. Let iteratorRecord be ? GetIterator(value).
// 2. Return ? IteratorClose(iteratorRecord, NormalCompletion(empty)).

// ArrayAssignmentPattern : [ Elision ]

// 1. Let iteratorRecord be ? GetIterator(value).
// 2. Let result be the result of performing IteratorDestructuringAssignmentEvaluation of Elision with iteratorRecord as the argument.
// 3. If iteratorRecord.[[Done]] is false, return ? IteratorClose(iteratorRecord, result).
// 4. Return result.

// ArrayAssignmentPattern : [ Elision opt AssignmentRestElement ]

// 1. Let iteratorRecord be ? GetIterator(value).
// 2. If Elision is present, then
  // 2. a. Let status be the result of performing IteratorDestructuringAssignmentEvaluation of Elision with iteratorRecord as the argument.
  // 2. b. If status is an abrupt completion, then
    // 2. b. i. Assert: iteratorRecord.[[Done]] is true.
    // 2. b. ii. Return Completion(status).
// 3. Let result be the result of performing IteratorDestructuringAssignmentEvaluation of AssignmentRestElement with iteratorRecord as the argument.
// 4. If iteratorRecord.[[Done]] is false, return ? IteratorClose(iteratorRecord, result).
// 5. Return result.

// ArrayAssignmentPattern : [ AssignmentElementList ]

// 1. Let iteratorRecord be ? GetIterator(value).
// 2. Let result be the result of performing IteratorDestructuringAssignmentEvaluation of AssignmentElementList using iteratorRecord as the argument.
// 3. If iteratorRecord.[[Done]] is false, return ? IteratorClose(iteratorRecord, result).
// 4. Return result.

// ArrayAssignmentPattern : [ AssignmentElementList , Elision opt AssignmentRestElement opt ]

// 1. Let iteratorRecord be ? GetIterator(value).
// 2. Let status be the result of performing IteratorDestructuringAssignmentEvaluation of AssignmentElementList using iteratorRecord as the argument.
// 3. If status is an abrupt completion, then
  // 3. a. If iteratorRecord.[[Done]] is false, return ? IteratorClose(iteratorRecord, status).
  // 3. b. Return Completion(status).
// 4. If Elision is present, then
  // 4. a. Set status to the result of performing IteratorDestructuringAssignmentEvaluation of Elision with iteratorRecord as the argument.
  // 4. b. If status is an abrupt completion, then
    // 4. b. i. Assert: iteratorRecord.[[Done]] is true.
    // 4. b. ii. Return Completion(status).
// 5. If AssignmentRestElement is present, then
  // 5. a. Set status to the result of performing IteratorDestructuringAssignmentEvaluation of AssignmentRestElement with iteratorRecord as the argument.
// 6. If iteratorRecord.[[Done]] is false, return ? IteratorClose(iteratorRecord, status).
// 7. Return Completion(status).

// ObjectAssignmentPattern : { AssignmentRestProperty }

// 1. Perform ? RequireObjectCoercible(value).
// 2. Let excludedNames be a new empty List.
// 3. Return the result of performing RestDestructuringAssignmentEvaluation of AssignmentRestProperty with value and excludedNames as the arguments.

// ObjectAssignmentPattern : { AssignmentPropertyList , AssignmentRestProperty }

// 1. Perform ? RequireObjectCoercible(value).
// 2. Let excludedNames be the result of performing ? PropertyDestructuringAssignmentEvaluation for AssignmentPropertyList using value as the argument.
// 3. Return the result of performing RestDestructuringAssignmentEvaluation of AssignmentRestProperty with value and excludedNames as the arguments.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-propertydestructuringassignmentevaluation

// AssignmentPropertyList : AssignmentPropertyList , AssignmentProperty

// 1. Let propertyNames be the result of performing ? PropertyDestructuringAssignmentEvaluation for AssignmentPropertyList using value as the argument.
// 2. Let nextNames be the result of performing ? PropertyDestructuringAssignmentEvaluation for AssignmentProperty using value as the argument.
// 3. Append each item in nextNames to the end of propertyNames.
// 4. Return propertyNames.

// AssignmentProperty : IdentifierReference Initializer opt

// 1. Let P be StringValue of IdentifierReference.
// 2. Let lref be ? ResolveBinding(P).
// 3. Let v be ? GetV(value, P).
// 4. If Initializeropt is present and v is undefined, then
  // 4. a. If IsAnonymousFunctionDefinition(Initializer) is true, then
    // 4. a. i. Set v to the result of performing NamedEvaluation for Initializer with argument P.
  // 4. b. Else,
    // 4. b. i. Let defaultValue be the result of evaluating Initializer.
    // 4. b. ii. Set v to ? GetValue(defaultValue).
// 5. Perform ? PutValue(lref, v).
// 6. Return a new List containing P.

// AssignmentProperty : PropertyName : AssignmentElement

// 1. Let name be the result of evaluating PropertyName.
// 2. ReturnIfAbrupt(name).
// 3. Perform ? KeyedDestructuringAssignmentEvaluation of AssignmentElement with value and name as the arguments.
// 4. Return a new List containing name.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-restdestructuringassignmentevaluation

// AssignmentRestProperty : ... DestructuringAssignmentTarget

// 1. Let lref be the result of evaluating DestructuringAssignmentTarget.
// 2. ReturnIfAbrupt(lref).
// 3. Let restObj be ObjectCreate(%ObjectPrototype%).
// 4. Perform ? CopyDataProperties(restObj, value, excludedNames).
// 5. Return PutValue(lref, restObj).


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-iteratordestructuringassignmentevaluation

// AssignmentElementList : AssignmentElisionElement

// 1. Return the result of performing IteratorDestructuringAssignmentEvaluation of AssignmentElisionElement using iteratorRecord as the argument.

// AssignmentElementList : AssignmentElementList , AssignmentElisionElement

// 1. Perform ? IteratorDestructuringAssignmentEvaluation of AssignmentElementList using iteratorRecord as the argument.
// 2. Return the result of performing IteratorDestructuringAssignmentEvaluation of AssignmentElisionElement using iteratorRecord as the argument.

// AssignmentElisionElement : AssignmentElement

// 1. Return the result of performing IteratorDestructuringAssignmentEvaluation of AssignmentElement with iteratorRecord as the argument.

// AssignmentElisionElement : Elision AssignmentElement

// 1. Perform ? IteratorDestructuringAssignmentEvaluation of Elision with iteratorRecord as the argument.
// 2. Return the result of performing IteratorDestructuringAssignmentEvaluation of AssignmentElement with iteratorRecord as the argument.

// Elision : ,

// 1. If iteratorRecord.[[Done]] is false, then
  // 1. a. Let next be IteratorStep(iteratorRecord).
  // 1. b. If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
  // 1. c. ReturnIfAbrupt(next).
  // 1. d. If next is false, set iteratorRecord.[[Done]] to true.
// 2. Return NormalCompletion(empty).

// Elision : Elision ,

// 1. Perform ? IteratorDestructuringAssignmentEvaluation of Elision with iteratorRecord as the argument.
// 2. If iteratorRecord.[[Done]] is false, then
  // 2. a. Let next be IteratorStep(iteratorRecord).
  // 2. b. If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
  // 2. c. ReturnIfAbrupt(next).
  // 2. d. If next is false, set iteratorRecord.[[Done]] to true.
// 3. Return NormalCompletion(empty).

// AssignmentElement : DestructuringAssignmentTarget Initializer opt

// 1. If DestructuringAssignmentTarget is neither an ObjectLiteral nor an ArrayLiteral, then
  // 1. a. Let lref be the result of evaluating DestructuringAssignmentTarget.
  // 1. b. ReturnIfAbrupt(lref).
// 2. If iteratorRecord.[[Done]] is false, then
  // 2. a. Let next be IteratorStep(iteratorRecord).
  // 2. b. If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
  // 2. c. ReturnIfAbrupt(next).
  // 2. d. If next is false, set iteratorRecord.[[Done]] to true.
  // 2. e. Else,
    // 2. e. i. Let value be IteratorValue(next).
    // 2. e. ii. If value is an abrupt completion, set iteratorRecord.[[Done]] to true.
    // 2. e. iii. ReturnIfAbrupt(value).
// 3. If iteratorRecord.[[Done]] is true, let value be undefined.
// 4. If Initializer is present and value is undefined, then
  // 4. a. If IsAnonymousFunctionDefinition(Initializer) and IsIdentifierRef of DestructuringAssignmentTarget are both true, then
    // 4. a. i. Let v be the result of performing NamedEvaluation for Initializer with argument GetReferencedName(lref).
  // 4. b. Else,
    // 4. b. i. Let defaultValue be the result of evaluating Initializer.
    // 4. b. ii. Let v be ? GetValue(defaultValue).
// 5. Else, let v be value.
// 6. If DestructuringAssignmentTarget is an ObjectLiteral or an ArrayLiteral, then
  // 6. a. Let nestedAssignmentPattern be the AssignmentPattern that is covered by DestructuringAssignmentTarget.
  // 6. b. Return the result of performing DestructuringAssignmentEvaluation of nestedAssignmentPattern with v as the argument.
// 7. Return ? PutValue(lref, v).

// AssignmentRestElement : ... DestructuringAssignmentTarget

// 1. If DestructuringAssignmentTarget is neither an ObjectLiteral nor an ArrayLiteral, then
  // 1. a. Let lref be the result of evaluating DestructuringAssignmentTarget.
  // 1. b. ReturnIfAbrupt(lref).
// 2. Let A be ! ArrayCreate(0).
// 3. Let n be 0.
// 4. Repeat, while iteratorRecord.[[Done]] is false,
  // 4. a. Let next be IteratorStep(iteratorRecord).
  // 4. b. If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
  // 4. c. ReturnIfAbrupt(next).
  // 4. d. If next is false, set iteratorRecord.[[Done]] to true.
  // 4. e. Else,
    // 4. e. i. Let nextValue be IteratorValue(next).
    // 4. e. ii. If nextValue is an abrupt completion, set iteratorRecord.[[Done]] to true.
    // 4. e. iii. ReturnIfAbrupt(nextValue).
    // 4. e. iv. Let status be CreateDataProperty(A, ! ToString(n), nextValue).
    // 4. e. v. Assert: status is true.
    // 4. e. vi. Increment n by 1.
// 5. If DestructuringAssignmentTarget is neither an ObjectLiteral nor an ArrayLiteral, then
  // 5. a. Return ? PutValue(lref, A).
// 6. Let nestedAssignmentPattern be the AssignmentPattern that is covered by DestructuringAssignmentTarget.
// 7. Return the result of performing DestructuringAssignmentEvaluation of nestedAssignmentPattern with A as the argument.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-keyeddestructuringassignmentevaluation

// AssignmentElement : DestructuringAssignmentTarget Initializer opt

// 1. If DestructuringAssignmentTarget is neither an ObjectLiteral nor an ArrayLiteral, then
  // 1. a. Let lref be the result of evaluating DestructuringAssignmentTarget.
  // 1. b. ReturnIfAbrupt(lref).
// 2. Let v be ? GetV(value, propertyName).
// 3. If Initializer is present and v is undefined, then
  // 3. a. If IsAnonymousFunctionDefinition(Initializer) and IsIdentifierRef of DestructuringAssignmentTarget are both true, then
    // 3. a. i. Let rhsValue be the result of performing NamedEvaluation for Initializer with argument GetReferencedName(lref).
  // 3. b. Else,
    // 3. b. i. Let defaultValue be the result of evaluating Initializer.
    // 3. b. ii. Let rhsValue be ? GetValue(defaultValue).
// 4. Else, let rhsValue be v.
// 5. If DestructuringAssignmentTarget is an ObjectLiteral or an ArrayLiteral, then
  // 5. a. Let assignmentPattern be the AssignmentPattern that is covered by DestructuringAssignmentTarget.
  // 5. b. Return the result of performing DestructuringAssignmentEvaluation of assignmentPattern with rhsValue as the argument.
// 6. Return ? PutValue(lref, rhsValue).


// http://www.ecma-international.org/ecma-262/#sec-comma-operator-static-semantics-isfunctiondefinition

// Expression : Expression , AssignmentExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-comma-operator-static-semantics-assignmenttargettype

// Expression : Expression , AssignmentExpression

// 1. Return invalid.


// http://www.ecma-international.org/ecma-262/#sec-comma-operator-runtime-semantics-evaluation

// Expression : Expression , AssignmentExpression

// 1. Let lref be the result of evaluating Expression.
// 2. Perform ? GetValue(lref).
// 3. Let rref be the result of evaluating AssignmentExpression.
// 4. Return ? GetValue(rref).


// http://www.ecma-international.org/ecma-262/#sec-statement-semantics-static-semantics-containsduplicatelabels

// Statement : VariableStatement EmptyStatement ExpressionStatement ContinueStatement BreakStatement ReturnStatement ThrowStatement DebuggerStatement

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-statement-semantics-static-semantics-containsundefinedbreaktarget

// Statement : VariableStatement EmptyStatement ExpressionStatement ContinueStatement ReturnStatement ThrowStatement DebuggerStatement

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-statement-semantics-static-semantics-containsundefinedcontinuetarget

// Statement : VariableStatement EmptyStatement ExpressionStatement BreakStatement ReturnStatement ThrowStatement DebuggerStatement

// 1. Return false.

// BreakableStatement : IterationStatement

// 1. Let newIterationSet be a copy of iterationSet with all the elements of labelSet appended.
// 2. Return ContainsUndefinedContinueTarget of IterationStatement with arguments newIterationSet and « ».


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-declarationpart

// HoistableDeclaration : FunctionDeclaration

// 1. Return FunctionDeclaration.

// HoistableDeclaration : GeneratorDeclaration

// 1. Return GeneratorDeclaration.

// HoistableDeclaration : AsyncFunctionDeclaration

// 1. Return AsyncFunctionDeclaration.

// HoistableDeclaration : AsyncGeneratorDeclaration

// 1. Return AsyncGeneratorDeclaration.

// Declaration : ClassDeclaration

// 1. Return ClassDeclaration.

// Declaration : LexicalDeclaration

// 1. Return LexicalDeclaration.


// http://www.ecma-international.org/ecma-262/#sec-statement-semantics-static-semantics-vardeclarednames

// Statement : EmptyStatement ExpressionStatement ContinueStatement BreakStatement ReturnStatement ThrowStatement DebuggerStatement

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-statement-semantics-static-semantics-varscopeddeclarations

// Statement : EmptyStatement ExpressionStatement ContinueStatement BreakStatement ReturnStatement ThrowStatement DebuggerStatement

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-statement-semantics-runtime-semantics-labelledevaluation

// BreakableStatement : IterationStatement

// 1. Let stmtResult be the result of performing LabelledEvaluation of IterationStatement with argument labelSet.
// 2. If stmtResult.[[Type]] is break, then
  // 2. a. If stmtResult.[[Target]] is empty, then
    // 2. a. i. If stmtResult.[[Value]] is empty, set stmtResult to NormalCompletion(undefined).
    // 2. a. ii. Else, set stmtResult to NormalCompletion(stmtResult.[[Value]]).
// 3. Return Completion(stmtResult).

// BreakableStatement : SwitchStatement

// 1. Let stmtResult be the result of evaluating SwitchStatement.
// 2. If stmtResult.[[Type]] is break, then
  // 2. a. If stmtResult.[[Target]] is empty, then
    // 2. a. i. If stmtResult.[[Value]] is empty, set stmtResult to NormalCompletion(undefined).
    // 2. a. ii. Else, set stmtResult to NormalCompletion(stmtResult.[[Value]]).
// 3. Return Completion(stmtResult).


// http://www.ecma-international.org/ecma-262/#sec-statement-semantics-runtime-semantics-evaluation

// HoistableDeclaration : GeneratorDeclaration AsyncFunctionDeclaration AsyncGeneratorDeclaration

// 1. Return NormalCompletion(empty).

// HoistableDeclaration : FunctionDeclaration

// 1. Return the result of evaluating FunctionDeclaration.

// BreakableStatement : IterationStatement SwitchStatement

// 1. Let newLabelSet be a new empty List.
// 2. Return the result of performing LabelledEvaluation of this BreakableStatement with argument newLabelSet.


// http://www.ecma-international.org/ecma-262/#sec-block-static-semantics-containsduplicatelabels

// Block : { }

// 1. Return false.

// StatementList : StatementList StatementListItem

// 1. Let hasDuplicates be ContainsDuplicateLabels of StatementList with argument labelSet.
// 2. If hasDuplicates is true, return true.
// 3. Return ContainsDuplicateLabels of StatementListItem with argument labelSet.

// StatementListItem : Declaration

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-block-static-semantics-containsundefinedbreaktarget

// Block : { }

// 1. Return false.

// StatementList : StatementList StatementListItem

// 1. Let hasUndefinedLabels be ContainsUndefinedBreakTarget of StatementList with argument labelSet.
// 2. If hasUndefinedLabels is true, return true.
// 3. Return ContainsUndefinedBreakTarget of StatementListItem with argument labelSet.

// StatementListItem : Declaration

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-block-static-semantics-containsundefinedcontinuetarget

// Block : { }

// 1. Return false.

// StatementList : StatementList StatementListItem

// 1. Let hasUndefinedLabels be ContainsUndefinedContinueTarget of StatementList with arguments iterationSet and « ».
// 2. If hasUndefinedLabels is true, return true.
// 3. Return ContainsUndefinedContinueTarget of StatementListItem with arguments iterationSet and « ».

// StatementListItem : Declaration

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-block-static-semantics-lexicallydeclarednames

// Block : { }

// 1. Return a new empty List.

// StatementList : StatementList StatementListItem

// 1. Let names be LexicallyDeclaredNames of StatementList.
// 2. Append to names the elements of the LexicallyDeclaredNames of StatementListItem.
// 3. Return names.

// StatementListItem : Statement

// 1. If Statement is Statement:LabelledStatement , return LexicallyDeclaredNames of LabelledStatement.
// 2. Return a new empty List.

// StatementListItem : Declaration

// 1. Return the BoundNames of Declaration.


// http://www.ecma-international.org/ecma-262/#sec-block-static-semantics-lexicallyscopeddeclarations

// StatementList : StatementList StatementListItem

// 1. Let declarations be LexicallyScopedDeclarations of StatementList.
// 2. Append to declarations the elements of the LexicallyScopedDeclarations of StatementListItem.
// 3. Return declarations.

// StatementListItem : Statement

// 1. If Statement is Statement:LabelledStatement , return LexicallyScopedDeclarations of LabelledStatement.
// 2. Return a new empty List.

// StatementListItem : Declaration

// 1. Return a new List containing DeclarationPart of Declaration.


// http://www.ecma-international.org/ecma-262/#sec-block-static-semantics-toplevellexicallydeclarednames

// StatementList : StatementList StatementListItem

// 1. Let names be TopLevelLexicallyDeclaredNames of StatementList.
// 2. Append to names the elements of the TopLevelLexicallyDeclaredNames of StatementListItem.
// 3. Return names.

// StatementListItem : Statement

// 1. Return a new empty List.

// StatementListItem : Declaration

// 1. If Declaration is Declaration:HoistableDeclaration , then
  // 1. a. Return « ».
// 2. Return the BoundNames of Declaration.


// http://www.ecma-international.org/ecma-262/#sec-block-static-semantics-toplevellexicallyscopeddeclarations

// Block : { }

// 1. Return a new empty List.

// StatementList : StatementList StatementListItem

// 1. Let declarations be TopLevelLexicallyScopedDeclarations of StatementList.
// 2. Append to declarations the elements of the TopLevelLexicallyScopedDeclarations of StatementListItem.
// 3. Return declarations.

// StatementListItem : Statement

// 1. Return a new empty List.

// StatementListItem : Declaration

// 1. If Declaration is Declaration:HoistableDeclaration , then
  // 1. a. Return « ».
// 2. Return a new List containing Declaration.


// http://www.ecma-international.org/ecma-262/#sec-block-static-semantics-toplevelvardeclarednames

// Block : { }

// 1. Return a new empty List.

// StatementList : StatementList StatementListItem

// 1. Let names be TopLevelVarDeclaredNames of StatementList.
// 2. Append to names the elements of the TopLevelVarDeclaredNames of StatementListItem.
// 3. Return names.

// StatementListItem : Declaration

// 1. If Declaration is Declaration:HoistableDeclaration , then
  // 1. a. Return the BoundNames of HoistableDeclaration.
// 2. Return a new empty List.

// StatementListItem : Statement

// 1. If Statement is Statement:LabelledStatement , return TopLevelVarDeclaredNames of Statement.
// 2. Return VarDeclaredNames of Statement.


// http://www.ecma-international.org/ecma-262/#sec-block-static-semantics-toplevelvarscopeddeclarations

// Block : { }

// 1. Return a new empty List.

// StatementList : StatementList StatementListItem

// 1. Let declarations be TopLevelVarScopedDeclarations of StatementList.
// 2. Append to declarations the elements of the TopLevelVarScopedDeclarations of StatementListItem.
// 3. Return declarations.

// StatementListItem : Statement

// 1. If Statement is Statement:LabelledStatement , return TopLevelVarScopedDeclarations of Statement.
// 2. Return VarScopedDeclarations of Statement.

// StatementListItem : Declaration

// 1. If Declaration is Declaration:HoistableDeclaration , then
  // 1. a. Let declaration be DeclarationPart of HoistableDeclaration.
  // 1. b. Return « declaration ».
// 2. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-block-static-semantics-vardeclarednames

// Block : { }

// 1. Return a new empty List.

// StatementList : StatementList StatementListItem

// 1. Let names be VarDeclaredNames of StatementList.
// 2. Append to names the elements of the VarDeclaredNames of StatementListItem.
// 3. Return names.

// StatementListItem : Declaration

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-block-static-semantics-varscopeddeclarations

// Block : { }

// 1. Return a new empty List.

// StatementList : StatementList StatementListItem

// 1. Let declarations be VarScopedDeclarations of StatementList.
// 2. Append to declarations the elements of the VarScopedDeclarations of StatementListItem.
// 3. Return declarations.

// StatementListItem : Declaration

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-block-runtime-semantics-evaluation

// Block : { }

// 1. Return NormalCompletion(empty).

// Block : { StatementList }

// 1. Let oldEnv be the running execution context's LexicalEnvironment.
// 2. Let blockEnv be NewDeclarativeEnvironment(oldEnv).
// 3. Perform BlockDeclarationInstantiation(StatementList, blockEnv).
// 4. Set the running execution context's LexicalEnvironment to blockEnv.
// 5. Let blockValue be the result of evaluating StatementList.
// 6. Set the running execution context's LexicalEnvironment to oldEnv.
// 7. Return blockValue.

// StatementList : StatementList StatementListItem

// 1. Let sl be the result of evaluating StatementList.
// 2. ReturnIfAbrupt(sl).
// 3. Let s be the result of evaluating StatementListItem.
// 4. Return Completion(UpdateEmpty(s, sl)).


// http://www.ecma-international.org/ecma-262/#sec-blockdeclarationinstantiation

// 1. Let envRec be env's EnvironmentRecord.
// 2. Assert: envRec is a declarative Environment Record.
// 3. Let declarations be the LexicallyScopedDeclarations of code.
// 4. For each element d in declarations, do
  // 4. a. For each element dn of the BoundNames of d, do
    // 4. a. i. If IsConstantDeclaration of d is true, then
      // 4. a. i. 1. Perform ! envRec.CreateImmutableBinding(dn, true).
    // 4. a. ii. Else,
      // 4. a. ii. 1. Perform ! envRec.CreateMutableBinding(dn, false).
  // 4. b. If d is a FunctionDeclaration, a GeneratorDeclaration, an AsyncFunctionDeclaration, or an AsyncGeneratorDeclaration, then
    // 4. b. i. Let fn be the sole element of the BoundNames of d.
    // 4. b. ii. Let fo be the result of performing InstantiateFunctionObject for d with argument env.
    // 4. b. iii. Perform envRec.InitializeBinding(fn, fo).


// http://www.ecma-international.org/ecma-262/#sec-let-and-const-declarations-static-semantics-boundnames

// LexicalDeclaration : LetOrConst BindingList ;

// 1. Return the BoundNames of BindingList.

// BindingList : BindingList , LexicalBinding

// 1. Let names be the BoundNames of BindingList.
// 2. Append to names the elements of the BoundNames of LexicalBinding.
// 3. Return names.

// LexicalBinding : BindingIdentifier Initializer opt

// 1. Return the BoundNames of BindingIdentifier.

// LexicalBinding : BindingPattern Initializer

// 1. Return the BoundNames of BindingPattern.


// http://www.ecma-international.org/ecma-262/#sec-let-and-const-declarations-static-semantics-isconstantdeclaration

// LexicalDeclaration : LetOrConst BindingList ;

// 1. Return IsConstantDeclaration of LetOrConst.

// LetOrConst : let

// 1. Return false.

// LetOrConst : const

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-let-and-const-declarations-runtime-semantics-evaluation

// LexicalDeclaration : LetOrConst BindingList ;

// 1. Let next be the result of evaluating BindingList.
// 2. ReturnIfAbrupt(next).
// 3. Return NormalCompletion(empty).

// BindingList : BindingList , LexicalBinding

// 1. Let next be the result of evaluating BindingList.
// 2. ReturnIfAbrupt(next).
// 3. Return the result of evaluating LexicalBinding.

// LexicalBinding : BindingIdentifier

// 1. Let lhs be ResolveBinding(StringValue of BindingIdentifier).
// 2. Return InitializeReferencedBinding(lhs, undefined).

// LexicalBinding : BindingIdentifier Initializer

// 1. Let bindingId be StringValue of BindingIdentifier.
// 2. Let lhs be ResolveBinding(bindingId).
// 3. If IsAnonymousFunctionDefinition(Initializer) is true, then
  // 3. a. Let value be the result of performing NamedEvaluation for Initializer with argument bindingId.
// 4. Else,
  // 4. a. Let rhs be the result of evaluating Initializer.
  // 4. b. Let value be ? GetValue(rhs).
// 5. Return InitializeReferencedBinding(lhs, value).

// LexicalBinding : BindingPattern Initializer

// 1. Let rhs be the result of evaluating Initializer.
// 2. Let value be ? GetValue(rhs).
// 3. Let env be the running execution context's LexicalEnvironment.
// 4. Return the result of performing BindingInitialization for BindingPattern using value and env as the arguments.


// http://www.ecma-international.org/ecma-262/#sec-variable-statement-static-semantics-boundnames

// VariableDeclarationList : VariableDeclarationList , VariableDeclaration

// 1. Let names be BoundNames of VariableDeclarationList.
// 2. Append to names the elements of BoundNames of VariableDeclaration.
// 3. Return names.

// VariableDeclaration : BindingIdentifier Initializer opt

// 1. Return the BoundNames of BindingIdentifier.

// VariableDeclaration : BindingPattern Initializer

// 1. Return the BoundNames of BindingPattern.


// http://www.ecma-international.org/ecma-262/#sec-variable-statement-static-semantics-vardeclarednames

// VariableStatement : var VariableDeclarationList ;

// 1. Return BoundNames of VariableDeclarationList.


// http://www.ecma-international.org/ecma-262/#sec-variable-statement-static-semantics-varscopeddeclarations

// VariableDeclarationList : VariableDeclaration

// 1. Return a new List containing VariableDeclaration.

// VariableDeclarationList : VariableDeclarationList , VariableDeclaration

// 1. Let declarations be VarScopedDeclarations of VariableDeclarationList.
// 2. Append VariableDeclaration to declarations.
// 3. Return declarations.


// http://www.ecma-international.org/ecma-262/#sec-variable-statement-runtime-semantics-evaluation

// VariableStatement : var VariableDeclarationList ;

// 1. Let next be the result of evaluating VariableDeclarationList.
// 2. ReturnIfAbrupt(next).
// 3. Return NormalCompletion(empty).

// VariableDeclarationList : VariableDeclarationList , VariableDeclaration

// 1. Let next be the result of evaluating VariableDeclarationList.
// 2. ReturnIfAbrupt(next).
// 3. Return the result of evaluating VariableDeclaration.

// VariableDeclaration : BindingIdentifier

// 1. Return NormalCompletion(empty).

// VariableDeclaration : BindingIdentifier Initializer

// 1. Let bindingId be StringValue of BindingIdentifier.
// 2. Let lhs be ? ResolveBinding(bindingId).
// 3. If IsAnonymousFunctionDefinition(Initializer) is true, then
  // 3. a. Let value be the result of performing NamedEvaluation for Initializer with argument bindingId.
// 4. Else,
  // 4. a. Let rhs be the result of evaluating Initializer.
  // 4. b. Let value be ? GetValue(rhs).
// 5. Return ? PutValue(lhs, value).

// VariableDeclaration : BindingPattern Initializer

// 1. Let rhs be the result of evaluating Initializer.
// 2. Let rval be ? GetValue(rhs).
// 3. Return the result of performing BindingInitialization for BindingPattern passing rval and undefined as arguments.


// http://www.ecma-international.org/ecma-262/#sec-destructuring-binding-patterns-static-semantics-boundnames

// ObjectBindingPattern : { }

// 1. Return a new empty List.

// ArrayBindingPattern : [ Elision opt ]

// 1. Return a new empty List.

// ArrayBindingPattern : [ Elision opt BindingRestElement ]

// 1. Return the BoundNames of BindingRestElement.

// ArrayBindingPattern : [ BindingElementList , Elision opt ]

// 1. Return the BoundNames of BindingElementList.

// ArrayBindingPattern : [ BindingElementList , Elision opt BindingRestElement ]

// 1. Let names be BoundNames of BindingElementList.
// 2. Append to names the elements of BoundNames of BindingRestElement.
// 3. Return names.

// BindingPropertyList : BindingPropertyList , BindingProperty

// 1. Let names be BoundNames of BindingPropertyList.
// 2. Append to names the elements of BoundNames of BindingProperty.
// 3. Return names.

// BindingElementList : BindingElementList , BindingElisionElement

// 1. Let names be BoundNames of BindingElementList.
// 2. Append to names the elements of BoundNames of BindingElisionElement.
// 3. Return names.

// BindingElisionElement : Elision opt BindingElement

// 1. Return BoundNames of BindingElement.

// BindingProperty : PropertyName : BindingElement

// 1. Return the BoundNames of BindingElement.

// SingleNameBinding : BindingIdentifier Initializer opt

// 1. Return the BoundNames of BindingIdentifier.

// BindingElement : BindingPattern Initializer opt

// 1. Return the BoundNames of BindingPattern.


// http://www.ecma-international.org/ecma-262/#sec-destructuring-binding-patterns-static-semantics-containsexpression

// ObjectBindingPattern : { }

// 1. Return false.

// ArrayBindingPattern : [ Elision opt ]

// 1. Return false.

// ArrayBindingPattern : [ Elision opt BindingRestElement ]

// 1. Return ContainsExpression of BindingRestElement.

// ArrayBindingPattern : [ BindingElementList , Elision opt ]

// 1. Return ContainsExpression of BindingElementList.

// ArrayBindingPattern : [ BindingElementList , Elision opt BindingRestElement ]

// 1. Let has be ContainsExpression of BindingElementList.
// 2. If has is true, return true.
// 3. Return ContainsExpression of BindingRestElement.

// BindingPropertyList : BindingPropertyList , BindingProperty

// 1. Let has be ContainsExpression of BindingPropertyList.
// 2. If has is true, return true.
// 3. Return ContainsExpression of BindingProperty.

// BindingElementList : BindingElementList , BindingElisionElement

// 1. Let has be ContainsExpression of BindingElementList.
// 2. If has is true, return true.
// 3. Return ContainsExpression of BindingElisionElement.

// BindingElisionElement : Elision opt BindingElement

// 1. Return ContainsExpression of BindingElement.

// BindingProperty : PropertyName : BindingElement

// 1. Let has be IsComputedPropertyKey of PropertyName.
// 2. If has is true, return true.
// 3. Return ContainsExpression of BindingElement.

// BindingElement : BindingPattern Initializer

// 1. Return true.

// SingleNameBinding : BindingIdentifier

// 1. Return false.

// SingleNameBinding : BindingIdentifier Initializer

// 1. Return true.

// BindingRestElement : ... BindingIdentifier

// 1. Return false.

// BindingRestElement : ... BindingPattern

// 1. Return ContainsExpression of BindingPattern.


// http://www.ecma-international.org/ecma-262/#sec-destructuring-binding-patterns-static-semantics-hasinitializer

// BindingElement : BindingPattern

// 1. Return false.

// BindingElement : BindingPattern Initializer

// 1. Return true.

// SingleNameBinding : BindingIdentifier

// 1. Return false.

// SingleNameBinding : BindingIdentifier Initializer

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-destructuring-binding-patterns-static-semantics-issimpleparameterlist

// BindingElement : BindingPattern

// 1. Return false.

// BindingElement : BindingPattern Initializer

// 1. Return false.

// SingleNameBinding : BindingIdentifier

// 1. Return true.

// SingleNameBinding : BindingIdentifier Initializer

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-destructuring-binding-patterns-runtime-semantics-bindinginitialization

// BindingPattern : ObjectBindingPattern

// 1. Perform ? RequireObjectCoercible(value).
// 2. Return the result of performing BindingInitialization for ObjectBindingPattern using value and environment as arguments.

// BindingPattern : ArrayBindingPattern

// 1. Let iteratorRecord be ? GetIterator(value).
// 2. Let result be IteratorBindingInitialization for ArrayBindingPattern using iteratorRecord and environment as arguments.
// 3. If iteratorRecord.[[Done]] is false, return ? IteratorClose(iteratorRecord, result).
// 4. Return result.

// ObjectBindingPattern : { }

// 1. Return NormalCompletion(empty).

// ObjectBindingPattern : { BindingPropertyList } { BindingPropertyList , }

// 1. Perform ? PropertyBindingInitialization for BindingPropertyList using value and environment as the arguments.
// 2. Return NormalCompletion(empty).

// ObjectBindingPattern : { BindingRestProperty }

// 1. Let excludedNames be a new empty List.
// 2. Return the result of performing RestBindingInitialization of BindingRestProperty with value, environment, and excludedNames as the arguments.

// ObjectBindingPattern : { BindingPropertyList , BindingRestProperty }

// 1. Let excludedNames be the result of performing ? PropertyBindingInitialization of BindingPropertyList using value and environment as arguments.
// 2. Return the result of performing RestBindingInitialization of BindingRestProperty with value, environment, and excludedNames as the arguments.


// http://www.ecma-international.org/ecma-262/#sec-destructuring-binding-patterns-runtime-semantics-propertybindinginitialization

// BindingPropertyList : BindingPropertyList , BindingProperty

// 1. Let boundNames be the result of performing ? PropertyBindingInitialization for BindingPropertyList using value and environment as arguments.
// 2. Let nextNames be the result of performing ? PropertyBindingInitialization for BindingProperty using value and environment as arguments.
// 3. Append each item in nextNames to the end of boundNames.
// 4. Return boundNames.

// BindingProperty : SingleNameBinding

// 1. Let name be the string that is the only element of BoundNames of SingleNameBinding.
// 2. Perform ? KeyedBindingInitialization for SingleNameBinding using value, environment, and name as the arguments.
// 3. Return a new List containing name.

// BindingProperty : PropertyName : BindingElement

// 1. Let P be the result of evaluating PropertyName.
// 2. ReturnIfAbrupt(P).
// 3. Perform ? KeyedBindingInitialization of BindingElement with value, environment, and P as the arguments.
// 4. Return a new List containing P.


// http://www.ecma-international.org/ecma-262/#sec-destructuring-binding-patterns-runtime-semantics-restbindinginitialization

// BindingRestProperty : ... BindingIdentifier

// 1. Let lhs be ? ResolveBinding(StringValue of BindingIdentifier, environment).
// 2. Let restObj be ObjectCreate(%ObjectPrototype%).
// 3. Perform ? CopyDataProperties(restObj, value, excludedNames).
// 4. If environment is undefined, return PutValue(lhs, restObj).
// 5. Return InitializeReferencedBinding(lhs, restObj).


// http://www.ecma-international.org/ecma-262/#sec-destructuring-binding-patterns-runtime-semantics-iteratorbindinginitialization

// ArrayBindingPattern : [ ]

// 1. Return NormalCompletion(empty).

// ArrayBindingPattern : [ Elision ]

// 1. Return the result of performing IteratorDestructuringAssignmentEvaluation of Elision with iteratorRecord as the argument.

// ArrayBindingPattern : [ Elision opt BindingRestElement ]

// 1. If Elision is present, then
  // 1. a. Perform ? IteratorDestructuringAssignmentEvaluation of Elision with iteratorRecord as the argument.
// 2. Return the result of performing IteratorBindingInitialization for BindingRestElement with iteratorRecord and environment as arguments.

// ArrayBindingPattern : [ BindingElementList ]

// 1. Return the result of performing IteratorBindingInitialization for BindingElementList with iteratorRecord and environment as arguments.

// ArrayBindingPattern : [ BindingElementList , ]

// 1. Return the result of performing IteratorBindingInitialization for BindingElementList with iteratorRecord and environment as arguments.

// ArrayBindingPattern : [ BindingElementList , Elision ]

// 1. Perform ? IteratorBindingInitialization for BindingElementList with iteratorRecord and environment as arguments.
// 2. Return the result of performing IteratorDestructuringAssignmentEvaluation of Elision with iteratorRecord as the argument.

// ArrayBindingPattern : [ BindingElementList , Elision opt BindingRestElement ]

// 1. Perform ? IteratorBindingInitialization for BindingElementList with iteratorRecord and environment as arguments.
// 2. If Elision is present, then
  // 2. a. Perform ? IteratorDestructuringAssignmentEvaluation of Elision with iteratorRecord as the argument.
// 3. Return the result of performing IteratorBindingInitialization for BindingRestElement with iteratorRecord and environment as arguments.

// BindingElementList : BindingElisionElement

// 1. Return the result of performing IteratorBindingInitialization for BindingElisionElement with iteratorRecord and environment as arguments.

// BindingElementList : BindingElementList , BindingElisionElement

// 1. Perform ? IteratorBindingInitialization for BindingElementList with iteratorRecord and environment as arguments.
// 2. Return the result of performing IteratorBindingInitialization for BindingElisionElement using iteratorRecord and environment as arguments.

// BindingElisionElement : BindingElement

// 1. Return the result of performing IteratorBindingInitialization of BindingElement with iteratorRecord and environment as the arguments.

// BindingElisionElement : Elision BindingElement

// 1. Perform ? IteratorDestructuringAssignmentEvaluation of Elision with iteratorRecord as the argument.
// 2. Return the result of performing IteratorBindingInitialization of BindingElement with iteratorRecord and environment as the arguments.

// BindingElement : SingleNameBinding

// 1. Return the result of performing IteratorBindingInitialization for SingleNameBinding with iteratorRecord and environment as the arguments.

// SingleNameBinding : BindingIdentifier Initializer opt

// 1. Let bindingId be StringValue of BindingIdentifier.
// 2. Let lhs be ? ResolveBinding(bindingId, environment).
// 3. If iteratorRecord.[[Done]] is false, then
  // 3. a. Let next be IteratorStep(iteratorRecord).
  // 3. b. If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
  // 3. c. ReturnIfAbrupt(next).
  // 3. d. If next is false, set iteratorRecord.[[Done]] to true.
  // 3. e. Else,
    // 3. e. i. Let v be IteratorValue(next).
    // 3. e. ii. If v is an abrupt completion, set iteratorRecord.[[Done]] to true.
    // 3. e. iii. ReturnIfAbrupt(v).
// 4. If iteratorRecord.[[Done]] is true, let v be undefined.
// 5. If Initializer is present and v is undefined, then
  // 5. a. If IsAnonymousFunctionDefinition(Initializer) is true, then
    // 5. a. i. Set v to the result of performing NamedEvaluation for Initializer with argument bindingId.
  // 5. b. Else,
    // 5. b. i. Let defaultValue be the result of evaluating Initializer.
    // 5. b. ii. Set v to ? GetValue(defaultValue).
// 6. If environment is undefined, return ? PutValue(lhs, v).
// 7. Return InitializeReferencedBinding(lhs, v).

// BindingElement : BindingPattern Initializer opt

// 1. If iteratorRecord.[[Done]] is false, then
  // 1. a. Let next be IteratorStep(iteratorRecord).
  // 1. b. If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
  // 1. c. ReturnIfAbrupt(next).
  // 1. d. If next is false, set iteratorRecord.[[Done]] to true.
  // 1. e. Else,
    // 1. e. i. Let v be IteratorValue(next).
    // 1. e. ii. If v is an abrupt completion, set iteratorRecord.[[Done]] to true.
    // 1. e. iii. ReturnIfAbrupt(v).
// 2. If iteratorRecord.[[Done]] is true, let v be undefined.
// 3. If Initializer is present and v is undefined, then
  // 3. a. Let defaultValue be the result of evaluating Initializer.
  // 3. b. Set v to ? GetValue(defaultValue).
// 4. Return the result of performing BindingInitialization of BindingPattern with v and environment as the arguments.

// BindingRestElement : ... BindingIdentifier

// 1. Let lhs be ? ResolveBinding(StringValue of BindingIdentifier, environment).
// 2. Let A be ! ArrayCreate(0).
// 3. Let n be 0.
// 4. Repeat,
  // 4. a. If iteratorRecord.[[Done]] is false, then
    // 4. a. i. Let next be IteratorStep(iteratorRecord).
    // 4. a. ii. If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
    // 4. a. iii. ReturnIfAbrupt(next).
    // 4. a. iv. If next is false, set iteratorRecord.[[Done]] to true.
  // 4. b. If iteratorRecord.[[Done]] is true, then
    // 4. b. i. If environment is undefined, return ? PutValue(lhs, A).
    // 4. b. ii. Return InitializeReferencedBinding(lhs, A).
  // 4. c. Let nextValue be IteratorValue(next).
  // 4. d. If nextValue is an abrupt completion, set iteratorRecord.[[Done]] to true.
  // 4. e. ReturnIfAbrupt(nextValue).
  // 4. f. Let status be CreateDataProperty(A, ! ToString(n), nextValue).
  // 4. g. Assert: status is true.
  // 4. h. Increment n by 1.

// BindingRestElement : ... BindingPattern

// 1. Let A be ! ArrayCreate(0).
// 2. Let n be 0.
// 3. Repeat,
  // 3. a. If iteratorRecord.[[Done]] is false, then
    // 3. a. i. Let next be IteratorStep(iteratorRecord).
    // 3. a. ii. If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
    // 3. a. iii. ReturnIfAbrupt(next).
    // 3. a. iv. If next is false, set iteratorRecord.[[Done]] to true.
  // 3. b. If iteratorRecord.[[Done]] is true, then
    // 3. b. i. Return the result of performing BindingInitialization of BindingPattern with A and environment as the arguments.
  // 3. c. Let nextValue be IteratorValue(next).
  // 3. d. If nextValue is an abrupt completion, set iteratorRecord.[[Done]] to true.
  // 3. e. ReturnIfAbrupt(nextValue).
  // 3. f. Let status be CreateDataProperty(A, ! ToString(n), nextValue).
  // 3. g. Assert: status is true.
  // 3. h. Increment n by 1.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-keyedbindinginitialization

// BindingElement : BindingPattern Initializer opt

// 1. Let v be ? GetV(value, propertyName).
// 2. If Initializer is present and v is undefined, then
  // 2. a. Let defaultValue be the result of evaluating Initializer.
  // 2. b. Set v to ? GetValue(defaultValue).
// 3. Return the result of performing BindingInitialization for BindingPattern passing v and environment as arguments.

// SingleNameBinding : BindingIdentifier Initializer opt

// 1. Let bindingId be StringValue of BindingIdentifier.
// 2. Let lhs be ? ResolveBinding(bindingId, environment).
// 3. Let v be ? GetV(value, propertyName).
// 4. If Initializer is present and v is undefined, then
  // 4. a. If IsAnonymousFunctionDefinition(Initializer) is true, then
    // 4. a. i. Set v to the result of performing NamedEvaluation for Initializer with argument bindingId.
  // 4. b. Else,
    // 4. b. i. Let defaultValue be the result of evaluating Initializer.
    // 4. b. ii. Set v to ? GetValue(defaultValue).
// 5. If environment is undefined, return ? PutValue(lhs, v).
// 6. Return InitializeReferencedBinding(lhs, v).


// http://www.ecma-international.org/ecma-262/#sec-empty-statement-runtime-semantics-evaluation

// EmptyStatement : ;

// 1. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-expression-statement-runtime-semantics-evaluation

// ExpressionStatement : Expression ;

// 1. Let exprRef be the result of evaluating Expression.
// 2. Return ? GetValue(exprRef).


// http://www.ecma-international.org/ecma-262/#sec-if-statement-static-semantics-containsduplicatelabels

// IfStatement : if ( Expression ) Statement else Statement

// 1. Let hasDuplicate be ContainsDuplicateLabels of the first Statement with argument labelSet.
// 2. If hasDuplicate is true, return true.
// 3. Return ContainsDuplicateLabels of the second Statement with argument labelSet.

// IfStatement : if ( Expression ) Statement

// 1. Return ContainsDuplicateLabels of Statement with argument labelSet.


// http://www.ecma-international.org/ecma-262/#sec-if-statement-static-semantics-containsundefinedbreaktarget

// IfStatement : if ( Expression ) Statement else Statement

// 1. Let hasUndefinedLabels be ContainsUndefinedBreakTarget of the first Statement with argument labelSet.
// 2. If hasUndefinedLabels is true, return true.
// 3. Return ContainsUndefinedBreakTarget of the second Statement with argument labelSet.

// IfStatement : if ( Expression ) Statement

// 1. Return ContainsUndefinedBreakTarget of Statement with argument labelSet.


// http://www.ecma-international.org/ecma-262/#sec-if-statement-static-semantics-containsundefinedcontinuetarget

// IfStatement : if ( Expression ) Statement else Statement

// 1. Let hasUndefinedLabels be ContainsUndefinedContinueTarget of the first Statement with arguments iterationSet and « ».
// 2. If hasUndefinedLabels is true, return true.
// 3. Return ContainsUndefinedContinueTarget of the second Statement with arguments iterationSet and « ».

// IfStatement : if ( Expression ) Statement

// 1. Return ContainsUndefinedContinueTarget of Statement with arguments iterationSet and « ».


// http://www.ecma-international.org/ecma-262/#sec-if-statement-static-semantics-vardeclarednames

// IfStatement : if ( Expression ) Statement else Statement

// 1. Let names be VarDeclaredNames of the first Statement.
// 2. Append to names the elements of the VarDeclaredNames of the second Statement.
// 3. Return names.

// IfStatement : if ( Expression ) Statement

// 1. Return the VarDeclaredNames of Statement.


// http://www.ecma-international.org/ecma-262/#sec-if-statement-static-semantics-varscopeddeclarations

// IfStatement : if ( Expression ) Statement else Statement

// 1. Let declarations be VarScopedDeclarations of the first Statement.
// 2. Append to declarations the elements of the VarScopedDeclarations of the second Statement.
// 3. Return declarations.

// IfStatement : if ( Expression ) Statement

// 1. Return the VarScopedDeclarations of Statement.


// http://www.ecma-international.org/ecma-262/#sec-if-statement-runtime-semantics-evaluation

// IfStatement : if ( Expression ) Statement else Statement

// 1. Let exprRef be the result of evaluating Expression.
// 2. Let exprValue be ToBoolean(? GetValue(exprRef)).
// 3. If exprValue is true, then
  // 3. a. Let stmtCompletion be the result of evaluating the first Statement.
// 4. Else,
  // 4. a. Let stmtCompletion be the result of evaluating the second Statement.
// 5. Return Completion(UpdateEmpty(stmtCompletion, undefined)).

// IfStatement : if ( Expression ) Statement

// 1. Let exprRef be the result of evaluating Expression.
// 2. Let exprValue be ToBoolean(? GetValue(exprRef)).
// 3. If exprValue is false, then
  // 3. a. Return NormalCompletion(undefined).
// 4. Else,
  // 4. a. Let stmtCompletion be the result of evaluating Statement.
  // 4. b. Return Completion(UpdateEmpty(stmtCompletion, undefined)).


// http://www.ecma-international.org/ecma-262/#sec-loopcontinues

// 1. If completion.[[Type]] is normal, return true.
// 2. If completion.[[Type]] is not continue, return false.
// 3. If completion.[[Target]] is empty, return true.
// 4. If completion.[[Target]] is an element of labelSet, return true.
// 5. Return false.


// http://www.ecma-international.org/ecma-262/#sec-do-while-statement-static-semantics-containsduplicatelabels

// IterationStatement : do Statement while ( Expression ) ;

// 1. Return ContainsDuplicateLabels of Statement with argument labelSet.


// http://www.ecma-international.org/ecma-262/#sec-do-while-statement-static-semantics-containsundefinedbreaktarget

// IterationStatement : do Statement while ( Expression ) ;

// 1. Return ContainsUndefinedBreakTarget of Statement with argument labelSet.


// http://www.ecma-international.org/ecma-262/#sec-do-while-statement-static-semantics-containsundefinedcontinuetarget

// IterationStatement : do Statement while ( Expression ) ;

// 1. Return ContainsUndefinedContinueTarget of Statement with arguments iterationSet and « ».


// http://www.ecma-international.org/ecma-262/#sec-do-while-statement-static-semantics-vardeclarednames

// IterationStatement : do Statement while ( Expression ) ;

// 1. Return the VarDeclaredNames of Statement.


// http://www.ecma-international.org/ecma-262/#sec-do-while-statement-static-semantics-varscopeddeclarations

// IterationStatement : do Statement while ( Expression ) ;

// 1. Return the VarScopedDeclarations of Statement.


// http://www.ecma-international.org/ecma-262/#sec-do-while-statement-runtime-semantics-labelledevaluation

// IterationStatement : do Statement while ( Expression ) ;

// 1. Let V be undefined.
// 2. Repeat,
  // 2. a. Let stmtResult be the result of evaluating Statement.
  // 2. b. If LoopContinues(stmtResult, labelSet) is false, return Completion(UpdateEmpty(stmtResult, V)).
  // 2. c. If stmtResult.[[Value]] is not empty, set V to stmtResult.[[Value]].
  // 2. d. Let exprRef be the result of evaluating Expression.
  // 2. e. Let exprValue be ? GetValue(exprRef).
  // 2. f. If ToBoolean(exprValue) is false, return NormalCompletion(V).


// http://www.ecma-international.org/ecma-262/#sec-while-statement-static-semantics-containsduplicatelabels

// IterationStatement : while ( Expression ) Statement

// 1. Return ContainsDuplicateLabels of Statement with argument labelSet.


// http://www.ecma-international.org/ecma-262/#sec-while-statement-static-semantics-containsundefinedbreaktarget

// IterationStatement : while ( Expression ) Statement

// 1. Return ContainsUndefinedBreakTarget of Statement with argument labelSet.


// http://www.ecma-international.org/ecma-262/#sec-while-statement-static-semantics-containsundefinedcontinuetarget

// IterationStatement : while ( Expression ) Statement

// 1. Return ContainsUndefinedContinueTarget of Statement with arguments iterationSet and « ».


// http://www.ecma-international.org/ecma-262/#sec-while-statement-static-semantics-vardeclarednames

// IterationStatement : while ( Expression ) Statement

// 1. Return the VarDeclaredNames of Statement.


// http://www.ecma-international.org/ecma-262/#sec-while-statement-static-semantics-varscopeddeclarations

// IterationStatement : while ( Expression ) Statement

// 1. Return the VarScopedDeclarations of Statement.


// http://www.ecma-international.org/ecma-262/#sec-while-statement-runtime-semantics-labelledevaluation

// IterationStatement : while ( Expression ) Statement

// 1. Let V be undefined.
// 2. Repeat,
  // 2. a. Let exprRef be the result of evaluating Expression.
  // 2. b. Let exprValue be ? GetValue(exprRef).
  // 2. c. If ToBoolean(exprValue) is false, return NormalCompletion(V).
  // 2. d. Let stmtResult be the result of evaluating Statement.
  // 2. e. If LoopContinues(stmtResult, labelSet) is false, return Completion(UpdateEmpty(stmtResult, V)).
  // 2. f. If stmtResult.[[Value]] is not empty, set V to stmtResult.[[Value]].


// http://www.ecma-international.org/ecma-262/#sec-for-statement-static-semantics-containsduplicatelabels

// IterationStatement : for ( Expression opt ; Expression opt ; Expression opt ) Statement for ( var VariableDeclarationList ; Expression opt ; Expression opt ) Statement for ( LexicalDeclaration Expression opt ; Expression opt ) Statement

// 1. Return ContainsDuplicateLabels of Statement with argument labelSet.


// http://www.ecma-international.org/ecma-262/#sec-for-statement-static-semantics-containsundefinedbreaktarget

// IterationStatement : for ( Expression opt ; Expression opt ; Expression opt ) Statement for ( var VariableDeclarationList ; Expression opt ; Expression opt ) Statement for ( LexicalDeclaration Expression opt ; Expression opt ) Statement

// 1. Return ContainsUndefinedBreakTarget of Statement with argument labelSet.


// http://www.ecma-international.org/ecma-262/#sec-for-statement-static-semantics-containsundefinedcontinuetarget

// IterationStatement : for ( Expression opt ; Expression opt ; Expression opt ) Statement for ( var VariableDeclarationList ; Expression opt ; Expression opt ) Statement for ( LexicalDeclaration Expression opt ; Expression opt ) Statement

// 1. Return ContainsUndefinedContinueTarget of Statement with arguments iterationSet and « ».


// http://www.ecma-international.org/ecma-262/#sec-for-statement-static-semantics-vardeclarednames

// IterationStatement : for ( Expression opt ; Expression opt ; Expression opt ) Statement

// 1. Return the VarDeclaredNames of Statement.

// IterationStatement : for ( var VariableDeclarationList ; Expression opt ; Expression opt ) Statement

// 1. Let names be BoundNames of VariableDeclarationList.
// 2. Append to names the elements of the VarDeclaredNames of Statement.
// 3. Return names.

// IterationStatement : for ( LexicalDeclaration Expression opt ; Expression opt ) Statement

// 1. Return the VarDeclaredNames of Statement.


// http://www.ecma-international.org/ecma-262/#sec-for-statement-static-semantics-varscopeddeclarations

// IterationStatement : for ( Expression opt ; Expression opt ; Expression opt ) Statement

// 1. Return the VarScopedDeclarations of Statement.

// IterationStatement : for ( var VariableDeclarationList ; Expression opt ; Expression opt ) Statement

// 1. Let declarations be VarScopedDeclarations of VariableDeclarationList.
// 2. Append to declarations the elements of the VarScopedDeclarations of Statement.
// 3. Return declarations.

// IterationStatement : for ( LexicalDeclaration Expression opt ; Expression opt ) Statement

// 1. Return the VarScopedDeclarations of Statement.


// http://www.ecma-international.org/ecma-262/#sec-for-statement-runtime-semantics-labelledevaluation

// IterationStatement : for ( Expression opt ; Expression opt ; Expression opt ) Statement

// 1. If the first Expression is present, then
  // 1. a. Let exprRef be the result of evaluating the first Expression.
  // 1. b. Perform ? GetValue(exprRef).
// 2. Return ? ForBodyEvaluation(the second Expression, the third Expression, Statement, « », labelSet).

// IterationStatement : for ( var VariableDeclarationList ; Expression opt ; Expression opt ) Statement

// 1. Let varDcl be the result of evaluating VariableDeclarationList.
// 2. ReturnIfAbrupt(varDcl).
// 3. Return ? ForBodyEvaluation(the first Expression, the second Expression, Statement, « », labelSet).

// IterationStatement : for ( LexicalDeclaration Expression opt ; Expression opt ) Statement

// 1. Let oldEnv be the running execution context's LexicalEnvironment.
// 2. Let loopEnv be NewDeclarativeEnvironment(oldEnv).
// 3. Let loopEnvRec be loopEnv's EnvironmentRecord.
// 4. Let isConst be the result of performing IsConstantDeclaration of LexicalDeclaration.
// 5. Let boundNames be the BoundNames of LexicalDeclaration.
// 6. For each element dn of boundNames, do
  // 6. a. If isConst is true, then
    // 6. a. i. Perform ! loopEnvRec.CreateImmutableBinding(dn, true).
  // 6. b. Else,
    // 6. b. i. Perform ! loopEnvRec.CreateMutableBinding(dn, false).
// 7. Set the running execution context's LexicalEnvironment to loopEnv.
// 8. Let forDcl be the result of evaluating LexicalDeclaration.
// 9. If forDcl is an abrupt completion, then
  // 9. a. Set the running execution context's LexicalEnvironment to oldEnv.
  // 9. b. Return Completion(forDcl).
// 10. If isConst is false, let perIterationLets be boundNames; otherwise let perIterationLets be « ».
// 11. Let bodyResult be ForBodyEvaluation(the first Expression, the second Expression, Statement, perIterationLets, labelSet).
// 12. Set the running execution context's LexicalEnvironment to oldEnv.
// 13. Return Completion(bodyResult).


// http://www.ecma-international.org/ecma-262/#sec-forbodyevaluation

// 1. Let V be undefined.
// 2. Perform ? CreatePerIterationEnvironment(perIterationBindings).
// 3. Repeat,
  // 3. a. If test is not [empty], then
    // 3. a. i. Let testRef be the result of evaluating test.
    // 3. a. ii. Let testValue be ? GetValue(testRef).
    // 3. a. iii. If ToBoolean(testValue) is false, return NormalCompletion(V).
  // 3. b. Let result be the result of evaluating stmt.
  // 3. c. If LoopContinues(result, labelSet) is false, return Completion(UpdateEmpty(result, V)).
  // 3. d. If result.[[Value]] is not empty, set V to result.[[Value]].
  // 3. e. Perform ? CreatePerIterationEnvironment(perIterationBindings).
  // 3. f. If increment is not [empty], then
    // 3. f. i. Let incRef be the result of evaluating increment.
    // 3. f. ii. Perform ? GetValue(incRef).


// http://www.ecma-international.org/ecma-262/#sec-createperiterationenvironment

// 1. If perIterationBindings has any elements, then
  // 1. a. Let lastIterationEnv be the running execution context's LexicalEnvironment.
  // 1. b. Let lastIterationEnvRec be lastIterationEnv's EnvironmentRecord.
  // 1. c. Let outer be lastIterationEnv's outer environment reference.
  // 1. d. Assert: outer is not null.
  // 1. e. Let thisIterationEnv be NewDeclarativeEnvironment(outer).
  // 1. f. Let thisIterationEnvRec be thisIterationEnv's EnvironmentRecord.
  // 1. g. For each element bn of perIterationBindings, do
    // 1. g. i. Perform ! thisIterationEnvRec.CreateMutableBinding(bn, false).
    // 1. g. ii. Let lastValue be ? lastIterationEnvRec.GetBindingValue(bn, true).
    // 1. g. iii. Perform thisIterationEnvRec.InitializeBinding(bn, lastValue).
  // 1. h. Set the running execution context's LexicalEnvironment to thisIterationEnv.
// 2. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-for-in-and-for-of-statements-static-semantics-boundnames

// ForDeclaration : LetOrConst ForBinding

// 1. Return the BoundNames of ForBinding.


// http://www.ecma-international.org/ecma-262/#sec-for-in-and-for-of-statements-static-semantics-containsduplicatelabels

// IterationStatement : for ( LeftHandSideExpression in Expression ) Statement for ( var ForBinding in Expression ) Statement for ( ForDeclaration in Expression ) Statement for ( LeftHandSideExpression of AssignmentExpression ) Statement for ( var ForBinding of AssignmentExpression ) Statement for ( ForDeclaration of AssignmentExpression ) Statement for await ( LeftHandSideExpression of AssignmentExpression ) Statement for await ( var ForBinding of AssignmentExpression ) Statement for await ( ForDeclaration of AssignmentExpression ) Statement

// 1. Return ContainsDuplicateLabels of Statement with argument labelSet.


// http://www.ecma-international.org/ecma-262/#sec-for-in-and-for-of-statements-static-semantics-containsundefinedbreaktarget

// IterationStatement : for ( LeftHandSideExpression in Expression ) Statement for ( var ForBinding in Expression ) Statement for ( ForDeclaration in Expression ) Statement for ( LeftHandSideExpression of AssignmentExpression ) Statement for ( var ForBinding of AssignmentExpression ) Statement for ( ForDeclaration of AssignmentExpression ) Statement for await ( LeftHandSideExpression of AssignmentExpression ) Statement for await ( var ForBinding of AssignmentExpression ) Statement for await ( ForDeclaration of AssignmentExpression ) Statement

// 1. Return ContainsUndefinedBreakTarget of Statement with argument labelSet.


// http://www.ecma-international.org/ecma-262/#sec-for-in-and-for-of-statements-static-semantics-containsundefinedcontinuetarget

// IterationStatement : for ( LeftHandSideExpression in Expression ) Statement for ( var ForBinding in Expression ) Statement for ( ForDeclaration in Expression ) Statement for ( LeftHandSideExpression of AssignmentExpression ) Statement for ( var ForBinding of AssignmentExpression ) Statement for ( ForDeclaration of AssignmentExpression ) Statement for await ( LeftHandSideExpression of AssignmentExpression ) Statement for await ( var ForBinding of AssignmentExpression ) Statement for await ( ForDeclaration of AssignmentExpression ) Statement

// 1. Return ContainsUndefinedContinueTarget of Statement with arguments iterationSet and « ».


// http://www.ecma-international.org/ecma-262/#sec-for-in-and-for-of-statements-static-semantics-isdestructuring

// ForDeclaration : LetOrConst ForBinding

// 1. Return IsDestructuring of ForBinding.

// ForBinding : BindingIdentifier

// 1. Return false.

// ForBinding : BindingPattern

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-for-in-and-for-of-statements-static-semantics-vardeclarednames

// IterationStatement : for ( LeftHandSideExpression in Expression ) Statement

// 1. Return the VarDeclaredNames of Statement.

// IterationStatement : for ( var ForBinding in Expression ) Statement

// 1. Let names be the BoundNames of ForBinding.
// 2. Append to names the elements of the VarDeclaredNames of Statement.
// 3. Return names.

// IterationStatement : for ( ForDeclaration in Expression ) Statement

// 1. Return the VarDeclaredNames of Statement.

// IterationStatement : for ( LeftHandSideExpression of AssignmentExpression ) Statement for await ( LeftHandSideExpression of AssignmentExpression ) Statement

// 1. Return the VarDeclaredNames of Statement.

// IterationStatement : for ( var ForBinding of AssignmentExpression ) Statement for await ( var ForBinding of AssignmentExpression ) Statement

// 1. Let names be the BoundNames of ForBinding.
// 2. Append to names the elements of the VarDeclaredNames of Statement.
// 3. Return names.

// IterationStatement : for ( ForDeclaration of AssignmentExpression ) Statement for await ( ForDeclaration of AssignmentExpression ) Statement

// 1. Return the VarDeclaredNames of Statement.


// http://www.ecma-international.org/ecma-262/#sec-for-in-and-for-of-statements-static-semantics-varscopeddeclarations

// IterationStatement : for ( LeftHandSideExpression in Expression ) Statement

// 1. Return the VarScopedDeclarations of Statement.

// IterationStatement : for ( var ForBinding in Expression ) Statement

// 1. Let declarations be a List containing ForBinding.
// 2. Append to declarations the elements of the VarScopedDeclarations of Statement.
// 3. Return declarations.

// IterationStatement : for ( ForDeclaration in Expression ) Statement for await ( LeftHandSideExpression of AssignmentExpression ) Statement

// 1. Return the VarScopedDeclarations of Statement.

// IterationStatement : for ( LeftHandSideExpression of AssignmentExpression ) Statement for await ( var ForBinding of AssignmentExpression ) Statement

// 1. Return the VarScopedDeclarations of Statement.

// IterationStatement : for ( var ForBinding of AssignmentExpression ) Statement for await ( var ForBinding of AssignmentExpression ) Statement

// 1. Let declarations be a List containing ForBinding.
// 2. Append to declarations the elements of the VarScopedDeclarations of Statement.
// 3. Return declarations.

// IterationStatement : for ( ForDeclaration of AssignmentExpression ) Statement for await ( ForDeclaration of AssignmentExpression ) Statement

// 1. Return the VarScopedDeclarations of Statement.


// http://www.ecma-international.org/ecma-262/#sec-for-in-and-for-of-statements-runtime-semantics-bindinginitialization

// ForDeclaration : LetOrConst ForBinding

// 1. Return the result of performing BindingInitialization for ForBinding passing value and environment as the arguments.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-bindinginstantiation

// ForDeclaration : LetOrConst ForBinding

// 1. Let envRec be environment's EnvironmentRecord.
// 2. Assert: envRec is a declarative Environment Record.
// 3. For each element name of the BoundNames of ForBinding, do
  // 3. a. If IsConstantDeclaration of LetOrConst is true, then
    // 3. a. i. Perform ! envRec.CreateImmutableBinding(name, true).
  // 3. b. Else,
    // 3. b. i. Perform ! envRec.CreateMutableBinding(name, false).


// http://www.ecma-international.org/ecma-262/#sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation

// IterationStatement : for ( LeftHandSideExpression in Expression ) Statement

// 1. Let keyResult be ? ForIn/OfHeadEvaluation(« », Expression, enumerate).
// 2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement, keyResult, enumerate, assignment, labelSet).

// IterationStatement : for ( var ForBinding in Expression ) Statement

// 1. Let keyResult be ? ForIn/OfHeadEvaluation(« », Expression, enumerate).
// 2. Return ? ForIn/OfBodyEvaluation(ForBinding, Statement, keyResult, enumerate, varBinding, labelSet).

// IterationStatement : for ( ForDeclaration in Expression ) Statement

// 1. Let keyResult be ? ForIn/OfHeadEvaluation(BoundNames of ForDeclaration, Expression, enumerate).
// 2. Return ? ForIn/OfBodyEvaluation(ForDeclaration, Statement, keyResult, enumerate, lexicalBinding, labelSet).

// IterationStatement : for ( LeftHandSideExpression of AssignmentExpression ) Statement

// 1. Let keyResult be ? ForIn/OfHeadEvaluation(« », AssignmentExpression, iterate).
// 2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement, keyResult, iterate, assignment, labelSet).

// IterationStatement : for ( var ForBinding of AssignmentExpression ) Statement

// 1. Let keyResult be ? ForIn/OfHeadEvaluation(« », AssignmentExpression, iterate).
// 2. Return ? ForIn/OfBodyEvaluation(ForBinding, Statement, keyResult, iterate, varBinding, labelSet).

// IterationStatement : for ( ForDeclaration of AssignmentExpression ) Statement

// 1. Let keyResult be ? ForIn/OfHeadEvaluation(BoundNames of ForDeclaration, AssignmentExpression, iterate).
// 2. Return ? ForIn/OfBodyEvaluation(ForDeclaration, Statement, keyResult, iterate, lexicalBinding, labelSet).

// IterationStatement : for await ( LeftHandSideExpression of AssignmentExpression ) Statement

// 1. Let keyResult be ? ForIn/OfHeadEvaluation(« », AssignmentExpression, async-iterate).
// 2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement, keyResult, iterate, assignment, labelSet, async).

// IterationStatement : for await ( var ForBinding of AssignmentExpression ) Statement

// 1. Let keyResult be ? ForIn/OfHeadEvaluation(« », AssignmentExpression, async-iterate).
// 2. Return ? ForIn/OfBodyEvaluation(ForBinding, Statement, keyResult, iterate, varBinding, labelSet, async).

// IterationStatement : for await ( ForDeclaration of AssignmentExpression ) Statement

// 1. Let keyResult be ? ForIn/OfHeadEvaluation(BoundNames of ForDeclaration, AssignmentExpression, async-iterate).
// 2. Return ? ForIn/OfBodyEvaluation(ForDeclaration, Statement, keyResult, iterate, lexicalBinding, labelSet, async).


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-forin-div-ofheadevaluation-tdznames-expr-iterationkind

// 1. Let oldEnv be the running execution context's LexicalEnvironment.
// 2. If TDZnames is not an empty List, then
  // 2. a. Assert: TDZnames has no duplicate entries.
  // 2. b. Let TDZ be NewDeclarativeEnvironment(oldEnv).
  // 2. c. Let TDZEnvRec be TDZ's EnvironmentRecord.
  // 2. d. For each string name in TDZnames, do
    // 2. d. i. Perform ! TDZEnvRec.CreateMutableBinding(name, false).
  // 2. e. Set the running execution context's LexicalEnvironment to TDZ.
// 3. Let exprRef be the result of evaluating expr.
// 4. Set the running execution context's LexicalEnvironment to oldEnv.
// 5. Let exprValue be ? GetValue(exprRef).
// 6. If iterationKind is enumerate, then
  // 6. a. If exprValue is undefined or null, then
    // 6. a. i. Return Completion { [[Type]]: break, [[Value]]: empty, [[Target]]: empty }.
  // 6. b. Let obj be ! ToObject(exprValue).
  // 6. c. Return ? EnumerateObjectProperties(obj).
// 7. Else,
  // 7. a. Assert: iterationKind is iterate.
  // 7. b. If iterationKind is async-iterate, let iteratorHint be async.
  // 7. c. Else, let iteratorHint be sync.
  // 7. d. Return ? GetIterator(exprValue, iteratorHint).


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-forin-div-ofbodyevaluation-lhs-stmt-iterator-lhskind-labelset

// 1. If iteratorKind is not present, set iteratorKind to sync.
// 2. Let oldEnv be the running execution context's LexicalEnvironment.
// 3. Let V be undefined.
// 4. Let destructuring be IsDestructuring of lhs.
// 5. If destructuring is true and if lhsKind is assignment, then
  // 5. a. Assert: lhs is a LeftHandSideExpression.
  // 5. b. Let assignmentPattern be the AssignmentPattern that is covered by lhs.
// 6. Repeat,
  // 6. a. Let nextResult be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « »).
  // 6. b. If iteratorKind is async, then set nextResult to ? Await(nextResult).
  // 6. c. If Type(nextResult) is not Object, throw a TypeError exception.
  // 6. d. Let done be ? IteratorComplete(nextResult).
  // 6. e. If done is true, return NormalCompletion(V).
  // 6. f. Let nextValue be ? IteratorValue(nextResult).
  // 6. g. If lhsKind is either assignment or varBinding, then
    // 6. g. i. If destructuring is false, then
      // 6. g. i. 1. Let lhsRef be the result of evaluating lhs. (It may be evaluated repeatedly.)
  // 6. h. Else,
    // 6. h. i. Assert: lhsKind is lexicalBinding.
    // 6. h. ii. Assert: lhs is a ForDeclaration.
    // 6. h. iii. Let iterationEnv be NewDeclarativeEnvironment(oldEnv).
    // 6. h. iv. Perform BindingInstantiation for lhs passing iterationEnv as the argument.
    // 6. h. v. Set the running execution context's LexicalEnvironment to iterationEnv.
    // 6. h. vi. If destructuring is false, then
      // 6. h. vi. 1. Assert: lhs binds a single name.
      // 6. h. vi. 2. Let lhsName be the sole element of BoundNames of lhs.
      // 6. h. vi. 3. Let lhsRef be ! ResolveBinding(lhsName).
  // 6. i. If destructuring is false, then
    // 6. i. i. If lhsRef is an abrupt completion, then
      // 6. i. i. 1. Let status be lhsRef.
    // 6. i. ii. Else if lhsKind is lexicalBinding, then
      // 6. i. ii. 1. Let status be InitializeReferencedBinding(lhsRef, nextValue).
    // 6. i. iii. Else,
      // 6. i. iii. 1. Let status be PutValue(lhsRef, nextValue).
  // 6. j. Else,
    // 6. j. i. If lhsKind is assignment, then
      // 6. j. i. 1. Let status be the result of performing DestructuringAssignmentEvaluation of assignmentPattern using nextValue as the argument.
    // 6. j. ii. Else if lhsKind is varBinding, then
      // 6. j. ii. 1. Assert: lhs is a ForBinding.
      // 6. j. ii. 2. Let status be the result of performing BindingInitialization for lhs passing nextValue and undefined as the arguments.
    // 6. j. iii. Else,
      // 6. j. iii. 1. Assert: lhsKind is lexicalBinding.
      // 6. j. iii. 2. Assert: lhs is a ForDeclaration.
      // 6. j. iii. 3. Let status be the result of performing BindingInitialization for lhs passing nextValue and iterationEnv as arguments.
  // 6. k. If status is an abrupt completion, then
    // 6. k. i. Set the running execution context's LexicalEnvironment to oldEnv.
    // 6. k. ii. If iteratorKind is async, return ? AsyncIteratorClose(iteratorRecord, status).
    // 6. k. iii. If iterationKind is enumerate, then
      // 6. k. iii. 1. Return status.
    // 6. k. iv. Else,
      // 6. k. iv. 1. Assert: iterationKind is iterate.
      // 6. k. iv. 2. Return ? IteratorClose(iteratorRecord, status).
  // 6. l. Let result be the result of evaluating stmt.
  // 6. m. Set the running execution context's LexicalEnvironment to oldEnv.
  // 6. n. If LoopContinues(result, labelSet) is false, then
    // 6. n. i. If iterationKind is enumerate, then
      // 6. n. i. 1. Return Completion(UpdateEmpty(result, V)).
    // 6. n. ii. Else,
      // 6. n. ii. 1. Assert: iterationKind is iterate.
      // 6. n. ii. 2. Set status to UpdateEmpty(result, V).
      // 6. n. ii. 3. If iteratorKind is async, return ? AsyncIteratorClose(iteratorRecord, status).
      // 6. n. ii. 4. Return ? IteratorClose(iteratorRecord, status).
  // 6. o. If result.[[Value]] is not empty, set V to result.[[Value]].


// http://www.ecma-international.org/ecma-262/#sec-for-in-and-for-of-statements-runtime-semantics-evaluation

// ForBinding : BindingIdentifier

// 1. Let bindingId be StringValue of BindingIdentifier.
// 2. Return ? ResolveBinding(bindingId).


// http://www.ecma-international.org/ecma-262/#sec-enumerate-object-properties

// 1. Assert: Type(O) is Object.
// 2. Return an Iterator object (25.1.1.2) whose next method iterates over all the String-valued keys of enumerable properties of O. The iterator object is never directly accessible to ECMAScript code. The mechanics and order of enumerating the properties is not specified but must conform to the rules specified below.


// http://www.ecma-international.org/ecma-262/#sec-continue-statement-static-semantics-containsundefinedcontinuetarget

// ContinueStatement : continue ;

// 1. Return false.

// ContinueStatement : continue LabelIdentifier ;

// 1. If the StringValue of LabelIdentifier is not an element of iterationSet, return true.
// 2. Return false.


// http://www.ecma-international.org/ecma-262/#sec-continue-statement-runtime-semantics-evaluation

// ContinueStatement : continue ;

// 1. Return Completion { [[Type]]: continue, [[Value]]: empty, [[Target]]: empty }.

// ContinueStatement : continue LabelIdentifier ;

// 1. Let label be the StringValue of LabelIdentifier.
// 2. Return Completion { [[Type]]: continue, [[Value]]: empty, [[Target]]: label }.


// http://www.ecma-international.org/ecma-262/#sec-break-statement-static-semantics-containsundefinedbreaktarget

// BreakStatement : break ;

// 1. Return false.

// BreakStatement : break LabelIdentifier ;

// 1. If the StringValue of LabelIdentifier is not an element of labelSet, return true.
// 2. Return false.


// http://www.ecma-international.org/ecma-262/#sec-break-statement-runtime-semantics-evaluation

// BreakStatement : break ;

// 1. Return Completion { [[Type]]: break, [[Value]]: empty, [[Target]]: empty }.

// BreakStatement : break LabelIdentifier ;

// 1. Let label be the StringValue of LabelIdentifier.
// 2. Return Completion { [[Type]]: break, [[Value]]: empty, [[Target]]: label }.


// http://www.ecma-international.org/ecma-262/#sec-return-statement-runtime-semantics-evaluation

// ReturnStatement : return ;

// 1. Return Completion { [[Type]]: return, [[Value]]: undefined, [[Target]]: empty }.

// ReturnStatement : return Expression ;

// 1. Let exprRef be the result of evaluating Expression.
// 2. Let exprValue be ? GetValue(exprRef).
// 3. If ! GetGeneratorKind() is async, set exprValue to ? Await(exprValue).
// 4. Return Completion { [[Type]]: return, [[Value]]: exprValue, [[Target]]: empty }.


// http://www.ecma-international.org/ecma-262/#sec-with-statement-static-semantics-containsduplicatelabels

// WithStatement : with ( Expression ) Statement

// 1. Return ContainsDuplicateLabels of Statement with argument labelSet.


// http://www.ecma-international.org/ecma-262/#sec-with-statement-static-semantics-containsundefinedbreaktarget

// WithStatement : with ( Expression ) Statement

// 1. Return ContainsUndefinedBreakTarget of Statement with argument labelSet.


// http://www.ecma-international.org/ecma-262/#sec-with-statement-static-semantics-containsundefinedcontinuetarget

// WithStatement : with ( Expression ) Statement

// 1. Return ContainsUndefinedContinueTarget of Statement with arguments iterationSet and « ».


// http://www.ecma-international.org/ecma-262/#sec-with-statement-static-semantics-vardeclarednames

// WithStatement : with ( Expression ) Statement

// 1. Return the VarDeclaredNames of Statement.


// http://www.ecma-international.org/ecma-262/#sec-with-statement-static-semantics-varscopeddeclarations

// WithStatement : with ( Expression ) Statement

// 1. Return the VarScopedDeclarations of Statement.


// http://www.ecma-international.org/ecma-262/#sec-with-statement-runtime-semantics-evaluation

// WithStatement : with ( Expression ) Statement

// 1. Let val be the result of evaluating Expression.
// 2. Let obj be ? ToObject(? GetValue(val)).
// 3. Let oldEnv be the running execution context's LexicalEnvironment.
// 4. Let newEnv be NewObjectEnvironment(obj, oldEnv).
// 5. Set the withEnvironment flag of newEnv's EnvironmentRecord to true.
// 6. Set the running execution context's LexicalEnvironment to newEnv.
// 7. Let C be the result of evaluating Statement.
// 8. Set the running execution context's LexicalEnvironment to oldEnv.
// 9. Return Completion(UpdateEmpty(C, undefined)).


// http://www.ecma-international.org/ecma-262/#sec-switch-statement-static-semantics-containsduplicatelabels

// SwitchStatement : switch ( Expression ) CaseBlock

// 1. Return ContainsDuplicateLabels of CaseBlock with argument labelSet.

// CaseBlock : { }

// 1. Return false.

// CaseBlock : { CaseClauses opt DefaultClause CaseClauses opt }

// 1. If the first CaseClauses is present, then
  // 1. a. Let hasDuplicates be ContainsDuplicateLabels of the first CaseClauses with argument labelSet.
  // 1. b. If hasDuplicates is true, return true.
// 2. Let hasDuplicates be ContainsDuplicateLabels of DefaultClause with argument labelSet.
// 3. If hasDuplicates is true, return true.
// 4. If the second CaseClauses is not present, return false.
// 5. Return ContainsDuplicateLabels of the second CaseClauses with argument labelSet.

// CaseClauses : CaseClauses CaseClause

// 1. Let hasDuplicates be ContainsDuplicateLabels of CaseClauses with argument labelSet.
// 2. If hasDuplicates is true, return true.
// 3. Return ContainsDuplicateLabels of CaseClause with argument labelSet.

// CaseClause : case Expression : StatementList opt

// 1. If the StatementList is present, return ContainsDuplicateLabels of StatementList with argument labelSet.
// 2. Return false.

// DefaultClause : default : StatementList opt

// 1. If the StatementList is present, return ContainsDuplicateLabels of StatementList with argument labelSet.
// 2. Return false.


// http://www.ecma-international.org/ecma-262/#sec-switch-statement-static-semantics-containsundefinedbreaktarget

// SwitchStatement : switch ( Expression ) CaseBlock

// 1. Return ContainsUndefinedBreakTarget of CaseBlock with argument labelSet.

// CaseBlock : { }

// 1. Return false.

// CaseBlock : { CaseClauses opt DefaultClause CaseClauses opt }

// 1. If the first CaseClauses is present, then
  // 1. a. Let hasUndefinedLabels be ContainsUndefinedBreakTarget of the first CaseClauses with argument labelSet.
  // 1. b. If hasUndefinedLabels is true, return true.
// 2. Let hasUndefinedLabels be ContainsUndefinedBreakTarget of DefaultClause with argument labelSet.
// 3. If hasUndefinedLabels is true, return true.
// 4. If the second CaseClauses is not present, return false.
// 5. Return ContainsUndefinedBreakTarget of the second CaseClauses with argument labelSet.

// CaseClauses : CaseClauses CaseClause

// 1. Let hasUndefinedLabels be ContainsUndefinedBreakTarget of CaseClauses with argument labelSet.
// 2. If hasUndefinedLabels is true, return true.
// 3. Return ContainsUndefinedBreakTarget of CaseClause with argument labelSet.

// CaseClause : case Expression : StatementList opt

// 1. If the StatementList is present, return ContainsUndefinedBreakTarget of StatementList with argument labelSet.
// 2. Return false.

// DefaultClause : default : StatementList opt

// 1. If the StatementList is present, return ContainsUndefinedBreakTarget of StatementList with argument labelSet.
// 2. Return false.


// http://www.ecma-international.org/ecma-262/#sec-switch-statement-static-semantics-containsundefinedcontinuetarget

// SwitchStatement : switch ( Expression ) CaseBlock

// 1. Return ContainsUndefinedContinueTarget of CaseBlock with arguments iterationSet and « ».

// CaseBlock : { }

// 1. Return false.

// CaseBlock : { CaseClauses opt DefaultClause CaseClauses opt }

// 1. If the first CaseClauses is present, then
  // 1. a. Let hasUndefinedLabels be ContainsUndefinedContinueTarget of the first CaseClauses with arguments iterationSet and « ».
  // 1. b. If hasUndefinedLabels is true, return true.
// 2. Let hasUndefinedLabels be ContainsUndefinedContinueTarget of DefaultClause with arguments iterationSet and « ».
// 3. If hasUndefinedLabels is true, return true.
// 4. If the second CaseClauses is not present, return false.
// 5. Return ContainsUndefinedContinueTarget of the second CaseClauses with arguments iterationSet and « ».

// CaseClauses : CaseClauses CaseClause

// 1. Let hasUndefinedLabels be ContainsUndefinedContinueTarget of CaseClauses with arguments iterationSet and « ».
// 2. If hasUndefinedLabels is true, return true.
// 3. Return ContainsUndefinedContinueTarget of CaseClause with arguments iterationSet and « ».

// CaseClause : case Expression : StatementList opt

// 1. If the StatementList is present, return ContainsUndefinedContinueTarget of StatementList with arguments iterationSet and « ».
// 2. Return false.

// DefaultClause : default : StatementList opt

// 1. If the StatementList is present, return ContainsUndefinedContinueTarget of StatementList with arguments iterationSet and « ».
// 2. Return false.


// http://www.ecma-international.org/ecma-262/#sec-switch-statement-static-semantics-lexicallydeclarednames

// CaseBlock : { }

// 1. Return a new empty List.

// CaseBlock : { CaseClauses opt DefaultClause CaseClauses opt }

// 1. If the first CaseClauses is present, let names be the LexicallyDeclaredNames of the first CaseClauses.
// 2. Else, let names be a new empty List.
// 3. Append to names the elements of the LexicallyDeclaredNames of the DefaultClause.
// 4. If the second CaseClauses is not present, return names.
// 5. Return the result of appending to names the elements of the LexicallyDeclaredNames of the second CaseClauses.

// CaseClauses : CaseClauses CaseClause

// 1. Let names be LexicallyDeclaredNames of CaseClauses.
// 2. Append to names the elements of the LexicallyDeclaredNames of CaseClause.
// 3. Return names.

// CaseClause : case Expression : StatementList opt

// 1. If the StatementList is present, return the LexicallyDeclaredNames of StatementList.
// 2. Return a new empty List.

// DefaultClause : default : StatementList opt

// 1. If the StatementList is present, return the LexicallyDeclaredNames of StatementList.
// 2. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-switch-statement-static-semantics-lexicallyscopeddeclarations

// CaseBlock : { }

// 1. Return a new empty List.

// CaseBlock : { CaseClauses opt DefaultClause CaseClauses opt }

// 1. If the first CaseClauses is present, let declarations be the LexicallyScopedDeclarations of the first CaseClauses.
// 2. Else, let declarations be a new empty List.
// 3. Append to declarations the elements of the LexicallyScopedDeclarations of the DefaultClause.
// 4. If the second CaseClauses is not present, return declarations.
// 5. Return the result of appending to declarations the elements of the LexicallyScopedDeclarations of the second CaseClauses.

// CaseClauses : CaseClauses CaseClause

// 1. Let declarations be LexicallyScopedDeclarations of CaseClauses.
// 2. Append to declarations the elements of the LexicallyScopedDeclarations of CaseClause.
// 3. Return declarations.

// CaseClause : case Expression : StatementList opt

// 1. If the StatementList is present, return the LexicallyScopedDeclarations of StatementList.
// 2. Return a new empty List.

// DefaultClause : default : StatementList opt

// 1. If the StatementList is present, return the LexicallyScopedDeclarations of StatementList.
// 2. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-switch-statement-static-semantics-vardeclarednames

// SwitchStatement : switch ( Expression ) CaseBlock

// 1. Return the VarDeclaredNames of CaseBlock.

// CaseBlock : { }

// 1. Return a new empty List.

// CaseBlock : { CaseClauses opt DefaultClause CaseClauses opt }

// 1. If the first CaseClauses is present, let names be the VarDeclaredNames of the first CaseClauses.
// 2. Else, let names be a new empty List.
// 3. Append to names the elements of the VarDeclaredNames of the DefaultClause.
// 4. If the second CaseClauses is not present, return names.
// 5. Return the result of appending to names the elements of the VarDeclaredNames of the second CaseClauses.

// CaseClauses : CaseClauses CaseClause

// 1. Let names be VarDeclaredNames of CaseClauses.
// 2. Append to names the elements of the VarDeclaredNames of CaseClause.
// 3. Return names.

// CaseClause : case Expression : StatementList opt

// 1. If the StatementList is present, return the VarDeclaredNames of StatementList.
// 2. Return a new empty List.

// DefaultClause : default : StatementList opt

// 1. If the StatementList is present, return the VarDeclaredNames of StatementList.
// 2. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-switch-statement-static-semantics-varscopeddeclarations

// SwitchStatement : switch ( Expression ) CaseBlock

// 1. Return the VarScopedDeclarations of CaseBlock.

// CaseBlock : { }

// 1. Return a new empty List.

// CaseBlock : { CaseClauses opt DefaultClause CaseClauses opt }

// 1. If the first CaseClauses is present, let declarations be the VarScopedDeclarations of the first CaseClauses.
// 2. Else, let declarations be a new empty List.
// 3. Append to declarations the elements of the VarScopedDeclarations of the DefaultClause.
// 4. If the second CaseClauses is not present, return declarations.
// 5. Return the result of appending to declarations the elements of the VarScopedDeclarations of the second CaseClauses.

// CaseClauses : CaseClauses CaseClause

// 1. Let declarations be VarScopedDeclarations of CaseClauses.
// 2. Append to declarations the elements of the VarScopedDeclarations of CaseClause.
// 3. Return declarations.

// CaseClause : case Expression : StatementList opt

// 1. If the StatementList is present, return the VarScopedDeclarations of StatementList.
// 2. Return a new empty List.

// DefaultClause : default : StatementList opt

// 1. If the StatementList is present, return the VarScopedDeclarations of StatementList.
// 2. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-caseblockevaluation

// CaseBlock : { }

// 1. Return NormalCompletion(undefined).

// CaseBlock : { CaseClauses }

// 1. Let V be undefined.
// 2. Let A be the List of CaseClause items in CaseClauses, in source text order.
// 3. Let found be false.
// 4. For each CaseClause C in A, do
  // 4. a. If found is false, then
    // 4. a. i. Set found to ? CaseClauseIsSelected(C, input).
  // 4. b. If found is true, then
    // 4. b. i. Let R be the result of evaluating C.
    // 4. b. ii. If R.[[Value]] is not empty, set V to R.[[Value]].
    // 4. b. iii. If R is an abrupt completion, return Completion(UpdateEmpty(R, V)).
// 5. Return NormalCompletion(V).

// CaseBlock : { CaseClauses opt DefaultClause CaseClauses opt }

// 1. Let V be undefined.
// 2. If the first CaseClauses is present, then
  // 2. a. Let A be the List of CaseClause items in the first CaseClauses, in source text order.
// 3. Else,
  // 3. a. Let A be « ».
// 4. Let found be false.
// 5. For each CaseClause C in A, do
  // 5. a. If found is false, then
    // 5. a. i. Set found to ? CaseClauseIsSelected(C, input).
  // 5. b. If found is true, then
    // 5. b. i. Let R be the result of evaluating C.
    // 5. b. ii. If R.[[Value]] is not empty, set V to R.[[Value]].
    // 5. b. iii. If R is an abrupt completion, return Completion(UpdateEmpty(R, V)).
// 6. Let foundInB be false.
// 7. If the second CaseClauses is present, then
  // 7. a. Let B be the List of CaseClause items in the second CaseClauses, in source text order.
// 8. Else,
  // 8. a. Let B be « ».
// 9. If found is false, then
  // 9. a. For each CaseClause C in B, do
    // 9. a. i. If foundInB is false, then
      // 9. a. i. 1. Set foundInB to ? CaseClauseIsSelected(C, input).
    // 9. a. ii. If foundInB is true, then
      // 9. a. ii. 1. Let R be the result of evaluating CaseClause C.
      // 9. a. ii. 2. If R.[[Value]] is not empty, set V to R.[[Value]].
      // 9. a. ii. 3. If R is an abrupt completion, return Completion(UpdateEmpty(R, V)).
// 10. If foundInB is true, return NormalCompletion(V).
// 11. Let R be the result of evaluating DefaultClause.
// 12. If R.[[Value]] is not empty, set V to R.[[Value]].
// 13. If R is an abrupt completion, return Completion(UpdateEmpty(R, V)).
// 14. For each CaseClause C in B (NOTE: this is another complete iteration of the second CaseClauses), do
  // 14. a. Let R be the result of evaluating CaseClause C.
  // 14. b. If R.[[Value]] is not empty, set V to R.[[Value]].
  // 14. c. If R is an abrupt completion, return Completion(UpdateEmpty(R, V)).
// 15. Return NormalCompletion(V).


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-caseclauseisselected

// 1. Assert: C is an instance of the production CaseClause:caseExpression:StatementListopt .
// 2. Let exprRef be the result of evaluating the Expression of C.
// 3. Let clauseSelector be ? GetValue(exprRef).
// 4. Return the result of performing Strict Equality Comparison input === clauseSelector.


// http://www.ecma-international.org/ecma-262/#sec-switch-statement-runtime-semantics-evaluation

// SwitchStatement : switch ( Expression ) CaseBlock

// 1. Let exprRef be the result of evaluating Expression.
// 2. Let switchValue be ? GetValue(exprRef).
// 3. Let oldEnv be the running execution context's LexicalEnvironment.
// 4. Let blockEnv be NewDeclarativeEnvironment(oldEnv).
// 5. Perform BlockDeclarationInstantiation(CaseBlock, blockEnv).
// 6. Set the running execution context's LexicalEnvironment to blockEnv.
// 7. Let R be the result of performing CaseBlockEvaluation of CaseBlock with argument switchValue.
// 8. Set the running execution context's LexicalEnvironment to oldEnv.
// 9. Return R.

// CaseClause : case Expression :

// 1. Return NormalCompletion(empty).

// CaseClause : case Expression : StatementList

// 1. Return the result of evaluating StatementList.

// DefaultClause : default :

// 1. Return NormalCompletion(empty).

// DefaultClause : default : StatementList

// 1. Return the result of evaluating StatementList.


// http://www.ecma-international.org/ecma-262/#sec-labelled-statements-static-semantics-containsduplicatelabels

// LabelledStatement : LabelIdentifier : LabelledItem

// 1. Let label be the StringValue of LabelIdentifier.
// 2. If label is an element of labelSet, return true.
// 3. Let newLabelSet be a copy of labelSet with label appended.
// 4. Return ContainsDuplicateLabels of LabelledItem with argument newLabelSet.

// LabelledItem : FunctionDeclaration

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-labelled-statements-static-semantics-containsundefinedbreaktarget

// LabelledStatement : LabelIdentifier : LabelledItem

// 1. Let label be the StringValue of LabelIdentifier.
// 2. Let newLabelSet be a copy of labelSet with label appended.
// 3. Return ContainsUndefinedBreakTarget of LabelledItem with argument newLabelSet.

// LabelledItem : FunctionDeclaration

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-labelled-statements-static-semantics-containsundefinedcontinuetarget

// LabelledStatement : LabelIdentifier : LabelledItem

// 1. Let label be the StringValue of LabelIdentifier.
// 2. Let newLabelSet be a copy of labelSet with label appended.
// 3. Return ContainsUndefinedContinueTarget of LabelledItem with arguments iterationSet and newLabelSet.

// LabelledItem : FunctionDeclaration

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-islabelledfunction

// 1. If stmt is not a LabelledStatement, return false.
// 2. Let item be the LabelledItem of stmt.
// 3. If item is LabelledItem:FunctionDeclaration , return true.
// 4. Let subStmt be the Statement of item.
// 5. Return IsLabelledFunction(subStmt).


// http://www.ecma-international.org/ecma-262/#sec-labelled-statements-static-semantics-lexicallydeclarednames

// LabelledStatement : LabelIdentifier : LabelledItem

// 1. Return the LexicallyDeclaredNames of LabelledItem.

// LabelledItem : Statement

// 1. Return a new empty List.

// LabelledItem : FunctionDeclaration

// 1. Return BoundNames of FunctionDeclaration.


// http://www.ecma-international.org/ecma-262/#sec-labelled-statements-static-semantics-lexicallyscopeddeclarations

// LabelledStatement : LabelIdentifier : LabelledItem

// 1. Return the LexicallyScopedDeclarations of LabelledItem.

// LabelledItem : Statement

// 1. Return a new empty List.

// LabelledItem : FunctionDeclaration

// 1. Return a new List containing FunctionDeclaration.


// http://www.ecma-international.org/ecma-262/#sec-labelled-statements-static-semantics-toplevellexicallydeclarednames

// LabelledStatement : LabelIdentifier : LabelledItem

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-labelled-statements-static-semantics-toplevellexicallyscopeddeclarations

// LabelledStatement : LabelIdentifier : LabelledItem

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-labelled-statements-static-semantics-toplevelvardeclarednames

// LabelledStatement : LabelIdentifier : LabelledItem

// 1. Return the TopLevelVarDeclaredNames of LabelledItem.

// LabelledItem : Statement

// 1. If Statement is Statement:LabelledStatement , return TopLevelVarDeclaredNames of Statement.
// 2. Return VarDeclaredNames of Statement.

// LabelledItem : FunctionDeclaration

// 1. Return BoundNames of FunctionDeclaration.


// http://www.ecma-international.org/ecma-262/#sec-labelled-statements-static-semantics-toplevelvarscopeddeclarations

// LabelledStatement : LabelIdentifier : LabelledItem

// 1. Return the TopLevelVarScopedDeclarations of LabelledItem.

// LabelledItem : Statement

// 1. If Statement is Statement:LabelledStatement , return TopLevelVarScopedDeclarations of Statement.
// 2. Return VarScopedDeclarations of Statement.

// LabelledItem : FunctionDeclaration

// 1. Return a new List containing FunctionDeclaration.


// http://www.ecma-international.org/ecma-262/#sec-labelled-statements-static-semantics-vardeclarednames

// LabelledStatement : LabelIdentifier : LabelledItem

// 1. Return the VarDeclaredNames of LabelledItem.

// LabelledItem : FunctionDeclaration

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-labelled-statements-static-semantics-varscopeddeclarations

// LabelledStatement : LabelIdentifier : LabelledItem

// 1. Return the VarScopedDeclarations of LabelledItem.

// LabelledItem : FunctionDeclaration

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-labelled-statements-runtime-semantics-labelledevaluation

// LabelledStatement : LabelIdentifier : LabelledItem

// 1. Let label be the StringValue of LabelIdentifier.
// 2. Append label as an element of labelSet.
// 3. Let stmtResult be LabelledEvaluation of LabelledItem with argument labelSet.
// 4. If stmtResult.[[Type]] is break and SameValue(stmtResult.[[Target]], label) is true, then
  // 4. a. Set stmtResult to NormalCompletion(stmtResult.[[Value]]).
// 5. Return Completion(stmtResult).

// LabelledItem : Statement

// 1. If Statement is either a LabelledStatement or a BreakableStatement, then
  // 1. a. Return LabelledEvaluation of Statement with argument labelSet.
// 2. Else,
  // 2. a. Return the result of evaluating Statement.

// LabelledItem : FunctionDeclaration

// 1. Return the result of evaluating FunctionDeclaration.


// http://www.ecma-international.org/ecma-262/#sec-labelled-statements-runtime-semantics-evaluation

// LabelledStatement : LabelIdentifier : LabelledItem

// 1. Let newLabelSet be a new empty List.
// 2. Return LabelledEvaluation of this LabelledStatement with argument newLabelSet.


// http://www.ecma-international.org/ecma-262/#sec-throw-statement-runtime-semantics-evaluation

// ThrowStatement : throw Expression ;

// 1. Let exprRef be the result of evaluating Expression.
// 2. Let exprValue be ? GetValue(exprRef).
// 3. Return ThrowCompletion(exprValue).


// http://www.ecma-international.org/ecma-262/#sec-try-statement-static-semantics-containsduplicatelabels

// TryStatement : try Block Catch

// 1. Let hasDuplicates be ContainsDuplicateLabels of Block with argument labelSet.
// 2. If hasDuplicates is true, return true.
// 3. Return ContainsDuplicateLabels of Catch with argument labelSet.

// TryStatement : try Block Finally

// 1. Let hasDuplicates be ContainsDuplicateLabels of Block with argument labelSet.
// 2. If hasDuplicates is true, return true.
// 3. Return ContainsDuplicateLabels of Finally with argument labelSet.

// TryStatement : try Block Catch Finally

// 1. Let hasDuplicates be ContainsDuplicateLabels of Block with argument labelSet.
// 2. If hasDuplicates is true, return true.
// 3. Let hasDuplicates be ContainsDuplicateLabels of Catch with argument labelSet.
// 4. If hasDuplicates is true, return true.
// 5. Return ContainsDuplicateLabels of Finally with argument labelSet.

// Catch : catch ( CatchParameter ) Block

// 1. Return ContainsDuplicateLabels of Block with argument labelSet.


// http://www.ecma-international.org/ecma-262/#sec-try-statement-static-semantics-containsundefinedbreaktarget

// TryStatement : try Block Catch

// 1. Let hasUndefinedLabels be ContainsUndefinedBreakTarget of Block with argument labelSet.
// 2. If hasUndefinedLabels is true, return true.
// 3. Return ContainsUndefinedBreakTarget of Catch with argument labelSet.

// TryStatement : try Block Finally

// 1. Let hasUndefinedLabels be ContainsUndefinedBreakTarget of Block with argument labelSet.
// 2. If hasUndefinedLabels is true, return true.
// 3. Return ContainsUndefinedBreakTarget of Finally with argument labelSet.

// TryStatement : try Block Catch Finally

// 1. Let hasUndefinedLabels be ContainsUndefinedBreakTarget of Block with argument labelSet.
// 2. If hasUndefinedLabels is true, return true.
// 3. Let hasUndefinedLabels be ContainsUndefinedBreakTarget of Catch with argument labelSet.
// 4. If hasUndefinedLabels is true, return true.
// 5. Return ContainsUndefinedBreakTarget of Finally with argument labelSet.

// Catch : catch ( CatchParameter ) Block

// 1. Return ContainsUndefinedBreakTarget of Block with argument labelSet.


// http://www.ecma-international.org/ecma-262/#sec-try-statement-static-semantics-containsundefinedcontinuetarget

// TryStatement : try Block Catch

// 1. Let hasUndefinedLabels be ContainsUndefinedContinueTarget of Block with arguments iterationSet and « ».
// 2. If hasUndefinedLabels is true, return true.
// 3. Return ContainsUndefinedContinueTarget of Catch with arguments iterationSet and « ».

// TryStatement : try Block Finally

// 1. Let hasUndefinedLabels be ContainsUndefinedContinueTarget of Block with arguments iterationSet and « ».
// 2. If hasUndefinedLabels is true, return true.
// 3. Return ContainsUndefinedContinueTarget of Finally with arguments iterationSet and « ».

// TryStatement : try Block Catch Finally

// 1. Let hasUndefinedLabels be ContainsUndefinedContinueTarget of Block with arguments iterationSet and « ».
// 2. If hasUndefinedLabels is true, return true.
// 3. Let hasUndefinedLabels be ContainsUndefinedContinueTarget of Catch with arguments iterationSet and « ».
// 4. If hasUndefinedLabels is true, return true.
// 5. Return ContainsUndefinedContinueTarget of Finally with arguments iterationSet and « ».

// Catch : catch ( CatchParameter ) Block

// 1. Return ContainsUndefinedContinueTarget of Block with arguments iterationSet and « ».


// http://www.ecma-international.org/ecma-262/#sec-try-statement-static-semantics-vardeclarednames

// TryStatement : try Block Catch

// 1. Let names be VarDeclaredNames of Block.
// 2. Append to names the elements of the VarDeclaredNames of Catch.
// 3. Return names.

// TryStatement : try Block Finally

// 1. Let names be VarDeclaredNames of Block.
// 2. Append to names the elements of the VarDeclaredNames of Finally.
// 3. Return names.

// TryStatement : try Block Catch Finally

// 1. Let names be VarDeclaredNames of Block.
// 2. Append to names the elements of the VarDeclaredNames of Catch.
// 3. Append to names the elements of the VarDeclaredNames of Finally.
// 4. Return names.

// Catch : catch ( CatchParameter ) Block

// 1. Return the VarDeclaredNames of Block.


// http://www.ecma-international.org/ecma-262/#sec-try-statement-static-semantics-varscopeddeclarations

// TryStatement : try Block Catch

// 1. Let declarations be VarScopedDeclarations of Block.
// 2. Append to declarations the elements of the VarScopedDeclarations of Catch.
// 3. Return declarations.

// TryStatement : try Block Finally

// 1. Let declarations be VarScopedDeclarations of Block.
// 2. Append to declarations the elements of the VarScopedDeclarations of Finally.
// 3. Return declarations.

// TryStatement : try Block Catch Finally

// 1. Let declarations be VarScopedDeclarations of Block.
// 2. Append to declarations the elements of the VarScopedDeclarations of Catch.
// 3. Append to declarations the elements of the VarScopedDeclarations of Finally.
// 4. Return declarations.

// Catch : catch ( CatchParameter ) Block

// 1. Return the VarScopedDeclarations of Block.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-catchclauseevaluation

// Catch : catch ( CatchParameter ) Block

// 1. Let oldEnv be the running execution context's LexicalEnvironment.
// 2. Let catchEnv be NewDeclarativeEnvironment(oldEnv).
// 3. Let catchEnvRec be catchEnv's EnvironmentRecord.
// 4. For each element argName of the BoundNames of CatchParameter, do
  // 4. a. Perform ! catchEnvRec.CreateMutableBinding(argName, false).
// 5. Set the running execution context's LexicalEnvironment to catchEnv.
// 6. Let status be the result of performing BindingInitialization for CatchParameter passing thrownValue and catchEnv as arguments.
// 7. If status is an abrupt completion, then
  // 7. a. Set the running execution context's LexicalEnvironment to oldEnv.
  // 7. b. Return Completion(status).
// 8. Let B be the result of evaluating Block.
// 9. Set the running execution context's LexicalEnvironment to oldEnv.
// 10. Return Completion(B).

// Catch : catch Block

// 1. Return the result of evaluating Block.


// http://www.ecma-international.org/ecma-262/#sec-try-statement-runtime-semantics-evaluation

// TryStatement : try Block Catch

// 1. Let B be the result of evaluating Block.
// 2. If B.[[Type]] is throw, let C be CatchClauseEvaluation of Catch with argument B.[[Value]].
// 3. Else, let C be B.
// 4. Return Completion(UpdateEmpty(C, undefined)).

// TryStatement : try Block Finally

// 1. Let B be the result of evaluating Block.
// 2. Let F be the result of evaluating Finally.
// 3. If F.[[Type]] is normal, set F to B.
// 4. Return Completion(UpdateEmpty(F, undefined)).

// TryStatement : try Block Catch Finally

// 1. Let B be the result of evaluating Block.
// 2. If B.[[Type]] is throw, let C be CatchClauseEvaluation of Catch with argument B.[[Value]].
// 3. Else, let C be B.
// 4. Let F be the result of evaluating Finally.
// 5. If F.[[Type]] is normal, set F to C.
// 6. Return Completion(UpdateEmpty(F, undefined)).


// http://www.ecma-international.org/ecma-262/#sec-debugger-statement-runtime-semantics-evaluation

// DebuggerStatement : debugger ;

// 1. If an implementation-defined debugging facility is available and enabled, then
  // 1. a. Perform an implementation-defined debugging action.
  // 1. b. Let result be an implementation-defined Completion value.
// 2. Else,
  // 2. a. Let result be NormalCompletion(empty).
// 3. Return result.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-static-semantics-boundnames

// FunctionDeclaration : function BindingIdentifier ( FormalParameters ) { FunctionBody }

// 1. Return the BoundNames of BindingIdentifier.

// FunctionDeclaration : function ( FormalParameters ) { FunctionBody }

// 1. Return « "*default*" ».

// FormalParameters : [empty]

// 1. Return a new empty List.

// FormalParameters : FormalParameterList , FunctionRestParameter

// 1. Let names be BoundNames of FormalParameterList.
// 2. Append to names the BoundNames of FunctionRestParameter.
// 3. Return names.

// FormalParameterList : FormalParameterList , FormalParameter

// 1. Let names be BoundNames of FormalParameterList.
// 2. Append to names the BoundNames of FormalParameter.
// 3. Return names.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-static-semantics-contains

// FunctionDeclaration : function BindingIdentifier ( FormalParameters ) { FunctionBody } FunctionDeclaration : function ( FormalParameters ) { FunctionBody } FunctionExpression : function BindingIdentifier opt ( FormalParameters ) { FunctionBody }

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-static-semantics-containsexpression

// FormalParameters : [empty]

// 1. Return false.

// FormalParameters : FormalParameterList , FunctionRestParameter

// 1. If ContainsExpression of FormalParameterList is true, return true.
// 2. Return ContainsExpression of FunctionRestParameter.

// FormalParameterList : FormalParameterList , FormalParameter

// 1. If ContainsExpression of FormalParameterList is true, return true.
// 2. Return ContainsExpression of FormalParameter.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-static-semantics-containsusestrict

// FunctionBody : FunctionStatementList

// 1. If the Directive Prologue of FunctionStatementList contains a Use Strict Directive, return true; otherwise, return false.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-static-semantics-expectedargumentcount

// FormalParameters : [empty]

// 1. Return 0.

// FormalParameters : FormalParameterList , FunctionRestParameter

// 1. Return ExpectedArgumentCount of FormalParameterList.

// FormalParameterList : FormalParameterList , FormalParameter

// 1. Let count be ExpectedArgumentCount of FormalParameterList.
// 2. If HasInitializer of FormalParameterList is true or HasInitializer of FormalParameter is true, return count.
// 3. Return count + 1.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-static-semantics-hasinitializer

// FormalParameterList : FormalParameterList , FormalParameter

// 1. If HasInitializer of FormalParameterList is true, return true.
// 2. Return HasInitializer of FormalParameter.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-static-semantics-hasname

// FunctionExpression : function ( FormalParameters ) { FunctionBody }

// 1. Return false.

// FunctionExpression : function BindingIdentifier ( FormalParameters ) { FunctionBody }

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-isanonymousfunctiondefinition

// 1. If IsFunctionDefinition of expr is false, return false.
// 2. Let hasName be the result of HasName of expr.
// 3. If hasName is true, return false.
// 4. Return true.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-static-semantics-isconstantdeclaration

// FunctionDeclaration : function BindingIdentifier ( FormalParameters ) { FunctionBody } FunctionDeclaration : function ( FormalParameters ) { FunctionBody }

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-static-semantics-isfunctiondefinition

// FunctionExpression : function BindingIdentifier opt ( FormalParameters ) { FunctionBody }

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-static-semantics-issimpleparameterlist

// FormalParameters : [empty]

// 1. Return true.

// FormalParameters : FormalParameterList , FunctionRestParameter

// 1. Return false.

// FormalParameterList : FormalParameterList , FormalParameter

// 1. If IsSimpleParameterList of FormalParameterList is false, return false.
// 2. Return IsSimpleParameterList of FormalParameter.

// FormalParameter : BindingElement

// 1. Return IsSimpleParameterList of BindingElement.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-static-semantics-lexicallydeclarednames

// FunctionStatementList : [empty]

// 1. Return a new empty List.

// FunctionStatementList : StatementList

// 1. Return TopLevelLexicallyDeclaredNames of StatementList.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-static-semantics-lexicallyscopeddeclarations

// FunctionStatementList : [empty]

// 1. Return a new empty List.

// FunctionStatementList : StatementList

// 1. Return the TopLevelLexicallyScopedDeclarations of StatementList.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-static-semantics-vardeclarednames

// FunctionStatementList : [empty]

// 1. Return a new empty List.

// FunctionStatementList : StatementList

// 1. Return TopLevelVarDeclaredNames of StatementList.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-static-semantics-varscopeddeclarations

// FunctionStatementList : [empty]

// 1. Return a new empty List.

// FunctionStatementList : StatementList

// 1. Return the TopLevelVarScopedDeclarations of StatementList.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-runtime-semantics-evaluatebody

// FunctionBody : FunctionStatementList

// 1. Perform ? FunctionDeclarationInstantiation(functionObject, argumentsList).
// 2. Return the result of evaluating FunctionStatementList.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-runtime-semantics-iteratorbindinginitialization

// FormalParameters : [empty]

// 1. Return NormalCompletion(empty).

// FormalParameters : FormalParameterList , FunctionRestParameter

// 1. Perform ? IteratorBindingInitialization for FormalParameterList using iteratorRecord and environment as the arguments.
// 2. Return the result of performing IteratorBindingInitialization for FunctionRestParameter using iteratorRecord and environment as the arguments.

// FormalParameterList : FormalParameterList , FormalParameter

// 1. Perform ? IteratorBindingInitialization for FormalParameterList using iteratorRecord and environment as the arguments.
// 2. Return the result of performing IteratorBindingInitialization for FormalParameter using iteratorRecord and environment as the arguments.

// FormalParameter : BindingElement

// 1. If ContainsExpression of BindingElement is false, return the result of performing IteratorBindingInitialization for BindingElement using iteratorRecord and environment as the arguments.
// 2. Let currentContext be the running execution context.
// 3. Let originalEnv be the VariableEnvironment of currentContext.
// 4. Assert: The VariableEnvironment and LexicalEnvironment of currentContext are the same.
// 5. Assert: environment and originalEnv are the same.
// 6. Let paramVarEnv be NewDeclarativeEnvironment(originalEnv).
// 7. Set the VariableEnvironment of currentContext to paramVarEnv.
// 8. Set the LexicalEnvironment of currentContext to paramVarEnv.
// 9. Let result be the result of performing IteratorBindingInitialization for BindingElement using iteratorRecord and environment as the arguments.
// 10. Set the VariableEnvironment of currentContext to originalEnv.
// 11. Set the LexicalEnvironment of currentContext to originalEnv.
// 12. Return result.

// FunctionRestParameter : BindingRestElement

// 1. If ContainsExpression of BindingRestElement is false, return the result of performing IteratorBindingInitialization for BindingRestElement using iteratorRecord and environment as the arguments.
// 2. Let currentContext be the running execution context.
// 3. Let originalEnv be the VariableEnvironment of currentContext.
// 4. Assert: The VariableEnvironment and LexicalEnvironment of currentContext are the same.
// 5. Assert: environment and originalEnv are the same.
// 6. Let paramVarEnv be NewDeclarativeEnvironment(originalEnv).
// 7. Set the VariableEnvironment of currentContext to paramVarEnv.
// 8. Set the LexicalEnvironment of currentContext to paramVarEnv.
// 9. Let result be the result of performing IteratorBindingInitialization for BindingRestElement using iteratorRecord and environment as the arguments.
// 10. Set the VariableEnvironment of currentContext to originalEnv.
// 11. Set the LexicalEnvironment of currentContext to originalEnv.
// 12. Return result.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-runtime-semantics-instantiatefunctionobject

// FunctionDeclaration : function BindingIdentifier ( FormalParameters ) { FunctionBody }

// 1. If the function code for FunctionDeclaration is strict mode code, let strict be true. Otherwise let strict be false.
// 2. Let name be StringValue of BindingIdentifier.
// 3. Let F be FunctionCreate(Normal, FormalParameters, FunctionBody, scope, strict).
// 4. Perform MakeConstructor(F).
// 5. Perform SetFunctionName(F, name).
// 6. Set F.[[SourceText]] to the source text matched by FunctionDeclaration.
// 7. Return F.

// FunctionDeclaration : function ( FormalParameters ) { FunctionBody }

// 1. Let F be FunctionCreate(Normal, FormalParameters, FunctionBody, scope, true).
// 2. Perform MakeConstructor(F).
// 3. Perform SetFunctionName(F, "default").
// 4. Set F.[[SourceText]] to the source text matched by FunctionDeclaration.
// 5. Return F.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-runtime-semantics-namedevaluation

// FunctionExpression : function ( FormalParameters ) { FunctionBody }

// 1. Let closure be the result of evaluating this FunctionExpression.
// 2. Perform SetFunctionName(closure, name).
// 3. Return closure.


// http://www.ecma-international.org/ecma-262/#sec-function-definitions-runtime-semantics-evaluation

// FunctionDeclaration : function BindingIdentifier ( FormalParameters ) { FunctionBody }

// 1. Return NormalCompletion(empty).

// FunctionDeclaration : function ( FormalParameters ) { FunctionBody }

// 1. Return NormalCompletion(empty).

// FunctionExpression : function ( FormalParameters ) { FunctionBody }

// 1. If the function code for FunctionExpression is strict mode code, let strict be true. Otherwise let strict be false.
// 2. Let scope be the LexicalEnvironment of the running execution context.
// 3. Let closure be FunctionCreate(Normal, FormalParameters, FunctionBody, scope, strict).
// 4. Perform MakeConstructor(closure).
// 5. Set closure.[[SourceText]] to the source text matched by FunctionExpression.
// 6. Return closure.

// FunctionExpression : function BindingIdentifier ( FormalParameters ) { FunctionBody }

// 1. If the function code for FunctionExpression is strict mode code, let strict be true. Otherwise let strict be false.
// 2. Let scope be the running execution context's LexicalEnvironment.
// 3. Let funcEnv be NewDeclarativeEnvironment(scope).
// 4. Let envRec be funcEnv's EnvironmentRecord.
// 5. Let name be StringValue of BindingIdentifier.
// 6. Perform envRec.CreateImmutableBinding(name, false).
// 7. Let closure be FunctionCreate(Normal, FormalParameters, FunctionBody, funcEnv, strict).
// 8. Perform MakeConstructor(closure).
// 9. Perform SetFunctionName(closure, name).
// 10. Set closure.[[SourceText]] to the source text matched by FunctionExpression.
// 11. Perform envRec.InitializeBinding(name, closure).
// 12. Return closure.

// FunctionStatementList : [empty]

// 1. Return NormalCompletion(undefined).


// http://www.ecma-international.org/ecma-262/#sec-arrow-function-definitions-static-semantics-boundnames

// ArrowParameters : CoverParenthesizedExpressionAndArrowParameterList

// 1. Let formals be CoveredFormalsList of CoverParenthesizedExpressionAndArrowParameterList.
// 2. Return the BoundNames of formals.


// http://www.ecma-international.org/ecma-262/#sec-arrow-function-definitions-static-semantics-contains

// ArrowFunction : ArrowParameters => ConciseBody

// 1. If symbol is not one of NewTarget, SuperProperty, SuperCall, super or this, return false.
// 2. If ArrowParameters Contains symbol is true, return true.
// 3. Return ConciseBody Contains symbol.

// ArrowParameters : CoverParenthesizedExpressionAndArrowParameterList

// 1. Let formals be CoveredFormalsList of CoverParenthesizedExpressionAndArrowParameterList.
// 2. Return formals Contains symbol.


// http://www.ecma-international.org/ecma-262/#sec-arrow-function-definitions-static-semantics-containsexpression

// ArrowParameters : BindingIdentifier

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-arrow-function-definitions-static-semantics-containsusestrict

// ConciseBody : AssignmentExpression

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-arrow-function-definitions-static-semantics-expectedargumentcount

// ArrowParameters : BindingIdentifier

// 1. Return 1.


// http://www.ecma-international.org/ecma-262/#sec-arrow-function-definitions-static-semantics-hasname

// ArrowFunction : ArrowParameters => ConciseBody

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-arrow-function-definitions-static-semantics-issimpleparameterlist

// ArrowParameters : BindingIdentifier

// 1. Return true.

// ArrowParameters : CoverParenthesizedExpressionAndArrowParameterList

// 1. Let formals be CoveredFormalsList of CoverParenthesizedExpressionAndArrowParameterList.
// 2. Return IsSimpleParameterList of formals.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-coveredformalslist

// ArrowParameters : BindingIdentifier

// 1. Return this ArrowParameters.

// CoverParenthesizedExpressionAndArrowParameterList : ( Expression ) ( ) ( ... BindingIdentifier ) ( ... BindingPattern ) ( Expression , ... BindingIdentifier ) ( Expression , ... BindingPattern )

// 1. Return the ArrowFormalParameters that is covered by CoverParenthesizedExpressionAndArrowParameterList.


// http://www.ecma-international.org/ecma-262/#sec-arrow-function-definitions-static-semantics-lexicallydeclarednames

// ConciseBody : AssignmentExpression

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-arrow-function-definitions-static-semantics-lexicallyscopeddeclarations

// ConciseBody : AssignmentExpression

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-arrow-function-definitions-static-semantics-vardeclarednames

// ConciseBody : AssignmentExpression

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-arrow-function-definitions-static-semantics-varscopeddeclarations

// ConciseBody : AssignmentExpression

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-arrow-function-definitions-runtime-semantics-iteratorbindinginitialization

// ArrowParameters : BindingIdentifier

// 1. Assert: iteratorRecord.[[Done]] is false.
// 2. Let next be IteratorStep(iteratorRecord).
// 3. If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
// 4. ReturnIfAbrupt(next).
// 5. If next is false, set iteratorRecord.[[Done]] to true.
// 6. Else,
  // 6. a. Let v be IteratorValue(next).
  // 6. b. If v is an abrupt completion, set iteratorRecord.[[Done]] to true.
  // 6. c. ReturnIfAbrupt(v).
// 7. If iteratorRecord.[[Done]] is true, let v be undefined.
// 8. Return the result of performing BindingInitialization for BindingIdentifier using v and environment as the arguments.


// http://www.ecma-international.org/ecma-262/#sec-arrow-function-definitions-runtime-semantics-evaluatebody

// ConciseBody : AssignmentExpression

// 1. Perform ? FunctionDeclarationInstantiation(functionObject, argumentsList).
// 2. Let exprRef be the result of evaluating AssignmentExpression.
// 3. Let exprValue be ? GetValue(exprRef).
// 4. Return Completion { [[Type]]: return, [[Value]]: exprValue, [[Target]]: empty }.


// http://www.ecma-international.org/ecma-262/#sec-arrow-function-definitions-runtime-semantics-namedevaluation

// ArrowFunction : ArrowParameters => ConciseBody

// 1. Let closure be the result of evaluating this ArrowFunction.
// 2. Perform SetFunctionName(closure, name).
// 3. Return closure.


// http://www.ecma-international.org/ecma-262/#sec-arrow-function-definitions-runtime-semantics-evaluation

// ArrowFunction : ArrowParameters => ConciseBody

// 1. If the function code for this ArrowFunction is strict mode code, let strict be true. Otherwise let strict be false.
// 2. Let scope be the LexicalEnvironment of the running execution context.
// 3. Let parameters be CoveredFormalsList of ArrowParameters.
// 4. Let closure be FunctionCreate(Arrow, parameters, ConciseBody, scope, strict).
// 5. Set closure.[[SourceText]] to the source text matched by ArrowFunction.
// 6. Return closure.


// http://www.ecma-international.org/ecma-262/#sec-method-definitions-static-semantics-computedpropertycontains

// MethodDefinition : PropertyName ( UniqueFormalParameters ) { FunctionBody } get PropertyName ( ) { FunctionBody } set PropertyName ( PropertySetParameterList ) { FunctionBody }

// 1. Return the result of ComputedPropertyContains for PropertyName with argument symbol.


// http://www.ecma-international.org/ecma-262/#sec-method-definitions-static-semantics-expectedargumentcount

// PropertySetParameterList : FormalParameter

// 1. If HasInitializer of FormalParameter is true, return 0.
// 2. Return 1.


// http://www.ecma-international.org/ecma-262/#sec-method-definitions-static-semantics-hasdirectsuper

// MethodDefinition : PropertyName ( UniqueFormalParameters ) { FunctionBody }

// 1. If UniqueFormalParameters Contains SuperCall is true, return true.
// 2. Return FunctionBody Contains SuperCall.

// MethodDefinition : get PropertyName ( ) { FunctionBody }

// 1. Return FunctionBody Contains SuperCall.

// MethodDefinition : set PropertyName ( PropertySetParameterList ) { FunctionBody }

// 1. If PropertySetParameterList Contains SuperCall is true, return true.
// 2. Return FunctionBody Contains SuperCall.


// http://www.ecma-international.org/ecma-262/#sec-method-definitions-static-semantics-propname

// MethodDefinition : PropertyName ( UniqueFormalParameters ) { FunctionBody } get PropertyName ( ) { FunctionBody } set PropertyName ( PropertySetParameterList ) { FunctionBody }

// 1. Return PropName of PropertyName.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-specialmethod

// MethodDefinition : PropertyName ( UniqueFormalParameters ) { FunctionBody }

// 1. Return false.

// MethodDefinition : GeneratorMethod AsyncMethod AsyncGeneratorMethod get PropertyName ( ) { FunctionBody } set PropertyName ( PropertySetParameterList ) { FunctionBody }

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-definemethod

// MethodDefinition : PropertyName ( UniqueFormalParameters ) { FunctionBody }

// 1. Let propKey be the result of evaluating PropertyName.
// 2. ReturnIfAbrupt(propKey).
// 3. If the function code for this MethodDefinition is strict mode code, let strict be true. Otherwise let strict be false.
// 4. Let scope be the running execution context's LexicalEnvironment.
// 5. If functionPrototype is present as a parameter, then
  // 5. a. Let kind be Normal.
  // 5. b. Let prototype be functionPrototype.
// 6. Else,
  // 6. a. Let kind be Method.
  // 6. b. Let prototype be the intrinsic object %FunctionPrototype%.
// 7. Let closure be FunctionCreate(kind, UniqueFormalParameters, FunctionBody, scope, strict, prototype).
// 8. Perform MakeMethod(closure, object).
// 9. Set closure.[[SourceText]] to the source text matched by MethodDefinition.
// 10. Return the Record { [[Key]]: propKey, [[Closure]]: closure }.


// http://www.ecma-international.org/ecma-262/#sec-method-definitions-runtime-semantics-propertydefinitionevaluation

// MethodDefinition : PropertyName ( UniqueFormalParameters ) { FunctionBody }

// 1. Let methodDef be DefineMethod of MethodDefinition with argument object.
// 2. ReturnIfAbrupt(methodDef).
// 3. Perform SetFunctionName(methodDef.[[Closure]], methodDef.[[Key]]).
// 4. Let desc be the PropertyDescriptor { [[Value]]: methodDef.[[Closure]], [[Writable]]: true, [[Enumerable]]: enumerable, [[Configurable]]: true }.
// 5. Return ? DefinePropertyOrThrow(object, methodDef.[[Key]], desc).

// MethodDefinition : get PropertyName ( ) { FunctionBody }

// 1. Let propKey be the result of evaluating PropertyName.
// 2. ReturnIfAbrupt(propKey).
// 3. If the function code for this MethodDefinition is strict mode code, let strict be true. Otherwise let strict be false.
// 4. Let scope be the running execution context's LexicalEnvironment.
// 5. Let formalParameterList be an instance of the production FormalParameters:[empty] .
// 6. Let closure be FunctionCreate(Method, formalParameterList, FunctionBody, scope, strict).
// 7. Perform MakeMethod(closure, object).
// 8. Perform SetFunctionName(closure, propKey, "get").
// 9. Set closure.[[SourceText]] to the source text matched by MethodDefinition.
// 10. Let desc be the PropertyDescriptor { [[Get]]: closure, [[Enumerable]]: enumerable, [[Configurable]]: true }.
// 11. Return ? DefinePropertyOrThrow(object, propKey, desc).

// MethodDefinition : set PropertyName ( PropertySetParameterList ) { FunctionBody }

// 1. Let propKey be the result of evaluating PropertyName.
// 2. ReturnIfAbrupt(propKey).
// 3. If the function code for this MethodDefinition is strict mode code, let strict be true. Otherwise let strict be false.
// 4. Let scope be the running execution context's LexicalEnvironment.
// 5. Let closure be FunctionCreate(Method, PropertySetParameterList, FunctionBody, scope, strict).
// 6. Perform MakeMethod(closure, object).
// 7. Perform SetFunctionName(closure, propKey, "set").
// 8. Set closure.[[SourceText]] to the source text matched by MethodDefinition.
// 9. Let desc be the PropertyDescriptor { [[Set]]: closure, [[Enumerable]]: enumerable, [[Configurable]]: true }.
// 10. Return ? DefinePropertyOrThrow(object, propKey, desc).


// http://www.ecma-international.org/ecma-262/#sec-generator-function-definitions-static-semantics-boundnames

// GeneratorDeclaration : function * BindingIdentifier ( FormalParameters ) { GeneratorBody }

// 1. Return the BoundNames of BindingIdentifier.

// GeneratorDeclaration : function * ( FormalParameters ) { GeneratorBody }

// 1. Return « "*default*" ».


// http://www.ecma-international.org/ecma-262/#sec-generator-function-definitions-static-semantics-computedpropertycontains

// GeneratorMethod : * PropertyName ( UniqueFormalParameters ) { GeneratorBody }

// 1. Return the result of ComputedPropertyContains for PropertyName with argument symbol.


// http://www.ecma-international.org/ecma-262/#sec-generator-function-definitions-static-semantics-contains

// GeneratorDeclaration : function * BindingIdentifier ( FormalParameters ) { GeneratorBody } GeneratorDeclaration : function * ( FormalParameters ) { GeneratorBody } GeneratorExpression : function * BindingIdentifier opt ( FormalParameters ) { GeneratorBody }

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-generator-function-definitions-static-semantics-hasdirectsuper

// GeneratorMethod : * PropertyName ( UniqueFormalParameters ) { GeneratorBody }

// 1. If UniqueFormalParameters Contains SuperCall is true, return true.
// 2. Return GeneratorBody Contains SuperCall.


// http://www.ecma-international.org/ecma-262/#sec-generator-function-definitions-static-semantics-hasname

// GeneratorExpression : function * ( FormalParameters ) { GeneratorBody }

// 1. Return false.

// GeneratorExpression : function * BindingIdentifier ( FormalParameters ) { GeneratorBody }

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-generator-function-definitions-static-semantics-isconstantdeclaration

// GeneratorDeclaration : function * BindingIdentifier ( FormalParameters ) { GeneratorBody } GeneratorDeclaration : function * ( FormalParameters ) { GeneratorBody }

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-generator-function-definitions-static-semantics-isfunctiondefinition

// GeneratorExpression : function * BindingIdentifier opt ( FormalParameters ) { GeneratorBody }

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-generator-function-definitions-static-semantics-propname

// GeneratorMethod : * PropertyName ( UniqueFormalParameters ) { GeneratorBody }

// 1. Return PropName of PropertyName.


// http://www.ecma-international.org/ecma-262/#sec-generator-function-definitions-runtime-semantics-evaluatebody

// GeneratorBody : FunctionBody

// 1. Perform ? FunctionDeclarationInstantiation(functionObject, argumentsList).
// 2. Let G be ? OrdinaryCreateFromConstructor(functionObject, "%GeneratorPrototype%", « [[GeneratorState]], [[GeneratorContext]] »).
// 3. Perform GeneratorStart(G, FunctionBody).
// 4. Return Completion { [[Type]]: return, [[Value]]: G, [[Target]]: empty }.


// http://www.ecma-international.org/ecma-262/#sec-generator-function-definitions-runtime-semantics-instantiatefunctionobject

// GeneratorDeclaration : function * BindingIdentifier ( FormalParameters ) { GeneratorBody }

// 1. If the function code for GeneratorDeclaration is strict mode code, let strict be true. Otherwise let strict be false.
// 2. Let name be StringValue of BindingIdentifier.
// 3. Let F be GeneratorFunctionCreate(Normal, FormalParameters, GeneratorBody, scope, strict).
// 4. Let prototype be ObjectCreate(%GeneratorPrototype%).
// 5. Perform DefinePropertyOrThrow(F, "prototype", PropertyDescriptor { [[Value]]: prototype, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false }).
// 6. Perform SetFunctionName(F, name).
// 7. Set F.[[SourceText]] to the source text matched by GeneratorDeclaration.
// 8. Return F.

// GeneratorDeclaration : function * ( FormalParameters ) { GeneratorBody }

// 1. Let F be GeneratorFunctionCreate(Normal, FormalParameters, GeneratorBody, scope, true).
// 2. Let prototype be ObjectCreate(%GeneratorPrototype%).
// 3. Perform DefinePropertyOrThrow(F, "prototype", PropertyDescriptor { [[Value]]: prototype, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false }).
// 4. Perform SetFunctionName(F, "default").
// 5. Set F.[[SourceText]] to the source text matched by GeneratorDeclaration.
// 6. Return F.


// http://www.ecma-international.org/ecma-262/#sec-generator-function-definitions-runtime-semantics-propertydefinitionevaluation

// GeneratorMethod : * PropertyName ( UniqueFormalParameters ) { GeneratorBody }

// 1. Let propKey be the result of evaluating PropertyName.
// 2. ReturnIfAbrupt(propKey).
// 3. If the function code for this GeneratorMethod is strict mode code, let strict be true. Otherwise let strict be false.
// 4. Let scope be the running execution context's LexicalEnvironment.
// 5. Let closure be GeneratorFunctionCreate(Method, UniqueFormalParameters, GeneratorBody, scope, strict).
// 6. Perform MakeMethod(closure, object).
// 7. Let prototype be ObjectCreate(%GeneratorPrototype%).
// 8. Perform DefinePropertyOrThrow(closure, "prototype", PropertyDescriptor { [[Value]]: prototype, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false }).
// 9. Perform SetFunctionName(closure, propKey).
// 10. Set closure.[[SourceText]] to the source text matched by GeneratorMethod.
// 11. Let desc be the PropertyDescriptor { [[Value]]: closure, [[Writable]]: true, [[Enumerable]]: enumerable, [[Configurable]]: true }.
// 12. Return ? DefinePropertyOrThrow(object, propKey, desc).


// http://www.ecma-international.org/ecma-262/#sec-generator-function-definitions-runtime-semantics-namedevaluation

// GeneratorExpression : function * ( FormalParameters ) { GeneratorBody }

// 1. Let closure be the result of evaluating this GeneratorExpression.
// 2. Perform SetFunctionName(closure, name).
// 3. Return closure.


// http://www.ecma-international.org/ecma-262/#sec-generator-function-definitions-runtime-semantics-evaluation

// GeneratorExpression : function * ( FormalParameters ) { GeneratorBody }

// 1. If the function code for this GeneratorExpression is strict mode code, let strict be true. Otherwise let strict be false.
// 2. Let scope be the LexicalEnvironment of the running execution context.
// 3. Let closure be GeneratorFunctionCreate(Normal, FormalParameters, GeneratorBody, scope, strict).
// 4. Let prototype be ObjectCreate(%GeneratorPrototype%).
// 5. Perform DefinePropertyOrThrow(closure, "prototype", PropertyDescriptor { [[Value]]: prototype, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false }).
// 6. Set closure.[[SourceText]] to the source text matched by GeneratorExpression.
// 7. Return closure.

// GeneratorExpression : function * BindingIdentifier ( FormalParameters ) { GeneratorBody }

// 1. If the function code for this GeneratorExpression is strict mode code, let strict be true. Otherwise let strict be false.
// 2. Let scope be the running execution context's LexicalEnvironment.
// 3. Let funcEnv be NewDeclarativeEnvironment(scope).
// 4. Let envRec be funcEnv's EnvironmentRecord.
// 5. Let name be StringValue of BindingIdentifier.
// 6. Perform envRec.CreateImmutableBinding(name, false).
// 7. Let closure be GeneratorFunctionCreate(Normal, FormalParameters, GeneratorBody, funcEnv, strict).
// 8. Let prototype be ObjectCreate(%GeneratorPrototype%).
// 9. Perform DefinePropertyOrThrow(closure, "prototype", PropertyDescriptor { [[Value]]: prototype, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false }).
// 10. Perform SetFunctionName(closure, name).
// 11. Perform envRec.InitializeBinding(name, closure).
// 12. Set closure.[[SourceText]] to the source text matched by GeneratorExpression.
// 13. Return closure.

// YieldExpression : yield

// 1. Let generatorKind be ! GetGeneratorKind().
// 2. If generatorKind is async, then return ? AsyncGeneratorYield(undefined).
// 3. Otherwise, return ? GeneratorYield(CreateIterResultObject(undefined, false)).

// YieldExpression : yield AssignmentExpression

// 1. Let generatorKind be ! GetGeneratorKind().
// 2. Let exprRef be the result of evaluating AssignmentExpression.
// 3. Let value be ? GetValue(exprRef).
// 4. If generatorKind is async, then return ? AsyncGeneratorYield(value).
// 5. Otherwise, return ? GeneratorYield(CreateIterResultObject(value, false)).

// YieldExpression : yield * AssignmentExpression

// 1. Let generatorKind be ! GetGeneratorKind().
// 2. Let exprRef be the result of evaluating AssignmentExpression.
// 3. Let value be ? GetValue(exprRef).
// 4. Let iteratorRecord be ? GetIterator(value, generatorKind).
// 5. Let iterator be iteratorRecord.[[Iterator]].
// 6. Let received be NormalCompletion(undefined).
// 7. Repeat,
  // 7. a. If received.[[Type]] is normal, then
    // 7. a. i. Let innerResult be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « received.[[Value]] »).
    // 7. a. ii. If generatorKind is async, then set innerResult to ? Await(innerResult).
    // 7. a. iii. If Type(innerResult) is not Object, throw a TypeError exception.
    // 7. a. iv. Let done be ? IteratorComplete(innerResult).
    // 7. a. v. If done is true, then
      // 7. a. v. 1. Return ? IteratorValue(innerResult).
    // 7. a. vi. If generatorKind is async, then set received to AsyncGeneratorYield(? IteratorValue(innerResult)).
    // 7. a. vii. Else, set received to GeneratorYield(innerResult).
  // 7. b. Else if received.[[Type]] is throw, then
    // 7. b. i. Let throw be ? GetMethod(iterator, "throw").
    // 7. b. ii. If throw is not undefined, then
      // 7. b. ii. 1. Let innerResult be ? Call(throw, iterator, « received.[[Value]] »).
      // 7. b. ii. 2. If generatorKind is async, then set innerResult to ? Await(innerResult).
      // 7. b. ii. 3. NOTE: Exceptions from the inner iterator throw method are propagated. Normal completions from an inner throw method are processed similarly to an inner next.
      // 7. b. ii. 4. If Type(innerResult) is not Object, throw a TypeError exception.
      // 7. b. ii. 5. Let done be ? IteratorComplete(innerResult).
      // 7. b. ii. 6. If done is true, then
        // 7. b. ii. 6. a. Return ? IteratorValue(innerResult).
      // 7. b. ii. 7. If generatorKind is async, then set received to AsyncGeneratorYield(? IteratorValue(innerResult)).
      // 7. b. ii. 8. Else, set received to GeneratorYield(innerResult).
    // 7. b. iii. Else,
      // 7. b. iii. 1. NOTE: If iterator does not have a throw method, this throw is going to terminate the yield* loop. But first we need to give iterator a chance to clean up.
      // 7. b. iii. 2. Let closeCompletion be Completion { [[Type]]: normal, [[Value]]: empty, [[Target]]: empty }.
      // 7. b. iii. 3. If generatorKind is async, perform ? AsyncIteratorClose(iteratorRecord, closeCompletion).
      // 7. b. iii. 4. Else, perform ? IteratorClose(iteratorRecord, closeCompletion).
      // 7. b. iii. 5. NOTE: The next step throws a TypeError to indicate that there was a yield* protocol violation: iterator does not have a throw method.
      // 7. b. iii. 6. Throw a TypeError exception.
  // 7. c. Else,
    // 7. c. i. Assert: received.[[Type]] is return.
    // 7. c. ii. Let return be ? GetMethod(iterator, "return").
    // 7. c. iii. If return is undefined, then
      // 7. c. iii. 1. If generatorKind is async, then set received.[[Value]] to ? Await(received.[[Value]]).
      // 7. c. iii. 2. Return Completion(received).
    // 7. c. iv. Let innerReturnResult be ? Call(return, iterator, « received.[[Value]] »).
    // 7. c. v. If generatorKind is async, then set innerReturnResult to ? Await(innerReturnResult).
    // 7. c. vi. If Type(innerReturnResult) is not Object, throw a TypeError exception.
    // 7. c. vii. Let done be ? IteratorComplete(innerReturnResult).
    // 7. c. viii. If done is true, then
      // 7. c. viii. 1. Let value be ? IteratorValue(innerReturnResult).
      // 7. c. viii. 2. Return Completion { [[Type]]: return, [[Value]]: value, [[Target]]: empty }.
    // 7. c. ix. If generatorKind is async, then set received to AsyncGeneratorYield(? IteratorValue(innerReturnResult)).
    // 7. c. x. Else, set received to GeneratorYield(innerReturnResult).


// http://www.ecma-international.org/ecma-262/#sec-async-generator-function-definitions-static-semantics-boundnames

// AsyncGeneratorDeclaration : async function * BindingIdentifier ( FormalParameters ) { AsyncGeneratorBody }

// 1. Return the BoundNames of BindingIdentifier.

// AsyncGeneratorDeclaration : async function * ( FormalParameters ) { AsyncGeneratorBody }

// 1. Return « "*default*" ».


// http://www.ecma-international.org/ecma-262/#sec-async-generator-function-definitions-static-semantics-computedpropertycontains

// AsyncGeneratorMethod : async * PropertyName ( UniqueFormalParameters ) { AsyncGeneratorBody }

// 1. Return the result of ComputedPropertyContains for PropertyName with argument symbol.


// http://www.ecma-international.org/ecma-262/#sec-async-generator-function-definitions-static-semantics-contains

// AsyncGeneratorDeclaration : async function * BindingIdentifier ( FormalParameters ) { AsyncGeneratorBody } AsyncGeneratorDeclaration : async function * ( FormalParameters ) { AsyncGeneratorBody } AsyncGeneratorExpression : async function * BindingIdentifier opt ( FormalParameters ) { AsyncGeneratorBody }

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-async-generator-function-definitions-static-semantics-hasdirectsuper

// AsyncGeneratorMethod : async * PropertyName ( UniqueFormalParameters ) { AsyncGeneratorBody }

// 1. If UniqueFormalParameters Contains SuperCall is true, return true.
// 2. Return AsyncGeneratorBody Contains SuperCall.


// http://www.ecma-international.org/ecma-262/#sec-async-generator-function-definitions-static-semantics-hasname

// AsyncGeneratorExpression : async function * ( FormalParameters ) { AsyncGeneratorBody }

// 1. Return false.

// AsyncGeneratorExpression : async function * BindingIdentifier ( FormalParameters ) { AsyncGeneratorBody }

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-async-generator-function-definitions-static-semantics-isconstantdeclaration

// AsyncGeneratorDeclaration : async function * BindingIdentifier ( FormalParameters ) { AsyncGeneratorBody } AsyncGeneratorDeclaration : async function * ( FormalParameters ) { AsyncGeneratorBody }

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-async-generator-function-definitions-static-semantics-isfunctiondefinition

// AsyncGeneratorExpression : async function * BindingIdentifier opt ( FormalParameters ) { AsyncGeneratorBody }

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-async-generator-function-definitions-static-semantics-propname

// AsyncGeneratorMethod : async * PropertyName ( UniqueFormalParameters ) { AsyncGeneratorBody }

// 1. Return PropName of PropertyName.


// http://www.ecma-international.org/ecma-262/#sec-asyncgenerator-definitions-evaluatebody

// AsyncGeneratorBody : FunctionBody

// 1. Perform ? FunctionDeclarationInstantiation(functionObject, argumentsList).
// 2. Let generator be ? OrdinaryCreateFromConstructor(functionObject, "%AsyncGeneratorPrototype%", « [[AsyncGeneratorState]], [[AsyncGeneratorContext]], [[AsyncGeneratorQueue]] »).
// 3. Perform ! AsyncGeneratorStart(generator, FunctionBody).
// 4. Return Completion { [[Type]]: return, [[Value]]: generator, [[Target]]: empty }.


// http://www.ecma-international.org/ecma-262/#sec-asyncgenerator-definitions-instantiatefunctionobject

// AsyncGeneratorDeclaration : async function * BindingIdentifier ( FormalParameters ) { AsyncGeneratorBody }

// 1. If the function code for AsyncGeneratorDeclaration is strict mode code, let strict be true. Otherwise let strict be false.
// 2. Let name be StringValue of BindingIdentifier.
// 3. Let F be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters, AsyncGeneratorBody, scope, strict).
// 4. Let prototype be ! ObjectCreate(%AsyncGeneratorPrototype%).
// 5. Perform ! DefinePropertyOrThrow(F, "prototype", PropertyDescriptor { [[Value]]: prototype, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false }).
// 6. Perform ! SetFunctionName(F, name).
// 7. Set F.[[SourceText]] to the source text matched by AsyncGeneratorDeclaration.
// 8. Return F.

// AsyncGeneratorDeclaration : async function * ( FormalParameters ) { AsyncGeneratorBody }

// 1. If the function code for AsyncGeneratorDeclaration is strict mode code, let strict be true. Otherwise let strict be false.
// 2. Let F be AsyncGeneratorFunctionCreate(Normal, FormalParameters, AsyncGeneratorBody, scope, strict).
// 3. Let prototype be ObjectCreate(%AsyncGeneratorPrototype%).
// 4. Perform DefinePropertyOrThrow(F, "prototype", PropertyDescriptor { [[Value]]: prototype, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false }).
// 5. Perform SetFunctionName(F, "default").
// 6. Set F.[[SourceText]] to the source text matched by AsyncGeneratorDeclaration.
// 7. Return F.


// http://www.ecma-international.org/ecma-262/#sec-asyncgenerator-definitions-propertydefinitionevaluation

// AsyncGeneratorMethod : async * PropertyName ( UniqueFormalParameters ) { AsyncGeneratorBody }

// 1. Let propKey be the result of evaluating PropertyName.
// 2. ReturnIfAbrupt(propKey).
// 3. If the function code for this AsyncGeneratorMethod is strict mode code, let strict be true. Otherwise let strict be false.
// 4. Let scope be the running execution context's LexicalEnvironment.
// 5. Let closure be ! AsyncGeneratorFunctionCreate(Method, UniqueFormalParameters, AsyncGeneratorBody, scope, strict).
// 6. Perform ! MakeMethod(closure, object).
// 7. Let prototype be ! ObjectCreate(%AsyncGeneratorPrototype%).
// 8. Perform ! DefinePropertyOrThrow(closure, "prototype", PropertyDescriptor { [[Value]]: prototype, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false }).
// 9. Perform ! SetFunctionName(closure, propKey).
// 10. Set closure.[[SourceText]] to the source text matched by AsyncGeneratorMethod.
// 11. Let desc be PropertyDescriptor { [[Value]]: closure, [[Writable]]: true, [[Enumerable]]: enumerable, [[Configurable]]: true }.
// 12. Return ? DefinePropertyOrThrow(object, propKey, desc).


// http://www.ecma-international.org/ecma-262/#sec-asyncgenerator-definitions-namedevaluation

// AsyncGeneratorExpression : async function * ( FormalParameters ) { AsyncGeneratorBody }

// 1. Let closure be the result of evaluating this AsyncGeneratorExpression.
// 2. Perform SetFunctionName(closure, name).
// 3. Return closure.


// http://www.ecma-international.org/ecma-262/#sec-asyncgenerator-definitions-evaluation

// AsyncGeneratorExpression : async function * ( FormalParameters ) { AsyncGeneratorBody }

// 1. If the function code for this AsyncGeneratorExpression is strict mode code, let strict be true. Otherwise let strict be false.
// 2. Let scope be the LexicalEnvironment of the running execution context.
// 3. Let closure be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters, AsyncGeneratorBody, scope, strict).
// 4. Let prototype be ! ObjectCreate(%AsyncGeneratorPrototype%).
// 5. Perform ! DefinePropertyOrThrow(closure, "prototype", PropertyDescriptor { [[Value]]: prototype, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false }).
// 6. Set closure.[[SourceText]] to the source text matched by AsyncGeneratorExpression.
// 7. Return closure.

// AsyncGeneratorExpression : async function * BindingIdentifier ( FormalParameters ) { AsyncGeneratorBody }

// 1. If the function code for this AsyncGeneratorExpression is strict mode code, let strict be true. Otherwise let strict be false.
// 2. Let scope be the running execution context's LexicalEnvironment.
// 3. Let funcEnv be ! NewDeclarativeEnvironment(scope).
// 4. Let envRec be funcEnv's EnvironmentRecord.
// 5. Let name be StringValue of BindingIdentifier.
// 6. Perform ! envRec.CreateImmutableBinding(name).
// 7. Let closure be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters, AsyncGeneratorBody, funcEnv, strict).
// 8. Let prototype be ! ObjectCreate(%AsyncGeneratorPrototype%).
// 9. Perform ! DefinePropertyOrThrow(closure, "prototype", PropertyDescriptor { [[Value]]: prototype, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false }).
// 10. Perform ! SetFunctionName(closure, name).
// 11. Perform ! envRec.InitializeBinding(name, closure).
// 12. Set closure.[[SourceText]] to the source text matched by AsyncGeneratorExpression.
// 13. Return closure.


// http://www.ecma-international.org/ecma-262/#sec-class-definitions-static-semantics-boundnames

// ClassDeclaration : class BindingIdentifier ClassTail

// 1. Return the BoundNames of BindingIdentifier.

// ClassDeclaration : class ClassTail

// 1. Return « "*default*" ».


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-constructormethod

// ClassElementList : ClassElement

// 1. If ClassElement is ClassElement:; , return empty.
// 2. If IsStatic of ClassElement is true, return empty.
// 3. If PropName of ClassElement is not "constructor", return empty.
// 4. Return ClassElement.

// ClassElementList : ClassElementList ClassElement

// 1. Let head be ConstructorMethod of ClassElementList.
// 2. If head is not empty, return head.
// 3. If ClassElement is ClassElement:; , return empty.
// 4. If IsStatic of ClassElement is true, return empty.
// 5. If PropName of ClassElement is not "constructor", return empty.
// 6. Return ClassElement.


// http://www.ecma-international.org/ecma-262/#sec-class-definitions-static-semantics-contains

// ClassTail : ClassHeritage opt { ClassBody }

// 1. If symbol is ClassBody, return true.
// 2. If symbol is ClassHeritage, then
  // 2. a. If ClassHeritage is present, return true; otherwise return false.
// 3. Let inHeritage be ClassHeritage Contains symbol.
// 4. If inHeritage is true, return true.
// 5. Return the result of ComputedPropertyContains for ClassBody with argument symbol.


// http://www.ecma-international.org/ecma-262/#sec-class-definitions-static-semantics-computedpropertycontains

// ClassElementList : ClassElementList ClassElement

// 1. Let inList be the result of ComputedPropertyContains for ClassElementList with argument symbol.
// 2. If inList is true, return true.
// 3. Return the result of ComputedPropertyContains for ClassElement with argument symbol.

// ClassElement : MethodDefinition

// 1. Return the result of ComputedPropertyContains for MethodDefinition with argument symbol.

// ClassElement : static MethodDefinition

// 1. Return the result of ComputedPropertyContains for MethodDefinition with argument symbol.

// ClassElement : ;

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-class-definitions-static-semantics-hasname

// ClassExpression : class ClassTail

// 1. Return false.

// ClassExpression : class BindingIdentifier ClassTail

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-class-definitions-static-semantics-isconstantdeclaration

// ClassDeclaration : class BindingIdentifier ClassTail ClassDeclaration : class ClassTail

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-class-definitions-static-semantics-isfunctiondefinition

// ClassExpression : class BindingIdentifier opt ClassTail

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-isstatic

// ClassElement : MethodDefinition

// 1. Return false.

// ClassElement : static MethodDefinition

// 1. Return true.

// ClassElement : ;

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-nonconstructormethoddefinitions

// ClassElementList : ClassElement

// 1. If ClassElement is ClassElement:; , return a new empty List.
// 2. If IsStatic of ClassElement is false and PropName of ClassElement is "constructor", return a new empty List.
// 3. Return a List containing ClassElement.

// ClassElementList : ClassElementList ClassElement

// 1. Let list be NonConstructorMethodDefinitions of ClassElementList.
// 2. If ClassElement is ClassElement:; , return list.
// 3. If IsStatic of ClassElement is false and PropName of ClassElement is "constructor", return list.
// 4. Append ClassElement to the end of list.
// 5. Return list.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-prototypepropertynamelist

// ClassElementList : ClassElement

// 1. If PropName of ClassElement is empty, return a new empty List.
// 2. If IsStatic of ClassElement is true, return a new empty List.
// 3. Return a List containing PropName of ClassElement.

// ClassElementList : ClassElementList ClassElement

// 1. Let list be PrototypePropertyNameList of ClassElementList.
// 2. If PropName of ClassElement is empty, return list.
// 3. If IsStatic of ClassElement is true, return list.
// 4. Append PropName of ClassElement to the end of list.
// 5. Return list.


// http://www.ecma-international.org/ecma-262/#sec-class-definitions-static-semantics-propname

// ClassElement : ;

// 1. Return empty.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-classdefinitionevaluation

// ClassTail : ClassHeritage opt { ClassBody opt }

// 1. Let lex be the LexicalEnvironment of the running execution context.
// 2. Let classScope be NewDeclarativeEnvironment(lex).
// 3. Let classScopeEnvRec be classScope's EnvironmentRecord.
// 4. If classBinding is not undefined, then
  // 4. a. Perform classScopeEnvRec.CreateImmutableBinding(classBinding, true).
// 5. If ClassHeritageopt is not present, then
  // 5. a. Let protoParent be the intrinsic object %ObjectPrototype%.
  // 5. b. Let constructorParent be the intrinsic object %FunctionPrototype%.
// 6. Else,
  // 6. a. Set the running execution context's LexicalEnvironment to classScope.
  // 6. b. Let superclassRef be the result of evaluating ClassHeritage.
  // 6. c. Set the running execution context's LexicalEnvironment to lex.
  // 6. d. Let superclass be ? GetValue(superclassRef).
  // 6. e. If superclass is null, then
    // 6. e. i. Let protoParent be null.
    // 6. e. ii. Let constructorParent be the intrinsic object %FunctionPrototype%.
  // 6. f. Else if IsConstructor(superclass) is false, throw a TypeError exception.
  // 6. g. Else,
    // 6. g. i. Let protoParent be ? Get(superclass, "prototype").
    // 6. g. ii. If Type(protoParent) is neither Object nor Null, throw a TypeError exception.
    // 6. g. iii. Let constructorParent be superclass.
// 7. Let proto be ObjectCreate(protoParent).
// 8. If ClassBodyopt is not present, let constructor be empty.
// 9. Else, let constructor be ConstructorMethod of ClassBody.
// 10. If constructor is empty, then
  // 10. a. If ClassHeritageopt is present, then
    // 10. a. i. Set constructor to the result of parsing the source text constructor(... args){ super (...args);} using the syntactic grammar with the goal symbol MethodDefinition[~Yield, ~Await].
  // 10. b. Else,
    // 10. b. i. Set constructor to the result of parsing the source text constructor(){ } using the syntactic grammar with the goal symbol MethodDefinition[~Yield, ~Await].
// 11. Set the running execution context's LexicalEnvironment to classScope.
// 12. Let constructorInfo be the result of performing DefineMethod for constructor with arguments proto and constructorParent as the optional functionPrototype argument.
// 13. Assert: constructorInfo is not an abrupt completion.
// 14. Let F be constructorInfo.[[Closure]].
// 15. If ClassHeritageopt is present, set F.[[ConstructorKind]] to "derived".
// 16. Perform MakeConstructor(F, false, proto).
// 17. Perform MakeClassConstructor(F).
// 18. If className is not undefined, then
  // 18. a. Perform SetFunctionName(F, className).
// 19. Perform CreateMethodProperty(proto, "constructor", F).
// 20. If ClassBodyopt is not present, let methods be a new empty List.
// 21. Else, let methods be NonConstructorMethodDefinitions of ClassBody.
// 22. For each ClassElement m in order from methods, do
  // 22. a. If IsStatic of m is false, then
    // 22. a. i. Let status be the result of performing PropertyDefinitionEvaluation for m with arguments proto and false.
  // 22. b. Else,
    // 22. b. i. Let status be the result of performing PropertyDefinitionEvaluation for m with arguments F and false.
  // 22. c. If status is an abrupt completion, then
    // 22. c. i. Set the running execution context's LexicalEnvironment to lex.
    // 22. c. ii. Return Completion(status).
// 23. Set the running execution context's LexicalEnvironment to lex.
// 24. If classBinding is not undefined, then
  // 24. a. Perform classScopeEnvRec.InitializeBinding(classBinding, F).
// 25. Return F.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-bindingclassdeclarationevaluation

// ClassDeclaration : class BindingIdentifier ClassTail

// 1. Let className be StringValue of BindingIdentifier.
// 2. Let value be the result of ClassDefinitionEvaluation of ClassTail with arguments className and className.
// 3. ReturnIfAbrupt(value).
// 4. Set value.[[SourceText]] to the source text matched by ClassDeclaration.
// 5. Let env be the running execution context's LexicalEnvironment.
// 6. Perform ? InitializeBoundName(className, value, env).
// 7. Return value.

// ClassDeclaration : class ClassTail

// 1. Let value be the result of ClassDefinitionEvaluation of ClassTail with arguments undefined and "default".
// 2. ReturnIfAbrupt(value).
// 3. Set value.[[SourceText]] to the source text matched by ClassDeclaration.
// 4. Return value.


// http://www.ecma-international.org/ecma-262/#sec-class-definitions-runtime-semantics-namedevaluation

// ClassExpression : class ClassTail

// 1. Return the result of ClassDefinitionEvaluation of ClassTail with arguments undefined and name.


// http://www.ecma-international.org/ecma-262/#sec-class-definitions-runtime-semantics-evaluation

// ClassDeclaration : class BindingIdentifier ClassTail

// 1. Perform ? BindingClassDeclarationEvaluation of this ClassDeclaration.
// 2. Return NormalCompletion(empty).

// ClassExpression : class BindingIdentifier opt ClassTail

// 1. If BindingIdentifieropt is not present, let className be undefined.
// 2. Else, let className be StringValue of BindingIdentifier.
// 3. Let value be the result of ClassDefinitionEvaluation of ClassTail with arguments className and className.
// 4. ReturnIfAbrupt(value).
// 5. Set value.[[SourceText]] to the source text matched by ClassExpression.
// 6. Return value.


// http://www.ecma-international.org/ecma-262/#sec-async-function-definitions-static-semantics-BoundNames

// AsyncFunctionDeclaration : async function BindingIdentifier ( FormalParameters ) { AsyncFunctionBody }

// 1. Return the BoundNames of BindingIdentifier.

// AsyncFunctionDeclaration : async function ( FormalParameters ) { AsyncFunctionBody }

// 1. Return « "*default*" ».


// http://www.ecma-international.org/ecma-262/#sec-async-function-definitions-static-semantics-ComputedPropertyContains

// AsyncMethod : async PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }

// 1. Return the result of ComputedPropertyContains for PropertyName with argument symbol.


// http://www.ecma-international.org/ecma-262/#sec-async-function-definitions-static-semantics-Contains

// AsyncFunctionDeclaration : async function BindingIdentifier ( FormalParameters ) { AsyncFunctionBody } AsyncFunctionDeclaration : async function ( FormalParameters ) { AsyncFunctionBody } AsyncFunctionExpression : async function ( FormalParameters ) { AsyncFunctionBody } AsyncFunctionExpression : async function BindingIdentifier ( FormalParameters ) { AsyncFunctionBody }

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-async-function-definitions-static-semantics-HasDirectSuper

// AsyncMethod : async PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }

// 1. If UniqueFormalParameters Contains SuperCall is true, return true.
// 2. Return AsyncFunctionBody Contains SuperCall.


// http://www.ecma-international.org/ecma-262/#sec-async-function-definitions-static-semantics-HasName

// AsyncFunctionExpression : async function ( FormalParameters ) { AsyncFunctionBody }

// 1. Return false.

// AsyncFunctionExpression : async function BindingIdentifier ( FormalParameters ) { AsyncFunctionBody }

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-async-function-definitions-static-semantics-IsConstantDeclaration

// AsyncFunctionDeclaration : async function BindingIdentifier ( FormalParameters ) { AsyncFunctionBody } AsyncFunctionDeclaration : async function ( FormalParameters ) { AsyncFunctionBody }

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-async-function-definitions-static-semantics-IsFunctionDefinition

// AsyncFunctionExpression : async function ( FormalParameters ) { AsyncFunctionBody } AsyncFunctionExpression : async function BindingIdentifier ( FormalParameters ) { AsyncFunctionBody }

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-async-function-definitions-static-semantics-PropName

// AsyncMethod : async PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }

// 1. Return PropName of PropertyName.


// http://www.ecma-international.org/ecma-262/#sec-async-function-definitions-InstantiateFunctionObject

// AsyncFunctionDeclaration : async function BindingIdentifier ( FormalParameters ) { AsyncFunctionBody }

// 1. If the function code for AsyncFunctionDeclaration is strict mode code, let strict be true. Otherwise, let strict be false.
// 2. Let name be StringValue of BindingIdentifier.
// 3. Let F be ! AsyncFunctionCreate(Normal, FormalParameters, AsyncFunctionBody, scope, strict).
// 4. Perform ! SetFunctionName(F, name).
// 5. Set F.[[SourceText]] to the source text matched by AsyncFunctionDeclaration.
// 6. Return F.

// AsyncFunctionDeclaration : async function ( FormalParameters ) { AsyncFunctionBody }

// 1. If the function code for AsyncFunctionDeclaration is strict mode code, let strict be true. Otherwise, let strict be false.
// 2. Let F be ! AsyncFunctionCreate(Normal, FormalParameters, AsyncFunctionBody, scope, strict).
// 3. Perform ! SetFunctionName(F, "default").
// 4. Set F.[[SourceText]] to the source text matched by AsyncFunctionDeclaration.
// 5. Return F.


// http://www.ecma-international.org/ecma-262/#sec-async-function-definitions-EvaluateBody

// AsyncFunctionBody : FunctionBody

// 1. Let promiseCapability be ! NewPromiseCapability(%Promise%).
// 2. Let declResult be FunctionDeclarationInstantiation(functionObject, argumentsList).
// 3. If declResult is not an abrupt completion, then
  // 3. a. Perform ! AsyncFunctionStart(promiseCapability, FunctionBody).
// 4. Else declResult is an abrupt completion,
  // 4. a. Perform ! Call(promiseCapability.[[Reject]], undefined, « declResult.[[Value]] »).
// 5. Return Completion { [[Type]]: return, [[Value]]: promiseCapability.[[Promise]], [[Target]]: empty }.


// http://www.ecma-international.org/ecma-262/#sec-async-function-definitions-PropertyDefinitionEvaluation

// AsyncMethod : async PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }

// 1. Let propKey be the result of evaluating PropertyName.
// 2. ReturnIfAbrupt(propKey).
// 3. If the function code for this AsyncMethod is strict mode code, let strict be true. Otherwise let strict be false.
// 4. Let scope be the LexicalEnvironment of the running execution context.
// 5. Let closure be ! AsyncFunctionCreate(Method, UniqueFormalParameters, AsyncFunctionBody, scope, strict).
// 6. Perform ! MakeMethod(closure, object).
// 7. Perform ! SetFunctionName(closure, propKey).
// 8. Set closure.[[SourceText]] to the source text matched by AsyncMethod.
// 9. Let desc be the PropertyDescriptor { [[Value]]: closure, [[Writable]]: true, [[Enumerable]]: enumerable, [[Configurable]]: true }.
// 10. Return ? DefinePropertyOrThrow(object, propKey, desc).


// http://www.ecma-international.org/ecma-262/#sec-async-function-definitions-runtime-semantics-namedevaluation

// AsyncFunctionExpression : async function ( FormalParameters ) { AsyncFunctionBody }

// 1. Let closure be the result of evaluating this AsyncFunctionExpression.
// 2. Perform SetFunctionName(closure, name).
// 3. Return closure.


// http://www.ecma-international.org/ecma-262/#sec-async-function-definitions-runtime-semantics-evaluation

// AsyncFunctionDeclaration : async function BindingIdentifier ( FormalParameters ) { AsyncFunctionBody }

// 1. Return NormalCompletion(empty).

// AsyncFunctionDeclaration : async function ( FormalParameters ) { AsyncFunctionBody }

// 1. Return NormalCompletion(empty).

// AsyncFunctionExpression : async function ( FormalParameters ) { AsyncFunctionBody }

// 1. If the function code for AsyncFunctionExpression is strict mode code, let strict be true. Otherwise let strict be false.
// 2. Let scope be the LexicalEnvironment of the running execution context.
// 3. Let closure be ! AsyncFunctionCreate(Normal, FormalParameters, AsyncFunctionBody, scope, strict).
// 4. Set closure.[[SourceText]] to the source text matched by AsyncFunctionExpression.
// 5. Return closure.

// AsyncFunctionExpression : async function BindingIdentifier ( FormalParameters ) { AsyncFunctionBody }

// 1. If the function code for AsyncFunctionExpression is strict mode code, let strict be true. Otherwise let strict be false.
// 2. Let scope be the LexicalEnvironment of the running execution context.
// 3. Let funcEnv be ! NewDeclarativeEnvironment(scope).
// 4. Let envRec be funcEnv's EnvironmentRecord.
// 5. Let name be StringValue of BindingIdentifier.
// 6. Perform ! envRec.CreateImmutableBinding(name).
// 7. Let closure be ! AsyncFunctionCreate(Normal, FormalParameters, AsyncFunctionBody, funcEnv, strict).
// 8. Perform ! SetFunctionName(closure, name).
// 9. Perform ! envRec.InitializeBinding(name, closure).
// 10. Set closure.[[SourceText]] to the source text matched by AsyncFunctionExpression.
// 11. Return closure.

// AwaitExpression : await UnaryExpression

// 1. Let exprRef be the result of evaluating UnaryExpression.
// 2. Let value be ? GetValue(exprRef).
// 3. Return ? Await(value).


// http://www.ecma-international.org/ecma-262/#sec-async-arrow-function-definitions-static-semantics-CoveredAsyncArrowHead

// CoverCallExpressionAndAsyncArrowHead : MemberExpression Arguments

// 1. Return the AsyncArrowHead that is covered by CoverCallExpressionAndAsyncArrowHead.


// http://www.ecma-international.org/ecma-262/#sec-async-arrow-function-definitions-static-semantics-BoundNames

// CoverCallExpressionAndAsyncArrowHead : MemberExpression Arguments

// 1. Let head be CoveredAsyncArrowHead of CoverCallExpressionAndAsyncArrowHead.
// 2. Return the BoundNames of head.


// http://www.ecma-international.org/ecma-262/#sec-async-arrow-function-definitions-static-semantics-Contains

// AsyncArrowFunction : async AsyncArrowBindingIdentifier => AsyncConciseBody

// 1. If symbol is not one of NewTarget, SuperProperty, SuperCall, super, or this, return false.
// 2. Return AsyncConciseBody Contains symbol.

// AsyncArrowFunction : CoverCallExpressionAndAsyncArrowHead => AsyncConciseBody

// 1. If symbol is not one of NewTarget, SuperProperty, SuperCall, super, or this, return false.
// 2. Let head be CoveredAsyncArrowHead of CoverCallExpressionAndAsyncArrowHead.
// 3. If head Contains symbol is true, return true.
// 4. Return AsyncConciseBody Contains symbol.


// http://www.ecma-international.org/ecma-262/#sec-async-arrow-function-definitions-static-semantics-ContainsExpression

// AsyncArrowBindingIdentifier : BindingIdentifier

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-async-arrow-function-definitions-static-semantics-ExpectedArgumentCount

// AsyncArrowBindingIdentifier : BindingIdentifier

// 1. Return 1.


// http://www.ecma-international.org/ecma-262/#sec-async-arrow-function-definitions-static-semantics-HasName

// AsyncArrowFunction : async AsyncArrowBindingIdentifier => AsyncConciseBody AsyncArrowFunction : CoverCallExpressionAndAsyncArrowHead => AsyncConciseBody

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-async-arrow-function-definitions-static-semantics-IsSimpleParameterList

// AsyncArrowBindingIdentifier [Yield] : BindingIdentifier [?Yield, +Await]

// 1. Return true.

// CoverCallExpressionAndAsyncArrowHead : MemberExpression Arguments

// 1. Let head be CoveredAsyncArrowHead of CoverCallExpressionAndAsyncArrowHead.
// 2. Return IsSimpleParameterList of head.


// http://www.ecma-international.org/ecma-262/#sec-async-arrow-function-definitions-static-semantics-LexicallyDeclaredNames

// AsyncConciseBody : AssignmentExpression

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-async-arrow-function-definitions-static-semantics-LexicallyScopedDeclarations

// AsyncConciseBody : AssignmentExpression

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-async-arrow-function-definitions-static-semantics-VarDeclaredNames

// AsyncConciseBody : AssignmentExpression

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-async-arrow-function-definitions-static-semantics-VarScopedDeclarations

// AsyncConciseBody : AssignmentExpression

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-async-arrow-function-definitions-IteratorBindingInitialization

// AsyncArrowBindingIdentifier : BindingIdentifier

// 1. Assert: iteratorRecord.[[Done]] is false.
// 2. Let next be IteratorStep(iteratorRecord).
// 3. If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
// 4. ReturnIfAbrupt(next).
// 5. If next is false, set iteratorRecord.[[Done]] to true.
// 6. Else,
  // 6. a. Let v be IteratorValue(next).
  // 6. b. If v is an abrupt completion, set iteratorRecord.[[Done]] to true.
  // 6. c. ReturnIfAbrupt(v).
// 7. If iteratorRecord.[[Done]] is true, let v be undefined.
// 8. Return the result of performing BindingInitialization for BindingIdentifier using v and environment as the arguments.


// http://www.ecma-international.org/ecma-262/#sec-async-arrow-function-definitions-EvaluateBody

// AsyncConciseBody : AssignmentExpression

// 1. Let promiseCapability be ! NewPromiseCapability(%Promise%).
// 2. Let declResult be FunctionDeclarationInstantiation(functionObject, argumentsList).
// 3. If declResult is not an abrupt completion, then
  // 3. a. Perform ! AsyncFunctionStart(promiseCapability, AssignmentExpression).
// 4. Else declResult is an abrupt completion,
  // 4. a. Perform ! Call(promiseCapability.[[Reject]], undefined, « declResult.[[Value]] »).
// 5. Return Completion { [[Type]]: return, [[Value]]: promiseCapability.[[Promise]], [[Target]]: empty }.

// AsyncConciseBody : { AsyncFunctionBody }

// 1. Return the result of EvaluateBody of AsyncFunctionBody passing functionObject and argumentsList as the arguments.


// http://www.ecma-international.org/ecma-262/#sec-async-arrow-function-definitions-runtime-semantics-namedevaluation

// AsyncArrowFunction : async AsyncArrowBindingIdentifier => AsyncConciseBody AsyncArrowFunction : CoverCallExpressionAndAsyncArrowHead => AsyncConciseBody

// 1. Let closure be the result of evaluating this AsyncArrowFunction.
// 2. Perform SetFunctionName(closure, name).
// 3. Return closure.


// http://www.ecma-international.org/ecma-262/#sec-async-arrow-function-definitions-runtime-semantics-evaluation

// AsyncArrowFunction : async AsyncArrowBindingIdentifier => AsyncConciseBody

// 1. If the function code for this AsyncArrowFunction is strict mode code, let strict be true. Otherwise, let strict be false.
// 2. Let scope be the LexicalEnvironment of the running execution context.
// 3. Let parameters be AsyncArrowBindingIdentifier.
// 4. Let closure be ! AsyncFunctionCreate(Arrow, parameters, AsyncConciseBody, scope, strict).
// 5. Return closure.

// AsyncArrowFunction : CoverCallExpressionAndAsyncArrowHead => AsyncConciseBody

// 1. If the function code for this AsyncArrowFunction is strict mode code, let strict be true. Otherwise, let strict be false.
// 2. Let scope be the LexicalEnvironment of the running execution context.
// 3. Let head be CoveredAsyncArrowHead of CoverCallExpressionAndAsyncArrowHead.
// 4. Let parameters be the ArrowFormalParameters of head.
// 5. Let closure be ! AsyncFunctionCreate(Arrow, parameters, AsyncConciseBody, scope, strict).
// 6. Return closure.


// http://www.ecma-international.org/ecma-262/#sec-isintailposition

// 1. Assert: call is a Parse Node.
// 2. If the source code matching call is non-strict code, return false.
// 3. If call is not contained within a FunctionBody, ConciseBody, or AsyncConciseBody, return false.
// 4. Let body be the FunctionBody, ConciseBody, or AsyncConciseBody that most closely contains call.
// 5. If body is the FunctionBody of a GeneratorBody, return false.
// 6. If body is the FunctionBody of an AsyncFunctionBody, return false.
// 7. If body is the FunctionBody of an AsyncGeneratorBody, return false.
// 8. If body is an AsyncConciseBody, return false.
// 9. Return the result of HasCallInTailPosition of body with argument call.


// http://www.ecma-international.org/ecma-262/#sec-statement-rules

// ConciseBody : AssignmentExpression

// 1. Return HasCallInTailPosition of AssignmentExpression with argument call.

// StatementList : StatementList StatementListItem

// 1. Let has be HasCallInTailPosition of StatementList with argument call.
// 2. If has is true, return true.
// 3. Return HasCallInTailPosition of StatementListItem with argument call.

// FunctionStatementList : [empty] StatementListItem : Declaration Statement : VariableStatement EmptyStatement ExpressionStatement ContinueStatement BreakStatement ThrowStatement DebuggerStatement Block : { } ReturnStatement : return ; LabelledItem : FunctionDeclaration IterationStatement : for ( LeftHandSideExpression of AssignmentExpression ) Statement for ( var ForBinding of AssignmentExpression ) Statement for ( ForDeclaration of AssignmentExpression ) Statement CaseBlock : { }

// 1. Return false.

// IfStatement : if ( Expression ) Statement else Statement

// 1. Let has be HasCallInTailPosition of the first Statement with argument call.
// 2. If has is true, return true.
// 3. Return HasCallInTailPosition of the second Statement with argument call.

// IfStatement : if ( Expression ) Statement IterationStatement : do Statement while ( Expression ) ; while ( Expression ) Statement for ( Expression opt ; Expression opt ; Expression opt ) Statement for ( var VariableDeclarationList ; Expression opt ; Expression opt ) Statement for ( LexicalDeclaration Expression opt ; Expression opt ) Statement for ( LeftHandSideExpression in Expression ) Statement for ( var ForBinding in Expression ) Statement for ( ForDeclaration in Expression ) Statement WithStatement : with ( Expression ) Statement

// 1. Return HasCallInTailPosition of Statement with argument call.

// LabelledStatement : LabelIdentifier : LabelledItem

// 1. Return HasCallInTailPosition of LabelledItem with argument call.

// ReturnStatement : return Expression ;

// 1. Return HasCallInTailPosition of Expression with argument call.

// SwitchStatement : switch ( Expression ) CaseBlock

// 1. Return HasCallInTailPosition of CaseBlock with argument call.

// CaseBlock : { CaseClauses opt DefaultClause CaseClauses opt }

// 1. Let has be false.
// 2. If the first CaseClauses is present, let has be HasCallInTailPosition of the first CaseClauses with argument call.
// 3. If has is true, return true.
// 4. Let has be HasCallInTailPosition of the DefaultClause with argument call.
// 5. If has is true, return true.
// 6. If the second CaseClauses is present, let has be HasCallInTailPosition of the second CaseClauses with argument call.
// 7. Return has.

// CaseClauses : CaseClauses CaseClause

// 1. Let has be HasCallInTailPosition of CaseClauses with argument call.
// 2. If has is true, return true.
// 3. Return HasCallInTailPosition of CaseClause with argument call.

// CaseClause : case Expression : StatementList opt DefaultClause : default : StatementList opt

// 1. If StatementList is present, return HasCallInTailPosition of StatementList with argument call.
// 2. Return false.

// TryStatement : try Block Catch

// 1. Return HasCallInTailPosition of Catch with argument call.

// TryStatement : try Block Finally TryStatement : try Block Catch Finally

// 1. Return HasCallInTailPosition of Finally with argument call.

// Catch : catch ( CatchParameter ) Block

// 1. Return HasCallInTailPosition of Block with argument call.


// http://www.ecma-international.org/ecma-262/#sec-expression-rules

// AssignmentExpression : YieldExpression ArrowFunction AsyncArrowFunction LeftHandSideExpression = AssignmentExpression LeftHandSideExpression AssignmentOperator AssignmentExpression BitwiseANDExpression : BitwiseANDExpression & EqualityExpression BitwiseXORExpression : BitwiseXORExpression ^ BitwiseANDExpression BitwiseORExpression : BitwiseORExpression | BitwiseXORExpression EqualityExpression : EqualityExpression == RelationalExpression EqualityExpression != RelationalExpression EqualityExpression === RelationalExpression EqualityExpression !== RelationalExpression RelationalExpression : RelationalExpression < ShiftExpression RelationalExpression > ShiftExpression RelationalExpression <= ShiftExpression RelationalExpression >= ShiftExpression RelationalExpression instanceof ShiftExpression RelationalExpression in ShiftExpression ShiftExpression : ShiftExpression << AdditiveExpression ShiftExpression >> AdditiveExpression ShiftExpression >>> AdditiveExpression AdditiveExpression : AdditiveExpression + MultiplicativeExpression AdditiveExpression - MultiplicativeExpression MultiplicativeExpression : MultiplicativeExpression MultiplicativeOperator ExponentiationExpression ExponentiationExpression : UpdateExpression ** ExponentiationExpression UpdateExpression : LeftHandSideExpression ++ LeftHandSideExpression -- ++ UnaryExpression -- UnaryExpression UnaryExpression : delete UnaryExpression void UnaryExpression typeof UnaryExpression + UnaryExpression - UnaryExpression ~ UnaryExpression ! UnaryExpression AwaitExpression CallExpression : SuperCall CallExpression [ Expression ] CallExpression . IdentifierName NewExpression : new NewExpression MemberExpression : MemberExpression [ Expression ] MemberExpression . IdentifierName SuperProperty MetaProperty new MemberExpression Arguments PrimaryExpression : this IdentifierReference Literal ArrayLiteral ObjectLiteral FunctionExpression ClassExpression GeneratorExpression AsyncFunctionExpression AsyncGeneratorExpression RegularExpressionLiteral TemplateLiteral

// 1. Return false.

// Expression : AssignmentExpression Expression , AssignmentExpression

// 1. Return HasCallInTailPosition of AssignmentExpression with argument call.

// ConditionalExpression : LogicalORExpression ? AssignmentExpression : AssignmentExpression

// 1. Let has be HasCallInTailPosition of the first AssignmentExpression with argument call.
// 2. If has is true, return true.
// 3. Return HasCallInTailPosition of the second AssignmentExpression with argument call.

// LogicalANDExpression : LogicalANDExpression && BitwiseORExpression

// 1. Return HasCallInTailPosition of BitwiseORExpression with argument call.

// LogicalORExpression : LogicalORExpression || LogicalANDExpression

// 1. Return HasCallInTailPosition of LogicalANDExpression with argument call.

// CallExpression : CoverCallExpressionAndAsyncArrowHead CallExpression Arguments CallExpression TemplateLiteral

// 1. If this CallExpression is call, return true.
// 2. Return false.

// MemberExpression : MemberExpression TemplateLiteral

// 1. If this MemberExpression is call, return true.
// 2. Return false.

// PrimaryExpression : CoverParenthesizedExpressionAndArrowParameterList

// 1. Let expr be CoveredParenthesizedExpression of CoverParenthesizedExpressionAndArrowParameterList.
// 2. Return HasCallInTailPosition of expr with argument call.

// ParenthesizedExpression : ( Expression )

// 1. Return HasCallInTailPosition of Expression with argument call.


// http://www.ecma-international.org/ecma-262/#sec-preparefortailcall

// 1. Let leafContext be the running execution context.
// 2. Suspend leafContext.
// 3. Pop leafContext from the execution context stack. The execution context now on the top of the stack becomes the running execution context.
// 4. Assert: leafContext has no further use. It will never be activated as the running execution context.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-isstrict

// ScriptBody : StatementList

// 1. If the Directive Prologue of StatementList contains a Use Strict Directive, return true; otherwise, return false.


// http://www.ecma-international.org/ecma-262/#sec-scripts-static-semantics-lexicallydeclarednames

// ScriptBody : StatementList

// 1. Return TopLevelLexicallyDeclaredNames of StatementList.


// http://www.ecma-international.org/ecma-262/#sec-scripts-static-semantics-lexicallyscopeddeclarations

// ScriptBody : StatementList

// 1. Return TopLevelLexicallyScopedDeclarations of StatementList.


// http://www.ecma-international.org/ecma-262/#sec-scripts-static-semantics-vardeclarednames

// ScriptBody : StatementList

// 1. Return TopLevelVarDeclaredNames of StatementList.


// http://www.ecma-international.org/ecma-262/#sec-scripts-static-semantics-varscopeddeclarations

// ScriptBody : StatementList

// 1. Return TopLevelVarScopedDeclarations of StatementList.


// http://www.ecma-international.org/ecma-262/#sec-script-semantics-runtime-semantics-evaluation

// Script : [empty]

// 1. Return NormalCompletion(undefined).


// http://www.ecma-international.org/ecma-262/#sec-parse-script

// 1. Assert: sourceText is an ECMAScript source text (see clause 10).
// 2. Parse sourceText using Script as the goal symbol and analyse the parse result for any Early Error conditions. If the parse was successful and no early errors were found, let body be the resulting parse tree. Otherwise, let body be a List of one or more SyntaxError or ReferenceError objects representing the parsing errors and/or early errors. Parsing and early error detection may be interweaved in an implementation-dependent manner. If more than one parsing error or early error is present, the number and ordering of error objects in the list is implementation-dependent, but at least one must be present.
// 3. If body is a List of errors, return body.
// 4. Return Script Record { [[Realm]]: realm, [[Environment]]: undefined, [[ECMAScriptCode]]: body, [[HostDefined]]: hostDefined }.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-scriptevaluation

// 1. Let globalEnv be scriptRecord.[[Realm]].[[GlobalEnv]].
// 2. Let scriptCxt be a new ECMAScript code execution context.
// 3. Set the Function of scriptCxt to null.
// 4. Set the Realm of scriptCxt to scriptRecord.[[Realm]].
// 5. Set the ScriptOrModule of scriptCxt to scriptRecord.
// 6. Set the VariableEnvironment of scriptCxt to globalEnv.
// 7. Set the LexicalEnvironment of scriptCxt to globalEnv.
// 8. Suspend the currently running execution context.
// 9. Push scriptCxt on to the execution context stack; scriptCxt is now the running execution context.
// 10. Let scriptBody be scriptRecord.[[ECMAScriptCode]].
// 11. Let result be GlobalDeclarationInstantiation(scriptBody, globalEnv).
// 12. If result.[[Type]] is normal, then
  // 12. a. Set result to the result of evaluating scriptBody.
// 13. If result.[[Type]] is normal and result.[[Value]] is empty, then
  // 13. a. Set result to NormalCompletion(undefined).
// 14. Suspend scriptCxt and remove it from the execution context stack.
// 15. Assert: The execution context stack is not empty.
// 16. Resume the context that is now on the top of the execution context stack as the running execution context.
// 17. Return Completion(result).


// http://www.ecma-international.org/ecma-262/#sec-globaldeclarationinstantiation

// 1. Let envRec be env's EnvironmentRecord.
// 2. Assert: envRec is a global Environment Record.
// 3. Let lexNames be the LexicallyDeclaredNames of script.
// 4. Let varNames be the VarDeclaredNames of script.
// 5. For each name in lexNames, do
  // 5. a. If envRec.HasVarDeclaration(name) is true, throw a SyntaxError exception.
  // 5. b. If envRec.HasLexicalDeclaration(name) is true, throw a SyntaxError exception.
  // 5. c. Let hasRestrictedGlobal be ? envRec.HasRestrictedGlobalProperty(name).
  // 5. d. If hasRestrictedGlobal is true, throw a SyntaxError exception.
// 6. For each name in varNames, do
  // 6. a. If envRec.HasLexicalDeclaration(name) is true, throw a SyntaxError exception.
// 7. Let varDeclarations be the VarScopedDeclarations of script.
// 8. Let functionsToInitialize be a new empty List.
// 9. Let declaredFunctionNames be a new empty List.
// 10. For each d in varDeclarations, in reverse list order, do
  // 10. a. If d is neither a VariableDeclaration nor a ForBinding nor a BindingIdentifier, then
    // 10. a. i. Assert: d is either a FunctionDeclaration, a GeneratorDeclaration, an AsyncFunctionDeclaration, or an AsyncGeneratorDeclaration.
    // 10. a. ii. NOTE: If there are multiple function declarations for the same name, the last declaration is used.
    // 10. a. iii. Let fn be the sole element of the BoundNames of d.
    // 10. a. iv. If fn is not an element of declaredFunctionNames, then
      // 10. a. iv. 1. Let fnDefinable be ? envRec.CanDeclareGlobalFunction(fn).
      // 10. a. iv. 2. If fnDefinable is false, throw a TypeError exception.
      // 10. a. iv. 3. Append fn to declaredFunctionNames.
      // 10. a. iv. 4. Insert d as the first element of functionsToInitialize.
// 11. Let declaredVarNames be a new empty List.
// 12. For each d in varDeclarations, do
  // 12. a. If d is a VariableDeclaration, a ForBinding, or a BindingIdentifier, then
    // 12. a. i. For each String vn in the BoundNames of d, do
      // 12. a. i. 1. If vn is not an element of declaredFunctionNames, then
        // 12. a. i. 1. a. Let vnDefinable be ? envRec.CanDeclareGlobalVar(vn).
        // 12. a. i. 1. b. If vnDefinable is false, throw a TypeError exception.
        // 12. a. i. 1. c. If vn is not an element of declaredVarNames, then
          // 12. a. i. 1. c. i. Append vn to declaredVarNames.
// 13. NOTE: No abnormal terminations occur after this algorithm step if the global object is an ordinary object. However, if the global object is a Proxy exotic object it may exhibit behaviours that cause abnormal terminations in some of the following steps.
// 14. NOTE: Annex B.3.3.2 adds additional steps at this point.
// 15. Let lexDeclarations be the LexicallyScopedDeclarations of script.
// 16. For each element d in lexDeclarations, do
  // 16. a. NOTE: Lexically declared names are only instantiated here but not initialized.
  // 16. b. For each element dn of the BoundNames of d, do
    // 16. b. i. If IsConstantDeclaration of d is true, then
      // 16. b. i. 1. Perform ? envRec.CreateImmutableBinding(dn, true).
    // 16. b. ii. Else,
      // 16. b. ii. 1. Perform ? envRec.CreateMutableBinding(dn, false).
// 17. For each Parse Node f in functionsToInitialize, do
  // 17. a. Let fn be the sole element of the BoundNames of f.
  // 17. b. Let fo be the result of performing InstantiateFunctionObject for f with argument env.
  // 17. c. Perform ? envRec.CreateGlobalFunctionBinding(fn, fo, false).
// 18. For each String vn in declaredVarNames, in list order, do
  // 18. a. Perform ? envRec.CreateGlobalVarBinding(vn, false).
// 19. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-scriptevaluationjob

// 1. Assert: sourceText is an ECMAScript source text (see clause 10).
// 2. Let realm be the current Realm Record.
// 3. Let s be ParseScript(sourceText, realm, hostDefined).
// 4. If s is a List of errors, then
  // 4. a. Perform HostReportErrors(s).
  // 4. b. Return NormalCompletion(undefined).
// 5. Return ? ScriptEvaluation(s).


// http://www.ecma-international.org/ecma-262/#sec-module-semantics-static-semantics-containsduplicatelabels

// ModuleItemList : ModuleItemList ModuleItem

// 1. Let hasDuplicates be ContainsDuplicateLabels of ModuleItemList with argument labelSet.
// 2. If hasDuplicates is true, return true.
// 3. Return ContainsDuplicateLabels of ModuleItem with argument labelSet.

// ModuleItem : ImportDeclaration ExportDeclaration

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-module-semantics-static-semantics-containsundefinedbreaktarget

// ModuleItemList : ModuleItemList ModuleItem

// 1. Let hasUndefinedLabels be ContainsUndefinedBreakTarget of ModuleItemList with argument labelSet.
// 2. If hasUndefinedLabels is true, return true.
// 3. Return ContainsUndefinedBreakTarget of ModuleItem with argument labelSet.

// ModuleItem : ImportDeclaration ExportDeclaration

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-module-semantics-static-semantics-containsundefinedcontinuetarget

// ModuleItemList : ModuleItemList ModuleItem

// 1. Let hasUndefinedLabels be ContainsUndefinedContinueTarget of ModuleItemList with arguments iterationSet and « ».
// 2. If hasUndefinedLabels is true, return true.
// 3. Return ContainsUndefinedContinueTarget of ModuleItem with arguments iterationSet and « ».

// ModuleItem : ImportDeclaration ExportDeclaration

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-module-semantics-static-semantics-exportedbindings

// ModuleItemList : ModuleItemList ModuleItem

// 1. Let names be ExportedBindings of ModuleItemList.
// 2. Append to names the elements of the ExportedBindings of ModuleItem.
// 3. Return names.

// ModuleItem : ImportDeclaration StatementListItem

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-module-semantics-static-semantics-exportednames

// ModuleItemList : ModuleItemList ModuleItem

// 1. Let names be ExportedNames of ModuleItemList.
// 2. Append to names the elements of the ExportedNames of ModuleItem.
// 3. Return names.

// ModuleItem : ExportDeclaration

// 1. Return the ExportedNames of ExportDeclaration.

// ModuleItem : ImportDeclaration StatementListItem

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-module-semantics-static-semantics-exportentries

// Module : [empty]

// 1. Return a new empty List.

// ModuleItemList : ModuleItemList ModuleItem

// 1. Let entries be ExportEntries of ModuleItemList.
// 2. Append to entries the elements of the ExportEntries of ModuleItem.
// 3. Return entries.

// ModuleItem : ImportDeclaration StatementListItem

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-module-semantics-static-semantics-importentries

// Module : [empty]

// 1. Return a new empty List.

// ModuleItemList : ModuleItemList ModuleItem

// 1. Let entries be ImportEntries of ModuleItemList.
// 2. Append to entries the elements of the ImportEntries of ModuleItem.
// 3. Return entries.

// ModuleItem : ExportDeclaration StatementListItem

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-importedlocalnames

// 1. Let localNames be a new empty List.
// 2. For each ImportEntry Record i in importEntries, do
  // 2. a. Append i.[[LocalName]] to localNames.
// 3. Return localNames.


// http://www.ecma-international.org/ecma-262/#sec-module-semantics-static-semantics-modulerequests

// Module : [empty]

// 1. Return a new empty List.

// ModuleItemList : ModuleItem

// 1. Return ModuleRequests of ModuleItem.

// ModuleItemList : ModuleItemList ModuleItem

// 1. Let moduleNames be ModuleRequests of ModuleItemList.
// 2. Let additionalNames be ModuleRequests of ModuleItem.
// 3. Append to moduleNames each element of additionalNames that is not already an element of moduleNames.
// 4. Return moduleNames.

// ModuleItem : StatementListItem

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-module-semantics-static-semantics-lexicallydeclarednames

// ModuleItemList : ModuleItemList ModuleItem

// 1. Let names be LexicallyDeclaredNames of ModuleItemList.
// 2. Append to names the elements of the LexicallyDeclaredNames of ModuleItem.
// 3. Return names.

// ModuleItem : ImportDeclaration

// 1. Return the BoundNames of ImportDeclaration.

// ModuleItem : ExportDeclaration

// 1. If ExportDeclaration is export VariableStatement, return a new empty List.
// 2. Return the BoundNames of ExportDeclaration.

// ModuleItem : StatementListItem

// 1. Return LexicallyDeclaredNames of StatementListItem.


// http://www.ecma-international.org/ecma-262/#sec-module-semantics-static-semantics-lexicallyscopeddeclarations

// Module : [empty]

// 1. Return a new empty List.

// ModuleItemList : ModuleItemList ModuleItem

// 1. Let declarations be LexicallyScopedDeclarations of ModuleItemList.
// 2. Append to declarations the elements of the LexicallyScopedDeclarations of ModuleItem.
// 3. Return declarations.

// ModuleItem : ImportDeclaration

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-module-semantics-static-semantics-vardeclarednames

// Module : [empty]

// 1. Return a new empty List.

// ModuleItemList : ModuleItemList ModuleItem

// 1. Let names be VarDeclaredNames of ModuleItemList.
// 2. Append to names the elements of the VarDeclaredNames of ModuleItem.
// 3. Return names.

// ModuleItem : ImportDeclaration

// 1. Return a new empty List.

// ModuleItem : ExportDeclaration

// 1. If ExportDeclaration is export VariableStatement, return BoundNames of ExportDeclaration.
// 2. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-module-semantics-static-semantics-varscopeddeclarations

// Module : [empty]

// 1. Return a new empty List.

// ModuleItemList : ModuleItemList ModuleItem

// 1. Let declarations be VarScopedDeclarations of ModuleItemList.
// 2. Append to declarations the elements of the VarScopedDeclarations of ModuleItem.
// 3. Return declarations.

// ModuleItem : ImportDeclaration

// 1. Return a new empty List.

// ModuleItem : ExportDeclaration

// 1. If ExportDeclaration is export VariableStatement, return VarScopedDeclarations of VariableStatement.
// 2. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-moduledeclarationinstantiation

// 1. Let module be this Cyclic Module Record.
// 2. Assert: module.[[Status]] is not "instantiating" or "evaluating".
// 3. Let stack be a new empty List.
// 4. Let result be InnerModuleInstantiation(module, stack, 0).
// 5. If result is an abrupt completion, then
  // 5. a. For each module m in stack, do
    // 5. a. i. Assert: m.[[Status]] is "instantiating".
    // 5. a. ii. Set m.[[Status]] to "uninstantiated".
    // 5. a. iii. Set m.[[Environment]] to undefined.
    // 5. a. iv. Set m.[[DFSIndex]] to undefined.
    // 5. a. v. Set m.[[DFSAncestorIndex]] to undefined.
  // 5. b. Assert: module.[[Status]] is "uninstantiated".
  // 5. c. Return result.
// 6. Assert: module.[[Status]] is "instantiated" or "evaluated".
// 7. Assert: stack is empty.
// 8. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-innermoduleinstantiation

// 1. If module is not a Cyclic Module Record, then
  // 1. a. Perform ? module.Instantiate().
  // 1. b. Return index.
// 2. If module.[[Status]] is "instantiating", "instantiated", or "evaluated", then
  // 2. a. Return index.
// 3. Assert: module.[[Status]] is "uninstantiated".
// 4. Set module.[[Status]] to "instantiating".
// 5. Set module.[[DFSIndex]] to index.
// 6. Set module.[[DFSAncestorIndex]] to index.
// 7. Increase index by 1.
// 8. Append module to stack.
// 9. For each String required that is an element of module.[[RequestedModules]], do
  // 9. a. Let requiredModule be ? HostResolveImportedModule(module, required).
  // 9. b. Set index to ? InnerModuleInstantiation(requiredModule, stack, index).
  // 9. c. Assert: requiredModule.[[Status]] is either "instantiating", "instantiated", or "evaluated".
  // 9. d. Assert: requiredModule.[[Status]] is "instantiating" if and only if requiredModule is in stack.
  // 9. e. If requiredModule.[[Status]] is "instantiating", then
    // 9. e. i. Assert: requiredModule is a Cyclic Module Record.
    // 9. e. ii. Set module.[[DFSAncestorIndex]] to min(module.[[DFSAncestorIndex]], requiredModule.[[DFSAncestorIndex]]).
// 10. Perform ? module.InitializeEnvironment().
// 11. Assert: module occurs exactly once in stack.
// 12. Assert: module.[[DFSAncestorIndex]] is less than or equal to module.[[DFSIndex]].
// 13. If module.[[DFSAncestorIndex]] equals module.[[DFSIndex]], then
  // 13. a. Let done be false.
  // 13. b. Repeat, while done is false,
    // 13. b. i. Let requiredModule be the last element in stack.
    // 13. b. ii. Remove the last element of stack.
    // 13. b. iii. Set requiredModule.[[Status]] to "instantiated".
    // 13. b. iv. If requiredModule and module are the same Module Record, set done to true.
// 14. Return index.


// http://www.ecma-international.org/ecma-262/#sec-moduleevaluation

// 1. Let module be this Cyclic Module Record.
// 2. Assert: module.[[Status]] is "instantiated" or "evaluated".
// 3. Let stack be a new empty List.
// 4. Let result be InnerModuleEvaluation(module, stack, 0).
// 5. If result is an abrupt completion, then
  // 5. a. For each module m in stack, do
    // 5. a. i. Assert: m.[[Status]] is "evaluating".
    // 5. a. ii. Set m.[[Status]] to "evaluated".
    // 5. a. iii. Set m.[[EvaluationError]] to result.
  // 5. b. Assert: module.[[Status]] is "evaluated" and module.[[EvaluationError]] is result.
  // 5. c. Return result.
// 6. Assert: module.[[Status]] is "evaluated" and module.[[EvaluationError]] is undefined.
// 7. Assert: stack is empty.
// 8. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-innermoduleevaluation

// 1. If module is not a Cyclic Module Record, then
  // 1. a. Perform ? module.Evaluate().
  // 1. b. Return index.
// 2. If module.[[Status]] is "evaluated", then
  // 2. a. If module.[[EvaluationError]] is undefined, return index.
  // 2. b. Otherwise return module.[[EvaluationError]].
// 3. If module.[[Status]] is "evaluating", return index.
// 4. Assert: module.[[Status]] is "instantiated".
// 5. Set module.[[Status]] to "evaluating".
// 6. Set module.[[DFSIndex]] to index.
// 7. Set module.[[DFSAncestorIndex]] to index.
// 8. Increase index by 1.
// 9. Append module to stack.
// 10. For each String required that is an element of module.[[RequestedModules]], do
  // 10. a. Let requiredModule be ! HostResolveImportedModule(module, required).
  // 10. b. NOTE: Instantiate must be completed successfully prior to invoking this method, so every requested module is guaranteed to resolve successfully.
  // 10. c. Set index to ? InnerModuleEvaluation(requiredModule, stack, index).
  // 10. d. Assert: requiredModule.[[Status]] is either "evaluating" or "evaluated".
  // 10. e. Assert: requiredModule.[[Status]] is "evaluating" if and only if requiredModule is in stack.
  // 10. f. If requiredModule.[[Status]] is "evaluating", then
    // 10. f. i. Assert: requiredModule is a Cyclic Module Record.
    // 10. f. ii. Set module.[[DFSAncestorIndex]] to min(module.[[DFSAncestorIndex]], requiredModule.[[DFSAncestorIndex]]).
// 11. Perform ? module.ExecuteModule().
// 12. Assert: module occurs exactly once in stack.
// 13. Assert: module.[[DFSAncestorIndex]] is less than or equal to module.[[DFSIndex]].
// 14. If module.[[DFSAncestorIndex]] equals module.[[DFSIndex]], then
  // 14. a. Let done be false.
  // 14. b. Repeat, while done is false,
    // 14. b. i. Let requiredModule be the last element in stack.
    // 14. b. ii. Remove the last element of stack.
    // 14. b. iii. Set requiredModule.[[Status]] to "evaluated".
    // 14. b. iv. If requiredModule and module are the same Module Record, set done to true.
// 15. Return index.


// http://www.ecma-international.org/ecma-262/#sec-parsemodule

// 1. Assert: sourceText is an ECMAScript source text (see clause 10).
// 2. Parse sourceText using Module as the goal symbol and analyse the parse result for any Early Error conditions. If the parse was successful and no early errors were found, let body be the resulting parse tree. Otherwise, let body be a List of one or more SyntaxError or ReferenceError objects representing the parsing errors and/or early errors. Parsing and early error detection may be interweaved in an implementation-dependent manner. If more than one parsing error or early error is present, the number and ordering of error objects in the list is implementation-dependent, but at least one must be present.
// 3. If body is a List of errors, return body.
// 4. Let requestedModules be the ModuleRequests of body.
// 5. Let importEntries be ImportEntries of body.
// 6. Let importedBoundNames be ImportedLocalNames(importEntries).
// 7. Let indirectExportEntries be a new empty List.
// 8. Let localExportEntries be a new empty List.
// 9. Let starExportEntries be a new empty List.
// 10. Let exportEntries be ExportEntries of body.
// 11. For each ExportEntry Record ee in exportEntries, do
  // 11. a. If ee.[[ModuleRequest]] is null, then
    // 11. a. i. If ee.[[LocalName]] is not an element of importedBoundNames, then
      // 11. a. i. 1. Append ee to localExportEntries.
    // 11. a. ii. Else,
      // 11. a. ii. 1. Let ie be the element of importEntries whose [[LocalName]] is the same as ee.[[LocalName]].
      // 11. a. ii. 2. If ie.[[ImportName]] is "*", then
        // 11. a. ii. 2. a. Assert: This is a re-export of an imported module namespace object.
        // 11. a. ii. 2. b. Append ee to localExportEntries.
      // 11. a. ii. 3. Else this is a re-export of a single name,
        // 11. a. ii. 3. a. Append the ExportEntry Record { [[ModuleRequest]]: ie.[[ModuleRequest]], [[ImportName]]: ie.[[ImportName]], [[LocalName]]: null, [[ExportName]]: ee.[[ExportName]] } to indirectExportEntries.
  // 11. b. Else if ee.[[ImportName]] is "*", then
    // 11. b. i. Append ee to starExportEntries.
  // 11. c. Else,
    // 11. c. i. Append ee to indirectExportEntries.
// 12. Return Source Text Module Record { [[Realm]]: realm, [[Environment]]: undefined, [[Namespace]]: undefined, [[Status]]: "uninstantiated", [[EvaluationError]]: undefined, [[HostDefined]]: hostDefined, [[ECMAScriptCode]]: body, [[RequestedModules]]: requestedModules, [[ImportEntries]]: importEntries, [[LocalExportEntries]]: localExportEntries, [[IndirectExportEntries]]: indirectExportEntries, [[StarExportEntries]]: starExportEntries, [[DFSIndex]]: undefined, [[DFSAncestorIndex]]: undefined }.


// http://www.ecma-international.org/ecma-262/#sec-getexportednames

// 1. Let module be this Source Text Module Record.
// 2. If exportStarSet contains module, then
  // 2. a. Assert: We've reached the starting point of an import * circularity.
  // 2. b. Return a new empty List.
// 3. Append module to exportStarSet.
// 4. Let exportedNames be a new empty List.
// 5. For each ExportEntry Record e in module.[[LocalExportEntries]], do
  // 5. a. Assert: module provides the direct binding for this export.
  // 5. b. Append e.[[ExportName]] to exportedNames.
// 6. For each ExportEntry Record e in module.[[IndirectExportEntries]], do
  // 6. a. Assert: module imports a specific binding for this export.
  // 6. b. Append e.[[ExportName]] to exportedNames.
// 7. For each ExportEntry Record e in module.[[StarExportEntries]], do
  // 7. a. Let requestedModule be ? HostResolveImportedModule(module, e.[[ModuleRequest]]).
  // 7. b. Let starNames be ? requestedModule.GetExportedNames(exportStarSet).
  // 7. c. For each element n of starNames, do
    // 7. c. i. If SameValue(n, "default") is false, then
      // 7. c. i. 1. If n is not an element of exportedNames, then
        // 7. c. i. 1. a. Append n to exportedNames.
// 8. Return exportedNames.


// http://www.ecma-international.org/ecma-262/#sec-resolveexport

// 1. Let module be this Source Text Module Record.
// 2. For each Record { [[Module]], [[ExportName]] } r in resolveSet, do
  // 2. a. If module and r.[[Module]] are the same Module Record and SameValue(exportName, r.[[ExportName]]) is true, then
    // 2. a. i. Assert: This is a circular import request.
    // 2. a. ii. Return null.
// 3. Append the Record { [[Module]]: module, [[ExportName]]: exportName } to resolveSet.
// 4. For each ExportEntry Record e in module.[[LocalExportEntries]], do
  // 4. a. If SameValue(exportName, e.[[ExportName]]) is true, then
    // 4. a. i. Assert: module provides the direct binding for this export.
    // 4. a. ii. Return ResolvedBinding Record { [[Module]]: module, [[BindingName]]: e.[[LocalName]] }.
// 5. For each ExportEntry Record e in module.[[IndirectExportEntries]], do
  // 5. a. If SameValue(exportName, e.[[ExportName]]) is true, then
    // 5. a. i. Assert: module imports a specific binding for this export.
    // 5. a. ii. Let importedModule be ? HostResolveImportedModule(module, e.[[ModuleRequest]]).
    // 5. a. iii. Return importedModule.ResolveExport(e.[[ImportName]], resolveSet).
// 6. If SameValue(exportName, "default") is true, then
  // 6. a. Assert: A default export was not explicitly defined by this module.
  // 6. b. Return null.
  // 6. c. NOTE: A default export cannot be provided by an export *.
// 7. Let starResolution be null.
// 8. For each ExportEntry Record e in module.[[StarExportEntries]], do
  // 8. a. Let importedModule be ? HostResolveImportedModule(module, e.[[ModuleRequest]]).
  // 8. b. Let resolution be ? importedModule.ResolveExport(exportName, resolveSet).
  // 8. c. If resolution is "ambiguous", return "ambiguous".
  // 8. d. If resolution is not null, then
    // 8. d. i. Assert: resolution is a ResolvedBinding Record.
    // 8. d. ii. If starResolution is null, set starResolution to resolution.
    // 8. d. iii. Else,
      // 8. d. iii. 1. Assert: There is more than one * import that includes the requested name.
      // 8. d. iii. 2. If resolution.[[Module]] and starResolution.[[Module]] are not the same Module Record or SameValue(resolution.[[BindingName]], starResolution.[[BindingName]]) is false, return "ambiguous".
// 9. Return starResolution.


// http://www.ecma-international.org/ecma-262/#sec-source-text-module-record-initialize-environment

// 1. Let module be this Source Text Module Record.
// 2. For each ExportEntry Record e in module.[[IndirectExportEntries]], do
  // 2. a. Let resolution be ? module.ResolveExport(e.[[ExportName]], « »).
  // 2. b. If resolution is null or "ambiguous", throw a SyntaxError exception.
  // 2. c. Assert: resolution is a ResolvedBinding Record.
// 3. Assert: All named exports from module are resolvable.
// 4. Let realm be module.[[Realm]].
// 5. Assert: realm is not undefined.
// 6. Let env be NewModuleEnvironment(realm.[[GlobalEnv]]).
// 7. Set module.[[Environment]] to env.
// 8. Let envRec be env's EnvironmentRecord.
// 9. For each ImportEntry Record in in module.[[ImportEntries]], do
  // 9. a. Let importedModule be ! HostResolveImportedModule(module, in.[[ModuleRequest]]).
  // 9. b. NOTE: The above call cannot fail because imported module requests are a subset of module.[[RequestedModules]], and these have been resolved earlier in this algorithm.
  // 9. c. If in.[[ImportName]] is "*", then
    // 9. c. i. Let namespace be ? GetModuleNamespace(importedModule).
    // 9. c. ii. Perform ! envRec.CreateImmutableBinding(in.[[LocalName]], true).
    // 9. c. iii. Call envRec.InitializeBinding(in.[[LocalName]], namespace).
  // 9. d. Else,
    // 9. d. i. Let resolution be ? importedModule.ResolveExport(in.[[ImportName]], « »).
    // 9. d. ii. If resolution is null or "ambiguous", throw a SyntaxError exception.
    // 9. d. iii. Call envRec.CreateImportBinding(in.[[LocalName]], resolution.[[Module]], resolution.[[BindingName]]).
// 10. Let code be module.[[ECMAScriptCode]].
// 11. Let varDeclarations be the VarScopedDeclarations of code.
// 12. Let declaredVarNames be a new empty List.
// 13. For each element d in varDeclarations, do
  // 13. a. For each element dn of the BoundNames of d, do
    // 13. a. i. If dn is not an element of declaredVarNames, then
      // 13. a. i. 1. Perform ! envRec.CreateMutableBinding(dn, false).
      // 13. a. i. 2. Call envRec.InitializeBinding(dn, undefined).
      // 13. a. i. 3. Append dn to declaredVarNames.
// 14. Let lexDeclarations be the LexicallyScopedDeclarations of code.
// 15. For each element d in lexDeclarations, do
  // 15. a. For each element dn of the BoundNames of d, do
    // 15. a. i. If IsConstantDeclaration of d is true, then
      // 15. a. i. 1. Perform ! envRec.CreateImmutableBinding(dn, true).
    // 15. a. ii. Else,
      // 15. a. ii. 1. Perform ! envRec.CreateMutableBinding(dn, false).
    // 15. a. iii. If d is a FunctionDeclaration, a GeneratorDeclaration, an AsyncFunctionDeclaration, or an AsyncGeneratorDeclaration, then
      // 15. a. iii. 1. Let fo be the result of performing InstantiateFunctionObject for d with argument env.
      // 15. a. iii. 2. Call envRec.InitializeBinding(dn, fo).
// 16. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-source-text-module-record-execute-module

// 1. Let module be this Source Text Module Record.
// 2. Let moduleCxt be a new ECMAScript code execution context.
// 3. Set the Function of moduleCxt to null.
// 4. Assert: module.[[Realm]] is not undefined.
// 5. Set the Realm of moduleCxt to module.[[Realm]].
// 6. Set the ScriptOrModule of moduleCxt to module.
// 7. Assert: module has been linked and declarations in its module environment have been instantiated.
// 8. Set the VariableEnvironment of moduleCxt to module.[[Environment]].
// 9. Set the LexicalEnvironment of moduleCxt to module.[[Environment]].
// 10. Suspend the currently running execution context.
// 11. Push moduleCxt on to the execution context stack; moduleCxt is now the running execution context.
// 12. Let result be the result of evaluating module.[[ECMAScriptCode]].
// 13. Suspend moduleCxt and remove it from the execution context stack.
// 14. Resume the context that is now on the top of the execution context stack as the running execution context.
// 15. Return Completion(result).


// http://www.ecma-international.org/ecma-262/#sec-getmodulenamespace

// 1. Assert: module is an instance of a concrete subclass of Module Record.
// 2. Assert: module.[[Status]] is not "uninstantiated".
// 3. Let namespace be module.[[Namespace]].
// 4. If namespace is undefined, then
  // 4. a. Let exportedNames be ? module.GetExportedNames(« »).
  // 4. b. Let unambiguousNames be a new empty List.
  // 4. c. For each name that is an element of exportedNames, do
    // 4. c. i. Let resolution be ? module.ResolveExport(name, « »).
    // 4. c. ii. If resolution is a ResolvedBinding Record, append name to unambiguousNames.
  // 4. d. Set namespace to ModuleNamespaceCreate(module, unambiguousNames).
// 5. Return namespace.


// http://www.ecma-international.org/ecma-262/#sec-toplevelmoduleevaluationjob

// 1. Assert: sourceText is an ECMAScript source text (see clause 10).
// 2. Let realm be the current Realm Record.
// 3. Let m be ParseModule(sourceText, realm, hostDefined).
// 4. If m is a List of errors, then
  // 4. a. Perform HostReportErrors(m).
  // 4. b. Return NormalCompletion(undefined).
// 5. Perform ? m.Instantiate().
// 6. Assert: All dependencies of m have been transitively resolved and m is ready for evaluation.
// 7. Return ? m.Evaluate().


// http://www.ecma-international.org/ecma-262/#sec-module-semantics-runtime-semantics-evaluation

// Module : [empty]

// 1. Return NormalCompletion(undefined).

// ModuleBody : ModuleItemList

// 1. Let result be the result of evaluating ModuleItemList.
// 2. If result.[[Type]] is normal and result.[[Value]] is empty, then
  // 2. a. Return NormalCompletion(undefined).
// 3. Return Completion(result).

// ModuleItemList : ModuleItemList ModuleItem

// 1. Let sl be the result of evaluating ModuleItemList.
// 2. ReturnIfAbrupt(sl).
// 3. Let s be the result of evaluating ModuleItem.
// 4. Return Completion(UpdateEmpty(s, sl)).

// ModuleItem : ImportDeclaration

// 1. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-imports-static-semantics-boundnames

// ImportDeclaration : import ImportClause FromClause ;

// 1. Return the BoundNames of ImportClause.

// ImportDeclaration : import ModuleSpecifier ;

// 1. Return a new empty List.

// ImportClause : ImportedDefaultBinding , NameSpaceImport

// 1. Let names be the BoundNames of ImportedDefaultBinding.
// 2. Append to names the elements of the BoundNames of NameSpaceImport.
// 3. Return names.

// ImportClause : ImportedDefaultBinding , NamedImports

// 1. Let names be the BoundNames of ImportedDefaultBinding.
// 2. Append to names the elements of the BoundNames of NamedImports.
// 3. Return names.

// NamedImports : { }

// 1. Return a new empty List.

// ImportsList : ImportsList , ImportSpecifier

// 1. Let names be the BoundNames of ImportsList.
// 2. Append to names the elements of the BoundNames of ImportSpecifier.
// 3. Return names.

// ImportSpecifier : IdentifierName as ImportedBinding

// 1. Return the BoundNames of ImportedBinding.


// http://www.ecma-international.org/ecma-262/#sec-imports-static-semantics-importentries

// ImportDeclaration : import ImportClause FromClause ;

// 1. Let module be the sole element of ModuleRequests of FromClause.
// 2. Return ImportEntriesForModule of ImportClause with argument module.

// ImportDeclaration : import ModuleSpecifier ;

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-importentriesformodule

// ImportClause : ImportedDefaultBinding , NameSpaceImport

// 1. Let entries be ImportEntriesForModule of ImportedDefaultBinding with argument module.
// 2. Append to entries the elements of the ImportEntriesForModule of NameSpaceImport with argument module.
// 3. Return entries.

// ImportClause : ImportedDefaultBinding , NamedImports

// 1. Let entries be ImportEntriesForModule of ImportedDefaultBinding with argument module.
// 2. Append to entries the elements of the ImportEntriesForModule of NamedImports with argument module.
// 3. Return entries.

// ImportedDefaultBinding : ImportedBinding

// 1. Let localName be the sole element of BoundNames of ImportedBinding.
// 2. Let defaultEntry be the ImportEntry Record { [[ModuleRequest]]: module, [[ImportName]]: "default", [[LocalName]]: localName }.
// 3. Return a new List containing defaultEntry.

// NameSpaceImport : * as ImportedBinding

// 1. Let localName be the StringValue of ImportedBinding.
// 2. Let entry be the ImportEntry Record { [[ModuleRequest]]: module, [[ImportName]]: "*", [[LocalName]]: localName }.
// 3. Return a new List containing entry.

// NamedImports : { }

// 1. Return a new empty List.

// ImportsList : ImportsList , ImportSpecifier

// 1. Let specs be the ImportEntriesForModule of ImportsList with argument module.
// 2. Append to specs the elements of the ImportEntriesForModule of ImportSpecifier with argument module.
// 3. Return specs.

// ImportSpecifier : ImportedBinding

// 1. Let localName be the sole element of BoundNames of ImportedBinding.
// 2. Let entry be the ImportEntry Record { [[ModuleRequest]]: module, [[ImportName]]: localName, [[LocalName]]: localName }.
// 3. Return a new List containing entry.

// ImportSpecifier : IdentifierName as ImportedBinding

// 1. Let importName be the StringValue of IdentifierName.
// 2. Let localName be the StringValue of ImportedBinding.
// 3. Let entry be the ImportEntry Record { [[ModuleRequest]]: module, [[ImportName]]: importName, [[LocalName]]: localName }.
// 4. Return a new List containing entry.


// http://www.ecma-international.org/ecma-262/#sec-imports-static-semantics-modulerequests

// ImportDeclaration : import ImportClause FromClause ;

// 1. Return ModuleRequests of FromClause.

// ModuleSpecifier : StringLiteral

// 1. Return a List containing the StringValue of StringLiteral.


// http://www.ecma-international.org/ecma-262/#sec-exports-static-semantics-boundnames

// ExportDeclaration : export * FromClause ; export ExportClause FromClause ; export ExportClause ;

// 1. Return a new empty List.

// ExportDeclaration : export VariableStatement

// 1. Return the BoundNames of VariableStatement.

// ExportDeclaration : export Declaration

// 1. Return the BoundNames of Declaration.

// ExportDeclaration : export default HoistableDeclaration

// 1. Let declarationNames be the BoundNames of HoistableDeclaration.
// 2. If declarationNames does not include the element "*default*", append "*default*" to declarationNames.
// 3. Return declarationNames.

// ExportDeclaration : export default ClassDeclaration

// 1. Let declarationNames be the BoundNames of ClassDeclaration.
// 2. If declarationNames does not include the element "*default*", append "*default*" to declarationNames.
// 3. Return declarationNames.

// ExportDeclaration : export default AssignmentExpression ;

// 1. Return « "*default*" ».


// http://www.ecma-international.org/ecma-262/#sec-exports-static-semantics-exportedbindings

// ExportDeclaration : export * FromClause ; export ExportClause FromClause ;

// 1. Return a new empty List.

// ExportDeclaration : export ExportClause ;

// 1. Return the ExportedBindings of ExportClause.

// ExportDeclaration : export VariableStatement

// 1. Return the BoundNames of VariableStatement.

// ExportDeclaration : export Declaration

// 1. Return the BoundNames of Declaration.

// ExportDeclaration : export default HoistableDeclaration ExportDeclaration : export default ClassDeclaration ExportDeclaration : export default AssignmentExpression ;

// 1. Return the BoundNames of this ExportDeclaration.

// ExportClause : { }

// 1. Return a new empty List.

// ExportsList : ExportsList , ExportSpecifier

// 1. Let names be the ExportedBindings of ExportsList.
// 2. Append to names the elements of the ExportedBindings of ExportSpecifier.
// 3. Return names.

// ExportSpecifier : IdentifierName

// 1. Return a List containing the StringValue of IdentifierName.

// ExportSpecifier : IdentifierName as IdentifierName

// 1. Return a List containing the StringValue of the first IdentifierName.


// http://www.ecma-international.org/ecma-262/#sec-exports-static-semantics-exportednames

// ExportDeclaration : export * FromClause ;

// 1. Return a new empty List.

// ExportDeclaration : export ExportClause FromClause ; ExportDeclaration : export ExportClause ;

// 1. Return the ExportedNames of ExportClause.

// ExportDeclaration : export VariableStatement

// 1. Return the BoundNames of VariableStatement.

// ExportDeclaration : export Declaration

// 1. Return the BoundNames of Declaration.

// ExportDeclaration : export default HoistableDeclaration ExportDeclaration : export default ClassDeclaration ExportDeclaration : export default AssignmentExpression ;

// 1. Return « "default" ».

// ExportClause : { }

// 1. Return a new empty List.

// ExportsList : ExportsList , ExportSpecifier

// 1. Let names be the ExportedNames of ExportsList.
// 2. Append to names the elements of the ExportedNames of ExportSpecifier.
// 3. Return names.

// ExportSpecifier : IdentifierName

// 1. Return a List containing the StringValue of IdentifierName.

// ExportSpecifier : IdentifierName as IdentifierName

// 1. Return a List containing the StringValue of the second IdentifierName.


// http://www.ecma-international.org/ecma-262/#sec-exports-static-semantics-exportentries

// ExportDeclaration : export * FromClause ;

// 1. Let module be the sole element of ModuleRequests of FromClause.
// 2. Let entry be the ExportEntry Record { [[ModuleRequest]]: module, [[ImportName]]: "*", [[LocalName]]: null, [[ExportName]]: null }.
// 3. Return a new List containing entry.

// ExportDeclaration : export ExportClause FromClause ;

// 1. Let module be the sole element of ModuleRequests of FromClause.
// 2. Return ExportEntriesForModule of ExportClause with argument module.

// ExportDeclaration : export ExportClause ;

// 1. Return ExportEntriesForModule of ExportClause with argument null.

// ExportDeclaration : export VariableStatement

// 1. Let entries be a new empty List.
// 2. Let names be the BoundNames of VariableStatement.
// 3. For each name in names, do
  // 3. a. Append the ExportEntry Record { [[ModuleRequest]]: null, [[ImportName]]: null, [[LocalName]]: name, [[ExportName]]: name } to entries.
// 4. Return entries.

// ExportDeclaration : export Declaration

// 1. Let entries be a new empty List.
// 2. Let names be the BoundNames of Declaration.
// 3. For each name in names, do
  // 3. a. Append the ExportEntry Record { [[ModuleRequest]]: null, [[ImportName]]: null, [[LocalName]]: name, [[ExportName]]: name } to entries.
// 4. Return entries.

// ExportDeclaration : export default HoistableDeclaration

// 1. Let names be BoundNames of HoistableDeclaration.
// 2. Let localName be the sole element of names.
// 3. Return a new List containing the ExportEntry Record { [[ModuleRequest]]: null, [[ImportName]]: null, [[LocalName]]: localName, [[ExportName]]: "default" }.

// ExportDeclaration : export default ClassDeclaration

// 1. Let names be BoundNames of ClassDeclaration.
// 2. Let localName be the sole element of names.
// 3. Return a new List containing the ExportEntry Record { [[ModuleRequest]]: null, [[ImportName]]: null, [[LocalName]]: localName, [[ExportName]]: "default" }.

// ExportDeclaration : export default AssignmentExpression ;

// 1. Let entry be the ExportEntry Record { [[ModuleRequest]]: null, [[ImportName]]: null, [[LocalName]]: "*default*", [[ExportName]]: "default" }.
// 2. Return a new List containing entry.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-exportentriesformodule

// ExportClause : { }

// 1. Return a new empty List.

// ExportsList : ExportsList , ExportSpecifier

// 1. Let specs be the ExportEntriesForModule of ExportsList with argument module.
// 2. Append to specs the elements of the ExportEntriesForModule of ExportSpecifier with argument module.
// 3. Return specs.

// ExportSpecifier : IdentifierName

// 1. Let sourceName be the StringValue of IdentifierName.
// 2. If module is null, then
  // 2. a. Let localName be sourceName.
  // 2. b. Let importName be null.
// 3. Else,
  // 3. a. Let localName be null.
  // 3. b. Let importName be sourceName.
// 4. Return a new List containing the ExportEntry Record { [[ModuleRequest]]: module, [[ImportName]]: importName, [[LocalName]]: localName, [[ExportName]]: sourceName }.

// ExportSpecifier : IdentifierName as IdentifierName

// 1. Let sourceName be the StringValue of the first IdentifierName.
// 2. Let exportName be the StringValue of the second IdentifierName.
// 3. If module is null, then
  // 3. a. Let localName be sourceName.
  // 3. b. Let importName be null.
// 4. Else,
  // 4. a. Let localName be null.
  // 4. b. Let importName be sourceName.
// 5. Return a new List containing the ExportEntry Record { [[ModuleRequest]]: module, [[ImportName]]: importName, [[LocalName]]: localName, [[ExportName]]: exportName }.


// http://www.ecma-international.org/ecma-262/#sec-exports-static-semantics-isconstantdeclaration

// ExportDeclaration : export * FromClause ; export ExportClause FromClause ; export ExportClause ; export default AssignmentExpression ;

// 1. Return false.


// http://www.ecma-international.org/ecma-262/#sec-exports-static-semantics-lexicallyscopeddeclarations

// ExportDeclaration : export * FromClause ; export ExportClause FromClause ; export ExportClause ; export VariableStatement

// 1. Return a new empty List.

// ExportDeclaration : export Declaration

// 1. Return a new List containing DeclarationPart of Declaration.

// ExportDeclaration : export default HoistableDeclaration

// 1. Return a new List containing DeclarationPart of HoistableDeclaration.

// ExportDeclaration : export default ClassDeclaration

// 1. Return a new List containing ClassDeclaration.

// ExportDeclaration : export default AssignmentExpression ;

// 1. Return a new List containing this ExportDeclaration.


// http://www.ecma-international.org/ecma-262/#sec-exports-static-semantics-modulerequests

// ExportDeclaration : export * FromClause ; ExportDeclaration : export ExportClause FromClause ;

// 1. Return the ModuleRequests of FromClause.

// ExportDeclaration : export ExportClause ; export VariableStatement export Declaration export default HoistableDeclaration export default ClassDeclaration export default AssignmentExpression ;

// 1. Return a new empty List.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-referencedbindings

// ExportClause : { }

// 1. Return a new empty List.

// ExportsList : ExportsList , ExportSpecifier

// 1. Let names be the ReferencedBindings of ExportsList.
// 2. Append to names the elements of the ReferencedBindings of ExportSpecifier.
// 3. Return names.

// ExportSpecifier : IdentifierName

// 1. Return a List containing the IdentifierName.

// ExportSpecifier : IdentifierName as IdentifierName

// 1. Return a List containing the first IdentifierName.


// http://www.ecma-international.org/ecma-262/#sec-exports-runtime-semantics-evaluation

// ExportDeclaration : export * FromClause ; export ExportClause FromClause ; export ExportClause ;

// 1. Return NormalCompletion(empty).

// ExportDeclaration : export VariableStatement

// 1. Return the result of evaluating VariableStatement.

// ExportDeclaration : export Declaration

// 1. Return the result of evaluating Declaration.

// ExportDeclaration : export default HoistableDeclaration

// 1. Return the result of evaluating HoistableDeclaration.

// ExportDeclaration : export default ClassDeclaration

// 1. Let value be the result of BindingClassDeclarationEvaluation of ClassDeclaration.
// 2. ReturnIfAbrupt(value).
// 3. Let className be the sole element of BoundNames of ClassDeclaration.
// 4. If className is "*default*", then
  // 4. a. Let env be the running execution context's LexicalEnvironment.
  // 4. b. Perform ? InitializeBoundName("*default*", value, env).
// 5. Return NormalCompletion(empty).

// ExportDeclaration : export default AssignmentExpression ;

// 1. If IsAnonymousFunctionDefinition(AssignmentExpression) is true, then
  // 1. a. Let value be the result of performing NamedEvaluation for AssignmentExpression with argument "default".
// 2. Else,
  // 2. a. Let rhs be the result of evaluating AssignmentExpression.
  // 2. b. Let value be ? GetValue(rhs).
// 3. Let env be the running execution context's LexicalEnvironment.
// 4. Perform ? InitializeBoundName("*default*", value, env).
// 5. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-eval-x

// 1. Assert: The execution context stack has at least two elements.
// 2. Let callerContext be the second to top element of the execution context stack.
// 3. Let callerRealm be callerContext's Realm.
// 4. Let calleeRealm be the current Realm Record.
// 5. Perform ? HostEnsureCanCompileStrings(callerRealm, calleeRealm).
// 6. Return ? PerformEval(x, calleeRealm, false, false).


// http://www.ecma-international.org/ecma-262/#sec-performeval

// 1. Assert: If direct is false, then strictCaller is also false.
// 2. If Type(x) is not String, return x.
// 3. Let thisEnvRec be ! GetThisEnvironment().
// 4. If thisEnvRec is a function Environment Record, then
  // 4. a. Let F be thisEnvRec.[[FunctionObject]].
  // 4. b. Let inFunction be true.
  // 4. c. Let inMethod be thisEnvRec.HasSuperBinding().
  // 4. d. If F.[[ConstructorKind]] is "derived", let inDerivedConstructor be true; otherwise, let inDerivedConstructor be false.
// 5. Else,
  // 5. a. Let inFunction be false.
  // 5. b. Let inMethod be false.
  // 5. c. Let inDerivedConstructor be false.
// 6. Let script be the ECMAScript code that is the result of parsing x, interpreted as UTF-16 encoded Unicode text as described in 6.1.4, for the goal symbol Script. If inFunction is false, additional early error rules from 18.2.1.1.1 are applied. If inMethod is false, additional early error rules from 18.2.1.1.2 are applied. If inDerivedConstructor is false, additional early error rules from 18.2.1.1.3 are applied. If the parse fails, throw a SyntaxError exception. If any early errors are detected, throw a SyntaxError or a ReferenceError exception, depending on the type of the error (but see also clause 16). Parsing and early error detection may be interweaved in an implementation-dependent manner.
// 7. If script Contains ScriptBody is false, return undefined.
// 8. Let body be the ScriptBody of script.
// 9. If strictCaller is true, let strictEval be true.
// 10. Else, let strictEval be IsStrict of script.
// 11. Let ctx be the running execution context.
// 12. NOTE: If direct is true, ctx will be the execution context that performed the direct eval. If direct is false, ctx will be the execution context for the invocation of the eval function.
// 13. If direct is true, then
  // 13. a. Let lexEnv be NewDeclarativeEnvironment(ctx's LexicalEnvironment).
  // 13. b. Let varEnv be ctx's VariableEnvironment.
// 14. Else,
  // 14. a. Let lexEnv be NewDeclarativeEnvironment(evalRealm.[[GlobalEnv]]).
  // 14. b. Let varEnv be evalRealm.[[GlobalEnv]].
// 15. If strictEval is true, set varEnv to lexEnv.
// 16. If ctx is not already suspended, suspend ctx.
// 17. Let evalCxt be a new ECMAScript code execution context.
// 18. Set the evalCxt's Function to null.
// 19. Set the evalCxt's Realm to evalRealm.
// 20. Set the evalCxt's ScriptOrModule to ctx's ScriptOrModule.
// 21. Set the evalCxt's VariableEnvironment to varEnv.
// 22. Set the evalCxt's LexicalEnvironment to lexEnv.
// 23. Push evalCxt on to the execution context stack; evalCxt is now the running execution context.
// 24. Let result be EvalDeclarationInstantiation(body, varEnv, lexEnv, strictEval).
// 25. If result.[[Type]] is normal, then
  // 25. a. Set result to the result of evaluating body.
// 26. If result.[[Type]] is normal and result.[[Value]] is empty, then
  // 26. a. Set result to NormalCompletion(undefined).
// 27. Suspend evalCxt and remove it from the execution context stack.
// 28. Resume the context that is now on the top of the execution context stack as the running execution context.
// 29. Return Completion(result).


// http://www.ecma-international.org/ecma-262/#sec-evaldeclarationinstantiation

// 1. Let varNames be the VarDeclaredNames of body.
// 2. Let varDeclarations be the VarScopedDeclarations of body.
// 3. Let lexEnvRec be lexEnv's EnvironmentRecord.
// 4. Let varEnvRec be varEnv's EnvironmentRecord.
// 5. If strict is false, then
  // 5. a. If varEnvRec is a global Environment Record, then
    // 5. a. i. For each name in varNames, do
      // 5. a. i. 1. If varEnvRec.HasLexicalDeclaration(name) is true, throw a SyntaxError exception.
      // 5. a. i. 2. NOTE: eval will not create a global var declaration that would be shadowed by a global lexical declaration.
  // 5. b. Let thisLex be lexEnv.
  // 5. c. Assert: The following loop will terminate.
  // 5. d. Repeat, while thisLex is not the same as varEnv,
    // 5. d. i. Let thisEnvRec be thisLex's EnvironmentRecord.
    // 5. d. ii. If thisEnvRec is not an object Environment Record, then
      // 5. d. ii. 1. NOTE: The environment of with statements cannot contain any lexical declaration so it doesn't need to be checked for var/let hoisting conflicts.
      // 5. d. ii. 2. For each name in varNames, do
        // 5. d. ii. 2. a. If thisEnvRec.HasBinding(name) is true, then
          // 5. d. ii. 2. a. i. Throw a SyntaxError exception.
          // 5. d. ii. 2. a. ii. NOTE: Annex B.3.5 defines alternate semantics for the above step.
        // 5. d. ii. 2. b. NOTE: A direct eval will not hoist var declaration over a like-named lexical declaration.
    // 5. d. iii. Set thisLex to thisLex's outer environment reference.
// 6. Let functionsToInitialize be a new empty List.
// 7. Let declaredFunctionNames be a new empty List.
// 8. For each d in varDeclarations, in reverse list order, do
  // 8. a. If d is neither a VariableDeclaration nor a ForBinding nor a BindingIdentifier, then
    // 8. a. i. Assert: d is either a FunctionDeclaration, a GeneratorDeclaration, an AsyncFunctionDeclaration, or an AsyncGeneratorDeclaration.
    // 8. a. ii. NOTE: If there are multiple function declarations for the same name, the last declaration is used.
    // 8. a. iii. Let fn be the sole element of the BoundNames of d.
    // 8. a. iv. If fn is not an element of declaredFunctionNames, then
      // 8. a. iv. 1. If varEnvRec is a global Environment Record, then
        // 8. a. iv. 1. a. Let fnDefinable be ? varEnvRec.CanDeclareGlobalFunction(fn).
        // 8. a. iv. 1. b. If fnDefinable is false, throw a TypeError exception.
      // 8. a. iv. 2. Append fn to declaredFunctionNames.
      // 8. a. iv. 3. Insert d as the first element of functionsToInitialize.
// 9. NOTE: Annex B.3.3.3 adds additional steps at this point.
// 10. Let declaredVarNames be a new empty List.
// 11. For each d in varDeclarations, do
  // 11. a. If d is a VariableDeclaration, a ForBinding, or a BindingIdentifier, then
    // 11. a. i. For each String vn in the BoundNames of d, do
      // 11. a. i. 1. If vn is not an element of declaredFunctionNames, then
        // 11. a. i. 1. a. If varEnvRec is a global Environment Record, then
          // 11. a. i. 1. a. i. Let vnDefinable be ? varEnvRec.CanDeclareGlobalVar(vn).
          // 11. a. i. 1. a. ii. If vnDefinable is false, throw a TypeError exception.
        // 11. a. i. 1. b. If vn is not an element of declaredVarNames, then
          // 11. a. i. 1. b. i. Append vn to declaredVarNames.
// 12. NOTE: No abnormal terminations occur after this algorithm step unless varEnvRec is a global Environment Record and the global object is a Proxy exotic object.
// 13. Let lexDeclarations be the LexicallyScopedDeclarations of body.
// 14. For each element d in lexDeclarations, do
  // 14. a. NOTE: Lexically declared names are only instantiated here but not initialized.
  // 14. b. For each element dn of the BoundNames of d, do
    // 14. b. i. If IsConstantDeclaration of d is true, then
      // 14. b. i. 1. Perform ? lexEnvRec.CreateImmutableBinding(dn, true).
    // 14. b. ii. Else,
      // 14. b. ii. 1. Perform ? lexEnvRec.CreateMutableBinding(dn, false).
// 15. For each Parse Node f in functionsToInitialize, do
  // 15. a. Let fn be the sole element of the BoundNames of f.
  // 15. b. Let fo be the result of performing InstantiateFunctionObject for f with argument lexEnv.
  // 15. c. If varEnvRec is a global Environment Record, then
    // 15. c. i. Perform ? varEnvRec.CreateGlobalFunctionBinding(fn, fo, true).
  // 15. d. Else,
    // 15. d. i. Let bindingExists be varEnvRec.HasBinding(fn).
    // 15. d. ii. If bindingExists is false, then
      // 15. d. ii. 1. Let status be ! varEnvRec.CreateMutableBinding(fn, true).
      // 15. d. ii. 2. Assert: status is not an abrupt completion because of validation preceding step 12.
      // 15. d. ii. 3. Perform ! varEnvRec.InitializeBinding(fn, fo).
    // 15. d. iii. Else,
      // 15. d. iii. 1. Perform ! varEnvRec.SetMutableBinding(fn, fo, false).
// 16. For each String vn in declaredVarNames, in list order, do
  // 16. a. If varEnvRec is a global Environment Record, then
    // 16. a. i. Perform ? varEnvRec.CreateGlobalVarBinding(vn, true).
  // 16. b. Else,
    // 16. b. i. Let bindingExists be varEnvRec.HasBinding(vn).
    // 16. b. ii. If bindingExists is false, then
      // 16. b. ii. 1. Let status be ! varEnvRec.CreateMutableBinding(vn, true).
      // 16. b. ii. 2. Assert: status is not an abrupt completion because of validation preceding step 12.
      // 16. b. ii. 3. Perform ! varEnvRec.InitializeBinding(vn, undefined).
// 17. Return NormalCompletion(empty).


// http://www.ecma-international.org/ecma-262/#sec-isfinite-number

// 1. Let num be ? ToNumber(number).
// 2. If num is NaN, +∞, or -∞, return false.
// 3. Otherwise, return true.


// http://www.ecma-international.org/ecma-262/#sec-isnan-number

// 1. Let num be ? ToNumber(number).
// 2. If num is NaN, return true.
// 3. Otherwise, return false.


// http://www.ecma-international.org/ecma-262/#sec-parsefloat-string

// 1. Let inputString be ? ToString(string).
// 2. Let trimmedString be a substring of inputString consisting of the leftmost code unit that is not a StrWhiteSpaceChar and all code units to the right of that code unit. (In other words, remove leading white space.) If inputString does not contain any such code units, let trimmedString be the empty string.
// 3. If neither trimmedString nor any prefix of trimmedString satisfies the syntax of a StrDecimalLiteral (see 7.1.3.1), return NaN.
// 4. Let numberString be the longest prefix of trimmedString, which might be trimmedString itself, that satisfies the syntax of a StrDecimalLiteral.
// 5. Let mathFloat be MV of numberString.
// 6. If mathFloat = 0, then
  // 6. a. If the first code unit of trimmedString is the code unit 0x002D (HYPHEN-MINUS), return -0.
  // 6. b. Return +0.
// 7. Return the Number value for mathFloat.


// http://www.ecma-international.org/ecma-262/#sec-parseint-string-radix

// 1. Let inputString be ? ToString(string).
// 2. Let S be a newly created substring of inputString consisting of the first code unit that is not a StrWhiteSpaceChar and all code units following that code unit. (In other words, remove leading white space.) If inputString does not contain any such code unit, let S be the empty string.
// 3. Let sign be 1.
// 4. If S is not empty and the first code unit of S is the code unit 0x002D (HYPHEN-MINUS), set sign to -1.
// 5. If S is not empty and the first code unit of S is the code unit 0x002B (PLUS SIGN) or the code unit 0x002D (HYPHEN-MINUS), remove the first code unit from S.
// 6. Let R be ? ToInt32(radix).
// 7. Let stripPrefix be true.
// 8. If R ≠ 0, then
  // 8. a. If R < 2 or R > 36, return NaN.
  // 8. b. If R ≠ 16, set stripPrefix to false.
// 9. Else R = 0,
  // 9. a. Set R to 10.
// 10. If stripPrefix is true, then
  // 10. a. If the length of S is at least 2 and the first two code units of S are either "0x" or "0X", then
    // 10. a. i. Remove the first two code units from S.
    // 10. a. ii. Set R to 16.
// 11. If S contains a code unit that is not a radix-R digit, let Z be the substring of S consisting of all code units before the first such code unit; otherwise, let Z be S.
// 12. If Z is empty, return NaN.
// 13. Let mathInt be the mathematical integer value that is represented by Z in radix-R notation, using the letters A-Z and a-z for digits with values 10 through 35. (However, if R is 10 and Z contains more than 20 significant digits, every significant digit after the 20th may be replaced by a 0 digit, at the option of the implementation; and if R is not 2, 4, 8, 10, 16, or 32, then mathInt may be an implementation-dependent approximation to the mathematical integer value that is represented by Z in radix-R notation.)
// 14. If mathInt = 0, then
  // 14. a. If sign = -1, return -0.
  // 14. b. Return +0.
// 15. Let number be the Number value for mathInt.
// 16. Return sign × number.


// http://www.ecma-international.org/ecma-262/#sec-encode

// 1. Let strLen be the number of code units in string.
// 2. Let R be the empty String.
// 3. Let k be 0.
// 4. Repeat,
  // 4. a. If k equals strLen, return R.
  // 4. b. Let C be the code unit at index k within string.
  // 4. c. If C is in unescapedSet, then
    // 4. c. i. Let S be the String value containing only the code unit C.
    // 4. c. ii. Set R to the string-concatenation of the previous value of R and S.
  // 4. d. Else C is not in unescapedSet,
    // 4. d. i. If C is a trailing surrogate, throw a URIError exception.
    // 4. d. ii. If C is not a leading surrogate, then
      // 4. d. ii. 1. Let V be the code point with the same numeric value as code unit C.
    // 4. d. iii. Else,
      // 4. d. iii. 1. Increase k by 1.
      // 4. d. iii. 2. If k equals strLen, throw a URIError exception.
      // 4. d. iii. 3. Let kChar be the code unit at index k within string.
      // 4. d. iii. 4. If kChar is not a trailing surrogate, throw a URIError exception.
      // 4. d. iii. 5. Let V be UTF16Decode(C, kChar).
    // 4. d. iv. Let Octets be the List of octets resulting by applying the UTF-8 transformation to V.
    // 4. d. v. For each element octet of Octets in List order, do
      // 4. d. v. 1. Let S be the string-concatenation of:"%"the String representation of octet, formatted as a two-digit uppercase hexadecimal number, padded to the left with a zero if necessary
      // 4. d. v. 2. Set R to the string-concatenation of the previous value of R and S.
  // 4. e. Increase k by 1.


// http://www.ecma-international.org/ecma-262/#sec-decode

// 1. Let strLen be the number of code units in string.
// 2. Let R be the empty String.
// 3. Let k be 0.
// 4. Repeat,
  // 4. a. If k equals strLen, return R.
  // 4. b. Let C be the code unit at index k within string.
  // 4. c. If C is not the code unit 0x0025 (PERCENT SIGN), then
    // 4. c. i. Let S be the String value containing only the code unit C.
  // 4. d. Else C is the code unit 0x0025 (PERCENT SIGN),
    // 4. d. i. Let start be k.
    // 4. d. ii. If k + 2 is greater than or equal to strLen, throw a URIError exception.
    // 4. d. iii. If the code units at index (k + 1) and (k + 2) within string do not represent hexadecimal digits, throw a URIError exception.
    // 4. d. iv. Let B be the 8-bit value represented by the two hexadecimal digits at index (k + 1) and (k + 2).
    // 4. d. v. Increment k by 2.
    // 4. d. vi. If the most significant bit in B is 0, then
      // 4. d. vi. 1. Let C be the code unit whose value is B.
      // 4. d. vi. 2. If C is not in reservedSet, then
        // 4. d. vi. 2. a. Let S be the String value containing only the code unit C.
      // 4. d. vi. 3. Else C is in reservedSet,
        // 4. d. vi. 3. a. Let S be the substring of string from index start to index k inclusive.
    // 4. d. vii. Else the most significant bit in B is 1,
      // 4. d. vii. 1. Let n be the smallest nonnegative integer such that (B << n) & 0x80 is equal to 0.
      // 4. d. vii. 2. If n equals 1 or n is greater than 4, throw a URIError exception.
      // 4. d. vii. 3. Let Octets be a List of 8-bit integers of size n.
      // 4. d. vii. 4. Set Octets[0] to B.
      // 4. d. vii. 5. If k + (3 × (n - 1)) is greater than or equal to strLen, throw a URIError exception.
      // 4. d. vii. 6. Let j be 1.
      // 4. d. vii. 7. Repeat, while j < n
        // 4. d. vii. 7. a. Increment k by 1.
        // 4. d. vii. 7. b. If the code unit at index k within string is not the code unit 0x0025 (PERCENT SIGN), throw a URIError exception.
        // 4. d. vii. 7. c. If the code units at index (k + 1) and (k + 2) within string do not represent hexadecimal digits, throw a URIError exception.
        // 4. d. vii. 7. d. Let B be the 8-bit value represented by the two hexadecimal digits at index (k + 1) and (k + 2).
        // 4. d. vii. 7. e. If the two most significant bits in B are not 10, throw a URIError exception.
        // 4. d. vii. 7. f. Increment k by 2.
        // 4. d. vii. 7. g. Set Octets[j] to B.
        // 4. d. vii. 7. h. Increment j by 1.
      // 4. d. vii. 8. If Octets does not contain a valid UTF-8 encoding of a Unicode code point, throw a URIError exception.
      // 4. d. vii. 9. Let V be the value obtained by applying the UTF-8 transformation to Octets, that is, from a List of octets into a 21-bit value.
      // 4. d. vii. 10. Let S be the String value whose code units are, in order, the elements in UTF16Encoding(V).
  // 4. e. Set R to the string-concatenation of the previous value of R and S.
  // 4. f. Increase k by 1.


// http://www.ecma-international.org/ecma-262/#sec-decodeuri-encodeduri

// 1. Let uriString be ? ToString(encodedURI).
// 2. Let reservedURISet be a String containing one instance of each code unit valid in uriReserved plus "#".
// 3. Return ? Decode(uriString, reservedURISet).


// http://www.ecma-international.org/ecma-262/#sec-decodeuricomponent-encodeduricomponent

// 1. Let componentString be ? ToString(encodedURIComponent).
// 2. Let reservedURIComponentSet be the empty String.
// 3. Return ? Decode(componentString, reservedURIComponentSet).


// http://www.ecma-international.org/ecma-262/#sec-encodeuri-uri

// 1. Let uriString be ? ToString(uri).
// 2. Let unescapedURISet be a String containing one instance of each code unit valid in uriReserved and uriUnescaped plus "#".
// 3. Return ? Encode(uriString, unescapedURISet).


// http://www.ecma-international.org/ecma-262/#sec-encodeuricomponent-uricomponent

// 1. Let componentString be ? ToString(uriComponent).
// 2. Let unescapedURIComponentSet be a String containing one instance of each code unit valid in uriUnescaped.
// 3. Return ? Encode(componentString, unescapedURIComponentSet).


// http://www.ecma-international.org/ecma-262/#sec-object-value

// 1. If NewTarget is neither undefined nor the active function, then
  // 1. a. Return ? OrdinaryCreateFromConstructor(NewTarget, "%ObjectPrototype%").
// 2. If value is null, undefined or not supplied, return ObjectCreate(%ObjectPrototype%).
// 3. Return ! ToObject(value).


// http://www.ecma-international.org/ecma-262/#sec-object.assign

// 1. Let to be ? ToObject(target).
// 2. If only one argument was passed, return to.
// 3. Let sources be the List of argument values starting with the second argument.
// 4. For each element nextSource of sources, in ascending index order, do
  // 4. a. If nextSource is neither undefined nor null, then
    // 4. a. i. Let from be ! ToObject(nextSource).
    // 4. a. ii. Let keys be ? from.[[OwnPropertyKeys]]().
    // 4. a. iii. For each element nextKey of keys in List order, do
      // 4. a. iii. 1. Let desc be ? from.[[GetOwnProperty]](nextKey).
      // 4. a. iii. 2. If desc is not undefined and desc.[[Enumerable]] is true, then
        // 4. a. iii. 2. a. Let propValue be ? Get(from, nextKey).
        // 4. a. iii. 2. b. Perform ? Set(to, nextKey, propValue, true).
// 5. Return to.


// http://www.ecma-international.org/ecma-262/#sec-object.create

// 1. If Type(O) is neither Object nor Null, throw a TypeError exception.
// 2. Let obj be ObjectCreate(O).
// 3. If Properties is not undefined, then
  // 3. a. Return ? ObjectDefineProperties(obj, Properties).
// 4. Return obj.


// http://www.ecma-international.org/ecma-262/#sec-object.defineproperties

// 1. Return ? ObjectDefineProperties(O, Properties).


// http://www.ecma-international.org/ecma-262/#sec-objectdefineproperties

// 1. If Type(O) is not Object, throw a TypeError exception.
// 2. Let props be ? ToObject(Properties).
// 3. Let keys be ? props.[[OwnPropertyKeys]]().
// 4. Let descriptors be a new empty List.
// 5. For each element nextKey of keys in List order, do
  // 5. a. Let propDesc be ? props.[[GetOwnProperty]](nextKey).
  // 5. b. If propDesc is not undefined and propDesc.[[Enumerable]] is true, then
    // 5. b. i. Let descObj be ? Get(props, nextKey).
    // 5. b. ii. Let desc be ? ToPropertyDescriptor(descObj).
    // 5. b. iii. Append the pair (a two element List) consisting of nextKey and desc to the end of descriptors.
// 6. For each pair from descriptors in list order, do
  // 6. a. Let P be the first element of pair.
  // 6. b. Let desc be the second element of pair.
  // 6. c. Perform ? DefinePropertyOrThrow(O, P, desc).
// 7. Return O.


// http://www.ecma-international.org/ecma-262/#sec-object.defineproperty

// 1. If Type(O) is not Object, throw a TypeError exception.
// 2. Let key be ? ToPropertyKey(P).
// 3. Let desc be ? ToPropertyDescriptor(Attributes).
// 4. Perform ? DefinePropertyOrThrow(O, key, desc).
// 5. Return O.


// http://www.ecma-international.org/ecma-262/#sec-object.entries

// 1. Let obj be ? ToObject(O).
// 2. Let nameList be ? EnumerableOwnPropertyNames(obj, "key+value").
// 3. Return CreateArrayFromList(nameList).


// http://www.ecma-international.org/ecma-262/#sec-object.freeze

// 1. If Type(O) is not Object, return O.
// 2. Let status be ? SetIntegrityLevel(O, "frozen").
// 3. If status is false, throw a TypeError exception.
// 4. Return O.


// http://www.ecma-international.org/ecma-262/#sec-object.fromentries

// 1. Perform ? RequireObjectCoercible(iterable).
// 2. Let obj be ObjectCreate(%ObjectPrototype%).
// 3. Assert: obj is an extensible ordinary object with no own properties.
// 4. Let stepsDefine be the algorithm steps defined in CreateDataPropertyOnObject Functions.
// 5. Let adder be CreateBuiltinFunction(stepsDefine, « »).
// 6. Return ? AddEntriesFromIterable(obj, iterable, adder).


// http://www.ecma-international.org/ecma-262/#sec-create-data-property-on-object-functions

// 1. Let O be the this value.
// 2. Assert: Type(O) is Object.
// 3. Assert: O is an extensible ordinary object.
// 4. Let propertyKey be ? ToPropertyKey(key).
// 5. Perform ! CreateDataPropertyOrThrow(O, propertyKey, value).
// 6. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-object.getownpropertydescriptor

// 1. Let obj be ? ToObject(O).
// 2. Let key be ? ToPropertyKey(P).
// 3. Let desc be ? obj.[[GetOwnProperty]](key).
// 4. Return FromPropertyDescriptor(desc).


// http://www.ecma-international.org/ecma-262/#sec-object.getownpropertydescriptors

// 1. Let obj be ? ToObject(O).
// 2. Let ownKeys be ? obj.[[OwnPropertyKeys]]().
// 3. Let descriptors be ! ObjectCreate(%ObjectPrototype%).
// 4. For each element key of ownKeys in List order, do
  // 4. a. Let desc be ? obj.[[GetOwnProperty]](key).
  // 4. b. Let descriptor be ! FromPropertyDescriptor(desc).
  // 4. c. If descriptor is not undefined, perform ! CreateDataProperty(descriptors, key, descriptor).
// 5. Return descriptors.


// http://www.ecma-international.org/ecma-262/#sec-object.getownpropertynames

// 1. Return ? GetOwnPropertyKeys(O, String).


// http://www.ecma-international.org/ecma-262/#sec-object.getownpropertysymbols

// 1. Return ? GetOwnPropertyKeys(O, Symbol).


// http://www.ecma-international.org/ecma-262/#sec-getownpropertykeys

// 1. Let obj be ? ToObject(O).
// 2. Let keys be ? obj.[[OwnPropertyKeys]]().
// 3. Let nameList be a new empty List.
// 4. For each element nextKey of keys in List order, do
  // 4. a. If Type(nextKey) is type, then
    // 4. a. i. Append nextKey as the last element of nameList.
// 5. Return CreateArrayFromList(nameList).


// http://www.ecma-international.org/ecma-262/#sec-object.getprototypeof

// 1. Let obj be ? ToObject(O).
// 2. Return ? obj.[[GetPrototypeOf]]().


// http://www.ecma-international.org/ecma-262/#sec-object.is

// 1. Return SameValue(value1, value2).


// http://www.ecma-international.org/ecma-262/#sec-object.isextensible

// 1. If Type(O) is not Object, return false.
// 2. Return ? IsExtensible(O).


// http://www.ecma-international.org/ecma-262/#sec-object.isfrozen

// 1. If Type(O) is not Object, return true.
// 2. Return ? TestIntegrityLevel(O, "frozen").


// http://www.ecma-international.org/ecma-262/#sec-object.issealed

// 1. If Type(O) is not Object, return true.
// 2. Return ? TestIntegrityLevel(O, "sealed").


// http://www.ecma-international.org/ecma-262/#sec-object.keys

// 1. Let obj be ? ToObject(O).
// 2. Let nameList be ? EnumerableOwnPropertyNames(obj, "key").
// 3. Return CreateArrayFromList(nameList).


// http://www.ecma-international.org/ecma-262/#sec-object.preventextensions

// 1. If Type(O) is not Object, return O.
// 2. Let status be ? O.[[PreventExtensions]]().
// 3. If status is false, throw a TypeError exception.
// 4. Return O.


// http://www.ecma-international.org/ecma-262/#sec-object.seal

// 1. If Type(O) is not Object, return O.
// 2. Let status be ? SetIntegrityLevel(O, "sealed").
// 3. If status is false, throw a TypeError exception.
// 4. Return O.


// http://www.ecma-international.org/ecma-262/#sec-object.setprototypeof

// 1. Set O to ? RequireObjectCoercible(O).
// 2. If Type(proto) is neither Object nor Null, throw a TypeError exception.
// 3. If Type(O) is not Object, return O.
// 4. Let status be ? O.[[SetPrototypeOf]](proto).
// 5. If status is false, throw a TypeError exception.
// 6. Return O.


// http://www.ecma-international.org/ecma-262/#sec-object.values

// 1. Let obj be ? ToObject(O).
// 2. Let nameList be ? EnumerableOwnPropertyNames(obj, "value").
// 3. Return CreateArrayFromList(nameList).


// http://www.ecma-international.org/ecma-262/#sec-object.prototype.hasownproperty

// 1. Let P be ? ToPropertyKey(V).
// 2. Let O be ? ToObject(this value).
// 3. Return ? HasOwnProperty(O, P).


// http://www.ecma-international.org/ecma-262/#sec-object.prototype.isprototypeof

// 1. If Type(V) is not Object, return false.
// 2. Let O be ? ToObject(this value).
// 3. Repeat,
  // 3. a. Set V to ? V.[[GetPrototypeOf]]().
  // 3. b. If V is null, return false.
  // 3. c. If SameValue(O, V) is true, return true.


// http://www.ecma-international.org/ecma-262/#sec-object.prototype.propertyisenumerable

// 1. Let P be ? ToPropertyKey(V).
// 2. Let O be ? ToObject(this value).
// 3. Let desc be ? O.[[GetOwnProperty]](P).
// 4. If desc is undefined, return false.
// 5. Return desc.[[Enumerable]].


// http://www.ecma-international.org/ecma-262/#sec-object.prototype.tolocalestring

// 1. Let O be the this value.
// 2. Return ? Invoke(O, "toString").


// http://www.ecma-international.org/ecma-262/#sec-object.prototype.tostring

// 1. If the this value is undefined, return "[object Undefined]".
// 2. If the this value is null, return "[object Null]".
// 3. Let O be ! ToObject(this value).
// 4. Let isArray be ? IsArray(O).
// 5. If isArray is true, let builtinTag be "Array".
// 6. Else if O is a String exotic object, let builtinTag be "String".
// 7. Else if O has a [[ParameterMap]] internal slot, let builtinTag be "Arguments".
// 8. Else if O has a [[Call]] internal method, let builtinTag be "Function".
// 9. Else if O has an [[ErrorData]] internal slot, let builtinTag be "Error".
// 10. Else if O has a [[BooleanData]] internal slot, let builtinTag be "Boolean".
// 11. Else if O has a [[NumberData]] internal slot, let builtinTag be "Number".
// 12. Else if O has a [[DateValue]] internal slot, let builtinTag be "Date".
// 13. Else if O has a [[RegExpMatcher]] internal slot, let builtinTag be "RegExp".
// 14. Else, let builtinTag be "Object".
// 15. Let tag be ? Get(O, @@toStringTag).
// 16. If Type(tag) is not String, set tag to builtinTag.
// 17. Return the string-concatenation of "[object ", tag, and "]".


// http://www.ecma-international.org/ecma-262/#sec-object.prototype.valueof

// 1. Return ? ToObject(this value).


// http://www.ecma-international.org/ecma-262/#sec-function-p1-p2-pn-body

// 1. Let C be the active function object.
// 2. Let args be the argumentsList that was passed to this function by [[Call]] or [[Construct]].
// 3. Return ? CreateDynamicFunction(C, NewTarget, "normal", args).


// http://www.ecma-international.org/ecma-262/#sec-createdynamicfunction

// 1. Assert: The execution context stack has at least two elements.
// 2. Let callerContext be the second to top element of the execution context stack.
// 3. Let callerRealm be callerContext's Realm.
// 4. Let calleeRealm be the current Realm Record.
// 5. Perform ? HostEnsureCanCompileStrings(callerRealm, calleeRealm).
// 6. If newTarget is undefined, set newTarget to constructor.
// 7. If kind is "normal", then
  // 7. a. Let goal be the grammar symbol FunctionBody[~Yield, ~Await].
  // 7. b. Let parameterGoal be the grammar symbol FormalParameters[~Yield, ~Await].
  // 7. c. Let fallbackProto be "%FunctionPrototype%".
// 8. Else if kind is "generator", then
  // 8. a. Let goal be the grammar symbol GeneratorBody.
  // 8. b. Let parameterGoal be the grammar symbol FormalParameters[+Yield, ~Await].
  // 8. c. Let fallbackProto be "%Generator%".
// 9. Else if kind is "async", then
  // 9. a. Let goal be the grammar symbol AsyncFunctionBody.
  // 9. b. Let parameterGoal be the grammar symbol FormalParameters[~Yield, +Await].
  // 9. c. Let fallbackProto be "%AsyncFunctionPrototype%".
// 10. Else,
  // 10. a. Assert: kind is "async generator".
  // 10. b. Let goal be the grammar symbol AsyncGeneratorBody.
  // 10. c. Let parameterGoal be the grammar symbol FormalParameters[+Yield, +Await].
  // 10. d. Let fallbackProto be "%AsyncGenerator%".
// 11. Let argCount be the number of elements in args.
// 12. Let P be the empty String.
// 13. If argCount = 0, let bodyText be the empty String.
// 14. Else if argCount = 1, let bodyText be args[0].
// 15. Else argCount > 1,
  // 15. a. Let firstArg be args[0].
  // 15. b. Set P to ? ToString(firstArg).
  // 15. c. Let k be 1.
  // 15. d. Repeat, while k < argCount - 1
    // 15. d. i. Let nextArg be args[k].
    // 15. d. ii. Let nextArgString be ? ToString(nextArg).
    // 15. d. iii. Set P to the string-concatenation of the previous value of P, "," (a comma), and nextArgString.
    // 15. d. iv. Increase k by 1.
  // 15. e. Let bodyText be args[k].
// 16. Set bodyText to ? ToString(bodyText).
// 17. Let parameters be the result of parsing P, interpreted as UTF-16 encoded Unicode text as described in 6.1.4, using parameterGoal as the goal symbol. Throw a SyntaxError exception if the parse fails.
// 18. Let body be the result of parsing bodyText, interpreted as UTF-16 encoded Unicode text as described in 6.1.4, using goal as the goal symbol. Throw a SyntaxError exception if the parse fails.
// 19. Let strict be ContainsUseStrict of body.
// 20. If any static semantics errors are detected for parameters or body, throw a SyntaxError or a ReferenceError exception, depending on the type of the error. If strict is true, the Early Error rules for UniqueFormalParameters:FormalParameters are applied. Parsing and early error detection may be interweaved in an implementation-dependent manner.
// 21. If strict is true and IsSimpleParameterList of parameters is false, throw a SyntaxError exception.
// 22. If any element of the BoundNames of parameters also occurs in the LexicallyDeclaredNames of body, throw a SyntaxError exception.
// 23. If body Contains SuperCall is true, throw a SyntaxError exception.
// 24. If parameters Contains SuperCall is true, throw a SyntaxError exception.
// 25. If body Contains SuperProperty is true, throw a SyntaxError exception.
// 26. If parameters Contains SuperProperty is true, throw a SyntaxError exception.
// 27. If kind is "generator" or "async generator", then
  // 27. a. If parameters Contains YieldExpression is true, throw a SyntaxError exception.
// 28. If kind is "async" or "async generator", then
  // 28. a. If parameters Contains AwaitExpression is true, throw a SyntaxError exception.
// 29. If strict is true, then
  // 29. a. If BoundNames of parameters contains any duplicate elements, throw a SyntaxError exception.
// 30. Let proto be ? GetPrototypeFromConstructor(newTarget, fallbackProto).
// 31. Let F be FunctionAllocate(proto, strict, kind).
// 32. Let realmF be F.[[Realm]].
// 33. Let scope be realmF.[[GlobalEnv]].
// 34. Perform FunctionInitialize(F, Normal, parameters, body, scope).
// 35. If kind is "generator", then
  // 35. a. Let prototype be ObjectCreate(%GeneratorPrototype%).
  // 35. b. Perform DefinePropertyOrThrow(F, "prototype", PropertyDescriptor { [[Value]]: prototype, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false }).
// 36. Else if kind is "async generator", then
  // 36. a. Let prototype be ObjectCreate(%AsyncGeneratorPrototype%).
  // 36. b. Perform DefinePropertyOrThrow(F, "prototype", PropertyDescriptor { [[Value]]: prototype, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false }).
// 37. Else if kind is "normal", perform MakeConstructor(F).
// 38. NOTE: Async functions are not constructable and do not have a [[Construct]] internal method or a "prototype" property.
// 39. Perform SetFunctionName(F, "anonymous").
// 40. Let prefix be the prefix associated with kind in Table 47.
// 41. Let sourceText be the string-concatenation of prefix, " anonymous(", P, 0x000A (LINE FEED), ") {", 0x000A (LINE FEED), bodyText, 0x000A (LINE FEED), and "}".
// 42. Set F.[[SourceText]] to sourceText.
// 43. Return F.


// http://www.ecma-international.org/ecma-262/#sec-function.prototype.apply

// 1. Let func be the this value.
// 2. If IsCallable(func) is false, throw a TypeError exception.
// 3. If argArray is undefined or null, then
  // 3. a. Perform PrepareForTailCall().
  // 3. b. Return ? Call(func, thisArg).
// 4. Let argList be ? CreateListFromArrayLike(argArray).
// 5. Perform PrepareForTailCall().
// 6. Return ? Call(func, thisArg, argList).


// http://www.ecma-international.org/ecma-262/#sec-function.prototype.bind

// 1. Let Target be the this value.
// 2. If IsCallable(Target) is false, throw a TypeError exception.
// 3. Let args be a new (possibly empty) List consisting of all of the argument values provided after thisArg in order.
// 4. Let F be ? BoundFunctionCreate(Target, thisArg, args).
// 5. Let targetHasLength be ? HasOwnProperty(Target, "length").
// 6. If targetHasLength is true, then
  // 6. a. Let targetLen be ? Get(Target, "length").
  // 6. b. If Type(targetLen) is not Number, let L be 0.
  // 6. c. Else,
    // 6. c. i. Set targetLen to ! ToInteger(targetLen).
    // 6. c. ii. Let L be the larger of 0 and the result of targetLen minus the number of elements of args.
// 7. Else, let L be 0.
// 8. Perform ! SetFunctionLength(F, L).
// 9. Let targetName be ? Get(Target, "name").
// 10. If Type(targetName) is not String, set targetName to the empty string.
// 11. Perform SetFunctionName(F, targetName, "bound").
// 12. Return F.


// http://www.ecma-international.org/ecma-262/#sec-function.prototype.call

// 1. Let func be the this value.
// 2. If IsCallable(func) is false, throw a TypeError exception.
// 3. Let argList be a new empty List.
// 4. If this method was called with more than one argument, then in left to right order, starting with the second argument, append each argument as the last element of argList.
// 5. Perform PrepareForTailCall().
// 6. Return ? Call(func, thisArg, argList).


// http://www.ecma-international.org/ecma-262/#sec-function.prototype.tostring

// 1. Let func be the this value.
// 2. If func is a Bound Function exotic object or a built-in function object, then return an implementation-dependent String source code representation of func. The representation must have the syntax of a NativeFunction. Additionally, if func is a Well-known Intrinsic Object and is not identified as an anonymous function, the portion of the returned String that would be matched by PropertyName must be the initial value of the name property of func.
// 3. If Type(func) is Object and func has a [[SourceText]] internal slot and Type(func.[[SourceText]]) is String and ! HostHasSourceTextAvailable(func) is true, then return func.[[SourceText]].
// 4. If Type(func) is Object and IsCallable(func) is true, then return an implementation-dependent String source code representation of func. The representation must have the syntax of a NativeFunction.
// 5. Throw a TypeError exception.


// http://www.ecma-international.org/ecma-262/#sec-function.prototype-@@hasinstance

// 1. Let F be the this value.
// 2. Return ? OrdinaryHasInstance(F, V).


// http://www.ecma-international.org/ecma-262/#sec-boolean-constructor-boolean-value

// 1. Let b be ToBoolean(value).
// 2. If NewTarget is undefined, return b.
// 3. Let O be ? OrdinaryCreateFromConstructor(NewTarget, "%BooleanPrototype%", « [[BooleanData]] »).
// 4. Set O.[[BooleanData]] to b.
// 5. Return O.


// http://www.ecma-international.org/ecma-262/#sec-properties-of-the-boolean-prototype-object

// 1. If Type(value) is Boolean, return value.
// 2. If Type(value) is Object and value has a [[BooleanData]] internal slot, then
  // 2. a. Let b be value.[[BooleanData]].
  // 2. b. Assert: Type(b) is Boolean.
  // 2. c. Return b.
// 3. Throw a TypeError exception.


// http://www.ecma-international.org/ecma-262/#sec-boolean.prototype.tostring

// 1. Let b be ? thisBooleanValue(this value).
// 2. If b is true, return "true"; else return "false".


// http://www.ecma-international.org/ecma-262/#sec-boolean.prototype.valueof

// 1. Return ? thisBooleanValue(this value).


// http://www.ecma-international.org/ecma-262/#sec-symbol-description

// 1. If NewTarget is not undefined, throw a TypeError exception.
// 2. If description is undefined, let descString be undefined.
// 3. Else, let descString be ? ToString(description).
// 4. Return a new unique Symbol value whose [[Description]] value is descString.


// http://www.ecma-international.org/ecma-262/#sec-symbol.for

// 1. Let stringKey be ? ToString(key).
// 2. For each element e of the GlobalSymbolRegistry List, do
  // 2. a. If SameValue(e.[[Key]], stringKey) is true, return e.[[Symbol]].
// 3. Assert: GlobalSymbolRegistry does not currently contain an entry for stringKey.
// 4. Let newSymbol be a new unique Symbol value whose [[Description]] value is stringKey.
// 5. Append the Record { [[Key]]: stringKey, [[Symbol]]: newSymbol } to the GlobalSymbolRegistry List.
// 6. Return newSymbol.


// http://www.ecma-international.org/ecma-262/#sec-symbol.keyfor

// 1. If Type(sym) is not Symbol, throw a TypeError exception.
// 2. For each element e of the GlobalSymbolRegistry List (see 19.4.2.2), do
  // 2. a. If SameValue(e.[[Symbol]], sym) is true, return e.[[Key]].
// 3. Assert: GlobalSymbolRegistry does not currently contain an entry for sym.
// 4. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-properties-of-the-symbol-prototype-object

// 1. If Type(value) is Symbol, return value.
// 2. If Type(value) is Object and value has a [[SymbolData]] internal slot, then
  // 2. a. Let s be value.[[SymbolData]].
  // 2. b. Assert: Type(s) is Symbol.
  // 2. c. Return s.
// 3. Throw a TypeError exception.


// http://www.ecma-international.org/ecma-262/#sec-symbol.prototype.description

// 1. Let s be the this value.
// 2. Let sym be ? thisSymbolValue(s).
// 3. Return sym.[[Description]].


// http://www.ecma-international.org/ecma-262/#sec-symbol.prototype.tostring

// 1. Let sym be ? thisSymbolValue(this value).
// 2. Return SymbolDescriptiveString(sym).


// http://www.ecma-international.org/ecma-262/#sec-symboldescriptivestring

// 1. Assert: Type(sym) is Symbol.
// 2. Let desc be sym's [[Description]] value.
// 3. If desc is undefined, set desc to the empty string.
// 4. Assert: Type(desc) is String.
// 5. Return the string-concatenation of "Symbol(", desc, and ")".


// http://www.ecma-international.org/ecma-262/#sec-symbol.prototype.valueof

// 1. Return ? thisSymbolValue(this value).


// http://www.ecma-international.org/ecma-262/#sec-symbol.prototype-@@toprimitive

// 1. Return ? thisSymbolValue(this value).


// http://www.ecma-international.org/ecma-262/#sec-error-message

// 1. If NewTarget is undefined, let newTarget be the active function object, else let newTarget be NewTarget.
// 2. Let O be ? OrdinaryCreateFromConstructor(newTarget, "%ErrorPrototype%", « [[ErrorData]] »).
// 3. If message is not undefined, then
  // 3. a. Let msg be ? ToString(message).
  // 3. b. Let msgDesc be the PropertyDescriptor { [[Value]]: msg, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true }.
  // 3. c. Perform ! DefinePropertyOrThrow(O, "message", msgDesc).
// 4. Return O.


// http://www.ecma-international.org/ecma-262/#sec-error.prototype.tostring

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. Let name be ? Get(O, "name").
// 4. If name is undefined, set name to "Error"; otherwise set name to ? ToString(name).
// 5. Let msg be ? Get(O, "message").
// 6. If msg is undefined, set msg to the empty String; otherwise set msg to ? ToString(msg).
// 7. If name is the empty String, return msg.
// 8. If msg is the empty String, return name.
// 9. Return the string-concatenation of name, the code unit 0x003A (COLON), the code unit 0x0020 (SPACE), and msg.


// http://www.ecma-international.org/ecma-262/#sec-nativeerror

// 1. If NewTarget is undefined, let newTarget be the active function object, else let newTarget be NewTarget.
// 2. Let O be ? OrdinaryCreateFromConstructor(newTarget, "%NativeErrorPrototype%", « [[ErrorData]] »).
// 3. If message is not undefined, then
  // 3. a. Let msg be ? ToString(message).
  // 3. b. Let msgDesc be the PropertyDescriptor { [[Value]]: msg, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true }.
  // 3. c. Perform ! DefinePropertyOrThrow(O, "message", msgDesc).
// 4. Return O.


// http://www.ecma-international.org/ecma-262/#sec-number-constructor-number-value

// 1. If no arguments were passed to this function invocation, let n be +0.
// 2. Else, let n be ? ToNumber(value).
// 3. If NewTarget is undefined, return n.
// 4. Let O be ? OrdinaryCreateFromConstructor(NewTarget, "%NumberPrototype%", « [[NumberData]] »).
// 5. Set O.[[NumberData]] to n.
// 6. Return O.


// http://www.ecma-international.org/ecma-262/#sec-number.isfinite

// 1. If Type(number) is not Number, return false.
// 2. If number is NaN, +∞, or -∞, return false.
// 3. Otherwise, return true.


// http://www.ecma-international.org/ecma-262/#sec-number.isinteger

// 1. If Type(number) is not Number, return false.
// 2. If number is NaN, +∞, or -∞, return false.
// 3. Let integer be ! ToInteger(number).
// 4. If integer is not equal to number, return false.
// 5. Otherwise, return true.


// http://www.ecma-international.org/ecma-262/#sec-number.isnan

// 1. If Type(number) is not Number, return false.
// 2. If number is NaN, return true.
// 3. Otherwise, return false.


// http://www.ecma-international.org/ecma-262/#sec-number.issafeinteger

// 1. If Type(number) is not Number, return false.
// 2. If number is NaN, +∞, or -∞, return false.
// 3. Let integer be ! ToInteger(number).
// 4. If integer is not equal to number, return false.
// 5. If abs(integer) ≤ 253 - 1, return true.
// 6. Otherwise, return false.


// http://www.ecma-international.org/ecma-262/#sec-properties-of-the-number-prototype-object

// 1. If Type(value) is Number, return value.
// 2. If Type(value) is Object and value has a [[NumberData]] internal slot, then
  // 2. a. Let n be value.[[NumberData]].
  // 2. b. Assert: Type(n) is Number.
  // 2. c. Return n.
// 3. Throw a TypeError exception.


// http://www.ecma-international.org/ecma-262/#sec-number.prototype.toexponential

// 1. Let x be ? thisNumberValue(this value).
// 2. Let f be ? ToInteger(fractionDigits).
// 3. Assert: If fractionDigits is undefined, then f is 0.
// 4. If x is NaN, return the String "NaN".
// 5. Let s be the empty String.
// 6. If x < 0, then
  // 6. a. Set s to "-".
  // 6. b. Set x to -x.
// 7. If x = +∞, then
  // 7. a. Return the string-concatenation of s and "Infinity".
// 8. If f < 0 or f > 100, throw a RangeError exception.
// 9. If x = 0, then
  // 9. a. Let m be the String value consisting of f + 1 occurrences of the code unit 0x0030 (DIGIT ZERO).
  // 9. b. Let e be 0.
// 10. Else x ≠ 0,
  // 10. a. If fractionDigits is not undefined, then
    // 10. a. i. Let e and n be integers such that 10f ≤ n < 10f + 1 and for which the exact mathematical value of n × 10e - f - x is as close to zero as possible. If there are two such sets of e and n, pick the e and n for which n × 10e - f is larger.
  // 10. b. Else fractionDigits is undefined,
    // 10. b. i. Let e, n, and f be integers such that f ≥ 0, 10f ≤ n < 10f + 1, the Number value for n × 10e - f is x, and f is as small as possible. Note that the decimal representation of n has f + 1 digits, n is not divisible by 10, and the least significant digit of n is not necessarily uniquely determined by these criteria.
  // 10. c. Let m be the String value consisting of the digits of the decimal representation of n (in order, with no leading zeroes).
// 11. If f ≠ 0, then
  // 11. a. Let a be the first code unit of m, and let b be the remaining f code units of m.
  // 11. b. Set m to the string-concatenation of a, ".", and b.
// 12. If e = 0, then
  // 12. a. Let c be "+".
  // 12. b. Let d be "0".
// 13. Else,
  // 13. a. If e > 0, let c be "+".
  // 13. b. Else e ≤ 0,
    // 13. b. i. Let c be "-".
    // 13. b. ii. Set e to -e.
  // 13. c. Let d be the String value consisting of the digits of the decimal representation of e (in order, with no leading zeroes).
// 14. Set m to the string-concatenation of m, "e", c, and d.
// 15. Return the string-concatenation of s and m.


// http://www.ecma-international.org/ecma-262/#sec-number.prototype.tofixed

// 1. Let x be ? thisNumberValue(this value).
// 2. Let f be ? ToInteger(fractionDigits).
// 3. Assert: If fractionDigits is undefined, then f is 0.
// 4. If f < 0 or f > 100, throw a RangeError exception.
// 5. If x is NaN, return the String "NaN".
// 6. Let s be the empty String.
// 7. If x < 0, then
  // 7. a. Set s to "-".
  // 7. b. Set x to -x.
// 8. If x ≥ 1021, then
  // 8. a. Let m be ! ToString(x).
// 9. Else x < 1021,
  // 9. a. Let n be an integer for which the exact mathematical value of n ÷ 10f - x is as close to zero as possible. If there are two such n, pick the larger n.
  // 9. b. If n = 0, let m be the String "0". Otherwise, let m be the String value consisting of the digits of the decimal representation of n (in order, with no leading zeroes).
  // 9. c. If f ≠ 0, then
    // 9. c. i. Let k be the length of m.
    // 9. c. ii. If k ≤ f, then
      // 9. c. ii. 1. Let z be the String value consisting of f + 1 - k occurrences of the code unit 0x0030 (DIGIT ZERO).
      // 9. c. ii. 2. Set m to the string-concatenation of z and m.
      // 9. c. ii. 3. Set k to f + 1.
    // 9. c. iii. Let a be the first k - f code units of m, and let b be the remaining f code units of m.
    // 9. c. iv. Set m to the string-concatenation of a, ".", and b.
// 10. Return the string-concatenation of s and m.


// http://www.ecma-international.org/ecma-262/#sec-number.prototype.toprecision

// 1. Let x be ? thisNumberValue(this value).
// 2. If precision is undefined, return ! ToString(x).
// 3. Let p be ? ToInteger(precision).
// 4. If x is NaN, return the String "NaN".
// 5. Let s be the empty String.
// 6. If x < 0, then
  // 6. a. Set s to the code unit 0x002D (HYPHEN-MINUS).
  // 6. b. Set x to -x.
// 7. If x = +∞, then
  // 7. a. Return the string-concatenation of s and "Infinity".
// 8. If p < 1 or p > 100, throw a RangeError exception.
// 9. If x = 0, then
  // 9. a. Let m be the String value consisting of p occurrences of the code unit 0x0030 (DIGIT ZERO).
  // 9. b. Let e be 0.
// 10. Else x ≠ 0,
  // 10. a. Let e and n be integers such that 10p - 1 ≤ n < 10p and for which the exact mathematical value of n × 10e - p + 1 - x is as close to zero as possible. If there are two such sets of e and n, pick the e and n for which n × 10e - p + 1 is larger.
  // 10. b. Let m be the String value consisting of the digits of the decimal representation of n (in order, with no leading zeroes).
  // 10. c. If e < -6 or e ≥ p, then
    // 10. c. i. Assert: e ≠ 0.
    // 10. c. ii. If p ≠ 1, then
      // 10. c. ii. 1. Let a be the first code unit of m, and let b be the remaining p - 1 code units of m.
      // 10. c. ii. 2. Set m to the string-concatenation of a, ".", and b.
    // 10. c. iii. If e > 0, then
      // 10. c. iii. 1. Let c be the code unit 0x002B (PLUS SIGN).
    // 10. c. iv. Else e < 0,
      // 10. c. iv. 1. Let c be the code unit 0x002D (HYPHEN-MINUS).
      // 10. c. iv. 2. Set e to -e.
    // 10. c. v. Let d be the String value consisting of the digits of the decimal representation of e (in order, with no leading zeroes).
    // 10. c. vi. Return the string-concatenation of s, m, the code unit 0x0065 (LATIN SMALL LETTER E), c, and d.
// 11. If e = p - 1, return the string-concatenation of s and m.
// 12. If e ≥ 0, then
  // 12. a. Set m to the string-concatenation of the first e + 1 code units of m, the code unit 0x002E (FULL STOP), and the remaining p - (e + 1) code units of m.
// 13. Else e < 0,
  // 13. a. Set m to the string-concatenation of the code unit 0x0030 (DIGIT ZERO), the code unit 0x002E (FULL STOP), -(e + 1) occurrences of the code unit 0x0030 (DIGIT ZERO), and the String m.
// 14. Return the string-concatenation of s and m.


// http://www.ecma-international.org/ecma-262/#sec-number.prototype.tostring

// 1. Let x be ? thisNumberValue(this value).
// 2. If radix is not present, let radixNumber be 10.
// 3. Else if radix is undefined, let radixNumber be 10.
// 4. Else, let radixNumber be ? ToInteger(radix).
// 5. If radixNumber < 2 or radixNumber > 36, throw a RangeError exception.
// 6. If radixNumber = 10, return ! ToString(x).
// 7. Return the String representation of this Number value using the radix specified by radixNumber. Letters a-z are used for digits with values 10 through 35. The precise algorithm is implementation-dependent, however the algorithm should be a generalization of that specified in 7.1.12.1.


// http://www.ecma-international.org/ecma-262/#sec-number.prototype.valueof

// 1. Return ? thisNumberValue(this value).


// http://www.ecma-international.org/ecma-262/#sec-math.clz32

// 1. Let n be ? ToUint32(x).
// 2. Let p be the number of leading zero bits in the 32-bit binary representation of n.
// 3. Return p.


// http://www.ecma-international.org/ecma-262/#sec-math.fround

// 1. If x is NaN, return NaN.
// 2. If x is one of +0, -0, +∞, -∞, return x.
// 3. Let x32 be the result of converting x to a value in IEEE 754-2008 binary32 format using roundTiesToEven.
// 4. Let x64 be the result of converting x32 to a value in IEEE 754-2008 binary64 format.
// 5. Return the ECMAScript Number value corresponding to x64.


// http://www.ecma-international.org/ecma-262/#sec-math.imul

// 1. Let a be ? ToUint32(x).
// 2. Let b be ? ToUint32(y).
// 3. Let product be (a × b) modulo 232.
// 4. If product ≥ 231, return product - 232; otherwise return product.


// http://www.ecma-international.org/ecma-262/#sec-math.pow

// 1. Return the result of Applying the ** operator with base and exponent as specified in 12.6.4.


// http://www.ecma-international.org/ecma-262/#sec-localtime

// 1. Return t + LocalTZA(t, true).


// http://www.ecma-international.org/ecma-262/#sec-utc-t

// 1. Return t - LocalTZA(t, false).


// http://www.ecma-international.org/ecma-262/#sec-maketime

// 1. If hour is not finite or min is not finite or sec is not finite or ms is not finite, return NaN.
// 2. Let h be ! ToInteger(hour).
// 3. Let m be ! ToInteger(min).
// 4. Let s be ! ToInteger(sec).
// 5. Let milli be ! ToInteger(ms).
// 6. Let t be h * msPerHour + m * msPerMinute + s * msPerSecond + milli, performing the arithmetic according to IEEE 754-2008 rules (that is, as if using the ECMAScript operators * and +).
// 7. Return t.


// http://www.ecma-international.org/ecma-262/#sec-makeday

// 1. If year is not finite or month is not finite or date is not finite, return NaN.
// 2. Let y be ! ToInteger(year).
// 3. Let m be ! ToInteger(month).
// 4. Let dt be ! ToInteger(date).
// 5. Let ym be y + floor(m / 12).
// 6. Let mn be m modulo 12.
// 7. Find a value t such that YearFromTime(t) is ym and MonthFromTime(t) is mn and DateFromTime(t) is 1; but if this is not possible (because some argument is out of range), return NaN.
// 8. Return Day(t) + dt - 1.


// http://www.ecma-international.org/ecma-262/#sec-makedate

// 1. If day is not finite or time is not finite, return NaN.
// 2. Return day × msPerDay + time.


// http://www.ecma-international.org/ecma-262/#sec-timeclip

// 1. If time is not finite, return NaN.
// 2. If abs(time) > 8.64 × 1015, return NaN.
// 3. Let clippedTime be ! ToInteger(time).
// 4. If clippedTime is -0, set clippedTime to +0.
// 5. Return clippedTime.


// http://www.ecma-international.org/ecma-262/#sec-date-year-month-date-hours-minutes-seconds-ms

// 1. Let numberOfArgs be the number of arguments passed to this function call.
// 2. Assert: numberOfArgs ≥ 2.
// 3. If NewTarget is undefined, then
  // 3. a. Let now be the Number that is the time value (UTC) identifying the current time.
  // 3. b. Return ToDateString(now).
// 4. Else,
  // 4. a. Let y be ? ToNumber(year).
  // 4. b. Let m be ? ToNumber(month).
  // 4. c. If date is present, let dt be ? ToNumber(date); else let dt be 1.
  // 4. d. If hours is present, let h be ? ToNumber(hours); else let h be 0.
  // 4. e. If minutes is present, let min be ? ToNumber(minutes); else let min be 0.
  // 4. f. If seconds is present, let s be ? ToNumber(seconds); else let s be 0.
  // 4. g. If ms is present, let milli be ? ToNumber(ms); else let milli be 0.
  // 4. h. If y is NaN, let yr be NaN.
  // 4. i. Else,
    // 4. i. i. Let yi be ! ToInteger(y).
    // 4. i. ii. If 0 ≤ yi ≤ 99, let yr be 1900 + yi; otherwise, let yr be y.
  // 4. j. Let finalDate be MakeDate(MakeDay(yr, m, dt), MakeTime(h, min, s, milli)).
  // 4. k. Let O be ? OrdinaryCreateFromConstructor(NewTarget, "%DatePrototype%", « [[DateValue]] »).
  // 4. l. Set O.[[DateValue]] to TimeClip(UTC(finalDate)).
  // 4. m. Return O.


// http://www.ecma-international.org/ecma-262/#sec-date-value

// 1. Let numberOfArgs be the number of arguments passed to this function call.
// 2. Assert: numberOfArgs = 1.
// 3. If NewTarget is undefined, then
  // 3. a. Let now be the Number that is the time value (UTC) identifying the current time.
  // 3. b. Return ToDateString(now).
// 4. Else,
  // 4. a. If Type(value) is Object and value has a [[DateValue]] internal slot, then
    // 4. a. i. Let tv be thisTimeValue(value).
  // 4. b. Else,
    // 4. b. i. Let v be ? ToPrimitive(value).
    // 4. b. ii. If Type(v) is String, then
      // 4. b. ii. 1. Assert: The next step never returns an abrupt completion because Type(v) is String.
      // 4. b. ii. 2. Let tv be the result of parsing v as a date, in exactly the same manner as for the parse method (20.3.3.2).
    // 4. b. iii. Else,
      // 4. b. iii. 1. Let tv be ? ToNumber(v).
  // 4. c. Let O be ? OrdinaryCreateFromConstructor(NewTarget, "%DatePrototype%", « [[DateValue]] »).
  // 4. d. Set O.[[DateValue]] to TimeClip(tv).
  // 4. e. Return O.


// http://www.ecma-international.org/ecma-262/#sec-date-constructor-date

// 1. Let numberOfArgs be the number of arguments passed to this function call.
// 2. Assert: numberOfArgs = 0.
// 3. If NewTarget is undefined, then
  // 3. a. Let now be the Number that is the time value (UTC) identifying the current time.
  // 3. b. Return ToDateString(now).
// 4. Else,
  // 4. a. Let O be ? OrdinaryCreateFromConstructor(NewTarget, "%DatePrototype%", « [[DateValue]] »).
  // 4. b. Set O.[[DateValue]] to the time value (UTC) identifying the current time.
  // 4. c. Return O.


// http://www.ecma-international.org/ecma-262/#sec-date.utc

// 1. Let y be ? ToNumber(year).
// 2. If month is present, let m be ? ToNumber(month); else let m be 0.
// 3. If date is present, let dt be ? ToNumber(date); else let dt be 1.
// 4. If hours is present, let h be ? ToNumber(hours); else let h be 0.
// 5. If minutes is present, let min be ? ToNumber(minutes); else let min be 0.
// 6. If seconds is present, let s be ? ToNumber(seconds); else let s be 0.
// 7. If ms is present, let milli be ? ToNumber(ms); else let milli be 0.
// 8. If y is NaN, let yr be NaN.
// 9. Else,
  // 9. a. Let yi be ! ToInteger(y).
  // 9. b. If 0 ≤ yi ≤ 99, let yr be 1900 + yi; otherwise, let yr be y.
// 10. Return TimeClip(MakeDate(MakeDay(yr, m, dt), MakeTime(h, min, s, milli))).


// http://www.ecma-international.org/ecma-262/#sec-properties-of-the-date-prototype-object

// 1. If Type(value) is Object and value has a [[DateValue]] internal slot, then
  // 1. a. Return value.[[DateValue]].
// 2. Throw a TypeError exception.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.getdate

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return DateFromTime(LocalTime(t)).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.getday

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return WeekDay(LocalTime(t)).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.getfullyear

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return YearFromTime(LocalTime(t)).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.gethours

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return HourFromTime(LocalTime(t)).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.getmilliseconds

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return msFromTime(LocalTime(t)).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.getminutes

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return MinFromTime(LocalTime(t)).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.getmonth

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return MonthFromTime(LocalTime(t)).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.getseconds

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return SecFromTime(LocalTime(t)).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.gettime

// 1. Return ? thisTimeValue(this value).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.gettimezoneoffset

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return (t - LocalTime(t)) / msPerMinute.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.getutcdate

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return DateFromTime(t).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.getutcday

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return WeekDay(t).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.getutcfullyear

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return YearFromTime(t).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.getutchours

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return HourFromTime(t).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.getutcmilliseconds

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return msFromTime(t).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.getutcminutes

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return MinFromTime(t).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.getutcmonth

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return MonthFromTime(t).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.getutcseconds

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, return NaN.
// 3. Return SecFromTime(t).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.setdate

// 1. Let t be LocalTime(? thisTimeValue(this value)).
// 2. Let dt be ? ToNumber(date).
// 3. Let newDate be MakeDate(MakeDay(YearFromTime(t), MonthFromTime(t), dt), TimeWithinDay(t)).
// 4. Let u be TimeClip(UTC(newDate)).
// 5. Set the [[DateValue]] internal slot of this Date object to u.
// 6. Return u.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.setfullyear

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, set t to +0; otherwise, set t to LocalTime(t).
// 3. Let y be ? ToNumber(year).
// 4. If month is not present, let m be MonthFromTime(t); otherwise, let m be ? ToNumber(month).
// 5. If date is not present, let dt be DateFromTime(t); otherwise, let dt be ? ToNumber(date).
// 6. Let newDate be MakeDate(MakeDay(y, m, dt), TimeWithinDay(t)).
// 7. Let u be TimeClip(UTC(newDate)).
// 8. Set the [[DateValue]] internal slot of this Date object to u.
// 9. Return u.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.sethours

// 1. Let t be LocalTime(? thisTimeValue(this value)).
// 2. Let h be ? ToNumber(hour).
// 3. If min is not present, let m be MinFromTime(t); otherwise, let m be ? ToNumber(min).
// 4. If sec is not present, let s be SecFromTime(t); otherwise, let s be ? ToNumber(sec).
// 5. If ms is not present, let milli be msFromTime(t); otherwise, let milli be ? ToNumber(ms).
// 6. Let date be MakeDate(Day(t), MakeTime(h, m, s, milli)).
// 7. Let u be TimeClip(UTC(date)).
// 8. Set the [[DateValue]] internal slot of this Date object to u.
// 9. Return u.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.setmilliseconds

// 1. Let t be LocalTime(? thisTimeValue(this value)).
// 2. Set ms to ? ToNumber(ms).
// 3. Let time be MakeTime(HourFromTime(t), MinFromTime(t), SecFromTime(t), ms).
// 4. Let u be TimeClip(UTC(MakeDate(Day(t), time))).
// 5. Set the [[DateValue]] internal slot of this Date object to u.
// 6. Return u.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.setminutes

// 1. Let t be LocalTime(? thisTimeValue(this value)).
// 2. Let m be ? ToNumber(min).
// 3. If sec is not present, let s be SecFromTime(t); otherwise, let s be ? ToNumber(sec).
// 4. If ms is not present, let milli be msFromTime(t); otherwise, let milli be ? ToNumber(ms).
// 5. Let date be MakeDate(Day(t), MakeTime(HourFromTime(t), m, s, milli)).
// 6. Let u be TimeClip(UTC(date)).
// 7. Set the [[DateValue]] internal slot of this Date object to u.
// 8. Return u.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.setmonth

// 1. Let t be LocalTime(? thisTimeValue(this value)).
// 2. Let m be ? ToNumber(month).
// 3. If date is not present, let dt be DateFromTime(t); otherwise, let dt be ? ToNumber(date).
// 4. Let newDate be MakeDate(MakeDay(YearFromTime(t), m, dt), TimeWithinDay(t)).
// 5. Let u be TimeClip(UTC(newDate)).
// 6. Set the [[DateValue]] internal slot of this Date object to u.
// 7. Return u.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.setseconds

// 1. Let t be LocalTime(? thisTimeValue(this value)).
// 2. Let s be ? ToNumber(sec).
// 3. If ms is not present, let milli be msFromTime(t); otherwise, let milli be ? ToNumber(ms).
// 4. Let date be MakeDate(Day(t), MakeTime(HourFromTime(t), MinFromTime(t), s, milli)).
// 5. Let u be TimeClip(UTC(date)).
// 6. Set the [[DateValue]] internal slot of this Date object to u.
// 7. Return u.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.settime

// 1. Perform ? thisTimeValue(this value).
// 2. Let t be ? ToNumber(time).
// 3. Let v be TimeClip(t).
// 4. Set the [[DateValue]] internal slot of this Date object to v.
// 5. Return v.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.setutcdate

// 1. Let t be ? thisTimeValue(this value).
// 2. Let dt be ? ToNumber(date).
// 3. Let newDate be MakeDate(MakeDay(YearFromTime(t), MonthFromTime(t), dt), TimeWithinDay(t)).
// 4. Let v be TimeClip(newDate).
// 5. Set the [[DateValue]] internal slot of this Date object to v.
// 6. Return v.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.setutcfullyear

// 1. Let t be ? thisTimeValue(this value).
// 2. If t is NaN, set t to +0.
// 3. Let y be ? ToNumber(year).
// 4. If month is not present, let m be MonthFromTime(t); otherwise, let m be ? ToNumber(month).
// 5. If date is not present, let dt be DateFromTime(t); otherwise, let dt be ? ToNumber(date).
// 6. Let newDate be MakeDate(MakeDay(y, m, dt), TimeWithinDay(t)).
// 7. Let v be TimeClip(newDate).
// 8. Set the [[DateValue]] internal slot of this Date object to v.
// 9. Return v.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.setutchours

// 1. Let t be ? thisTimeValue(this value).
// 2. Let h be ? ToNumber(hour).
// 3. If min is not present, let m be MinFromTime(t); otherwise, let m be ? ToNumber(min).
// 4. If sec is not present, let s be SecFromTime(t); otherwise, let s be ? ToNumber(sec).
// 5. If ms is not present, let milli be msFromTime(t); otherwise, let milli be ? ToNumber(ms).
// 6. Let newDate be MakeDate(Day(t), MakeTime(h, m, s, milli)).
// 7. Let v be TimeClip(newDate).
// 8. Set the [[DateValue]] internal slot of this Date object to v.
// 9. Return v.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.setutcmilliseconds

// 1. Let t be ? thisTimeValue(this value).
// 2. Let milli be ? ToNumber(ms).
// 3. Let time be MakeTime(HourFromTime(t), MinFromTime(t), SecFromTime(t), milli).
// 4. Let v be TimeClip(MakeDate(Day(t), time)).
// 5. Set the [[DateValue]] internal slot of this Date object to v.
// 6. Return v.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.setutcminutes

// 1. Let t be ? thisTimeValue(this value).
// 2. Let m be ? ToNumber(min).
// 3. If sec is not present, let s be SecFromTime(t).
// 4. Else,
  // 4. a. Let s be ? ToNumber(sec).
// 5. If ms is not present, let milli be msFromTime(t).
// 6. Else,
  // 6. a. Let milli be ? ToNumber(ms).
// 7. Let date be MakeDate(Day(t), MakeTime(HourFromTime(t), m, s, milli)).
// 8. Let v be TimeClip(date).
// 9. Set the [[DateValue]] internal slot of this Date object to v.
// 10. Return v.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.setutcmonth

// 1. Let t be ? thisTimeValue(this value).
// 2. Let m be ? ToNumber(month).
// 3. If date is not present, let dt be DateFromTime(t).
// 4. Else,
  // 4. a. Let dt be ? ToNumber(date).
// 5. Let newDate be MakeDate(MakeDay(YearFromTime(t), m, dt), TimeWithinDay(t)).
// 6. Let v be TimeClip(newDate).
// 7. Set the [[DateValue]] internal slot of this Date object to v.
// 8. Return v.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.setutcseconds

// 1. Let t be ? thisTimeValue(this value).
// 2. Let s be ? ToNumber(sec).
// 3. If ms is not present, let milli be msFromTime(t).
// 4. Else,
  // 4. a. Let milli be ? ToNumber(ms).
// 5. Let date be MakeDate(Day(t), MakeTime(HourFromTime(t), MinFromTime(t), s, milli)).
// 6. Let v be TimeClip(date).
// 7. Set the [[DateValue]] internal slot of this Date object to v.
// 8. Return v.


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.todatestring

// 1. Let O be this Date object.
// 2. Let tv be ? thisTimeValue(O).
// 3. If tv is NaN, return "Invalid Date".
// 4. Let t be LocalTime(tv).
// 5. Return DateString(t).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.tojson

// 1. Let O be ? ToObject(this value).
// 2. Let tv be ? ToPrimitive(O, hint Number).
// 3. If Type(tv) is Number and tv is not finite, return null.
// 4. Return ? Invoke(O, "toISOString").


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.tostring

// 1. Let tv be ? thisTimeValue(this value).
// 2. Return ToDateString(tv).


// http://www.ecma-international.org/ecma-262/#sec-timestring

// 1. Assert: Type(tv) is Number.
// 2. Assert: tv is not NaN.
// 3. Let hour be the String representation of HourFromTime(tv), formatted as a two-digit decimal number, padded to the left with a zero if necessary.
// 4. Let minute be the String representation of MinFromTime(tv), formatted as a two-digit decimal number, padded to the left with a zero if necessary.
// 5. Let second be the String representation of SecFromTime(tv), formatted as a two-digit decimal number, padded to the left with a zero if necessary.
// 6. Return the string-concatenation of hour, ":", minute, ":", second, the code unit 0x0020 (SPACE), and "GMT".


// http://www.ecma-international.org/ecma-262/#sec-datestring

// 1. Assert: Type(tv) is Number.
// 2. Assert: tv is not NaN.
// 3. Let weekday be the Name of the entry in Table 49 with the Number WeekDay(tv).
// 4. Let month be the Name of the entry in Table 50 with the Number MonthFromTime(tv).
// 5. Let day be the String representation of DateFromTime(tv), formatted as a two-digit decimal number, padded to the left with a zero if necessary.
// 6. Let year be the String representation of YearFromTime(tv), formatted as a decimal number of at least four digits, padded to the left with zeroes if necessary.
// 7. Return the string-concatenation of weekday, the code unit 0x0020 (SPACE), month, the code unit 0x0020 (SPACE), day, the code unit 0x0020 (SPACE), and year.


// http://www.ecma-international.org/ecma-262/#sec-timezoneestring

// 1. Assert: Type(tv) is Number.
// 2. Assert: tv is not NaN.
// 3. Let offset be LocalTZA(tv, true).
// 4. If offset ≥ 0, let offsetSign be "+"; otherwise, let offsetSign be "-".
// 5. Let offsetMin be the String representation of MinFromTime(abs(offset)), formatted as a two-digit decimal number, padded to the left with a zero if necessary.
// 6. Let offsetHour be the String representation of HourFromTime(abs(offset)), formatted as a two-digit decimal number, padded to the left with a zero if necessary.
// 7. Let tzName be an implementation-defined string that is either the empty string or the string-concatenation of the code unit 0x0020 (SPACE), the code unit 0x0028 (LEFT PARENTHESIS), an implementation-dependent timezone name, and the code unit 0x0029 (RIGHT PARENTHESIS).
// 8. Return the string-concatenation of offsetSign, offsetHour, offsetMin, and tzName.


// http://www.ecma-international.org/ecma-262/#sec-todatestring

// 1. Assert: Type(tv) is Number.
// 2. If tv is NaN, return "Invalid Date".
// 3. Let t be LocalTime(tv).
// 4. Return the string-concatenation of DateString(t), the code unit 0x0020 (SPACE), TimeString(t), and TimeZoneString(tv).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.totimestring

// 1. Let O be this Date object.
// 2. Let tv be ? thisTimeValue(O).
// 3. If tv is NaN, return "Invalid Date".
// 4. Let t be LocalTime(tv).
// 5. Return the string-concatenation of TimeString(t) and TimeZoneString(tv).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.toutcstring

// 1. Let O be this Date object.
// 2. Let tv be ? thisTimeValue(O).
// 3. If tv is NaN, return "Invalid Date".
// 4. Let weekday be the Name of the entry in Table 49 with the Number WeekDay(tv).
// 5. Let month be the Name of the entry in Table 50 with the Number MonthFromTime(tv).
// 6. Let day be the String representation of DateFromTime(tv), formatted as a two-digit decimal number, padded to the left with a zero if necessary.
// 7. Let year be the String representation of YearFromTime(tv), formatted as a decimal number of at least four digits, padded to the left with zeroes if necessary.
// 8. Return the string-concatenation of weekday, ",", the code unit 0x0020 (SPACE), day, the code unit 0x0020 (SPACE), month, the code unit 0x0020 (SPACE), year, the code unit 0x0020 (SPACE), and TimeString(tv).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype.valueof

// 1. Return ? thisTimeValue(this value).


// http://www.ecma-international.org/ecma-262/#sec-date.prototype-@@toprimitive

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If hint is the String value "string" or the String value "default", then
  // 3. a. Let tryFirst be "string".
// 4. Else if hint is the String value "number", then
  // 4. a. Let tryFirst be "number".
// 5. Else, throw a TypeError exception.
// 6. Return ? OrdinaryToPrimitive(O, tryFirst).


// http://www.ecma-international.org/ecma-262/#sec-string-constructor-string-value

// 1. If no arguments were passed to this function invocation, let s be "".
// 2. Else,
  // 2. a. If NewTarget is undefined and Type(value) is Symbol, return SymbolDescriptiveString(value).
  // 2. b. Let s be ? ToString(value).
// 3. If NewTarget is undefined, return s.
// 4. Return ! StringCreate(s, ? GetPrototypeFromConstructor(NewTarget, "%StringPrototype%")).


// http://www.ecma-international.org/ecma-262/#sec-string.fromcharcode

// 1. Let codeUnits be a List containing the arguments passed to this function.
// 2. Let length be the number of elements in codeUnits.
// 3. Let elements be a new empty List.
// 4. Let nextIndex be 0.
// 5. Repeat, while nextIndex < length
  // 5. a. Let next be codeUnits[nextIndex].
  // 5. b. Let nextCU be ? ToUint16(next).
  // 5. c. Append nextCU to the end of elements.
  // 5. d. Increase nextIndex by 1.
// 6. Return the String value whose code units are, in order, the elements in the List elements. If length is 0, the empty string is returned.


// http://www.ecma-international.org/ecma-262/#sec-string.fromcodepoint

// 1. Let codePoints be a List containing the arguments passed to this function.
// 2. Let length be the number of elements in codePoints.
// 3. Let elements be a new empty List.
// 4. Let nextIndex be 0.
// 5. Repeat, while nextIndex < length
  // 5. a. Let next be codePoints[nextIndex].
  // 5. b. Let nextCP be ? ToNumber(next).
  // 5. c. If SameValue(nextCP, ! ToInteger(nextCP)) is false, throw a RangeError exception.
  // 5. d. If nextCP < 0 or nextCP > 0x10FFFF, throw a RangeError exception.
  // 5. e. Append the elements of the UTF16Encoding of nextCP to the end of elements.
  // 5. f. Increase nextIndex by 1.
// 6. Return the String value whose code units are, in order, the elements in the List elements. If length is 0, the empty string is returned.


// http://www.ecma-international.org/ecma-262/#sec-string.raw

// 1. Let substitutions be a List consisting of all of the arguments passed to this function, starting with the second argument. If fewer than two arguments were passed, the List is empty.
// 2. Let numberOfSubstitutions be the number of elements in substitutions.
// 3. Let cooked be ? ToObject(template).
// 4. Let raw be ? ToObject(? Get(cooked, "raw")).
// 5. Let literalSegments be ? ToLength(? Get(raw, "length")).
// 6. If literalSegments ≤ 0, return the empty string.
// 7. Let stringElements be a new empty List.
// 8. Let nextIndex be 0.
// 9. Repeat,
  // 9. a. Let nextKey be ! ToString(nextIndex).
  // 9. b. Let nextSeg be ? ToString(? Get(raw, nextKey)).
  // 9. c. Append in order the code unit elements of nextSeg to the end of stringElements.
  // 9. d. If nextIndex + 1 = literalSegments, then
    // 9. d. i. Return the String value whose code units are, in order, the elements in the List stringElements. If stringElements has no elements, the empty string is returned.
  // 9. e. If nextIndex < numberOfSubstitutions, let next be substitutions[nextIndex].
  // 9. f. Else, let next be the empty String.
  // 9. g. Let nextSub be ? ToString(next).
  // 9. h. Append in order the code unit elements of nextSub to the end of stringElements.
  // 9. i. Increase nextIndex by 1.


// http://www.ecma-international.org/ecma-262/#sec-properties-of-the-string-prototype-object

// 1. If Type(value) is String, return value.
// 2. If Type(value) is Object and value has a [[StringData]] internal slot, then
  // 2. a. Let s be value.[[StringData]].
  // 2. b. Assert: Type(s) is String.
  // 2. c. Return s.
// 3. Throw a TypeError exception.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.charat

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let position be ? ToInteger(pos).
// 4. Let size be the length of S.
// 5. If position < 0 or position ≥ size, return the empty String.
// 6. Return the String value of length 1, containing one code unit from S, namely the code unit at index position.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.charcodeat

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let position be ? ToInteger(pos).
// 4. Let size be the length of S.
// 5. If position < 0 or position ≥ size, return NaN.
// 6. Return a value of Number type, whose value is the numeric value of the code unit at index position within the String S.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.codepointat

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let position be ? ToInteger(pos).
// 4. Let size be the length of S.
// 5. If position < 0 or position ≥ size, return undefined.
// 6. Let first be the numeric value of the code unit at index position within the String S.
// 7. If first < 0xD800 or first > 0xDBFF or position + 1 = size, return first.
// 8. Let second be the numeric value of the code unit at index position + 1 within the String S.
// 9. If second < 0xDC00 or second > 0xDFFF, return first.
// 10. Return UTF16Decode(first, second).


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.concat

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let args be a List whose elements are the arguments passed to this function.
// 4. Let R be S.
// 5. Repeat, while args is not empty
  // 5. a. Remove the first element from args and let next be the value of that element.
  // 5. b. Let nextString be ? ToString(next).
  // 5. c. Set R to the string-concatenation of the previous value of R and nextString.
// 6. Return R.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.endswith

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let isRegExp be ? IsRegExp(searchString).
// 4. If isRegExp is true, throw a TypeError exception.
// 5. Let searchStr be ? ToString(searchString).
// 6. Let len be the length of S.
// 7. If endPosition is undefined, let pos be len, else let pos be ? ToInteger(endPosition).
// 8. Let end be min(max(pos, 0), len).
// 9. Let searchLength be the length of searchStr.
// 10. Let start be end - searchLength.
// 11. If start is less than 0, return false.
// 12. If the sequence of code units of S starting at start of length searchLength is the same as the full code unit sequence of searchStr, return true.
// 13. Otherwise, return false.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.includes

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let isRegExp be ? IsRegExp(searchString).
// 4. If isRegExp is true, throw a TypeError exception.
// 5. Let searchStr be ? ToString(searchString).
// 6. Let pos be ? ToInteger(position).
// 7. Assert: If position is undefined, then pos is 0.
// 8. Let len be the length of S.
// 9. Let start be min(max(pos, 0), len).
// 10. Let searchLen be the length of searchStr.
// 11. If there exists any integer k not smaller than start such that k + searchLen is not greater than len, and for all nonnegative integers j less than searchLen, the code unit at index k + j within S is the same as the code unit at index j within searchStr, return true; but if there is no such integer k, return false.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.indexof

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let searchStr be ? ToString(searchString).
// 4. Let pos be ? ToInteger(position).
// 5. Assert: If position is undefined, then pos is 0.
// 6. Let len be the length of S.
// 7. Let start be min(max(pos, 0), len).
// 8. Let searchLen be the length of searchStr.
// 9. Return the smallest possible integer k not smaller than start such that k + searchLen is not greater than len, and for all nonnegative integers j less than searchLen, the code unit at index k + j within S is the same as the code unit at index j within searchStr; but if there is no such integer k, return the value -1.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.lastindexof

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let searchStr be ? ToString(searchString).
// 4. Let numPos be ? ToNumber(position).
// 5. Assert: If position is undefined, then numPos is NaN.
// 6. If numPos is NaN, let pos be +∞; otherwise, let pos be ! ToInteger(numPos).
// 7. Let len be the length of S.
// 8. Let start be min(max(pos, 0), len).
// 9. Let searchLen be the length of searchStr.
// 10. Return the largest possible nonnegative integer k not larger than start such that k + searchLen is not greater than len, and for all nonnegative integers j less than searchLen, the code unit at index k + j within S is the same as the code unit at index j within searchStr; but if there is no such integer k, return the value -1.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.localecompare

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let That be ? ToString(that).


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.match

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. If regexp is neither undefined nor null, then
  // 2. a. Let matcher be ? GetMethod(regexp, @@match).
  // 2. b. If matcher is not undefined, then
    // 2. b. i. Return ? Call(matcher, regexp, « O »).
// 3. Let S be ? ToString(O).
// 4. Let rx be ? RegExpCreate(regexp, undefined).
// 5. Return ? Invoke(rx, @@match, « S »).


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.normalize

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. If form is not present or form is undefined, set form to "NFC".
// 4. Let f be ? ToString(form).
// 5. If f is not one of "NFC", "NFD", "NFKC", or "NFKD", throw a RangeError exception.
// 6. Let ns be the String value that is the result of normalizing S into the normalization form named by f as specified in https://unicode.org/reports/tr15/.
// 7. Return ns.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.padend

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let intMaxLength be ? ToLength(maxLength).
// 4. Let stringLength be the length of S.
// 5. If intMaxLength is not greater than stringLength, return S.
// 6. If fillString is undefined, let filler be the String value consisting solely of the code unit 0x0020 (SPACE).
// 7. Else, let filler be ? ToString(fillString).
// 8. If filler is the empty String, return S.
// 9. Let fillLen be intMaxLength - stringLength.
// 10. Let truncatedStringFiller be the String value consisting of repeated concatenations of filler truncated to length fillLen.
// 11. Return the string-concatenation of S and truncatedStringFiller.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.padstart

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let intMaxLength be ? ToLength(maxLength).
// 4. Let stringLength be the length of S.
// 5. If intMaxLength is not greater than stringLength, return S.
// 6. If fillString is undefined, let filler be the String value consisting solely of the code unit 0x0020 (SPACE).
// 7. Else, let filler be ? ToString(fillString).
// 8. If filler is the empty String, return S.
// 9. Let fillLen be intMaxLength - stringLength.
// 10. Let truncatedStringFiller be the String value consisting of repeated concatenations of filler truncated to length fillLen.
// 11. Return the string-concatenation of truncatedStringFiller and S.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.repeat

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let n be ? ToInteger(count).
// 4. If n < 0, throw a RangeError exception.
// 5. If n is +∞, throw a RangeError exception.
// 6. If n is 0, return the empty String.
// 7. Return the String value that is made from n copies of S appended together.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.replace

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. If searchValue is neither undefined nor null, then
  // 2. a. Let replacer be ? GetMethod(searchValue, @@replace).
  // 2. b. If replacer is not undefined, then
    // 2. b. i. Return ? Call(replacer, searchValue, « O, replaceValue »).
// 3. Let string be ? ToString(O).
// 4. Let searchString be ? ToString(searchValue).
// 5. Let functionalReplace be IsCallable(replaceValue).
// 6. If functionalReplace is false, then
  // 6. a. Set replaceValue to ? ToString(replaceValue).
// 7. Search string for the first occurrence of searchString and let pos be the index within string of the first code unit of the matched substring and let matched be searchString. If no occurrences of searchString were found, return string.
// 8. If functionalReplace is true, then
  // 8. a. Let replValue be ? Call(replaceValue, undefined, « matched, pos, string »).
  // 8. b. Let replStr be ? ToString(replValue).
// 9. Else,
  // 9. a. Let captures be a new empty List.
  // 9. b. Let replStr be GetSubstitution(matched, string, pos, captures, undefined, replaceValue).
// 10. Let tailPos be pos + the number of code units in matched.
// 11. Let newString be the string-concatenation of the first pos code units of string, replStr, and the trailing substring of string starting at index tailPos. If pos is 0, the first element of the concatenation will be the empty String.
// 12. Return newString.


// http://www.ecma-international.org/ecma-262/#sec-getsubstitution

// 1. Assert: Type(matched) is String.
// 2. Let matchLength be the number of code units in matched.
// 3. Assert: Type(str) is String.
// 4. Let stringLength be the number of code units in str.
// 5. Assert: position is a nonnegative integer.
// 6. Assert: position ≤ stringLength.
// 7. Assert: captures is a possibly empty List of Strings.
// 8. Assert: Type(replacement) is String.
// 9. Let tailPos be position + matchLength.
// 10. Let m be the number of elements in captures.
// 11. If namedCaptures is not undefined, then
  // 11. a. Set namedCaptures to ? ToObject(namedCaptures).
// 12. Let result be the String value derived from replacement by copying code unit elements from replacement to result while performing replacements as specified in Table 51. These $ replacements are done left-to-right, and, once such a replacement is performed, the new replacement text is not subject to further replacements.
// 13. Return result.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.search

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. If regexp is neither undefined nor null, then
  // 2. a. Let searcher be ? GetMethod(regexp, @@search).
  // 2. b. If searcher is not undefined, then
    // 2. b. i. Return ? Call(searcher, regexp, « O »).
// 3. Let string be ? ToString(O).
// 4. Let rx be ? RegExpCreate(regexp, undefined).
// 5. Return ? Invoke(rx, @@search, « string »).


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.slice

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let len be the length of S.
// 4. Let intStart be ? ToInteger(start).
// 5. If end is undefined, let intEnd be len; else let intEnd be ? ToInteger(end).
// 6. If intStart < 0, let from be max(len + intStart, 0); otherwise let from be min(intStart, len).
// 7. If intEnd < 0, let to be max(len + intEnd, 0); otherwise let to be min(intEnd, len).
// 8. Let span be max(to - from, 0).
// 9. Return the String value containing span consecutive code units from S beginning with the code unit at index from.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.split

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. If separator is neither undefined nor null, then
  // 2. a. Let splitter be ? GetMethod(separator, @@split).
  // 2. b. If splitter is not undefined, then
    // 2. b. i. Return ? Call(splitter, separator, « O, limit »).
// 3. Let S be ? ToString(O).
// 4. Let A be ! ArrayCreate(0).
// 5. Let lengthA be 0.
// 6. If limit is undefined, let lim be 232 - 1; else let lim be ? ToUint32(limit).
// 7. Let s be the length of S.
// 8. Let p be 0.
// 9. Let R be ? ToString(separator).
// 10. If lim = 0, return A.
// 11. If separator is undefined, then
  // 11. a. Perform ! CreateDataProperty(A, "0", S).
  // 11. b. Return A.
// 12. If s = 0, then
  // 12. a. Let z be SplitMatch(S, 0, R).
  // 12. b. If z is not false, return A.
  // 12. c. Perform ! CreateDataProperty(A, "0", S).
  // 12. d. Return A.
// 13. Let q be p.
// 14. Repeat, while q ≠ s
  // 14. a. Let e be SplitMatch(S, q, R).
  // 14. b. If e is false, increase q by 1.
  // 14. c. Else e is an integer index ≤ s,
    // 14. c. i. If e = p, increase q by 1.
    // 14. c. ii. Else e ≠ p,
      // 14. c. ii. 1. Let T be the String value equal to the substring of S consisting of the code units at indices p (inclusive) through q (exclusive).
      // 14. c. ii. 2. Perform ! CreateDataProperty(A, ! ToString(lengthA), T).
      // 14. c. ii. 3. Increment lengthA by 1.
      // 14. c. ii. 4. If lengthA = lim, return A.
      // 14. c. ii. 5. Set p to e.
      // 14. c. ii. 6. Set q to p.
// 15. Let T be the String value equal to the substring of S consisting of the code units at indices p (inclusive) through s (exclusive).
// 16. Perform ! CreateDataProperty(A, ! ToString(lengthA), T).
// 17. Return A.


// http://www.ecma-international.org/ecma-262/#sec-splitmatch

// 1. Assert: Type(R) is String.
// 2. Let r be the number of code units in R.
// 3. Let s be the number of code units in S.
// 4. If q + r > s, return false.
// 5. If there exists an integer i between 0 (inclusive) and r (exclusive) such that the code unit at index q + i within S is different from the code unit at index i within R, return false.
// 6. Return q + r.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.startswith

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let isRegExp be ? IsRegExp(searchString).
// 4. If isRegExp is true, throw a TypeError exception.
// 5. Let searchStr be ? ToString(searchString).
// 6. Let pos be ? ToInteger(position).
// 7. Assert: If position is undefined, then pos is 0.
// 8. Let len be the length of S.
// 9. Let start be min(max(pos, 0), len).
// 10. Let searchLength be the length of searchStr.
// 11. If searchLength + start is greater than len, return false.
// 12. If the sequence of code units of S starting at start of length searchLength is the same as the full code unit sequence of searchStr, return true.
// 13. Otherwise, return false.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.substring

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let len be the length of S.
// 4. Let intStart be ? ToInteger(start).
// 5. If end is undefined, let intEnd be len; else let intEnd be ? ToInteger(end).
// 6. Let finalStart be min(max(intStart, 0), len).
// 7. Let finalEnd be min(max(intEnd, 0), len).
// 8. Let from be min(finalStart, finalEnd).
// 9. Let to be max(finalStart, finalEnd).
// 10. Return the String value whose length is to - from, containing code units from S, namely the code units with indices from through to - 1, in ascending order.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.tolowercase

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let cpList be a List containing in order the code points as defined in 6.1.4 of S, starting at the first element of S.
// 4. Let cuList be a List where the elements are the result of toLowercase(cpList), according to the Unicode Default Case Conversion algorithm.
// 5. Let L be the String value whose code units are the UTF16Encoding of the code points of cuList.
// 6. Return L.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.tostring

// 1. Return ? thisStringValue(this value).


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.trim

// 1. Let S be this value.
// 2. Return ? TrimString(S, "start+end").


// http://www.ecma-international.org/ecma-262/#sec-trimstring

// 1. Let str be ? RequireObjectCoercible(string).
// 2. Let S be ? ToString(str).
// 3. If where is "start", let T be the String value that is a copy of S with leading white space removed.
// 4. Else if where is "end", let T be the String value that is a copy of S with trailing white space removed.
// 5. Else,
  // 5. a. Assert: where is "start+end".
  // 5. b. Let T be the String value that is a copy of S with both leading and trailing white space removed.
// 6. Return T.


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.trimend

// 1. Let S be this value.
// 2. Return ? TrimString(S, "end").


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.trimstart

// 1. Let S be this value.
// 2. Return ? TrimString(S, "start").


// http://www.ecma-international.org/ecma-262/#sec-string.prototype.valueof

// 1. Return ? thisStringValue(this value).


// http://www.ecma-international.org/ecma-262/#sec-string.prototype-@@iterator

// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Return CreateStringIterator(S).


// http://www.ecma-international.org/ecma-262/#sec-createstringiterator

// 1. Assert: Type(string) is String.
// 2. Let iterator be ObjectCreate(%StringIteratorPrototype%, « [[IteratedString]], [[StringIteratorNextIndex]] »).
// 3. Set iterator.[[IteratedString]] to string.
// 4. Set iterator.[[StringIteratorNextIndex]] to 0.
// 5. Return iterator.


// http://www.ecma-international.org/ecma-262/#sec-%stringiteratorprototype%.next

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If O does not have all of the internal slots of a String Iterator Instance (21.1.5.3), throw a TypeError exception.
// 4. Let s be O.[[IteratedString]].
// 5. If s is undefined, return CreateIterResultObject(undefined, true).
// 6. Let position be O.[[StringIteratorNextIndex]].
// 7. Let len be the length of s.
// 8. If position ≥ len, then
  // 8. a. Set O.[[IteratedString]] to undefined.
  // 8. b. Return CreateIterResultObject(undefined, true).
// 9. Let first be the numeric value of the code unit at index position within s.
// 10. If first < 0xD800 or first > 0xDBFF or position + 1 = len, let resultString be the String value consisting of the single code unit first.
// 11. Else,
  // 11. a. Let second be the numeric value of the code unit at index position + 1 within the String s.
  // 11. b. If second < 0xDC00 or second > 0xDFFF, let resultString be the String value consisting of the single code unit first.
  // 11. c. Else, let resultString be the string-concatenation of the code unit first and the code unit second.
// 12. Let resultSize be the number of code units in resultString.
// 13. Set O.[[StringIteratorNextIndex]] to position + resultSize.
// 14. Return CreateIterResultObject(resultString, false).


// http://www.ecma-international.org/ecma-262/#sec-patterns-static-semantics-capturing-group-number

// DecimalEscape :: NonZeroDigit

// 1. Return the MV of NonZeroDigit.

// DecimalEscape :: NonZeroDigit DecimalDigits

// 1. Let n be the number of code points in DecimalDigits.
// 2. Return (the MV of NonZeroDigit × 10n) plus the MV of DecimalDigits.


// http://www.ecma-international.org/ecma-262/#sec-patterns-static-semantics-is-character-class

// ClassAtom :: - ClassAtomNoDash :: SourceCharacter but not one of \ or ] or - ClassEscape :: b ClassEscape :: - ClassEscape :: CharacterEscape

// 1. Return false.

// ClassEscape :: CharacterClassEscape

// 1. Return true.


// http://www.ecma-international.org/ecma-262/#sec-patterns-static-semantics-character-value

// ClassAtom :: -

// 1. Return the code point value of U+002D (HYPHEN-MINUS).

// ClassAtomNoDash :: SourceCharacter but not one of \ or ] or -

// 1. Let ch be the code point matched by SourceCharacter.
// 2. Return the code point value of ch.

// ClassEscape :: b

// 1. Return the code point value of U+0008 (BACKSPACE).

// ClassEscape :: -

// 1. Return the code point value of U+002D (HYPHEN-MINUS).

// CharacterEscape :: ControlEscape

// 1. Return the code point value according to Table 53.

// CharacterEscape :: c ControlLetter

// 1. Let ch be the code point matched by ControlLetter.
// 2. Let i be ch's code point value.
// 3. Return the remainder of dividing i by 32.

// CharacterEscape :: 0 [lookahead ∉ DecimalDigit ]

// 1. Return the code point value of U+0000 (NULL).

// CharacterEscape :: HexEscapeSequence

// 1. Return the numeric value of the code unit that is the SV of HexEscapeSequence.

// RegExpUnicodeEscapeSequence :: u LeadSurrogate \u TrailSurrogate

// 1. Let lead be the CharacterValue of LeadSurrogate.
// 2. Let trail be the CharacterValue of TrailSurrogate.
// 3. Let cp be UTF16Decode(lead, trail).
// 4. Return the code point value of cp.

// RegExpUnicodeEscapeSequence :: u LeadSurrogate

// 1. Return the CharacterValue of LeadSurrogate.

// RegExpUnicodeEscapeSequence :: u TrailSurrogate

// 1. Return the CharacterValue of TrailSurrogate.

// RegExpUnicodeEscapeSequence :: u NonSurrogate

// 1. Return the CharacterValue of NonSurrogate.

// RegExpUnicodeEscapeSequence :: u Hex4Digits

// 1. Return the MV of Hex4Digits.

// RegExpUnicodeEscapeSequence :: u{ CodePoint }

// 1. Return the MV of CodePoint.

// LeadSurrogate :: Hex4Digits TrailSurrogate :: Hex4Digits NonSurrogate :: Hex4Digits

// 1. Return the MV of HexDigits.

// CharacterEscape :: IdentityEscape

// 1. Let ch be the code point matched by IdentityEscape.
// 2. Return the code point value of ch.


// http://www.ecma-international.org/ecma-262/#sec-static-semantics-sourcetext

// UnicodePropertyNameCharacters :: UnicodePropertyNameCharacter UnicodePropertyNameCharacters opt UnicodePropertyValueCharacters :: UnicodePropertyValueCharacter UnicodePropertyValueCharacters opt

// 1. Return the List, in source text order, of Unicode code points in the source text matched by this production.


// http://www.ecma-international.org/ecma-262/#sec-regexp-identifier-names-static-semantics-stringvalue

// RegExpIdentifierName [U] :: RegExpIdentifierStart [?U] RegExpIdentifierName [?U] RegExpIdentifierPart [?U]

// 1. Return the String value consisting of the sequence of code units corresponding to RegExpIdentifierName. In determining the sequence any occurrences of \ RegExpUnicodeEscapeSequence are first replaced with the code point represented by the RegExpUnicodeEscapeSequence and then the code points of the entire RegExpIdentifierName are converted to code units by UTF16Encoding each code point.


// http://www.ecma-international.org/ecma-262/#sec-pattern

// 1. Evaluate Disjunction with +1 as its direction argument to obtain a Matcher m.
// 2. Return an internal closure that takes two arguments, a String str and an integer index, and performs the following steps:
  // 2. a. Assert: index ≤ the length of str.
  // 2. b. If Unicode is true, let Input be a List consisting of the sequence of code points of str interpreted as a UTF-16 encoded (6.1.4) Unicode string. Otherwise, let Input be a List consisting of the sequence of code units that are the elements of str. Input will be used throughout the algorithms in 21.2.2. Each element of Input is considered to be a character.
  // 2. c. Let InputLength be the number of characters contained in Input. This variable will be used throughout the algorithms in 21.2.2.
  // 2. d. Let listIndex be the index into Input of the character that was obtained from element index of str.
  // 2. e. Let c be a Continuation that always returns its State argument as a successful MatchResult.
  // 2. f. Let cap be a List of NcapturingParens undefined values, indexed 1 through NcapturingParens.
  // 2. g. Let x be the State (listIndex, cap).
  // 2. h. Call m(x, c) and return its result.


// http://www.ecma-international.org/ecma-262/#sec-disjunction

// 1. Evaluate Alternative with argument direction to obtain a Matcher m.
// 2. Return m.

// 1. Evaluate Alternative with argument direction to obtain a Matcher m1.
// 2. Evaluate Disjunction with argument direction to obtain a Matcher m2.
// 3. Return an internal Matcher closure that takes two arguments, a State x and a Continuation c, and performs the following steps when evaluated:
  // 3. a. Call m1(x, c) and let r be its result.
  // 3. b. If r is not failure, return r.
  // 3. c. Call m2(x, c) and return its result.


// http://www.ecma-international.org/ecma-262/#sec-alternative

// 1. Return a Matcher that takes two arguments, a State x and a Continuation c, and returns the result of calling c(x).

// 1. Evaluate Alternative with argument direction to obtain a Matcher m1.
// 2. Evaluate Term with argument direction to obtain a Matcher m2.
// 3. If direction is equal to +1, then
  // 3. a. Return an internal Matcher closure that takes two arguments, a State x and a Continuation c, and performs the following steps when evaluated:
    // 3. a. i. Let d be a Continuation that takes a State argument y and returns the result of calling m2(y, c).
    // 3. a. ii. Call m1(x, d) and return its result.
// 4. Else,
  // 4. a. Assert: direction is equal to -1.
  // 4. b. Return an internal Matcher closure that takes two arguments, a State x and a Continuation c, and performs the following steps when evaluated:
    // 4. b. i. Let d be a Continuation that takes a State argument y and returns the result of calling m1(y, c).
    // 4. b. ii. Call m2(x, d) and return its result.


// http://www.ecma-international.org/ecma-262/#sec-term

// 1. Return an internal Matcher closure that takes two arguments, a State x and a Continuation c, and performs the following steps when evaluated:
  // 1. a. Evaluate Assertion to obtain an AssertionTester t.
  // 1. b. Call t(x) and let r be the resulting Boolean value.
  // 1. c. If r is false, return failure.
  // 1. d. Call c(x) and return its result.

// 1. Return the Matcher that is the result of evaluating Atom with argument direction.

// 1. Evaluate Atom with argument direction to obtain a Matcher m.
// 2. Evaluate Quantifier to obtain the three results: an integer min, an integer (or ∞) max, and Boolean greedy.
// 3. Assert: If max is finite, then max is not less than min.
// 4. Let parenIndex be the number of left-capturing parentheses in the entire regular expression that occur to the left of this Term. This is the total number of Atom::(GroupSpecifierDisjunction) Parse Nodes prior to or enclosing this Term.
// 5. Let parenCount be the number of left-capturing parentheses in Atom. This is the total number of Atom::(GroupSpecifierDisjunction) Parse Nodes enclosed by Atom.
// 6. Return an internal Matcher closure that takes two arguments, a State x and a Continuation c, and performs the following steps when evaluated:
  // 6. a. Call RepeatMatcher(m, min, max, greedy, x, c, parenIndex, parenCount) and return its result.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-repeatmatcher-abstract-operation

// 1. If max is zero, return c(x).
// 2. Let d be an internal Continuation closure that takes one State argument y and performs the following steps when evaluated:
  // 2. a. If min is zero and y's endIndex is equal to x's endIndex, return failure.
  // 2. b. If min is zero, let min2 be zero; otherwise let min2 be min - 1.
  // 2. c. If max is ∞, let max2 be ∞; otherwise let max2 be max - 1.
  // 2. d. Call RepeatMatcher(m, min2, max2, greedy, y, c, parenIndex, parenCount) and return its result.
// 3. Let cap be a copy of x's captures List.
// 4. For each integer k that satisfies parenIndex < k and k ≤ parenIndex + parenCount, set cap[k] to undefined.
// 5. Let e be x's endIndex.
// 6. Let xr be the State (e, cap).
// 7. If min is not zero, return m(xr, d).
// 8. If greedy is false, then
  // 8. a. Call c(x) and let z be its result.
  // 8. b. If z is not failure, return z.
  // 8. c. Call m(xr, d) and return its result.
// 9. Call m(xr, d) and let z be its result.
// 10. If z is not failure, return z.
// 11. Call c(x) and return its result.


// http://www.ecma-international.org/ecma-262/#sec-assertion

// 1. Return an internal AssertionTester closure that takes a State argument x and performs the following steps when evaluated:
  // 1. a. Let e be x's endIndex.
  // 1. b. If e is zero, return true.
  // 1. c. If Multiline is false, return false.
  // 1. d. If the character Input[e - 1] is one of LineTerminator, return true.
  // 1. e. Return false.

// 1. Return an internal AssertionTester closure that takes a State argument x and performs the following steps when evaluated:
  // 1. a. Let e be x's endIndex.
  // 1. b. If e is equal to InputLength, return true.
  // 1. c. If Multiline is false, return false.
  // 1. d. If the character Input[e] is one of LineTerminator, return true.
  // 1. e. Return false.

// 1. Return an internal AssertionTester closure that takes a State argument x and performs the following steps when evaluated:
  // 1. a. Let e be x's endIndex.
  // 1. b. Call IsWordChar(e - 1) and let a be the Boolean result.
  // 1. c. Call IsWordChar(e) and let b be the Boolean result.
  // 1. d. If a is true and b is false, return true.
  // 1. e. If a is false and b is true, return true.
  // 1. f. Return false.

// 1. Return an internal AssertionTester closure that takes a State argument x and performs the following steps when evaluated:
  // 1. a. Let e be x's endIndex.
  // 1. b. Call IsWordChar(e - 1) and let a be the Boolean result.
  // 1. c. Call IsWordChar(e) and let b be the Boolean result.
  // 1. d. If a is true and b is false, return false.
  // 1. e. If a is false and b is true, return false.
  // 1. f. Return true.

// 1. Evaluate Disjunction with +1 as its direction argument to obtain a Matcher m.
// 2. Return an internal Matcher closure that takes two arguments, a State x and a Continuation c, and performs the following steps:
  // 2. a. Let d be a Continuation that always returns its State argument as a successful MatchResult.
  // 2. b. Call m(x, d) and let r be its result.
  // 2. c. If r is failure, return failure.
  // 2. d. Let y be r's State.
  // 2. e. Let cap be y's captures List.
  // 2. f. Let xe be x's endIndex.
  // 2. g. Let z be the State (xe, cap).
  // 2. h. Call c(z) and return its result.

// 1. Evaluate Disjunction with +1 as its direction argument to obtain a Matcher m.
// 2. Return an internal Matcher closure that takes two arguments, a State x and a Continuation c, and performs the following steps:
  // 2. a. Let d be a Continuation that always returns its State argument as a successful MatchResult.
  // 2. b. Call m(x, d) and let r be its result.
  // 2. c. If r is not failure, return failure.
  // 2. d. Call c(x) and return its result.

// 1. Evaluate Disjunction with -1 as its direction argument to obtain a Matcher m.
// 2. Return an internal Matcher closure that takes two arguments, a State x and a Continuation c, and performs the following steps:
  // 2. a. Let d be a Continuation that always returns its State argument as a successful MatchResult.
  // 2. b. Call m(x, d) and let r be its result.
  // 2. c. If r is failure, return failure.
  // 2. d. Let y be r's State.
  // 2. e. Let cap be y's captures List.
  // 2. f. Let xe be x's endIndex.
  // 2. g. Let z be the State (xe, cap).
  // 2. h. Call c(z) and return its result.

// 1. Evaluate Disjunction with -1 as its direction argument to obtain a Matcher m.
// 2. Return an internal Matcher closure that takes two arguments, a State x and a Continuation c, and performs the following steps:
  // 2. a. Let d be a Continuation that always returns its State argument as a successful MatchResult.
  // 2. b. Call m(x, d) and let r be its result.
  // 2. c. If r is not failure, return failure.
  // 2. d. Call c(x) and return its result.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-wordcharacters-abstract-operation

// 1. Let A be a set of characters containing the sixty-three characters: a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9 _
// 2. Let U be an empty set.
// 3. For each character c not in set A where Canonicalize(c) is in A, add c to U.
// 4. Assert: Unless Unicode and IgnoreCase are both true, U is empty.
// 5. Add the characters in set U to set A.
// 6. Return A.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-iswordchar-abstract-operation

// 1. If e is -1 or e is InputLength, return false.
// 2. Let c be the character Input[e].
// 3. Let wordChars be the result of ! WordCharacters().
// 4. If c is in wordChars, return true.
// 5. Return false.


// http://www.ecma-international.org/ecma-262/#sec-quantifier

// 1. Evaluate QuantifierPrefix to obtain the two results: an integer min and an integer (or ∞) max.
// 2. Return the three results min, max, and true.

// 1. Evaluate QuantifierPrefix to obtain the two results: an integer min and an integer (or ∞) max.
// 2. Return the three results min, max, and false.

// 1. Return the two results 0 and ∞.

// 1. Return the two results 1 and ∞.

// 1. Return the two results 0 and 1.

// 1. Let i be the MV of DecimalDigits (see 11.8.3).
// 2. Return the two results i and i.

// 1. Let i be the MV of DecimalDigits.
// 2. Return the two results i and ∞.

// 1. Let i be the MV of the first DecimalDigits.
// 2. Let j be the MV of the second DecimalDigits.
// 3. Return the two results i and j.


// http://www.ecma-international.org/ecma-262/#sec-atom

// 1. Let ch be the character matched by PatternCharacter.
// 2. Let A be a one-element CharSet containing the character ch.
// 3. Call CharacterSetMatcher(A, false, direction) and return its Matcher result.

// 1. If DotAll is true, then
  // 1. a. Let A be the set of all characters.
// 2. Otherwise, let A be the set of all characters except LineTerminator.
// 3. Call CharacterSetMatcher(A, false, direction) and return its Matcher result.

// 1. Return the Matcher that is the result of evaluating AtomEscape with argument direction.

// 1. Evaluate CharacterClass to obtain a CharSet A and a Boolean invert.
// 2. Call CharacterSetMatcher(A, invert, direction) and return its Matcher result.

// 1. Evaluate Disjunction with argument direction to obtain a Matcher m.
// 2. Let parenIndex be the number of left-capturing parentheses in the entire regular expression that occur to the left of this Atom. This is the total number of Atom::(GroupSpecifierDisjunction) Parse Nodes prior to or enclosing this Atom.
// 3. Return an internal Matcher closure that takes two arguments, a State x and a Continuation c, and performs the following steps:
  // 3. a. Let d be an internal Continuation closure that takes one State argument y and performs the following steps:
    // 3. a. i. Let cap be a copy of y's captures List.
    // 3. a. ii. Let xe be x's endIndex.
    // 3. a. iii. Let ye be y's endIndex.
    // 3. a. iv. If direction is equal to +1, then
      // 3. a. iv. 1. Assert: xe ≤ ye.
      // 3. a. iv. 2. Let s be a new List whose elements are the characters of Input at indices xe (inclusive) through ye (exclusive).
    // 3. a. v. Else,
      // 3. a. v. 1. Assert: direction is equal to -1.
      // 3. a. v. 2. Assert: ye ≤ xe.
      // 3. a. v. 3. Let s be a new List whose elements are the characters of Input at indices ye (inclusive) through xe (exclusive).
    // 3. a. vi. Set cap[parenIndex + 1] to s.
    // 3. a. vii. Let z be the State (ye, cap).
    // 3. a. viii. Call c(z) and return its result.
  // 3. b. Call m(x, d) and return its result.

// 1. Return the Matcher that is the result of evaluating Disjunction with argument direction.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-charactersetmatcher-abstract-operation

// 1. Return an internal Matcher closure that takes two arguments, a State x and a Continuation c, and performs the following steps when evaluated:
  // 1. a. Let e be x's endIndex.
  // 1. b. Let f be e + direction.
  // 1. c. If f < 0 or f > InputLength, return failure.
  // 1. d. Let index be min(e, f).
  // 1. e. Let ch be the character Input[index].
  // 1. f. Let cc be Canonicalize(ch).
  // 1. g. If invert is false, then
    // 1. g. i. If there does not exist a member a of set A such that Canonicalize(a) is cc, return failure.
  // 1. h. Else,
    // 1. h. i. Assert: invert is true.
    // 1. h. ii. If there exists a member a of set A such that Canonicalize(a) is cc, return failure.
  // 1. i. Let cap be x's captures List.
  // 1. j. Let y be the State (f, cap).
  // 1. k. Call c(y) and return its result.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-canonicalize-ch

// 1. If IgnoreCase is false, return ch.
// 2. If Unicode is true, then
  // 2. a. If the file CaseFolding.txt of the Unicode Character Database provides a simple or common case folding mapping for ch, return the result of applying that mapping to ch.
  // 2. b. Return ch.
// 3. Else,
  // 3. a. Assert: ch is a UTF-16 code unit.
  // 3. b. Let s be the String value consisting of the single code unit ch.
  // 3. c. Let u be the same result produced as if by performing the algorithm for String.prototype.toUpperCase using s as the this value.
  // 3. d. Assert: Type(u) is String.
  // 3. e. If u does not consist of a single code unit, return ch.
  // 3. f. Let cu be u's single code unit element.
  // 3. g. If the numeric value of ch ≥ 128 and the numeric value of cu < 128, return ch.
  // 3. h. Return cu.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-unicodematchproperty-p

// 1. Assert: p is a List of Unicode code points that is identical to a List of Unicode code points that is a Unicode property name or property alias listed in the “Property name and aliases” column of Table 54 or Table 55.
// 2. Let c be the canonical property name of p as given in the “Canonical property name” column of the corresponding row.
// 3. Return the List of Unicode code points of c.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-unicodematchpropertyvalue-p-v

// 1. Assert: p is a List of Unicode code points that is identical to a List of Unicode code points that is a canonical, unaliased Unicode property name listed in the “Canonical property name” column of Table 54.
// 2. Assert: v is a List of Unicode code points that is identical to a List of Unicode code points that is a property value or property value alias for Unicode property p listed in the “Property value and aliases” column of Table 56 or Table 57.
// 3. Let value be the canonical property value of v as given in the “Canonical property value” column of the corresponding row.
// 4. Return the List of Unicode code points of value.


// http://www.ecma-international.org/ecma-262/#sec-atomescape

// 1. Evaluate DecimalEscape to obtain an integer n.
// 2. Assert: n ≤ NcapturingParens.
// 3. Call BackreferenceMatcher(n, direction) and return its Matcher result.

// 1. Evaluate CharacterEscape to obtain a character ch.
// 2. Let A be a one-element CharSet containing the character ch.
// 3. Call CharacterSetMatcher(A, false, direction) and return its Matcher result.

// 1. Evaluate CharacterClassEscape to obtain a CharSet A.
// 2. Call CharacterSetMatcher(A, false, direction) and return its Matcher result.

// 1. Search the enclosing Pattern for an instance of a GroupSpecifier for a RegExpIdentifierName which has a StringValue equal to the StringValue of the RegExpIdentifierName contained in GroupName.
// 2. Assert: A unique such GroupSpecifier is found.
// 3. Let parenIndex be the number of left-capturing parentheses in the entire regular expression that occur to the left of the located GroupSpecifier. This is the total number of Atom::(GroupSpecifierDisjunction) Parse Nodes prior to or enclosing the located GroupSpecifier.
// 4. Call BackreferenceMatcher(parenIndex, direction) and return its Matcher result.


// http://www.ecma-international.org/ecma-262/#sec-backreference-matcher

// 1. Return an internal Matcher closure that takes two arguments, a State x and a Continuation c, and performs the following steps:
  // 1. a. Let cap be x's captures List.
  // 1. b. Let s be cap[n].
  // 1. c. If s is undefined, return c(x).
  // 1. d. Let e be x's endIndex.
  // 1. e. Let len be the number of elements in s.
  // 1. f. Let f be e + direction × len.
  // 1. g. If f < 0 or f > InputLength, return failure.
  // 1. h. Let g be min(e, f).
  // 1. i. If there exists an integer i between 0 (inclusive) and len (exclusive) such that Canonicalize(s[i]) is not the same character value as Canonicalize(Input[g + i]), return failure.
  // 1. j. Let y be the State (f, cap).
  // 1. k. Call c(y) and return its result.


// http://www.ecma-international.org/ecma-262/#sec-characterescape

// CharacterEscape :: ControlEscape c ControlLetter 0 [lookahead ∉ DecimalDigit ] HexEscapeSequence RegExpUnicodeEscapeSequence IdentityEscape

// 1. Let cv be the CharacterValue of this CharacterEscape.
// 2. Return the character whose character value is cv.


// http://www.ecma-international.org/ecma-262/#sec-decimalescape

// DecimalEscape :: NonZeroDigit DecimalDigits opt

// 1. Return the CapturingGroupNumber of this DecimalEscape.


// http://www.ecma-international.org/ecma-262/#sec-characterclassescape

// 1. Return the ten-element set of characters containing the characters 0 through 9 inclusive.

// 1. Return the set of all characters not included in the set returned by CharacterClassEscape::d .

// 1. Return the set of characters containing the characters that are on the right-hand side of the WhiteSpace or LineTerminator productions.

// 1. Return the set of all characters not included in the set returned by CharacterClassEscape::s .

// 1. Return the set of all characters returned by WordCharacters().

// 1. Return the set of all characters not included in the set returned by CharacterClassEscape::w .

// 1. Let ps be SourceText of UnicodePropertyName.
// 2. Let p be ! UnicodeMatchProperty(ps).
// 3. Assert: p is a Unicode property name or property alias listed in the “Property name and aliases” column of Table 54.
// 4. Let vs be SourceText of UnicodePropertyValue.
// 5. Let v be ! UnicodeMatchPropertyValue(p, vs).
// 6. Return the CharSet containing all Unicode code points whose character database definition includes the property p with value v.

// 1. Let s be SourceText of LoneUnicodePropertyNameOrValue.
// 2. If ! UnicodeMatchPropertyValue("General_Category", s) is identical to a List of Unicode code points that is the name of a Unicode general category or general category alias listed in the “Property value and aliases” column of Table 56, then
  // 2. a. Return the CharSet containing all Unicode code points whose character database definition includes the property “General_Category” with value s.
// 3. Let p be ! UnicodeMatchProperty(s).
// 4. Assert: p is a binary Unicode property or binary property alias listed in the “Property name and aliases” column of Table 55.
// 5. Return the CharSet containing all Unicode code points whose character database definition includes the property p with value “True”.


// http://www.ecma-international.org/ecma-262/#sec-characterclass

// 1. Evaluate ClassRanges to obtain a CharSet A.
// 2. Return the two results A and false.

// 1. Evaluate ClassRanges to obtain a CharSet A.
// 2. Return the two results A and true.


// http://www.ecma-international.org/ecma-262/#sec-classranges

// 1. Return the empty CharSet.

// 1. Return the CharSet that is the result of evaluating NonemptyClassRanges.


// http://www.ecma-international.org/ecma-262/#sec-nonemptyclassranges

// 1. Return the CharSet that is the result of evaluating ClassAtom.

// 1. Evaluate ClassAtom to obtain a CharSet A.
// 2. Evaluate NonemptyClassRangesNoDash to obtain a CharSet B.
// 3. Return the union of CharSets A and B.

// 1. Evaluate the first ClassAtom to obtain a CharSet A.
// 2. Evaluate the second ClassAtom to obtain a CharSet B.
// 3. Evaluate ClassRanges to obtain a CharSet C.
// 4. Call CharacterRange(A, B) and let D be the resulting CharSet.
// 5. Return the union of CharSets D and C.


// http://www.ecma-international.org/ecma-262/#sec-runtime-semantics-characterrange-abstract-operation

// 1. Assert: A and B each contain exactly one character.
// 2. Let a be the one character in CharSet A.
// 3. Let b be the one character in CharSet B.
// 4. Let i be the character value of character a.
// 5. Let j be the character value of character b.
// 6. Assert: i ≤ j.
// 7. Return the set containing all characters numbered i through j, inclusive.


// http://www.ecma-international.org/ecma-262/#sec-nonemptyclassrangesnodash

// 1. Return the CharSet that is the result of evaluating ClassAtom.

// 1. Evaluate ClassAtomNoDash to obtain a CharSet A.
// 2. Evaluate NonemptyClassRangesNoDash to obtain a CharSet B.
// 3. Return the union of CharSets A and B.

// 1. Evaluate ClassAtomNoDash to obtain a CharSet A.
// 2. Evaluate ClassAtom to obtain a CharSet B.
// 3. Evaluate ClassRanges to obtain a CharSet C.
// 4. Call CharacterRange(A, B) and let D be the resulting CharSet.
// 5. Return the union of CharSets D and C.


// http://www.ecma-international.org/ecma-262/#sec-classatom

// 1. Return the CharSet containing the single character - U+002D (HYPHEN-MINUS).

// 1. Return the CharSet that is the result of evaluating ClassAtomNoDash.


// http://www.ecma-international.org/ecma-262/#sec-classatomnodash

// 1. Return the CharSet containing the character matched by SourceCharacter.

// 1. Return the CharSet that is the result of evaluating ClassEscape.


// http://www.ecma-international.org/ecma-262/#sec-classescape

// ClassEscape :: b ClassEscape :: - ClassEscape :: CharacterEscape

// 1. Let cv be the CharacterValue of this ClassEscape.
// 2. Let c be the character whose character value is cv.
// 3. Return the CharSet containing the single character c.

// ClassEscape :: CharacterClassEscape

// 1. Return the CharSet that is the result of evaluating CharacterClassEscape.


// http://www.ecma-international.org/ecma-262/#sec-regexp-pattern-flags

// 1. Let patternIsRegExp be ? IsRegExp(pattern).
// 2. If NewTarget is undefined, then
  // 2. a. Let newTarget be the active function object.
  // 2. b. If patternIsRegExp is true and flags is undefined, then
    // 2. b. i. Let patternConstructor be ? Get(pattern, "constructor").
    // 2. b. ii. If SameValue(newTarget, patternConstructor) is true, return pattern.
// 3. Else, let newTarget be NewTarget.
// 4. If Type(pattern) is Object and pattern has a [[RegExpMatcher]] internal slot, then
  // 4. a. Let P be pattern.[[OriginalSource]].
  // 4. b. If flags is undefined, let F be pattern.[[OriginalFlags]].
  // 4. c. Else, let F be flags.
// 5. Else if patternIsRegExp is true, then
  // 5. a. Let P be ? Get(pattern, "source").
  // 5. b. If flags is undefined, then
    // 5. b. i. Let F be ? Get(pattern, "flags").
  // 5. c. Else, let F be flags.
// 6. Else,
  // 6. a. Let P be pattern.
  // 6. b. Let F be flags.
// 7. Let O be ? RegExpAlloc(newTarget).
// 8. Return ? RegExpInitialize(O, P, F).


// http://www.ecma-international.org/ecma-262/#sec-regexpalloc

// 1. Let obj be ? OrdinaryCreateFromConstructor(newTarget, "%RegExpPrototype%", « [[RegExpMatcher]], [[OriginalSource]], [[OriginalFlags]] »).
// 2. Perform ! DefinePropertyOrThrow(obj, "lastIndex", PropertyDescriptor { [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false }).
// 3. Return obj.


// http://www.ecma-international.org/ecma-262/#sec-regexpinitialize

// 1. If pattern is undefined, let P be the empty String.
// 2. Else, let P be ? ToString(pattern).
// 3. If flags is undefined, let F be the empty String.
// 4. Else, let F be ? ToString(flags).
// 5. If F contains any code unit other than "g", "i", "m", "s", "u", or "y" or if it contains the same code unit more than once, throw a SyntaxError exception.
// 6. If F contains "u", let BMP be false; else let BMP be true.
// 7. If BMP is true, then
  // 7. a. Parse P using the grammars in 21.2.1 and interpreting each of its 16-bit elements as a Unicode BMP code point. UTF-16 decoding is not applied to the elements. The goal symbol for the parse is Pattern[~U, ~N]. If the result of parsing contains a GroupName, reparse with the goal symbol Pattern[~U, +N] and use this result instead. Throw a SyntaxError exception if P did not conform to the grammar, if any elements of P were not matched by the parse, or if any Early Error conditions exist.
  // 7. b. Let patternCharacters be a List whose elements are the code unit elements of P.
// 8. Else,
  // 8. a. Parse P using the grammars in 21.2.1 and interpreting P as UTF-16 encoded Unicode code points (6.1.4). The goal symbol for the parse is Pattern[+U, +N]. Throw a SyntaxError exception if P did not conform to the grammar, if any elements of P were not matched by the parse, or if any Early Error conditions exist.
  // 8. b. Let patternCharacters be a List whose elements are the code points resulting from applying UTF-16 decoding to P's sequence of elements.
// 9. Set obj.[[OriginalSource]] to P.
// 10. Set obj.[[OriginalFlags]] to F.
// 11. Set obj.[[RegExpMatcher]] to the internal procedure that evaluates the above parse of P by applying the semantics provided in 21.2.2 using patternCharacters as the pattern's List of SourceCharacter values and F as the flag parameters.
// 12. Perform ? Set(obj, "lastIndex", 0, true).
// 13. Return obj.


// http://www.ecma-international.org/ecma-262/#sec-regexpcreate

// 1. Let obj be ? RegExpAlloc(%RegExp%).
// 2. Return ? RegExpInitialize(obj, P, F).


// http://www.ecma-international.org/ecma-262/#sec-escaperegexppattern

// 1. Let S be a String in the form of a Pattern[~U] (Pattern[+U] if F contains "u") equivalent to P interpreted as UTF-16 encoded Unicode code points (6.1.4), in which certain code points are escaped as described below. S may or may not be identical to P; however, the internal procedure that would result from evaluating S as a Pattern[~U] (Pattern[+U] if F contains "u") must behave identically to the internal procedure given by the constructed object's [[RegExpMatcher]] internal slot. Multiple calls to this abstract operation using the same values for P and F must produce identical results.
// 2. The code points / or any LineTerminator occurring in the pattern shall be escaped in S as necessary to ensure that the string-concatenation of "/", S, "/", and F can be parsed (in an appropriate lexical context) as a RegularExpressionLiteral that behaves identically to the constructed regular expression. For example, if P is "/", then S could be "\/" or "\u002F", among other possibilities, but not "/", because /// followed by F would be parsed as a SingleLineComment rather than a RegularExpressionLiteral. If P is the empty String, this specification can be met by letting S be "(?:)".
// 3. Return S.


// http://www.ecma-international.org/ecma-262/#sec-get-regexp-@@species

// 1. Return the this value.


// http://www.ecma-international.org/ecma-262/#sec-regexp.prototype.exec

// 1. Let R be the this value.
// 2. If Type(R) is not Object, throw a TypeError exception.
// 3. If R does not have a [[RegExpMatcher]] internal slot, throw a TypeError exception.
// 4. Let S be ? ToString(string).
// 5. Return ? RegExpBuiltinExec(R, S).


// http://www.ecma-international.org/ecma-262/#sec-regexpexec

// 1. Assert: Type(R) is Object.
// 2. Assert: Type(S) is String.
// 3. Let exec be ? Get(R, "exec").
// 4. If IsCallable(exec) is true, then
  // 4. a. Let result be ? Call(exec, R, « S »).
  // 4. b. If Type(result) is neither Object or Null, throw a TypeError exception.
  // 4. c. Return result.
// 5. If R does not have a [[RegExpMatcher]] internal slot, throw a TypeError exception.
// 6. Return ? RegExpBuiltinExec(R, S).


// http://www.ecma-international.org/ecma-262/#sec-regexpbuiltinexec

// 1. Assert: R is an initialized RegExp instance.
// 2. Assert: Type(S) is String.
// 3. Let length be the number of code units in S.
// 4. Let lastIndex be ? ToLength(? Get(R, "lastIndex")).
// 5. Let flags be R.[[OriginalFlags]].
// 6. If flags contains "g", let global be true, else let global be false.
// 7. If flags contains "y", let sticky be true, else let sticky be false.
// 8. If global is false and sticky is false, set lastIndex to 0.
// 9. Let matcher be R.[[RegExpMatcher]].
// 10. If flags contains "u", let fullUnicode be true, else let fullUnicode be false.
// 11. Let matchSucceeded be false.
// 12. Repeat, while matchSucceeded is false
  // 12. a. If lastIndex > length, then
    // 12. a. i. If global is true or sticky is true, then
      // 12. a. i. 1. Perform ? Set(R, "lastIndex", 0, true).
    // 12. a. ii. Return null.
  // 12. b. Let r be matcher(S, lastIndex).
  // 12. c. If r is failure, then
    // 12. c. i. If sticky is true, then
      // 12. c. i. 1. Perform ? Set(R, "lastIndex", 0, true).
      // 12. c. i. 2. Return null.
    // 12. c. ii. Set lastIndex to AdvanceStringIndex(S, lastIndex, fullUnicode).
  // 12. d. Else,
    // 12. d. i. Assert: r is a State.
    // 12. d. ii. Set matchSucceeded to true.
// 13. Let e be r's endIndex value.
// 14. If fullUnicode is true, then
  // 14. a. e is an index into the Input character list, derived from S, matched by matcher. Let eUTF be the smallest index into S that corresponds to the character at element e of Input. If e is greater than or equal to the number of elements in Input, then eUTF is the number of code units in S.
  // 14. b. Set e to eUTF.
// 15. If global is true or sticky is true, then
  // 15. a. Perform ? Set(R, "lastIndex", e, true).
// 16. Let n be the number of elements in r's captures List. (This is the same value as 21.2.2.1's NcapturingParens.)
// 17. Assert: n < 232 - 1.
// 18. Let A be ! ArrayCreate(n + 1).
// 19. Assert: The value of A's "length" property is n + 1.
// 20. Perform ! CreateDataProperty(A, "index", lastIndex).
// 21. Perform ! CreateDataProperty(A, "input", S).
// 22. Let matchedSubstr be the matched substring (i.e. the portion of S between offset lastIndex inclusive and offset e exclusive).
// 23. Perform ! CreateDataProperty(A, "0", matchedSubstr).
// 24. If R contains any GroupName, then
  // 24. a. Let groups be ObjectCreate(null).
// 25. Else,
  // 25. a. Let groups be undefined.
// 26. Perform ! CreateDataProperty(A, "groups", groups).
// 27. For each integer i such that i > 0 and i ≤ n, do
  // 27. a. Let captureI be ith element of r's captures List.
  // 27. b. If captureI is undefined, let capturedValue be undefined.
  // 27. c. Else if fullUnicode is true, then
    // 27. c. i. Assert: captureI is a List of code points.
    // 27. c. ii. Let capturedValue be the String value whose code units are the UTF16Encoding of the code points of captureI.
  // 27. d. Else fullUnicode is false,
    // 27. d. i. Assert: captureI is a List of code units.
    // 27. d. ii. Let capturedValue be the String value consisting of the code units of captureI.
  // 27. e. Perform ! CreateDataProperty(A, ! ToString(i), capturedValue).
  // 27. f. If the ith capture of R was defined with a GroupName, then
    // 27. f. i. Let s be the StringValue of the corresponding RegExpIdentifierName.
    // 27. f. ii. Perform ! CreateDataProperty(groups, s, capturedValue).
// 28. Return A.


// http://www.ecma-international.org/ecma-262/#sec-advancestringindex

// 1. Assert: Type(S) is String.
// 2. Assert: index is an integer such that 0 ≤ index ≤ 253 - 1.
// 3. Assert: Type(unicode) is Boolean.
// 4. If unicode is false, return index + 1.
// 5. Let length be the number of code units in S.
// 6. If index + 1 ≥ length, return index + 1.
// 7. Let first be the numeric value of the code unit at index index within S.
// 8. If first < 0xD800 or first > 0xDBFF, return index + 1.
// 9. Let second be the numeric value of the code unit at index index + 1 within S.
// 10. If second < 0xDC00 or second > 0xDFFF, return index + 1.
// 11. Return index + 2.


// http://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.dotAll

// 1. Let R be the this value.
// 2. If Type(R) is not Object, throw a TypeError exception.
// 3. If R does not have an [[OriginalFlags]] internal slot, then
  // 3. a. If SameValue(R, %RegExpPrototype%) is true, return undefined.
  // 3. b. Otherwise, throw a TypeError exception.
// 4. Let flags be R.[[OriginalFlags]].
// 5. If flags contains the code unit 0x0073 (LATIN SMALL LETTER S), return true.
// 6. Return false.


// http://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.flags

// 1. Let R be the this value.
// 2. If Type(R) is not Object, throw a TypeError exception.
// 3. Let result be the empty String.
// 4. Let global be ToBoolean(? Get(R, "global")).
// 5. If global is true, append the code unit 0x0067 (LATIN SMALL LETTER G) as the last code unit of result.
// 6. Let ignoreCase be ToBoolean(? Get(R, "ignoreCase")).
// 7. If ignoreCase is true, append the code unit 0x0069 (LATIN SMALL LETTER I) as the last code unit of result.
// 8. Let multiline be ToBoolean(? Get(R, "multiline")).
// 9. If multiline is true, append the code unit 0x006D (LATIN SMALL LETTER M) as the last code unit of result.
// 10. Let dotAll be ToBoolean(? Get(R, "dotAll")).
// 11. If dotAll is true, append the code unit 0x0073 (LATIN SMALL LETTER S) as the last code unit of result.
// 12. Let unicode be ToBoolean(? Get(R, "unicode")).
// 13. If unicode is true, append the code unit 0x0075 (LATIN SMALL LETTER U) as the last code unit of result.
// 14. Let sticky be ToBoolean(? Get(R, "sticky")).
// 15. If sticky is true, append the code unit 0x0079 (LATIN SMALL LETTER Y) as the last code unit of result.
// 16. Return result.


// http://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.global

// 1. Let R be the this value.
// 2. If Type(R) is not Object, throw a TypeError exception.
// 3. If R does not have an [[OriginalFlags]] internal slot, then
  // 3. a. If SameValue(R, %RegExpPrototype%) is true, return undefined.
  // 3. b. Otherwise, throw a TypeError exception.
// 4. Let flags be R.[[OriginalFlags]].
// 5. If flags contains the code unit 0x0067 (LATIN SMALL LETTER G), return true.
// 6. Return false.


// http://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.ignorecase

// 1. Let R be the this value.
// 2. If Type(R) is not Object, throw a TypeError exception.
// 3. If R does not have an [[OriginalFlags]] internal slot, then
  // 3. a. If SameValue(R, %RegExpPrototype%) is true, return undefined.
  // 3. b. Otherwise, throw a TypeError exception.
// 4. Let flags be R.[[OriginalFlags]].
// 5. If flags contains the code unit 0x0069 (LATIN SMALL LETTER I), return true.
// 6. Return false.


// http://www.ecma-international.org/ecma-262/#sec-regexp.prototype-@@match

// 1. Let rx be the this value.
// 2. If Type(rx) is not Object, throw a TypeError exception.
// 3. Let S be ? ToString(string).
// 4. Let global be ToBoolean(? Get(rx, "global")).
// 5. If global is false, then
  // 5. a. Return ? RegExpExec(rx, S).
// 6. Else global is true,
  // 6. a. Let fullUnicode be ToBoolean(? Get(rx, "unicode")).
  // 6. b. Perform ? Set(rx, "lastIndex", 0, true).
  // 6. c. Let A be ! ArrayCreate(0).
  // 6. d. Let n be 0.
  // 6. e. Repeat,
    // 6. e. i. Let result be ? RegExpExec(rx, S).
    // 6. e. ii. If result is null, then
      // 6. e. ii. 1. If n = 0, return null.
      // 6. e. ii. 2. Return A.
    // 6. e. iii. Else result is not null,
      // 6. e. iii. 1. Let matchStr be ? ToString(? Get(result, "0")).
      // 6. e. iii. 2. Let status be CreateDataProperty(A, ! ToString(n), matchStr).
      // 6. e. iii. 3. Assert: status is true.
      // 6. e. iii. 4. If matchStr is the empty String, then
        // 6. e. iii. 4. a. Let thisIndex be ? ToLength(? Get(rx, "lastIndex")).
        // 6. e. iii. 4. b. Let nextIndex be AdvanceStringIndex(S, thisIndex, fullUnicode).
        // 6. e. iii. 4. c. Perform ? Set(rx, "lastIndex", nextIndex, true).
      // 6. e. iii. 5. Increment n.


// http://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.multiline

// 1. Let R be the this value.
// 2. If Type(R) is not Object, throw a TypeError exception.
// 3. If R does not have an [[OriginalFlags]] internal slot, then
  // 3. a. If SameValue(R, %RegExpPrototype%) is true, return undefined.
  // 3. b. Otherwise, throw a TypeError exception.
// 4. Let flags be R.[[OriginalFlags]].
// 5. If flags contains the code unit 0x006D (LATIN SMALL LETTER M), return true.
// 6. Return false.


// http://www.ecma-international.org/ecma-262/#sec-regexp.prototype-@@replace

// 1. Let rx be the this value.
// 2. If Type(rx) is not Object, throw a TypeError exception.
// 3. Let S be ? ToString(string).
// 4. Let lengthS be the number of code unit elements in S.
// 5. Let functionalReplace be IsCallable(replaceValue).
// 6. If functionalReplace is false, then
  // 6. a. Set replaceValue to ? ToString(replaceValue).
// 7. Let global be ToBoolean(? Get(rx, "global")).
// 8. If global is true, then
  // 8. a. Let fullUnicode be ToBoolean(? Get(rx, "unicode")).
  // 8. b. Perform ? Set(rx, "lastIndex", 0, true).
// 9. Let results be a new empty List.
// 10. Let done be false.
// 11. Repeat, while done is false
  // 11. a. Let result be ? RegExpExec(rx, S).
  // 11. b. If result is null, set done to true.
  // 11. c. Else result is not null,
    // 11. c. i. Append result to the end of results.
    // 11. c. ii. If global is false, set done to true.
    // 11. c. iii. Else,
      // 11. c. iii. 1. Let matchStr be ? ToString(? Get(result, "0")).
      // 11. c. iii. 2. If matchStr is the empty String, then
        // 11. c. iii. 2. a. Let thisIndex be ? ToLength(? Get(rx, "lastIndex")).
        // 11. c. iii. 2. b. Let nextIndex be AdvanceStringIndex(S, thisIndex, fullUnicode).
        // 11. c. iii. 2. c. Perform ? Set(rx, "lastIndex", nextIndex, true).
// 12. Let accumulatedResult be the empty String value.
// 13. Let nextSourcePosition be 0.
// 14. For each result in results, do
  // 14. a. Let nCaptures be ? ToLength(? Get(result, "length")).
  // 14. b. Set nCaptures to max(nCaptures - 1, 0).
  // 14. c. Let matched be ? ToString(? Get(result, "0")).
  // 14. d. Let matchLength be the number of code units in matched.
  // 14. e. Let position be ? ToInteger(? Get(result, "index")).
  // 14. f. Set position to max(min(position, lengthS), 0).
  // 14. g. Let n be 1.
  // 14. h. Let captures be a new empty List.
  // 14. i. Repeat, while n ≤ nCaptures
    // 14. i. i. Let capN be ? Get(result, ! ToString(n)).
    // 14. i. ii. If capN is not undefined, then
      // 14. i. ii. 1. Set capN to ? ToString(capN).
    // 14. i. iii. Append capN as the last element of captures.
    // 14. i. iv. Increase n by 1.
  // 14. j. Let namedCaptures be ? Get(result, "groups").
  // 14. k. If functionalReplace is true, then
    // 14. k. i. Let replacerArgs be « matched ».
    // 14. k. ii. Append in list order the elements of captures to the end of the List replacerArgs.
    // 14. k. iii. Append position and S to replacerArgs.
    // 14. k. iv. If namedCaptures is not undefined, then
      // 14. k. iv. 1. Append namedCaptures as the last element of replacerArgs.
    // 14. k. v. Let replValue be ? Call(replaceValue, undefined, replacerArgs).
    // 14. k. vi. Let replacement be ? ToString(replValue).
  // 14. l. Else,
    // 14. l. i. Let replacement be GetSubstitution(matched, S, position, captures, namedCaptures, replaceValue).
  // 14. m. If position ≥ nextSourcePosition, then
    // 14. m. i. NOTE: position should not normally move backwards. If it does, it is an indication of an ill-behaving RegExp subclass or use of an access triggered side-effect to change the global flag or other characteristics of rx. In such cases, the corresponding substitution is ignored.
    // 14. m. ii. Set accumulatedResult to the string-concatenation of the current value of accumulatedResult, the substring of S consisting of the code units from nextSourcePosition (inclusive) up to position (exclusive), and replacement.
    // 14. m. iii. Set nextSourcePosition to position + matchLength.
// 15. If nextSourcePosition ≥ lengthS, return accumulatedResult.
// 16. Return the string-concatenation of accumulatedResult and the substring of S consisting of the code units from nextSourcePosition (inclusive) up through the final code unit of S (inclusive).


// http://www.ecma-international.org/ecma-262/#sec-regexp.prototype-@@search

// 1. Let rx be the this value.
// 2. If Type(rx) is not Object, throw a TypeError exception.
// 3. Let S be ? ToString(string).
// 4. Let previousLastIndex be ? Get(rx, "lastIndex").
// 5. If SameValue(previousLastIndex, 0) is false, then
  // 5. a. Perform ? Set(rx, "lastIndex", 0, true).
// 6. Let result be ? RegExpExec(rx, S).
// 7. Let currentLastIndex be ? Get(rx, "lastIndex").
// 8. If SameValue(currentLastIndex, previousLastIndex) is false, then
  // 8. a. Perform ? Set(rx, "lastIndex", previousLastIndex, true).
// 9. If result is null, return -1.
// 10. Return ? Get(result, "index").


// http://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.source

// 1. Let R be the this value.
// 2. If Type(R) is not Object, throw a TypeError exception.
// 3. If R does not have an [[OriginalSource]] internal slot, then
  // 3. a. If SameValue(R, %RegExpPrototype%) is true, return "(?:)".
  // 3. b. Otherwise, throw a TypeError exception.
// 4. Assert: R has an [[OriginalFlags]] internal slot.
// 5. Let src be R.[[OriginalSource]].
// 6. Let flags be R.[[OriginalFlags]].
// 7. Return EscapeRegExpPattern(src, flags).


// http://www.ecma-international.org/ecma-262/#sec-regexp.prototype-@@split

// 1. Let rx be the this value.
// 2. If Type(rx) is not Object, throw a TypeError exception.
// 3. Let S be ? ToString(string).
// 4. Let C be ? SpeciesConstructor(rx, %RegExp%).
// 5. Let flags be ? ToString(? Get(rx, "flags")).
// 6. If flags contains "u", let unicodeMatching be true.
// 7. Else, let unicodeMatching be false.
// 8. If flags contains "y", let newFlags be flags.
// 9. Else, let newFlags be the string-concatenation of flags and "y".
// 10. Let splitter be ? Construct(C, « rx, newFlags »).
// 11. Let A be ! ArrayCreate(0).
// 12. Let lengthA be 0.
// 13. If limit is undefined, let lim be 232 - 1; else let lim be ? ToUint32(limit).
// 14. Let size be the length of S.
// 15. Let p be 0.
// 16. If lim = 0, return A.
// 17. If size = 0, then
  // 17. a. Let z be ? RegExpExec(splitter, S).
  // 17. b. If z is not null, return A.
  // 17. c. Perform ! CreateDataProperty(A, "0", S).
  // 17. d. Return A.
// 18. Let q be p.
// 19. Repeat, while q < size
  // 19. a. Perform ? Set(splitter, "lastIndex", q, true).
  // 19. b. Let z be ? RegExpExec(splitter, S).
  // 19. c. If z is null, set q to AdvanceStringIndex(S, q, unicodeMatching).
  // 19. d. Else z is not null,
    // 19. d. i. Let e be ? ToLength(? Get(splitter, "lastIndex")).
    // 19. d. ii. Set e to min(e, size).
    // 19. d. iii. If e = p, set q to AdvanceStringIndex(S, q, unicodeMatching).
    // 19. d. iv. Else e ≠ p,
      // 19. d. iv. 1. Let T be the String value equal to the substring of S consisting of the code units at indices p (inclusive) through q (exclusive).
      // 19. d. iv. 2. Perform ! CreateDataProperty(A, ! ToString(lengthA), T).
      // 19. d. iv. 3. Increase lengthA by 1.
      // 19. d. iv. 4. If lengthA = lim, return A.
      // 19. d. iv. 5. Set p to e.
      // 19. d. iv. 6. Let numberOfCaptures be ? ToLength(? Get(z, "length")).
      // 19. d. iv. 7. Set numberOfCaptures to max(numberOfCaptures - 1, 0).
      // 19. d. iv. 8. Let i be 1.
      // 19. d. iv. 9. Repeat, while i ≤ numberOfCaptures,
        // 19. d. iv. 9. a. Let nextCapture be ? Get(z, ! ToString(i)).
        // 19. d. iv. 9. b. Perform ! CreateDataProperty(A, ! ToString(lengthA), nextCapture).
        // 19. d. iv. 9. c. Increase i by 1.
        // 19. d. iv. 9. d. Increase lengthA by 1.
        // 19. d. iv. 9. e. If lengthA = lim, return A.
      // 19. d. iv. 10. Set q to p.
// 20. Let T be the String value equal to the substring of S consisting of the code units at indices p (inclusive) through size (exclusive).
// 21. Perform ! CreateDataProperty(A, ! ToString(lengthA), T).
// 22. Return A.


// http://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.sticky

// 1. Let R be the this value.
// 2. If Type(R) is not Object, throw a TypeError exception.
// 3. If R does not have an [[OriginalFlags]] internal slot, then
  // 3. a. If SameValue(R, %RegExpPrototype%) is true, return undefined.
  // 3. b. Otherwise, throw a TypeError exception.
// 4. Let flags be R.[[OriginalFlags]].
// 5. If flags contains the code unit 0x0079 (LATIN SMALL LETTER Y), return true.
// 6. Return false.


// http://www.ecma-international.org/ecma-262/#sec-regexp.prototype.test

// 1. Let R be the this value.
// 2. If Type(R) is not Object, throw a TypeError exception.
// 3. Let string be ? ToString(S).
// 4. Let match be ? RegExpExec(R, string).
// 5. If match is not null, return true; else return false.


// http://www.ecma-international.org/ecma-262/#sec-regexp.prototype.tostring

// 1. Let R be the this value.
// 2. If Type(R) is not Object, throw a TypeError exception.
// 3. Let pattern be ? ToString(? Get(R, "source")).
// 4. Let flags be ? ToString(? Get(R, "flags")).
// 5. Let result be the string-concatenation of "/", pattern, "/", and flags.
// 6. Return result.


// http://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.unicode

// 1. Let R be the this value.
// 2. If Type(R) is not Object, throw a TypeError exception.
// 3. If R does not have an [[OriginalFlags]] internal slot, then
  // 3. a. If SameValue(R, %RegExpPrototype%) is true, return undefined.
  // 3. b. Otherwise, throw a TypeError exception.
// 4. Let flags be R.[[OriginalFlags]].
// 5. If flags contains the code unit 0x0075 (LATIN SMALL LETTER U), return true.
// 6. Return false.


// http://www.ecma-international.org/ecma-262/#sec-array-constructor-array

// 1. Let numberOfArgs be the number of arguments passed to this function call.
// 2. Assert: numberOfArgs = 0.
// 3. If NewTarget is undefined, let newTarget be the active function object, else let newTarget be NewTarget.
// 4. Let proto be ? GetPrototypeFromConstructor(newTarget, "%ArrayPrototype%").
// 5. Return ! ArrayCreate(0, proto).


// http://www.ecma-international.org/ecma-262/#sec-array-len

// 1. Let numberOfArgs be the number of arguments passed to this function call.
// 2. Assert: numberOfArgs = 1.
// 3. If NewTarget is undefined, let newTarget be the active function object, else let newTarget be NewTarget.
// 4. Let proto be ? GetPrototypeFromConstructor(newTarget, "%ArrayPrototype%").
// 5. Let array be ! ArrayCreate(0, proto).
// 6. If Type(len) is not Number, then
  // 6. a. Let defineStatus be CreateDataProperty(array, "0", len).
  // 6. b. Assert: defineStatus is true.
  // 6. c. Let intLen be 1.
// 7. Else,
  // 7. a. Let intLen be ToUint32(len).
  // 7. b. If intLen ≠ len, throw a RangeError exception.
// 8. Perform ! Set(array, "length", intLen, true).
// 9. Return array.


// http://www.ecma-international.org/ecma-262/#sec-array-items

// 1. Let numberOfArgs be the number of arguments passed to this function call.
// 2. Assert: numberOfArgs ≥ 2.
// 3. If NewTarget is undefined, let newTarget be the active function object, else let newTarget be NewTarget.
// 4. Let proto be ? GetPrototypeFromConstructor(newTarget, "%ArrayPrototype%").
// 5. Let array be ? ArrayCreate(numberOfArgs, proto).
// 6. Let k be 0.
// 7. Let items be a zero-origined List containing the argument items in order.
// 8. Repeat, while k < numberOfArgs
  // 8. a. Let Pk be ! ToString(k).
  // 8. b. Let itemK be items[k].
  // 8. c. Let defineStatus be CreateDataProperty(array, Pk, itemK).
  // 8. d. Assert: defineStatus is true.
  // 8. e. Increase k by 1.
// 9. Assert: The value of array's "length" property is numberOfArgs.
// 10. Return array.


// http://www.ecma-international.org/ecma-262/#sec-array.from

// 1. Let C be the this value.
// 2. If mapfn is undefined, let mapping be false.
// 3. Else,
  // 3. a. If IsCallable(mapfn) is false, throw a TypeError exception.
  // 3. b. If thisArg is present, let T be thisArg; else let T be undefined.
  // 3. c. Let mapping be true.
// 4. Let usingIterator be ? GetMethod(items, @@iterator).
// 5. If usingIterator is not undefined, then
  // 5. a. If IsConstructor(C) is true, then
    // 5. a. i. Let A be ? Construct(C).
  // 5. b. Else,
    // 5. b. i. Let A be ! ArrayCreate(0).
  // 5. c. Let iteratorRecord be ? GetIterator(items, sync, usingIterator).
  // 5. d. Let k be 0.
  // 5. e. Repeat,
    // 5. e. i. If k ≥ 253 - 1, then
      // 5. e. i. 1. Let error be ThrowCompletion(a newly created TypeError object).
      // 5. e. i. 2. Return ? IteratorClose(iteratorRecord, error).
    // 5. e. ii. Let Pk be ! ToString(k).
    // 5. e. iii. Let next be ? IteratorStep(iteratorRecord).
    // 5. e. iv. If next is false, then
      // 5. e. iv. 1. Perform ? Set(A, "length", k, true).
      // 5. e. iv. 2. Return A.
    // 5. e. v. Let nextValue be ? IteratorValue(next).
    // 5. e. vi. If mapping is true, then
      // 5. e. vi. 1. Let mappedValue be Call(mapfn, T, « nextValue, k »).
      // 5. e. vi. 2. If mappedValue is an abrupt completion, return ? IteratorClose(iteratorRecord, mappedValue).
      // 5. e. vi. 3. Set mappedValue to mappedValue.[[Value]].
    // 5. e. vii. Else, let mappedValue be nextValue.
    // 5. e. viii. Let defineStatus be CreateDataPropertyOrThrow(A, Pk, mappedValue).
    // 5. e. ix. If defineStatus is an abrupt completion, return ? IteratorClose(iteratorRecord, defineStatus).
    // 5. e. x. Increase k by 1.
// 6. NOTE: items is not an Iterable so assume it is an array-like object.
// 7. Let arrayLike be ! ToObject(items).
// 8. Let len be ? ToLength(? Get(arrayLike, "length")).
// 9. If IsConstructor(C) is true, then
  // 9. a. Let A be ? Construct(C, « len »).
// 10. Else,
  // 10. a. Let A be ? ArrayCreate(len).
// 11. Let k be 0.
// 12. Repeat, while k < len
  // 12. a. Let Pk be ! ToString(k).
  // 12. b. Let kValue be ? Get(arrayLike, Pk).
  // 12. c. If mapping is true, then
    // 12. c. i. Let mappedValue be ? Call(mapfn, T, « kValue, k »).
  // 12. d. Else, let mappedValue be kValue.
  // 12. e. Perform ? CreateDataPropertyOrThrow(A, Pk, mappedValue).
  // 12. f. Increase k by 1.
// 13. Perform ? Set(A, "length", len, true).
// 14. Return A.


// http://www.ecma-international.org/ecma-262/#sec-array.isarray

// 1. Return ? IsArray(arg).


// http://www.ecma-international.org/ecma-262/#sec-array.of

// 1. Let len be the actual number of arguments passed to this function.
// 2. Let items be the List of arguments passed to this function.
// 3. Let C be the this value.
// 4. If IsConstructor(C) is true, then
  // 4. a. Let A be ? Construct(C, « len »).
// 5. Else,
  // 5. a. Let A be ? ArrayCreate(len).
// 6. Let k be 0.
// 7. Repeat, while k < len
  // 7. a. Let kValue be items[k].
  // 7. b. Let Pk be ! ToString(k).
  // 7. c. Perform ? CreateDataPropertyOrThrow(A, Pk, kValue).
  // 7. d. Increase k by 1.
// 8. Perform ? Set(A, "length", len, true).
// 9. Return A.


// http://www.ecma-international.org/ecma-262/#sec-get-array-@@species

// 1. Return the this value.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.concat

// 1. Let O be ? ToObject(this value).
// 2. Let A be ? ArraySpeciesCreate(O, 0).
// 3. Let n be 0.
// 4. Let items be a List whose first element is O and whose subsequent elements are, in left to right order, the arguments that were passed to this function invocation.
// 5. Repeat, while items is not empty
  // 5. a. Remove the first element from items and let E be the value of the element.
  // 5. b. Let spreadable be ? IsConcatSpreadable(E).
  // 5. c. If spreadable is true, then
    // 5. c. i. Let k be 0.
    // 5. c. ii. Let len be ? ToLength(? Get(E, "length")).
    // 5. c. iii. If n + len > 253 - 1, throw a TypeError exception.
    // 5. c. iv. Repeat, while k < len
      // 5. c. iv. 1. Let P be ! ToString(k).
      // 5. c. iv. 2. Let exists be ? HasProperty(E, P).
      // 5. c. iv. 3. If exists is true, then
        // 5. c. iv. 3. a. Let subElement be ? Get(E, P).
        // 5. c. iv. 3. b. Perform ? CreateDataPropertyOrThrow(A, ! ToString(n), subElement).
      // 5. c. iv. 4. Increase n by 1.
      // 5. c. iv. 5. Increase k by 1.
  // 5. d. Else E is added as a single item rather than spread,
    // 5. d. i. If n ≥ 253 - 1, throw a TypeError exception.
    // 5. d. ii. Perform ? CreateDataPropertyOrThrow(A, ! ToString(n), E).
    // 5. d. iii. Increase n by 1.
// 6. Perform ? Set(A, "length", n, true).
// 7. Return A.


// http://www.ecma-international.org/ecma-262/#sec-isconcatspreadable

// 1. If Type(O) is not Object, return false.
// 2. Let spreadable be ? Get(O, @@isConcatSpreadable).
// 3. If spreadable is not undefined, return ToBoolean(spreadable).
// 4. Return ? IsArray(O).


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.copywithin

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. Let relativeTarget be ? ToInteger(target).
// 4. If relativeTarget < 0, let to be max((len + relativeTarget), 0); else let to be min(relativeTarget, len).
// 5. Let relativeStart be ? ToInteger(start).
// 6. If relativeStart < 0, let from be max((len + relativeStart), 0); else let from be min(relativeStart, len).
// 7. If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToInteger(end).
// 8. If relativeEnd < 0, let final be max((len + relativeEnd), 0); else let final be min(relativeEnd, len).
// 9. Let count be min(final - from, len - to).
// 10. If from < to and to < from + count, then
  // 10. a. Let direction be -1.
  // 10. b. Set from to from + count - 1.
  // 10. c. Set to to to + count - 1.
// 11. Else,
  // 11. a. Let direction be 1.
// 12. Repeat, while count > 0
  // 12. a. Let fromKey be ! ToString(from).
  // 12. b. Let toKey be ! ToString(to).
  // 12. c. Let fromPresent be ? HasProperty(O, fromKey).
  // 12. d. If fromPresent is true, then
    // 12. d. i. Let fromVal be ? Get(O, fromKey).
    // 12. d. ii. Perform ? Set(O, toKey, fromVal, true).
  // 12. e. Else fromPresent is false,
    // 12. e. i. Perform ? DeletePropertyOrThrow(O, toKey).
  // 12. f. Set from to from + direction.
  // 12. g. Set to to to + direction.
  // 12. h. Decrease count by 1.
// 13. Return O.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.entries

// 1. Let O be ? ToObject(this value).
// 2. Return CreateArrayIterator(O, "key+value").


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.every

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
// 4. If thisArg is present, let T be thisArg; else let T be undefined.
// 5. Let k be 0.
// 6. Repeat, while k < len
  // 6. a. Let Pk be ! ToString(k).
  // 6. b. Let kPresent be ? HasProperty(O, Pk).
  // 6. c. If kPresent is true, then
    // 6. c. i. Let kValue be ? Get(O, Pk).
    // 6. c. ii. Let testResult be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
    // 6. c. iii. If testResult is false, return false.
  // 6. d. Increase k by 1.
// 7. Return true.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.fill

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. Let relativeStart be ? ToInteger(start).
// 4. If relativeStart < 0, let k be max((len + relativeStart), 0); else let k be min(relativeStart, len).
// 5. If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToInteger(end).
// 6. If relativeEnd < 0, let final be max((len + relativeEnd), 0); else let final be min(relativeEnd, len).
// 7. Repeat, while k < final
  // 7. a. Let Pk be ! ToString(k).
  // 7. b. Perform ? Set(O, Pk, value, true).
  // 7. c. Increase k by 1.
// 8. Return O.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.filter

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
// 4. If thisArg is present, let T be thisArg; else let T be undefined.
// 5. Let A be ? ArraySpeciesCreate(O, 0).
// 6. Let k be 0.
// 7. Let to be 0.
// 8. Repeat, while k < len
  // 8. a. Let Pk be ! ToString(k).
  // 8. b. Let kPresent be ? HasProperty(O, Pk).
  // 8. c. If kPresent is true, then
    // 8. c. i. Let kValue be ? Get(O, Pk).
    // 8. c. ii. Let selected be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
    // 8. c. iii. If selected is true, then
      // 8. c. iii. 1. Perform ? CreateDataPropertyOrThrow(A, ! ToString(to), kValue).
      // 8. c. iii. 2. Increase to by 1.
  // 8. d. Increase k by 1.
// 9. Return A.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.find

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. If IsCallable(predicate) is false, throw a TypeError exception.
// 4. If thisArg is present, let T be thisArg; else let T be undefined.
// 5. Let k be 0.
// 6. Repeat, while k < len
  // 6. a. Let Pk be ! ToString(k).
  // 6. b. Let kValue be ? Get(O, Pk).
  // 6. c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
  // 6. d. If testResult is true, return kValue.
  // 6. e. Increase k by 1.
// 7. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.findindex

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. If IsCallable(predicate) is false, throw a TypeError exception.
// 4. If thisArg is present, let T be thisArg; else let T be undefined.
// 5. Let k be 0.
// 6. Repeat, while k < len
  // 6. a. Let Pk be ! ToString(k).
  // 6. b. Let kValue be ? Get(O, Pk).
  // 6. c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
  // 6. d. If testResult is true, return k.
  // 6. e. Increase k by 1.
// 7. Return -1.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.flat

// 1. Let O be ? ToObject(this value).
// 2. Let sourceLen be ? ToLength(? Get(O, "length")).
// 3. Let depthNum be 1.
// 4. If depth is not undefined, then
  // 4. a. Set depthNum to ? ToInteger(depth).
// 5. Let A be ? ArraySpeciesCreate(O, 0).
// 6. Perform ? FlattenIntoArray(A, O, sourceLen, 0, depthNum).
// 7. Return A.


// http://www.ecma-international.org/ecma-262/#sec-flattenintoarray

// 1. Let targetIndex be start.
// 2. Let sourceIndex be 0.
// 3. Repeat, while sourceIndex < sourceLen
  // 3. a. Let P be ! ToString(sourceIndex).
  // 3. b. Let exists be ? HasProperty(source, P).
  // 3. c. If exists is true, then
    // 3. c. i. Let element be ? Get(source, P).
    // 3. c. ii. If mapperFunction is present, then
      // 3. c. ii. 1. Assert: thisArg is present.
      // 3. c. ii. 2. Set element to ? Call(mapperFunction, thisArg , « element, sourceIndex, source »).
    // 3. c. iii. Let shouldFlatten be false.
    // 3. c. iv. If depth > 0, then
      // 3. c. iv. 1. Set shouldFlatten to ? IsArray(element).
    // 3. c. v. If shouldFlatten is true, then
      // 3. c. v. 1. Let elementLen be ? ToLength(? Get(element, "length")).
      // 3. c. v. 2. Set targetIndex to ? FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1).
    // 3. c. vi. Else,
      // 3. c. vi. 1. If targetIndex ≥ 253-1, throw a TypeError exception.
      // 3. c. vi. 2. Perform ? CreateDataPropertyOrThrow(target, ! ToString(targetIndex), element).
      // 3. c. vi. 3. Increase targetIndex by 1.
  // 3. d. Increase sourceIndex by 1.
// 4. Return targetIndex.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.flatmap

// 1. Let O be ? ToObject(this value).
// 2. Let sourceLen be ? ToLength(? Get(O, "length")).
// 3. If IsCallable(mapperFunction) is false, throw a TypeError exception.
// 4. If thisArg is present, let T be thisArg; else let T be undefined.
// 5. Let A be ? ArraySpeciesCreate(O, 0).
// 6. Perform ? FlattenIntoArray(A, O, sourceLen, 0, 1, mapperFunction, T).
// 7. Return A.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.foreach

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
// 4. If thisArg is present, let T be thisArg; else let T be undefined.
// 5. Let k be 0.
// 6. Repeat, while k < len
  // 6. a. Let Pk be ! ToString(k).
  // 6. b. Let kPresent be ? HasProperty(O, Pk).
  // 6. c. If kPresent is true, then
    // 6. c. i. Let kValue be ? Get(O, Pk).
    // 6. c. ii. Perform ? Call(callbackfn, T, « kValue, k, O »).
  // 6. d. Increase k by 1.
// 7. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.includes

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. If len is 0, return false.
// 4. Let n be ? ToInteger(fromIndex).
// 5. Assert: If fromIndex is undefined, then n is 0.
// 6. If n ≥ 0, then
  // 6. a. Let k be n.
// 7. Else n < 0,
  // 7. a. Let k be len + n.
  // 7. b. If k < 0, set k to 0.
// 8. Repeat, while k < len
  // 8. a. Let elementK be the result of ? Get(O, ! ToString(k)).
  // 8. b. If SameValueZero(searchElement, elementK) is true, return true.
  // 8. c. Increase k by 1.
// 9. Return false.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.indexof

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. If len is 0, return -1.
// 4. Let n be ? ToInteger(fromIndex).
// 5. Assert: If fromIndex is undefined, then n is 0.
// 6. If n ≥ len, return -1.
// 7. If n ≥ 0, then
  // 7. a. If n is -0, let k be +0; else let k be n.
// 8. Else n < 0,
  // 8. a. Let k be len + n.
  // 8. b. If k < 0, set k to 0.
// 9. Repeat, while k < len
  // 9. a. Let kPresent be ? HasProperty(O, ! ToString(k)).
  // 9. b. If kPresent is true, then
    // 9. b. i. Let elementK be ? Get(O, ! ToString(k)).
    // 9. b. ii. Let same be the result of performing Strict Equality Comparison searchElement === elementK.
    // 9. b. iii. If same is true, return k.
  // 9. c. Increase k by 1.
// 10. Return -1.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.join

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. If separator is undefined, let sep be the single-element String ",".
// 4. Else, let sep be ? ToString(separator).
// 5. Let R be the empty String.
// 6. Let k be 0.
// 7. Repeat, while k < len
  // 7. a. If k > 0, set R to the string-concatenation of R and sep.
  // 7. b. Let element be ? Get(O, ! ToString(k)).
  // 7. c. If element is undefined or null, let next be the empty String; otherwise, let next be ? ToString(element).
  // 7. d. Set R to the string-concatenation of R and next.
  // 7. e. Increase k by 1.
// 8. Return R.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.keys

// 1. Let O be ? ToObject(this value).
// 2. Return CreateArrayIterator(O, "key").


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.lastindexof

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. If len is 0, return -1.
// 4. If fromIndex is present, let n be ? ToInteger(fromIndex); else let n be len - 1.
// 5. If n ≥ 0, then
  // 5. a. If n is -0, let k be +0; else let k be min(n, len - 1).
// 6. Else n < 0,
  // 6. a. Let k be len + n.
// 7. Repeat, while k ≥ 0
  // 7. a. Let kPresent be ? HasProperty(O, ! ToString(k)).
  // 7. b. If kPresent is true, then
    // 7. b. i. Let elementK be ? Get(O, ! ToString(k)).
    // 7. b. ii. Let same be the result of performing Strict Equality Comparison searchElement === elementK.
    // 7. b. iii. If same is true, return k.
  // 7. c. Decrease k by 1.
// 8. Return -1.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.map

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
// 4. If thisArg is present, let T be thisArg; else let T be undefined.
// 5. Let A be ? ArraySpeciesCreate(O, len).
// 6. Let k be 0.
// 7. Repeat, while k < len
  // 7. a. Let Pk be ! ToString(k).
  // 7. b. Let kPresent be ? HasProperty(O, Pk).
  // 7. c. If kPresent is true, then
    // 7. c. i. Let kValue be ? Get(O, Pk).
    // 7. c. ii. Let mappedValue be ? Call(callbackfn, T, « kValue, k, O »).
    // 7. c. iii. Perform ? CreateDataPropertyOrThrow(A, Pk, mappedValue).
  // 7. d. Increase k by 1.
// 8. Return A.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.pop

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. If len is zero, then
  // 3. a. Perform ? Set(O, "length", 0, true).
  // 3. b. Return undefined.
// 4. Else len > 0,
  // 4. a. Let newLen be len - 1.
  // 4. b. Let index be ! ToString(newLen).
  // 4. c. Let element be ? Get(O, index).
  // 4. d. Perform ? DeletePropertyOrThrow(O, index).
  // 4. e. Perform ? Set(O, "length", newLen, true).
  // 4. f. Return element.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.push

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. Let items be a List whose elements are, in left to right order, the arguments that were passed to this function invocation.
// 4. Let argCount be the number of elements in items.
// 5. If len + argCount > 253 - 1, throw a TypeError exception.
// 6. Repeat, while items is not empty
  // 6. a. Remove the first element from items and let E be the value of the element.
  // 6. b. Perform ? Set(O, ! ToString(len), E, true).
  // 6. c. Increase len by 1.
// 7. Perform ? Set(O, "length", len, true).
// 8. Return len.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.reduce

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
// 4. If len is 0 and initialValue is not present, throw a TypeError exception.
// 5. Let k be 0.
// 6. Let accumulator be undefined.
// 7. If initialValue is present, then
  // 7. a. Set accumulator to initialValue.
// 8. Else initialValue is not present,
  // 8. a. Let kPresent be false.
  // 8. b. Repeat, while kPresent is false and k < len
    // 8. b. i. Let Pk be ! ToString(k).
    // 8. b. ii. Set kPresent to ? HasProperty(O, Pk).
    // 8. b. iii. If kPresent is true, then
      // 8. b. iii. 1. Set accumulator to ? Get(O, Pk).
    // 8. b. iv. Increase k by 1.
  // 8. c. If kPresent is false, throw a TypeError exception.
// 9. Repeat, while k < len
  // 9. a. Let Pk be ! ToString(k).
  // 9. b. Let kPresent be ? HasProperty(O, Pk).
  // 9. c. If kPresent is true, then
    // 9. c. i. Let kValue be ? Get(O, Pk).
    // 9. c. ii. Set accumulator to ? Call(callbackfn, undefined, « accumulator, kValue, k, O »).
  // 9. d. Increase k by 1.
// 10. Return accumulator.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.reduceright

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
// 4. If len is 0 and initialValue is not present, throw a TypeError exception.
// 5. Let k be len - 1.
// 6. Let accumulator be undefined.
// 7. If initialValue is present, then
  // 7. a. Set accumulator to initialValue.
// 8. Else initialValue is not present,
  // 8. a. Let kPresent be false.
  // 8. b. Repeat, while kPresent is false and k ≥ 0
    // 8. b. i. Let Pk be ! ToString(k).
    // 8. b. ii. Set kPresent to ? HasProperty(O, Pk).
    // 8. b. iii. If kPresent is true, then
      // 8. b. iii. 1. Set accumulator to ? Get(O, Pk).
    // 8. b. iv. Decrease k by 1.
  // 8. c. If kPresent is false, throw a TypeError exception.
// 9. Repeat, while k ≥ 0
  // 9. a. Let Pk be ! ToString(k).
  // 9. b. Let kPresent be ? HasProperty(O, Pk).
  // 9. c. If kPresent is true, then
    // 9. c. i. Let kValue be ? Get(O, Pk).
    // 9. c. ii. Set accumulator to ? Call(callbackfn, undefined, « accumulator, kValue, k, O »).
  // 9. d. Decrease k by 1.
// 10. Return accumulator.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.reverse

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. Let middle be floor(len / 2).
// 4. Let lower be 0.
// 5. Repeat, while lower ≠ middle
  // 5. a. Let upper be len - lower - 1.
  // 5. b. Let upperP be ! ToString(upper).
  // 5. c. Let lowerP be ! ToString(lower).
  // 5. d. Let lowerExists be ? HasProperty(O, lowerP).
  // 5. e. If lowerExists is true, then
    // 5. e. i. Let lowerValue be ? Get(O, lowerP).
  // 5. f. Let upperExists be ? HasProperty(O, upperP).
  // 5. g. If upperExists is true, then
    // 5. g. i. Let upperValue be ? Get(O, upperP).
  // 5. h. If lowerExists is true and upperExists is true, then
    // 5. h. i. Perform ? Set(O, lowerP, upperValue, true).
    // 5. h. ii. Perform ? Set(O, upperP, lowerValue, true).
  // 5. i. Else if lowerExists is false and upperExists is true, then
    // 5. i. i. Perform ? Set(O, lowerP, upperValue, true).
    // 5. i. ii. Perform ? DeletePropertyOrThrow(O, upperP).
  // 5. j. Else if lowerExists is true and upperExists is false, then
    // 5. j. i. Perform ? DeletePropertyOrThrow(O, lowerP).
    // 5. j. ii. Perform ? Set(O, upperP, lowerValue, true).
  // 5. k. Else both lowerExists and upperExists are false,
    // 5. k. i. No action is required.
  // 5. l. Increase lower by 1.
// 6. Return O.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.shift

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. If len is zero, then
  // 3. a. Perform ? Set(O, "length", 0, true).
  // 3. b. Return undefined.
// 4. Let first be ? Get(O, "0").
// 5. Let k be 1.
// 6. Repeat, while k < len
  // 6. a. Let from be ! ToString(k).
  // 6. b. Let to be ! ToString(k - 1).
  // 6. c. Let fromPresent be ? HasProperty(O, from).
  // 6. d. If fromPresent is true, then
    // 6. d. i. Let fromVal be ? Get(O, from).
    // 6. d. ii. Perform ? Set(O, to, fromVal, true).
  // 6. e. Else fromPresent is false,
    // 6. e. i. Perform ? DeletePropertyOrThrow(O, to).
  // 6. f. Increase k by 1.
// 7. Perform ? DeletePropertyOrThrow(O, ! ToString(len - 1)).
// 8. Perform ? Set(O, "length", len - 1, true).
// 9. Return first.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.slice

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. Let relativeStart be ? ToInteger(start).
// 4. If relativeStart < 0, let k be max((len + relativeStart), 0); else let k be min(relativeStart, len).
// 5. If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToInteger(end).
// 6. If relativeEnd < 0, let final be max((len + relativeEnd), 0); else let final be min(relativeEnd, len).
// 7. Let count be max(final - k, 0).
// 8. Let A be ? ArraySpeciesCreate(O, count).
// 9. Let n be 0.
// 10. Repeat, while k < final
  // 10. a. Let Pk be ! ToString(k).
  // 10. b. Let kPresent be ? HasProperty(O, Pk).
  // 10. c. If kPresent is true, then
    // 10. c. i. Let kValue be ? Get(O, Pk).
    // 10. c. ii. Perform ? CreateDataPropertyOrThrow(A, ! ToString(n), kValue).
  // 10. d. Increase k by 1.
  // 10. e. Increase n by 1.
// 11. Perform ? Set(A, "length", n, true).
// 12. Return A.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.some

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
// 4. If thisArg is present, let T be thisArg; else let T be undefined.
// 5. Let k be 0.
// 6. Repeat, while k < len
  // 6. a. Let Pk be ! ToString(k).
  // 6. b. Let kPresent be ? HasProperty(O, Pk).
  // 6. c. If kPresent is true, then
    // 6. c. i. Let kValue be ? Get(O, Pk).
    // 6. c. ii. Let testResult be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
    // 6. c. iii. If testResult is true, return true.
  // 6. d. Increase k by 1.
// 7. Return false.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.sort

// 1. If comparefn is not undefined and IsCallable(comparefn) is false, throw a TypeError exception.
// 2. Let obj be ? ToObject(this value).
// 3. Let len be ? ToLength(? Get(obj, "length")).

// 1. For each integer i in the range 0 ≤ i < len, do
  // 1. a. Let elem be obj.[[GetOwnProperty]](! ToString(i)).
  // 1. b. If elem is undefined, return true.
// 2. Return false.

// 1. Perform an implementation-dependent sequence of calls to the [[Get]] and [[Set]] internal methods of obj, to the DeletePropertyOrThrow and HasOwnProperty abstract operation with obj as the first argument, and to SortCompare (described below), such that:The property key argument for each call to [[Get]], [[Set]], HasOwnProperty, or DeletePropertyOrThrow is the string representation of a nonnegative integer less than len.The arguments for calls to SortCompare are values returned by a previous call to the [[Get]] internal method, unless the properties accessed by those previous calls did not exist according to HasOwnProperty. If both prospective arguments to SortCompare correspond to non-existent properties, use +0 instead of calling SortCompare. If only the first prospective argument is non-existent use +1. If only the second prospective argument is non-existent use -1.If obj is not sparse then DeletePropertyOrThrow must not be called.If any [[Set]] call returns false a TypeError exception is thrown.If an abrupt completion is returned from any of these operations, it is immediately returned as the value of this function.
// 2. Return obj.


// http://www.ecma-international.org/ecma-262/#sec-sortcompare

// 1. If x and y are both undefined, return +0.
// 2. If x is undefined, return 1.
// 3. If y is undefined, return -1.
// 4. If comparefn is not undefined, then
  // 4. a. Let v be ? ToNumber(? Call(comparefn, undefined, « x, y »)).
  // 4. b. If v is NaN, return +0.
  // 4. c. Return v.
// 5. Let xString be ? ToString(x).
// 6. Let yString be ? ToString(y).
// 7. Let xSmaller be the result of performing Abstract Relational Comparison xString < yString.
// 8. If xSmaller is true, return -1.
// 9. Let ySmaller be the result of performing Abstract Relational Comparison yString < xString.
// 10. If ySmaller is true, return 1.
// 11. Return +0.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.splice

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. Let relativeStart be ? ToInteger(start).
// 4. If relativeStart < 0, let actualStart be max((len + relativeStart), 0); else let actualStart be min(relativeStart, len).
// 5. If the number of actual arguments is 0, then
  // 5. a. Let insertCount be 0.
  // 5. b. Let actualDeleteCount be 0.
// 6. Else if the number of actual arguments is 1, then
  // 6. a. Let insertCount be 0.
  // 6. b. Let actualDeleteCount be len - actualStart.
// 7. Else,
  // 7. a. Let insertCount be the number of actual arguments minus 2.
  // 7. b. Let dc be ? ToInteger(deleteCount).
  // 7. c. Let actualDeleteCount be min(max(dc, 0), len - actualStart).
// 8. If len + insertCount - actualDeleteCount > 253 - 1, throw a TypeError exception.
// 9. Let A be ? ArraySpeciesCreate(O, actualDeleteCount).
// 10. Let k be 0.
// 11. Repeat, while k < actualDeleteCount
  // 11. a. Let from be ! ToString(actualStart + k).
  // 11. b. Let fromPresent be ? HasProperty(O, from).
  // 11. c. If fromPresent is true, then
    // 11. c. i. Let fromValue be ? Get(O, from).
    // 11. c. ii. Perform ? CreateDataPropertyOrThrow(A, ! ToString(k), fromValue).
  // 11. d. Increment k by 1.
// 12. Perform ? Set(A, "length", actualDeleteCount, true).
// 13. Let items be a List whose elements are, in left to right order, the portion of the actual argument list starting with the third argument. The list is empty if fewer than three arguments were passed.
// 14. Let itemCount be the number of elements in items.
// 15. If itemCount < actualDeleteCount, then
  // 15. a. Set k to actualStart.
  // 15. b. Repeat, while k < (len - actualDeleteCount)
    // 15. b. i. Let from be ! ToString(k + actualDeleteCount).
    // 15. b. ii. Let to be ! ToString(k + itemCount).
    // 15. b. iii. Let fromPresent be ? HasProperty(O, from).
    // 15. b. iv. If fromPresent is true, then
      // 15. b. iv. 1. Let fromValue be ? Get(O, from).
      // 15. b. iv. 2. Perform ? Set(O, to, fromValue, true).
    // 15. b. v. Else fromPresent is false,
      // 15. b. v. 1. Perform ? DeletePropertyOrThrow(O, to).
    // 15. b. vi. Increase k by 1.
  // 15. c. Set k to len.
  // 15. d. Repeat, while k > (len - actualDeleteCount + itemCount)
    // 15. d. i. Perform ? DeletePropertyOrThrow(O, ! ToString(k - 1)).
    // 15. d. ii. Decrease k by 1.
// 16. Else if itemCount > actualDeleteCount, then
  // 16. a. Set k to (len - actualDeleteCount).
  // 16. b. Repeat, while k > actualStart
    // 16. b. i. Let from be ! ToString(k + actualDeleteCount - 1).
    // 16. b. ii. Let to be ! ToString(k + itemCount - 1).
    // 16. b. iii. Let fromPresent be ? HasProperty(O, from).
    // 16. b. iv. If fromPresent is true, then
      // 16. b. iv. 1. Let fromValue be ? Get(O, from).
      // 16. b. iv. 2. Perform ? Set(O, to, fromValue, true).
    // 16. b. v. Else fromPresent is false,
      // 16. b. v. 1. Perform ? DeletePropertyOrThrow(O, to).
    // 16. b. vi. Decrease k by 1.
// 17. Set k to actualStart.
// 18. Repeat, while items is not empty
  // 18. a. Remove the first element from items and let E be the value of that element.
  // 18. b. Perform ? Set(O, ! ToString(k), E, true).
  // 18. c. Increase k by 1.
// 19. Perform ? Set(O, "length", len - actualDeleteCount + itemCount, true).
// 20. Return A.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.tolocalestring

// 1. Let array be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(array, "length")).
// 3. Let separator be the String value for the list-separator String appropriate for the host environment's current locale (this is derived in an implementation-defined way).
// 4. Let R be the empty String.
// 5. Let k be 0.
// 6. Repeat, while k < len
  // 6. a. If k > 0, then
    // 6. a. i. Set R to the string-concatenation of R and separator.
  // 6. b. Let nextElement be ? Get(array, ! ToString(k)).
  // 6. c. If nextElement is not undefined or null, then
    // 6. c. i. Let S be ? ToString(? Invoke(nextElement, "toLocaleString")).
    // 6. c. ii. Set R to the string-concatenation of R and S.
  // 6. d. Increase k by 1.
// 7. Return R.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.tostring

// 1. Let array be ? ToObject(this value).
// 2. Let func be ? Get(array, "join").
// 3. If IsCallable(func) is false, set func to the intrinsic function %ObjProto_toString%.
// 4. Return ? Call(func, array).


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.unshift

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? ToLength(? Get(O, "length")).
// 3. Let argCount be the number of actual arguments.
// 4. If argCount > 0, then
  // 4. a. If len + argCount > 253 - 1, throw a TypeError exception.
  // 4. b. Let k be len.
  // 4. c. Repeat, while k > 0,
    // 4. c. i. Let from be ! ToString(k - 1).
    // 4. c. ii. Let to be ! ToString(k + argCount - 1).
    // 4. c. iii. Let fromPresent be ? HasProperty(O, from).
    // 4. c. iv. If fromPresent is true, then
      // 4. c. iv. 1. Let fromValue be ? Get(O, from).
      // 4. c. iv. 2. Perform ? Set(O, to, fromValue, true).
    // 4. c. v. Else fromPresent is false,
      // 4. c. v. 1. Perform ? DeletePropertyOrThrow(O, to).
    // 4. c. vi. Decrease k by 1.
  // 4. d. Let j be 0.
  // 4. e. Let items be a List whose elements are, in left to right order, the arguments that were passed to this function invocation.
  // 4. f. Repeat, while items is not empty
    // 4. f. i. Remove the first element from items and let E be the value of that element.
    // 4. f. ii. Perform ? Set(O, ! ToString(j), E, true).
    // 4. f. iii. Increase j by 1.
// 5. Perform ? Set(O, "length", len + argCount, true).
// 6. Return len + argCount.


// http://www.ecma-international.org/ecma-262/#sec-array.prototype.values

// 1. Let O be ? ToObject(this value).
// 2. Return CreateArrayIterator(O, "value").


// http://www.ecma-international.org/ecma-262/#sec-array.prototype-@@unscopables

// 1. Let unscopableList be ObjectCreate(null).
// 2. Perform CreateDataProperty(unscopableList, "copyWithin", true).
// 3. Perform CreateDataProperty(unscopableList, "entries", true).
// 4. Perform CreateDataProperty(unscopableList, "fill", true).
// 5. Perform CreateDataProperty(unscopableList, "find", true).
// 6. Perform CreateDataProperty(unscopableList, "findIndex", true).
// 7. Perform CreateDataProperty(unscopableList, "flat", true).
// 8. Perform CreateDataProperty(unscopableList, "flatMap", true).
// 9. Perform CreateDataProperty(unscopableList, "includes", true).
// 10. Perform CreateDataProperty(unscopableList, "keys", true).
// 11. Perform CreateDataProperty(unscopableList, "values", true).
// 12. Assert: Each of the above calls returns true.
// 13. Return unscopableList.


// http://www.ecma-international.org/ecma-262/#sec-createarrayiterator

// 1. Assert: Type(array) is Object.
// 2. Let iterator be ObjectCreate(%ArrayIteratorPrototype%, « [[IteratedObject]], [[ArrayIteratorNextIndex]], [[ArrayIterationKind]] »).
// 3. Set iterator.[[IteratedObject]] to array.
// 4. Set iterator.[[ArrayIteratorNextIndex]] to 0.
// 5. Set iterator.[[ArrayIterationKind]] to kind.
// 6. Return iterator.


// http://www.ecma-international.org/ecma-262/#sec-%arrayiteratorprototype%.next

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If O does not have all of the internal slots of an Array Iterator Instance (22.1.5.3), throw a TypeError exception.
// 4. Let a be O.[[IteratedObject]].
// 5. If a is undefined, return CreateIterResultObject(undefined, true).
// 6. Let index be O.[[ArrayIteratorNextIndex]].
// 7. Let itemKind be O.[[ArrayIterationKind]].
// 8. If a has a [[TypedArrayName]] internal slot, then
  // 8. a. If IsDetachedBuffer(a.[[ViewedArrayBuffer]]) is true, throw a TypeError exception.
  // 8. b. Let len be a.[[ArrayLength]].
// 9. Else,
  // 9. a. Let len be ? ToLength(? Get(a, "length")).
// 10. If index ≥ len, then
  // 10. a. Set O.[[IteratedObject]] to undefined.
  // 10. b. Return CreateIterResultObject(undefined, true).
// 11. Set O.[[ArrayIteratorNextIndex]] to index + 1.
// 12. If itemKind is "key", return CreateIterResultObject(index, false).
// 13. Let elementKey be ! ToString(index).
// 14. Let elementValue be ? Get(a, elementKey).
// 15. If itemKind is "value", let result be elementValue.
// 16. Else,
  // 16. a. Assert: itemKind is "key+value".
  // 16. b. Let result be CreateArrayFromList(« index, elementValue »).
// 17. Return CreateIterResultObject(result, false).


// http://www.ecma-international.org/ecma-262/#sec-%typedarray%

// 1. Throw a TypeError exception.


// http://www.ecma-international.org/ecma-262/#sec-%typedarray%.from

// 1. Let C be the this value.
// 2. If IsConstructor(C) is false, throw a TypeError exception.
// 3. If mapfn is present and mapfn is not undefined, then
  // 3. a. If IsCallable(mapfn) is false, throw a TypeError exception.
  // 3. b. Let mapping be true.
// 4. Else, let mapping be false.
// 5. If thisArg is present, let T be thisArg; else let T be undefined.
// 6. Let usingIterator be ? GetMethod(source, @@iterator).
// 7. If usingIterator is not undefined, then
  // 7. a. Let values be ? IterableToList(source, usingIterator).
  // 7. b. Let len be the number of elements in values.
  // 7. c. Let targetObj be ? TypedArrayCreate(C, « len »).
  // 7. d. Let k be 0.
  // 7. e. Repeat, while k < len
    // 7. e. i. Let Pk be ! ToString(k).
    // 7. e. ii. Let kValue be the first element of values and remove that element from values.
    // 7. e. iii. If mapping is true, then
      // 7. e. iii. 1. Let mappedValue be ? Call(mapfn, T, « kValue, k »).
    // 7. e. iv. Else, let mappedValue be kValue.
    // 7. e. v. Perform ? Set(targetObj, Pk, mappedValue, true).
    // 7. e. vi. Increase k by 1.
  // 7. f. Assert: values is now an empty List.
  // 7. g. Return targetObj.
// 8. NOTE: source is not an Iterable so assume it is already an array-like object.
// 9. Let arrayLike be ! ToObject(source).
// 10. Let len be ? ToLength(? Get(arrayLike, "length")).
// 11. Let targetObj be ? TypedArrayCreate(C, « len »).
// 12. Let k be 0.
// 13. Repeat, while k < len
  // 13. a. Let Pk be ! ToString(k).
  // 13. b. Let kValue be ? Get(arrayLike, Pk).
  // 13. c. If mapping is true, then
    // 13. c. i. Let mappedValue be ? Call(mapfn, T, « kValue, k »).
  // 13. d. Else, let mappedValue be kValue.
  // 13. e. Perform ? Set(targetObj, Pk, mappedValue, true).
  // 13. f. Increase k by 1.
// 14. Return targetObj.


// http://www.ecma-international.org/ecma-262/#sec-iterabletolist

// 1. Let iteratorRecord be ? GetIterator(items, sync, method).
// 2. Let values be a new empty List.
// 3. Let next be true.
// 4. Repeat, while next is not false
  // 4. a. Set next to ? IteratorStep(iteratorRecord).
  // 4. b. If next is not false, then
    // 4. b. i. Let nextValue be ? IteratorValue(next).
    // 4. b. ii. Append nextValue to the end of the List values.
// 5. Return values.


// http://www.ecma-international.org/ecma-262/#sec-%typedarray%.of

// 1. Let len be the actual number of arguments passed to this function.
// 2. Let items be the List of arguments passed to this function.
// 3. Let C be the this value.
// 4. If IsConstructor(C) is false, throw a TypeError exception.
// 5. Let newObj be ? TypedArrayCreate(C, « len »).
// 6. Let k be 0.
// 7. Repeat, while k < len
  // 7. a. Let kValue be items[k].
  // 7. b. Let Pk be ! ToString(k).
  // 7. c. Perform ? Set(newObj, Pk, kValue, true).
  // 7. d. Increase k by 1.
// 8. Return newObj.


// http://www.ecma-international.org/ecma-262/#sec-get-%typedarray%-@@species

// 1. Return the this value.


// http://www.ecma-international.org/ecma-262/#sec-get-%typedarray%.prototype.buffer

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If O does not have a [[TypedArrayName]] internal slot, throw a TypeError exception.
// 4. Assert: O has a [[ViewedArrayBuffer]] internal slot.
// 5. Let buffer be O.[[ViewedArrayBuffer]].
// 6. Return buffer.


// http://www.ecma-international.org/ecma-262/#sec-get-%typedarray%.prototype.bytelength

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If O does not have a [[TypedArrayName]] internal slot, throw a TypeError exception.
// 4. Assert: O has a [[ViewedArrayBuffer]] internal slot.
// 5. Let buffer be O.[[ViewedArrayBuffer]].
// 6. If IsDetachedBuffer(buffer) is true, return 0.
// 7. Let size be O.[[ByteLength]].
// 8. Return size.


// http://www.ecma-international.org/ecma-262/#sec-get-%typedarray%.prototype.byteoffset

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If O does not have a [[TypedArrayName]] internal slot, throw a TypeError exception.
// 4. Assert: O has a [[ViewedArrayBuffer]] internal slot.
// 5. Let buffer be O.[[ViewedArrayBuffer]].
// 6. If IsDetachedBuffer(buffer) is true, return 0.
// 7. Let offset be O.[[ByteOffset]].
// 8. Return offset.


// http://www.ecma-international.org/ecma-262/#sec-%typedarray%.prototype.copywithin

// 1. Let O be this value.
// 2. Perform ? ValidateTypedArray(O).
// 3. Let len be O.[[ArrayLength]].
// 4. Let relativeTarget be ? ToInteger(target).
// 5. If relativeTarget < 0, let to be max((len + relativeTarget), 0); else let to be min(relativeTarget, len).
// 6. Let relativeStart be ? ToInteger(start).
// 7. If relativeStart < 0, let from be max((len + relativeStart), 0); else let from be min(relativeStart, len).
// 8. If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToInteger(end).
// 9. If relativeEnd < 0, let final be max((len + relativeEnd), 0); else let final be min(relativeEnd, len).
// 10. Let count be min(final - from, len - to).
// 11. If count > 0, then
  // 11. a. NOTE: The copying must be performed in a manner that preserves the bit-level encoding of the source data.
  // 11. b. Let buffer be O.[[ViewedArrayBuffer]].
  // 11. c. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
  // 11. d. Let typedArrayName be the String value of O.[[TypedArrayName]].
  // 11. e. Let elementSize be the Number value of the Element Size value specified in Table 59 for typedArrayName.
  // 11. f. Let byteOffset be O.[[ByteOffset]].
  // 11. g. Let toByteIndex be to × elementSize + byteOffset.
  // 11. h. Let fromByteIndex be from × elementSize + byteOffset.
  // 11. i. Let countBytes be count × elementSize.
  // 11. j. If fromByteIndex < toByteIndex and toByteIndex < fromByteIndex + countBytes, then
    // 11. j. i. Let direction be -1.
    // 11. j. ii. Set fromByteIndex to fromByteIndex + countBytes - 1.
    // 11. j. iii. Set toByteIndex to toByteIndex + countBytes - 1.
  // 11. k. Else,
    // 11. k. i. Let direction be 1.
  // 11. l. Repeat, while countBytes > 0
    // 11. l. i. Let value be GetValueFromBuffer(buffer, fromByteIndex, "Uint8", true, "Unordered").
    // 11. l. ii. Perform SetValueInBuffer(buffer, toByteIndex, "Uint8", value, true, "Unordered").
    // 11. l. iii. Set fromByteIndex to fromByteIndex + direction.
    // 11. l. iv. Set toByteIndex to toByteIndex + direction.
    // 11. l. v. Decrease countBytes by 1.
// 12. Return O.


// http://www.ecma-international.org/ecma-262/#sec-validatetypedarray

// 1. If Type(O) is not Object, throw a TypeError exception.
// 2. If O does not have a [[TypedArrayName]] internal slot, throw a TypeError exception.
// 3. Assert: O has a [[ViewedArrayBuffer]] internal slot.
// 4. Let buffer be O.[[ViewedArrayBuffer]].
// 5. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
// 6. Return buffer.


// http://www.ecma-international.org/ecma-262/#sec-%typedarray%.prototype.entries

// 1. Let O be the this value.
// 2. Perform ? ValidateTypedArray(O).
// 3. Return CreateArrayIterator(O, "key+value").


// http://www.ecma-international.org/ecma-262/#sec-%typedarray%.prototype.fill

// 1. Let O be the this value.
// 2. Perform ? ValidateTypedArray(O).
// 3. Let len be O.[[ArrayLength]].
// 4. Set value to ? ToNumber(value).
// 5. Let relativeStart be ? ToInteger(start).
// 6. If relativeStart < 0, let k be max((len + relativeStart), 0); else let k be min(relativeStart, len).
// 7. If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToInteger(end).
// 8. If relativeEnd < 0, let final be max((len + relativeEnd), 0); else let final be min(relativeEnd, len).
// 9. If IsDetachedBuffer(O.[[ViewedArrayBuffer]]) is true, throw a TypeError exception.
// 10. Repeat, while k < final
  // 10. a. Let Pk be ! ToString(k).
  // 10. b. Perform ! Set(O, Pk, value, true).
  // 10. c. Increase k by 1.
// 11. Return O.


// http://www.ecma-international.org/ecma-262/#sec-%typedarray%.prototype.filter

// 1. Let O be the this value.
// 2. Perform ? ValidateTypedArray(O).
// 3. Let len be O.[[ArrayLength]].
// 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
// 5. If thisArg is present, let T be thisArg; else let T be undefined.
// 6. Let kept be a new empty List.
// 7. Let k be 0.
// 8. Let captured be 0.
// 9. Repeat, while k < len
  // 9. a. Let Pk be ! ToString(k).
  // 9. b. Let kValue be ? Get(O, Pk).
  // 9. c. Let selected be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
  // 9. d. If selected is true, then
    // 9. d. i. Append kValue to the end of kept.
    // 9. d. ii. Increase captured by 1.
  // 9. e. Increase k by 1.
// 10. Let A be ? TypedArraySpeciesCreate(O, « captured »).
// 11. Let n be 0.
// 12. For each element e of kept, do
  // 12. a. Perform ! Set(A, ! ToString(n), e, true).
  // 12. b. Increment n by 1.
// 13. Return A.


// http://www.ecma-international.org/ecma-262/#sec-%typedarray%.prototype.keys

// 1. Let O be the this value.
// 2. Perform ? ValidateTypedArray(O).
// 3. Return CreateArrayIterator(O, "key").


// http://www.ecma-international.org/ecma-262/#sec-get-%typedarray%.prototype.length

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If O does not have a [[TypedArrayName]] internal slot, throw a TypeError exception.
// 4. Assert: O has [[ViewedArrayBuffer]] and [[ArrayLength]] internal slots.
// 5. Let buffer be O.[[ViewedArrayBuffer]].
// 6. If IsDetachedBuffer(buffer) is true, return 0.
// 7. Let length be O.[[ArrayLength]].
// 8. Return length.


// http://www.ecma-international.org/ecma-262/#sec-%typedarray%.prototype.map

// 1. Let O be the this value.
// 2. Perform ? ValidateTypedArray(O).
// 3. Let len be O.[[ArrayLength]].
// 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
// 5. If thisArg is present, let T be thisArg; else let T be undefined.
// 6. Let A be ? TypedArraySpeciesCreate(O, « len »).
// 7. Let k be 0.
// 8. Repeat, while k < len
  // 8. a. Let Pk be ! ToString(k).
  // 8. b. Let kValue be ? Get(O, Pk).
  // 8. c. Let mappedValue be ? Call(callbackfn, T, « kValue, k, O »).
  // 8. d. Perform ? Set(A, Pk, mappedValue, true).
  // 8. e. Increase k by 1.
// 9. Return A.


// http://www.ecma-international.org/ecma-262/#sec-%typedarray%.prototype.set-array-offset

// 1. Assert: array is any ECMAScript language value other than an Object with a [[TypedArrayName]] internal slot. If it is such an Object, the definition in 22.2.3.23.2 applies.
// 2. Let target be the this value.
// 3. If Type(target) is not Object, throw a TypeError exception.
// 4. If target does not have a [[TypedArrayName]] internal slot, throw a TypeError exception.
// 5. Assert: target has a [[ViewedArrayBuffer]] internal slot.
// 6. Let targetOffset be ? ToInteger(offset).
// 7. If targetOffset < 0, throw a RangeError exception.
// 8. Let targetBuffer be target.[[ViewedArrayBuffer]].
// 9. If IsDetachedBuffer(targetBuffer) is true, throw a TypeError exception.
// 10. Let targetLength be target.[[ArrayLength]].
// 11. Let targetName be the String value of target.[[TypedArrayName]].
// 12. Let targetElementSize be the Number value of the Element Size value specified in Table 59 for targetName.
// 13. Let targetType be the String value of the Element Type value in Table 59 for targetName.
// 14. Let targetByteOffset be target.[[ByteOffset]].
// 15. Let src be ? ToObject(array).
// 16. Let srcLength be ? ToLength(? Get(src, "length")).
// 17. If srcLength + targetOffset > targetLength, throw a RangeError exception.
// 18. Let targetByteIndex be targetOffset × targetElementSize + targetByteOffset.
// 19. Let k be 0.
// 20. Let limit be targetByteIndex + targetElementSize × srcLength.
// 21. Repeat, while targetByteIndex < limit
  // 21. a. Let Pk be ! ToString(k).
  // 21. b. Let kNumber be ? ToNumber(? Get(src, Pk)).
  // 21. c. If IsDetachedBuffer(targetBuffer) is true, throw a TypeError exception.
  // 21. d. Perform SetValueInBuffer(targetBuffer, targetByteIndex, targetType, kNumber, true, "Unordered").
  // 21. e. Increase k by 1.
  // 21. f. Set targetByteIndex to targetByteIndex + targetElementSize.
// 22. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-%typedarray%.prototype.set-typedarray-offset

// 1. Assert: typedArray has a [[TypedArrayName]] internal slot. If it does not, the definition in 22.2.3.23.1 applies.
// 2. Let target be the this value.
// 3. If Type(target) is not Object, throw a TypeError exception.
// 4. If target does not have a [[TypedArrayName]] internal slot, throw a TypeError exception.
// 5. Assert: target has a [[ViewedArrayBuffer]] internal slot.
// 6. Let targetOffset be ? ToInteger(offset).
// 7. If targetOffset < 0, throw a RangeError exception.
// 8. Let targetBuffer be target.[[ViewedArrayBuffer]].
// 9. If IsDetachedBuffer(targetBuffer) is true, throw a TypeError exception.
// 10. Let targetLength be target.[[ArrayLength]].
// 11. Let srcBuffer be typedArray.[[ViewedArrayBuffer]].
// 12. If IsDetachedBuffer(srcBuffer) is true, throw a TypeError exception.
// 13. Let targetName be the String value of target.[[TypedArrayName]].
// 14. Let targetType be the String value of the Element Type value in Table 59 for targetName.
// 15. Let targetElementSize be the Number value of the Element Size value specified in Table 59 for targetName.
// 16. Let targetByteOffset be target.[[ByteOffset]].
// 17. Let srcName be the String value of typedArray.[[TypedArrayName]].
// 18. Let srcType be the String value of the Element Type value in Table 59 for srcName.
// 19. Let srcElementSize be the Number value of the Element Size value specified in Table 59 for srcName.
// 20. Let srcLength be typedArray.[[ArrayLength]].
// 21. Let srcByteOffset be typedArray.[[ByteOffset]].
// 22. If srcLength + targetOffset > targetLength, throw a RangeError exception.
// 23. If both IsSharedArrayBuffer(srcBuffer) and IsSharedArrayBuffer(targetBuffer) are true, then
  // 23. a. If srcBuffer.[[ArrayBufferData]] and targetBuffer.[[ArrayBufferData]] are the same Shared Data Block values, let same be true; else let same be false.
// 24. Else, let same be SameValue(srcBuffer, targetBuffer).
// 25. If same is true, then
  // 25. a. Let srcByteLength be typedArray.[[ByteLength]].
  // 25. b. Set srcBuffer to ? CloneArrayBuffer(srcBuffer, srcByteOffset, srcByteLength, %ArrayBuffer%).
  // 25. c. NOTE: %ArrayBuffer% is used to clone srcBuffer because is it known to not have any observable side-effects.
  // 25. d. Let srcByteIndex be 0.
// 26. Else, let srcByteIndex be srcByteOffset.
// 27. Let targetByteIndex be targetOffset × targetElementSize + targetByteOffset.
// 28. Let limit be targetByteIndex + targetElementSize × srcLength.
// 29. If SameValue(srcType, targetType) is true, then
  // 29. a. NOTE: If srcType and targetType are the same, the transfer must be performed in a manner that preserves the bit-level encoding of the source data.
  // 29. b. Repeat, while targetByteIndex < limit
    // 29. b. i. Let value be GetValueFromBuffer(srcBuffer, srcByteIndex, "Uint8", true, "Unordered").
    // 29. b. ii. Perform SetValueInBuffer(targetBuffer, targetByteIndex, "Uint8", value, true, "Unordered").
    // 29. b. iii. Increase srcByteIndex by 1.
    // 29. b. iv. Increase targetByteIndex by 1.
// 30. Else,
  // 30. a. Repeat, while targetByteIndex < limit
    // 30. a. i. Let value be GetValueFromBuffer(srcBuffer, srcByteIndex, srcType, true, "Unordered").
    // 30. a. ii. Perform SetValueInBuffer(targetBuffer, targetByteIndex, targetType, value, true, "Unordered").
    // 30. a. iii. Set srcByteIndex to srcByteIndex + srcElementSize.
    // 30. a. iv. Set targetByteIndex to targetByteIndex + targetElementSize.
// 31. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-%typedarray%.prototype.slice

// 1. Let O be the this value.
// 2. Perform ? ValidateTypedArray(O).
// 3. Let len be O.[[ArrayLength]].
// 4. Let relativeStart be ? ToInteger(start).
// 5. If relativeStart < 0, let k be max((len + relativeStart), 0); else let k be min(relativeStart, len).
// 6. If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToInteger(end).
// 7. If relativeEnd < 0, let final be max((len + relativeEnd), 0); else let final be min(relativeEnd, len).
// 8. Let count be max(final - k, 0).
// 9. Let A be ? TypedArraySpeciesCreate(O, « count »).
// 10. Let srcName be the String value of O.[[TypedArrayName]].
// 11. Let srcType be the String value of the Element Type value in Table 59 for srcName.
// 12. Let targetName be the String value of A.[[TypedArrayName]].
// 13. Let targetType be the String value of the Element Type value in Table 59 for targetName.
// 14. If SameValue(srcType, targetType) is false, then
  // 14. a. Let n be 0.
  // 14. b. Repeat, while k < final
    // 14. b. i. Let Pk be ! ToString(k).
    // 14. b. ii. Let kValue be ? Get(O, Pk).
    // 14. b. iii. Perform ! Set(A, ! ToString(n), kValue, true).
    // 14. b. iv. Increase k by 1.
    // 14. b. v. Increase n by 1.
// 15. Else if count > 0, then
  // 15. a. Let srcBuffer be O.[[ViewedArrayBuffer]].
  // 15. b. If IsDetachedBuffer(srcBuffer) is true, throw a TypeError exception.
  // 15. c. Let targetBuffer be A.[[ViewedArrayBuffer]].
  // 15. d. Let elementSize be the Number value of the Element Size value specified in Table 59 for srcType.
  // 15. e. NOTE: If srcType and targetType are the same, the transfer must be performed in a manner that preserves the bit-level encoding of the source data.
  // 15. f. Let srcByteOffet be O.[[ByteOffset]].
  // 15. g. Let targetByteIndex be A.[[ByteOffset]].
  // 15. h. Let srcByteIndex be (k × elementSize) + srcByteOffet.
  // 15. i. Let limit be targetByteIndex + count × elementSize.
  // 15. j. Repeat, while targetByteIndex < limit
    // 15. j. i. Let value be GetValueFromBuffer(srcBuffer, srcByteIndex, "Uint8", true, "Unordered").
    // 15. j. ii. Perform SetValueInBuffer(targetBuffer, targetByteIndex, "Uint8", value, true, "Unordered").
    // 15. j. iii. Increase srcByteIndex by 1.
    // 15. j. iv. Increase targetByteIndex by 1.
// 16. Return A.


// http://www.ecma-international.org/ecma-262/#sec-%typedarray%.prototype.sort

// 1. If comparefn is not undefined and IsCallable(comparefn) is false, throw a TypeError exception.
// 2. Let obj be the this value.
// 3. Let buffer be ? ValidateTypedArray(obj).
// 4. Let len be obj.[[ArrayLength]].

// 1. Assert: Both Type(x) and Type(y) is Number.
// 2. If comparefn is not undefined, then
  // 2. a. Let v be ? ToNumber(? Call(comparefn, undefined, « x, y »)).
  // 2. b. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
  // 2. c. If v is NaN, return +0.
  // 2. d. Return v.
// 3. If x and y are both NaN, return +0.
// 4. If x is NaN, return 1.
// 5. If y is NaN, return -1.
// 6. If x < y, return -1.
// 7. If x > y, return 1.
// 8. If x is -0 and y is +0, return -1.
// 9. If x is +0 and y is -0, return 1.
// 10. Return +0.


// http://www.ecma-international.org/ecma-262/#sec-%typedarray%.prototype.subarray

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If O does not have a [[TypedArrayName]] internal slot, throw a TypeError exception.
// 4. Assert: O has a [[ViewedArrayBuffer]] internal slot.
// 5. Let buffer be O.[[ViewedArrayBuffer]].
// 6. Let srcLength be O.[[ArrayLength]].
// 7. Let relativeBegin be ? ToInteger(begin).
// 8. If relativeBegin < 0, let beginIndex be max((srcLength + relativeBegin), 0); else let beginIndex be min(relativeBegin, srcLength).
// 9. If end is undefined, let relativeEnd be srcLength; else, let relativeEnd be ? ToInteger(end).
// 10. If relativeEnd < 0, let endIndex be max((srcLength + relativeEnd), 0); else let endIndex be min(relativeEnd, srcLength).
// 11. Let newLength be max(endIndex - beginIndex, 0).
// 12. Let constructorName be the String value of O.[[TypedArrayName]].
// 13. Let elementSize be the Number value of the Element Size value specified in Table 59 for constructorName.
// 14. Let srcByteOffset be O.[[ByteOffset]].
// 15. Let beginByteOffset be srcByteOffset + beginIndex × elementSize.
// 16. Let argumentsList be « buffer, beginByteOffset, newLength ».
// 17. Return ? TypedArraySpeciesCreate(O, argumentsList).


// http://www.ecma-international.org/ecma-262/#sec-%typedarray%.prototype.values

// 1. Let O be the this value.
// 2. Perform ? ValidateTypedArray(O).
// 3. Return CreateArrayIterator(O, "value").


// http://www.ecma-international.org/ecma-262/#sec-get-%typedarray%.prototype-@@tostringtag

// 1. Let O be the this value.
// 2. If Type(O) is not Object, return undefined.
// 3. If O does not have a [[TypedArrayName]] internal slot, return undefined.
// 4. Let name be O.[[TypedArrayName]].
// 5. Assert: Type(name) is String.
// 6. Return name.


// http://www.ecma-international.org/ecma-262/#sec-typedarray

// 1. If NewTarget is undefined, throw a TypeError exception.
// 2. Let constructorName be the String value of the Constructor Name value specified in Table 59 for this TypedArray constructor.
// 3. Return ? AllocateTypedArray(constructorName, NewTarget, "%TypedArrayPrototype%", 0).


// http://www.ecma-international.org/ecma-262/#sec-typedarray-length

// 1. Assert: Type(length) is not Object.
// 2. If NewTarget is undefined, throw a TypeError exception.
// 3. Let elementLength be ? ToIndex(length).
// 4. Let constructorName be the String value of the Constructor Name value specified in Table 59 for this TypedArray constructor.
// 5. Return ? AllocateTypedArray(constructorName, NewTarget, "%TypedArrayPrototype%", elementLength).


// http://www.ecma-international.org/ecma-262/#sec-allocatetypedarray

// 1. Let proto be ? GetPrototypeFromConstructor(newTarget, defaultProto).
// 2. Let obj be IntegerIndexedObjectCreate(proto, « [[ViewedArrayBuffer]], [[TypedArrayName]], [[ByteLength]], [[ByteOffset]], [[ArrayLength]] »).
// 3. Assert: obj.[[ViewedArrayBuffer]] is undefined.
// 4. Set obj.[[TypedArrayName]] to constructorName.
// 5. If length is not present, then
  // 5. a. Set obj.[[ByteLength]] to 0.
  // 5. b. Set obj.[[ByteOffset]] to 0.
  // 5. c. Set obj.[[ArrayLength]] to 0.
// 6. Else,
  // 6. a. Perform ? AllocateTypedArrayBuffer(obj, length).
// 7. Return obj.


// http://www.ecma-international.org/ecma-262/#sec-allocatetypedarraybuffer

// 1. Assert: O is an Object that has a [[ViewedArrayBuffer]] internal slot.
// 2. Assert: O.[[ViewedArrayBuffer]] is undefined.
// 3. Assert: length ≥ 0.
// 4. Let constructorName be the String value of O.[[TypedArrayName]].
// 5. Let elementSize be the Element Size value in Table 59 for constructorName.
// 6. Let byteLength be elementSize × length.
// 7. Let data be ? AllocateArrayBuffer(%ArrayBuffer%, byteLength).
// 8. Set O.[[ViewedArrayBuffer]] to data.
// 9. Set O.[[ByteLength]] to byteLength.
// 10. Set O.[[ByteOffset]] to 0.
// 11. Set O.[[ArrayLength]] to length.
// 12. Return O.


// http://www.ecma-international.org/ecma-262/#sec-typedarray-typedarray

// 1. Assert: Type(typedArray) is Object and typedArray has a [[TypedArrayName]] internal slot.
// 2. If NewTarget is undefined, throw a TypeError exception.
// 3. Let constructorName be the String value of the Constructor Name value specified in Table 59 for this TypedArray constructor.
// 4. Let O be ? AllocateTypedArray(constructorName, NewTarget, "%TypedArrayPrototype%").
// 5. Let srcArray be typedArray.
// 6. Let srcData be srcArray.[[ViewedArrayBuffer]].
// 7. If IsDetachedBuffer(srcData) is true, throw a TypeError exception.
// 8. Let elementType be the String value of the Element Type value in Table 59 for constructorName.
// 9. Let elementLength be srcArray.[[ArrayLength]].
// 10. Let srcName be the String value of srcArray.[[TypedArrayName]].
// 11. Let srcType be the String value of the Element Type value in Table 59 for srcName.
// 12. Let srcElementSize be the Element Size value in Table 59 for srcName.
// 13. Let srcByteOffset be srcArray.[[ByteOffset]].
// 14. Let elementSize be the Element Size value in Table 59 for constructorName.
// 15. Let byteLength be elementSize × elementLength.
// 16. If IsSharedArrayBuffer(srcData) is false, then
  // 16. a. Let bufferConstructor be ? SpeciesConstructor(srcData, %ArrayBuffer%).
// 17. Else,
  // 17. a. Let bufferConstructor be %ArrayBuffer%.
// 18. If SameValue(elementType, srcType) is true, then
  // 18. a. Let data be ? CloneArrayBuffer(srcData, srcByteOffset, byteLength, bufferConstructor).
// 19. Else,
  // 19. a. Let data be ? AllocateArrayBuffer(bufferConstructor, byteLength).
  // 19. b. If IsDetachedBuffer(srcData) is true, throw a TypeError exception.
  // 19. c. Let srcByteIndex be srcByteOffset.
  // 19. d. Let targetByteIndex be 0.
  // 19. e. Let count be elementLength.
  // 19. f. Repeat, while count > 0
    // 19. f. i. Let value be GetValueFromBuffer(srcData, srcByteIndex, srcType, true, "Unordered").
    // 19. f. ii. Perform SetValueInBuffer(data, targetByteIndex, elementType, value, true, "Unordered").
    // 19. f. iii. Set srcByteIndex to srcByteIndex + srcElementSize.
    // 19. f. iv. Set targetByteIndex to targetByteIndex + elementSize.
    // 19. f. v. Decrement count by 1.
// 20. Set O.[[ViewedArrayBuffer]] to data.
// 21. Set O.[[ByteLength]] to byteLength.
// 22. Set O.[[ByteOffset]] to 0.
// 23. Set O.[[ArrayLength]] to elementLength.
// 24. Return O.


// http://www.ecma-international.org/ecma-262/#sec-typedarray-object

// 1. Assert: Type(object) is Object and object does not have either a [[TypedArrayName]] or an [[ArrayBufferData]] internal slot.
// 2. If NewTarget is undefined, throw a TypeError exception.
// 3. Let constructorName be the String value of the Constructor Name value specified in Table 59 for this TypedArray constructor.
// 4. Let O be ? AllocateTypedArray(constructorName, NewTarget, "%TypedArrayPrototype%").
// 5. Let usingIterator be ? GetMethod(object, @@iterator).
// 6. If usingIterator is not undefined, then
  // 6. a. Let values be ? IterableToList(object, usingIterator).
  // 6. b. Let len be the number of elements in values.
  // 6. c. Perform ? AllocateTypedArrayBuffer(O, len).
  // 6. d. Let k be 0.
  // 6. e. Repeat, while k < len
    // 6. e. i. Let Pk be ! ToString(k).
    // 6. e. ii. Let kValue be the first element of values and remove that element from values.
    // 6. e. iii. Perform ? Set(O, Pk, kValue, true).
    // 6. e. iv. Increase k by 1.
  // 6. f. Assert: values is now an empty List.
  // 6. g. Return O.
// 7. NOTE: object is not an Iterable so assume it is already an array-like object.
// 8. Let arrayLike be object.
// 9. Let len be ? ToLength(? Get(arrayLike, "length")).
// 10. Perform ? AllocateTypedArrayBuffer(O, len).
// 11. Let k be 0.
// 12. Repeat, while k < len
  // 12. a. Let Pk be ! ToString(k).
  // 12. b. Let kValue be ? Get(arrayLike, Pk).
  // 12. c. Perform ? Set(O, Pk, kValue, true).
  // 12. d. Increase k by 1.
// 13. Return O.


// http://www.ecma-international.org/ecma-262/#sec-typedarray-buffer-byteoffset-length

// 1. Assert: Type(buffer) is Object and buffer has an [[ArrayBufferData]] internal slot.
// 2. If NewTarget is undefined, throw a TypeError exception.
// 3. Let constructorName be the String value of the Constructor Name value specified in Table 59 for this TypedArray constructor.
// 4. Let O be ? AllocateTypedArray(constructorName, NewTarget, "%TypedArrayPrototype%").
// 5. Let elementSize be the Number value of the Element Size value in Table 59 for constructorName.
// 6. Let offset be ? ToIndex(byteOffset).
// 7. If offset modulo elementSize ≠ 0, throw a RangeError exception.
// 8. If length is present and length is not undefined, then
  // 8. a. Let newLength be ? ToIndex(length).
// 9. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
// 10. Let bufferByteLength be buffer.[[ArrayBufferByteLength]].
// 11. If length is either not present or undefined, then
  // 11. a. If bufferByteLength modulo elementSize ≠ 0, throw a RangeError exception.
  // 11. b. Let newByteLength be bufferByteLength - offset.
  // 11. c. If newByteLength < 0, throw a RangeError exception.
// 12. Else,
  // 12. a. Let newByteLength be newLength × elementSize.
  // 12. b. If offset + newByteLength > bufferByteLength, throw a RangeError exception.
// 13. Set O.[[ViewedArrayBuffer]] to buffer.
// 14. Set O.[[ByteLength]] to newByteLength.
// 15. Set O.[[ByteOffset]] to offset.
// 16. Set O.[[ArrayLength]] to newByteLength / elementSize.
// 17. Return O.


// http://www.ecma-international.org/ecma-262/#typedarray-create

// 1. Let newTypedArray be ? Construct(constructor, argumentList).
// 2. Perform ? ValidateTypedArray(newTypedArray).
// 3. If argumentList is a List of a single Number, then
  // 3. a. If newTypedArray.[[ArrayLength]] < argumentList[0], throw a TypeError exception.
// 4. Return newTypedArray.


// http://www.ecma-international.org/ecma-262/#typedarray-species-create

// 1. Assert: exemplar is an Object that has a [[TypedArrayName]] internal slot.
// 2. Let defaultConstructor be the intrinsic object listed in column one of Table 59 for exemplar.[[TypedArrayName]].
// 3. Let constructor be ? SpeciesConstructor(exemplar, defaultConstructor).
// 4. Return ? TypedArrayCreate(constructor, argumentList).


// http://www.ecma-international.org/ecma-262/#sec-map-iterable

// 1. If NewTarget is undefined, throw a TypeError exception.
// 2. Let map be ? OrdinaryCreateFromConstructor(NewTarget, "%MapPrototype%", « [[MapData]] »).
// 3. Set map.[[MapData]] to a new empty List.
// 4. If iterable is not present, or is either undefined or null, return map.
// 5. Let adder be ? Get(map, "set").
// 6. Return ? AddEntriesFromIterable(map, iterable, adder).


// http://www.ecma-international.org/ecma-262/#sec-add-entries-from-iterable

// 1. If IsCallable(adder) is false, throw a TypeError exception.
// 2. Assert: iterable is present, and is neither undefined nor null.
// 3. Let iteratorRecord be ? GetIterator(iterable).
// 4. Repeat,
  // 4. a. Let next be ? IteratorStep(iteratorRecord).
  // 4. b. If next is false, return target.
  // 4. c. Let nextItem be ? IteratorValue(next).
  // 4. d. If Type(nextItem) is not Object, then
    // 4. d. i. Let error be ThrowCompletion(a newly created TypeError object).
    // 4. d. ii. Return ? IteratorClose(iteratorRecord, error).
  // 4. e. Let k be Get(nextItem, "0").
  // 4. f. If k is an abrupt completion, return ? IteratorClose(iteratorRecord, k).
  // 4. g. Let v be Get(nextItem, "1").
  // 4. h. If v is an abrupt completion, return ? IteratorClose(iteratorRecord, v).
  // 4. i. Let status be Call(adder, target, « k.[[Value]], v.[[Value]] »).
  // 4. j. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).


// http://www.ecma-international.org/ecma-262/#sec-get-map-@@species

// 1. Return the this value.


// http://www.ecma-international.org/ecma-262/#sec-map.prototype.clear

// 1. Let M be the this value.
// 2. If Type(M) is not Object, throw a TypeError exception.
// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
// 4. Let entries be the List that is M.[[MapData]].
// 5. For each Record { [[Key]], [[Value]] } p that is an element of entries, do
  // 5. a. Set p.[[Key]] to empty.
  // 5. b. Set p.[[Value]] to empty.
// 6. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-map.prototype.delete

// 1. Let M be the this value.
// 2. If Type(M) is not Object, throw a TypeError exception.
// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
// 4. Let entries be the List that is M.[[MapData]].
// 5. For each Record { [[Key]], [[Value]] } p that is an element of entries, do
  // 5. a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, then
    // 5. a. i. Set p.[[Key]] to empty.
    // 5. a. ii. Set p.[[Value]] to empty.
    // 5. a. iii. Return true.
// 6. Return false.


// http://www.ecma-international.org/ecma-262/#sec-map.prototype.entries

// 1. Let M be the this value.
// 2. Return ? CreateMapIterator(M, "key+value").


// http://www.ecma-international.org/ecma-262/#sec-map.prototype.foreach

// 1. Let M be the this value.
// 2. If Type(M) is not Object, throw a TypeError exception.
// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
// 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
// 5. If thisArg is present, let T be thisArg; else let T be undefined.
// 6. Let entries be the List that is M.[[MapData]].
// 7. For each Record { [[Key]], [[Value]] } e that is an element of entries, in original key insertion order, do
  // 7. a. If e.[[Key]] is not empty, then
    // 7. a. i. Perform ? Call(callbackfn, T, « e.[[Value]], e.[[Key]], M »).
// 8. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-map.prototype.get

// 1. Let M be the this value.
// 2. If Type(M) is not Object, throw a TypeError exception.
// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
// 4. Let entries be the List that is M.[[MapData]].
// 5. For each Record { [[Key]], [[Value]] } p that is an element of entries, do
  // 5. a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, return p.[[Value]].
// 6. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-map.prototype.has

// 1. Let M be the this value.
// 2. If Type(M) is not Object, throw a TypeError exception.
// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
// 4. Let entries be the List that is M.[[MapData]].
// 5. For each Record { [[Key]], [[Value]] } p that is an element of entries, do
  // 5. a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, return true.
// 6. Return false.


// http://www.ecma-international.org/ecma-262/#sec-map.prototype.keys

// 1. Let M be the this value.
// 2. Return ? CreateMapIterator(M, "key").


// http://www.ecma-international.org/ecma-262/#sec-map.prototype.set

// 1. Let M be the this value.
// 2. If Type(M) is not Object, throw a TypeError exception.
// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
// 4. Let entries be the List that is M.[[MapData]].
// 5. For each Record { [[Key]], [[Value]] } p that is an element of entries, do
  // 5. a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, then
    // 5. a. i. Set p.[[Value]] to value.
    // 5. a. ii. Return M.
// 6. If key is -0, set key to +0.
// 7. Let p be the Record { [[Key]]: key, [[Value]]: value }.
// 8. Append p as the last element of entries.
// 9. Return M.


// http://www.ecma-international.org/ecma-262/#sec-get-map.prototype.size

// 1. Let M be the this value.
// 2. If Type(M) is not Object, throw a TypeError exception.
// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
// 4. Let entries be the List that is M.[[MapData]].
// 5. Let count be 0.
// 6. For each Record { [[Key]], [[Value]] } p that is an element of entries, do
  // 6. a. If p.[[Key]] is not empty, increase count by 1.
// 7. Return count.


// http://www.ecma-international.org/ecma-262/#sec-map.prototype.values

// 1. Let M be the this value.
// 2. Return ? CreateMapIterator(M, "value").


// http://www.ecma-international.org/ecma-262/#sec-createmapiterator

// 1. If Type(map) is not Object, throw a TypeError exception.
// 2. If map does not have a [[MapData]] internal slot, throw a TypeError exception.
// 3. Let iterator be ObjectCreate(%MapIteratorPrototype%, « [[Map]], [[MapNextIndex]], [[MapIterationKind]] »).
// 4. Set iterator.[[Map]] to map.
// 5. Set iterator.[[MapNextIndex]] to 0.
// 6. Set iterator.[[MapIterationKind]] to kind.
// 7. Return iterator.


// http://www.ecma-international.org/ecma-262/#sec-%mapiteratorprototype%.next

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If O does not have all of the internal slots of a Map Iterator Instance (23.1.5.3), throw a TypeError exception.
// 4. Let m be O.[[Map]].
// 5. Let index be O.[[MapNextIndex]].
// 6. Let itemKind be O.[[MapIterationKind]].
// 7. If m is undefined, return CreateIterResultObject(undefined, true).
// 8. Assert: m has a [[MapData]] internal slot.
// 9. Let entries be the List that is m.[[MapData]].
// 10. Let numEntries be the number of elements of entries.
// 11. NOTE: numEntries must be redetermined each time this method is evaluated.
// 12. Repeat, while index is less than numEntries,
  // 12. a. Let e be the Record { [[Key]], [[Value]] } that is the value of entries[index].
  // 12. b. Increase index by 1.
  // 12. c. Set O.[[MapNextIndex]] to index.
  // 12. d. If e.[[Key]] is not empty, then
    // 12. d. i. If itemKind is "key", let result be e.[[Key]].
    // 12. d. ii. Else if itemKind is "value", let result be e.[[Value]].
    // 12. d. iii. Else,
      // 12. d. iii. 1. Assert: itemKind is "key+value".
      // 12. d. iii. 2. Let result be CreateArrayFromList(« e.[[Key]], e.[[Value]] »).
    // 12. d. iv. Return CreateIterResultObject(result, false).
// 13. Set O.[[Map]] to undefined.
// 14. Return CreateIterResultObject(undefined, true).


// http://www.ecma-international.org/ecma-262/#sec-set-iterable

// 1. If NewTarget is undefined, throw a TypeError exception.
// 2. Let set be ? OrdinaryCreateFromConstructor(NewTarget, "%SetPrototype%", « [[SetData]] »).
// 3. Set set.[[SetData]] to a new empty List.
// 4. If iterable is not present, set iterable to undefined.
// 5. If iterable is either undefined or null, return set.
// 6. Let adder be ? Get(set, "add").
// 7. If IsCallable(adder) is false, throw a TypeError exception.
// 8. Let iteratorRecord be ? GetIterator(iterable).
// 9. Repeat,
  // 9. a. Let next be ? IteratorStep(iteratorRecord).
  // 9. b. If next is false, return set.
  // 9. c. Let nextValue be ? IteratorValue(next).
  // 9. d. Let status be Call(adder, set, « nextValue »).
  // 9. e. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).


// http://www.ecma-international.org/ecma-262/#sec-get-set-@@species

// 1. Return the this value.


// http://www.ecma-international.org/ecma-262/#sec-set.prototype.add

// 1. Let S be the this value.
// 2. If Type(S) is not Object, throw a TypeError exception.
// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
// 4. Let entries be the List that is S.[[SetData]].
// 5. For each e that is an element of entries, do
  // 5. a. If e is not empty and SameValueZero(e, value) is true, then
    // 5. a. i. Return S.
// 6. If value is -0, set value to +0.
// 7. Append value as the last element of entries.
// 8. Return S.


// http://www.ecma-international.org/ecma-262/#sec-set.prototype.clear

// 1. Let S be the this value.
// 2. If Type(S) is not Object, throw a TypeError exception.
// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
// 4. Let entries be the List that is S.[[SetData]].
// 5. For each e that is an element of entries, do
  // 5. a. Replace the element of entries whose value is e with an element whose value is empty.
// 6. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-set.prototype.delete

// 1. Let S be the this value.
// 2. If Type(S) is not Object, throw a TypeError exception.
// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
// 4. Let entries be the List that is S.[[SetData]].
// 5. For each e that is an element of entries, do
  // 5. a. If e is not empty and SameValueZero(e, value) is true, then
    // 5. a. i. Replace the element of entries whose value is e with an element whose value is empty.
    // 5. a. ii. Return true.
// 6. Return false.


// http://www.ecma-international.org/ecma-262/#sec-set.prototype.entries

// 1. Let S be the this value.
// 2. Return ? CreateSetIterator(S, "key+value").


// http://www.ecma-international.org/ecma-262/#sec-set.prototype.foreach

// 1. Let S be the this value.
// 2. If Type(S) is not Object, throw a TypeError exception.
// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
// 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
// 5. If thisArg is present, let T be thisArg; else let T be undefined.
// 6. Let entries be the List that is S.[[SetData]].
// 7. For each e that is an element of entries, in original insertion order, do
  // 7. a. If e is not empty, then
    // 7. a. i. Perform ? Call(callbackfn, T, « e, e, S »).
// 8. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-set.prototype.has

// 1. Let S be the this value.
// 2. If Type(S) is not Object, throw a TypeError exception.
// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
// 4. Let entries be the List that is S.[[SetData]].
// 5. For each e that is an element of entries, do
  // 5. a. If e is not empty and SameValueZero(e, value) is true, return true.
// 6. Return false.


// http://www.ecma-international.org/ecma-262/#sec-get-set.prototype.size

// 1. Let S be the this value.
// 2. If Type(S) is not Object, throw a TypeError exception.
// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
// 4. Let entries be the List that is S.[[SetData]].
// 5. Let count be 0.
// 6. For each e that is an element of entries, do
  // 6. a. If e is not empty, increase count by 1.
// 7. Return count.


// http://www.ecma-international.org/ecma-262/#sec-set.prototype.values

// 1. Let S be the this value.
// 2. Return ? CreateSetIterator(S, "value").


// http://www.ecma-international.org/ecma-262/#sec-createsetiterator

// 1. If Type(set) is not Object, throw a TypeError exception.
// 2. If set does not have a [[SetData]] internal slot, throw a TypeError exception.
// 3. Let iterator be ObjectCreate(%SetIteratorPrototype%, « [[IteratedSet]], [[SetNextIndex]], [[SetIterationKind]] »).
// 4. Set iterator.[[IteratedSet]] to set.
// 5. Set iterator.[[SetNextIndex]] to 0.
// 6. Set iterator.[[SetIterationKind]] to kind.
// 7. Return iterator.


// http://www.ecma-international.org/ecma-262/#sec-%setiteratorprototype%.next

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If O does not have all of the internal slots of a Set Iterator Instance (23.2.5.3), throw a TypeError exception.
// 4. Let s be O.[[IteratedSet]].
// 5. Let index be O.[[SetNextIndex]].
// 6. Let itemKind be O.[[SetIterationKind]].
// 7. If s is undefined, return CreateIterResultObject(undefined, true).
// 8. Assert: s has a [[SetData]] internal slot.
// 9. Let entries be the List that is s.[[SetData]].
// 10. Let numEntries be the number of elements of entries.
// 11. NOTE: numEntries must be redetermined each time this method is evaluated.
// 12. Repeat, while index is less than numEntries,
  // 12. a. Let e be entries[index].
  // 12. b. Increase index by 1.
  // 12. c. Set O.[[SetNextIndex]] to index.
  // 12. d. If e is not empty, then
    // 12. d. i. If itemKind is "key+value", then
      // 12. d. i. 1. Return CreateIterResultObject(CreateArrayFromList(« e, e »), false).
    // 12. d. ii. Return CreateIterResultObject(e, false).
// 13. Set O.[[IteratedSet]] to undefined.
// 14. Return CreateIterResultObject(undefined, true).


// http://www.ecma-international.org/ecma-262/#sec-weakmap-iterable

// 1. If NewTarget is undefined, throw a TypeError exception.
// 2. Let map be ? OrdinaryCreateFromConstructor(NewTarget, "%WeakMapPrototype%", « [[WeakMapData]] »).
// 3. Set map.[[WeakMapData]] to a new empty List.
// 4. If iterable is not present, or is either undefined or null, return map.
// 5. Let adder be ? Get(map, "set").
// 6. Return ? AddEntriesFromIterable(map, iterable, adder).


// http://www.ecma-international.org/ecma-262/#sec-weakmap.prototype.delete

// 1. Let M be the this value.
// 2. If Type(M) is not Object, throw a TypeError exception.
// 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
// 4. Let entries be the List that is M.[[WeakMapData]].
// 5. If Type(key) is not Object, return false.
// 6. For each Record { [[Key]], [[Value]] } p that is an element of entries, do
  // 6. a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, then
    // 6. a. i. Set p.[[Key]] to empty.
    // 6. a. ii. Set p.[[Value]] to empty.
    // 6. a. iii. Return true.
// 7. Return false.


// http://www.ecma-international.org/ecma-262/#sec-weakmap.prototype.get

// 1. Let M be the this value.
// 2. If Type(M) is not Object, throw a TypeError exception.
// 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
// 4. Let entries be the List that is M.[[WeakMapData]].
// 5. If Type(key) is not Object, return undefined.
// 6. For each Record { [[Key]], [[Value]] } p that is an element of entries, do
  // 6. a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, return p.[[Value]].
// 7. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-weakmap.prototype.has

// 1. Let M be the this value.
// 2. If Type(M) is not Object, throw a TypeError exception.
// 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
// 4. Let entries be the List that is M.[[WeakMapData]].
// 5. If Type(key) is not Object, return false.
// 6. For each Record { [[Key]], [[Value]] } p that is an element of entries, do
  // 6. a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, return true.
// 7. Return false.


// http://www.ecma-international.org/ecma-262/#sec-weakmap.prototype.set

// 1. Let M be the this value.
// 2. If Type(M) is not Object, throw a TypeError exception.
// 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
// 4. Let entries be the List that is M.[[WeakMapData]].
// 5. If Type(key) is not Object, throw a TypeError exception.
// 6. For each Record { [[Key]], [[Value]] } p that is an element of entries, do
  // 6. a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, then
    // 6. a. i. Set p.[[Value]] to value.
    // 6. a. ii. Return M.
// 7. Let p be the Record { [[Key]]: key, [[Value]]: value }.
// 8. Append p as the last element of entries.
// 9. Return M.


// http://www.ecma-international.org/ecma-262/#sec-weakset-iterable

// 1. If NewTarget is undefined, throw a TypeError exception.
// 2. Let set be ? OrdinaryCreateFromConstructor(NewTarget, "%WeakSetPrototype%", « [[WeakSetData]] »).
// 3. Set set.[[WeakSetData]] to a new empty List.
// 4. If iterable is not present, set iterable to undefined.
// 5. If iterable is either undefined or null, return set.
// 6. Let adder be ? Get(set, "add").
// 7. If IsCallable(adder) is false, throw a TypeError exception.
// 8. Let iteratorRecord be ? GetIterator(iterable).
// 9. Repeat,
  // 9. a. Let next be ? IteratorStep(iteratorRecord).
  // 9. b. If next is false, return set.
  // 9. c. Let nextValue be ? IteratorValue(next).
  // 9. d. Let status be Call(adder, set, « nextValue »).
  // 9. e. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).


// http://www.ecma-international.org/ecma-262/#sec-weakset.prototype.add

// 1. Let S be the this value.
// 2. If Type(S) is not Object, throw a TypeError exception.
// 3. If S does not have a [[WeakSetData]] internal slot, throw a TypeError exception.
// 4. If Type(value) is not Object, throw a TypeError exception.
// 5. Let entries be the List that is S.[[WeakSetData]].
// 6. For each e that is an element of entries, do
  // 6. a. If e is not empty and SameValue(e, value) is true, then
    // 6. a. i. Return S.
// 7. Append value as the last element of entries.
// 8. Return S.


// http://www.ecma-international.org/ecma-262/#sec-weakset.prototype.delete

// 1. Let S be the this value.
// 2. If Type(S) is not Object, throw a TypeError exception.
// 3. If S does not have a [[WeakSetData]] internal slot, throw a TypeError exception.
// 4. If Type(value) is not Object, return false.
// 5. Let entries be the List that is S.[[WeakSetData]].
// 6. For each e that is an element of entries, do
  // 6. a. If e is not empty and SameValue(e, value) is true, then
    // 6. a. i. Replace the element of entries whose value is e with an element whose value is empty.
    // 6. a. ii. Return true.
// 7. Return false.


// http://www.ecma-international.org/ecma-262/#sec-weakset.prototype.has

// 1. Let S be the this value.
// 2. If Type(S) is not Object, throw a TypeError exception.
// 3. If S does not have a [[WeakSetData]] internal slot, throw a TypeError exception.
// 4. Let entries be the List that is S.[[WeakSetData]].
// 5. If Type(value) is not Object, return false.
// 6. For each e that is an element of entries, do
  // 6. a. If e is not empty and SameValue(e, value) is true, return true.
// 7. Return false.


// http://www.ecma-international.org/ecma-262/#sec-allocatearraybuffer

// 1. Let obj be ? OrdinaryCreateFromConstructor(constructor, "%ArrayBufferPrototype%", « [[ArrayBufferData]], [[ArrayBufferByteLength]], [[ArrayBufferDetachKey]] »).
// 2. Assert: byteLength is an integer value ≥ 0.
// 3. Let block be ? CreateByteDataBlock(byteLength).
// 4. Set obj.[[ArrayBufferData]] to block.
// 5. Set obj.[[ArrayBufferByteLength]] to byteLength.
// 6. Return obj.


// http://www.ecma-international.org/ecma-262/#sec-isdetachedbuffer

// 1. Assert: Type(arrayBuffer) is Object and it has an [[ArrayBufferData]] internal slot.
// 2. If arrayBuffer.[[ArrayBufferData]] is null, return true.
// 3. Return false.


// http://www.ecma-international.org/ecma-262/#sec-detacharraybuffer

// 1. Assert: Type(arrayBuffer) is Object and it has [[ArrayBufferData]], [[ArrayBufferByteLength]], and [[ArrayBufferDetachKey]] internal slots.
// 2. Assert: IsSharedArrayBuffer(arrayBuffer) is false.
// 3. If key is not present, set key to undefined.
// 4. If SameValue(arrayBuffer.[[ArrayBufferDetachKey]], key) is false, throw a TypeError exception.
// 5. Set arrayBuffer.[[ArrayBufferData]] to null.
// 6. Set arrayBuffer.[[ArrayBufferByteLength]] to 0.
// 7. Return NormalCompletion(null).


// http://www.ecma-international.org/ecma-262/#sec-clonearraybuffer

// 1. Assert: Type(srcBuffer) is Object and it has an [[ArrayBufferData]] internal slot.
// 2. Assert: IsConstructor(cloneConstructor) is true.
// 3. Let targetBuffer be ? AllocateArrayBuffer(cloneConstructor, srcLength).
// 4. If IsDetachedBuffer(srcBuffer) is true, throw a TypeError exception.
// 5. Let srcBlock be srcBuffer.[[ArrayBufferData]].
// 6. Let targetBlock be targetBuffer.[[ArrayBufferData]].
// 7. Perform CopyDataBlockBytes(targetBlock, 0, srcBlock, srcByteOffset, srcLength).
// 8. Return targetBuffer.


// http://www.ecma-international.org/ecma-262/#sec-rawbytestonumber

// 1. Let elementSize be the Number value of the Element Size value specified in Table 59 for Element Type type.
// 2. If isLittleEndian is false, reverse the order of the elements of rawBytes.
// 3. If type is "Float32", then
  // 3. a. Let value be the byte elements of rawBytes concatenated and interpreted as a little-endian bit string encoding of an IEEE 754-2008 binary32 value.
  // 3. b. If value is an IEEE 754-2008 binary32 NaN value, return the NaN Number value.
  // 3. c. Return the Number value that corresponds to value.
// 4. If type is "Float64", then
  // 4. a. Let value be the byte elements of rawBytes concatenated and interpreted as a little-endian bit string encoding of an IEEE 754-2008 binary64 value.
  // 4. b. If value is an IEEE 754-2008 binary64 NaN value, return the NaN Number value.
  // 4. c. Return the Number value that corresponds to value.
// 5. If the first code unit of type is the code unit 0x0055 (LATIN CAPITAL LETTER U), then
  // 5. a. Let intValue be the byte elements of rawBytes concatenated and interpreted as a bit string encoding of an unsigned little-endian binary number.
// 6. Else,
  // 6. a. Let intValue be the byte elements of rawBytes concatenated and interpreted as a bit string encoding of a binary little-endian 2's complement number of bit length elementSize × 8.
// 7. Return the Number value that corresponds to intValue.


// http://www.ecma-international.org/ecma-262/#sec-getvaluefrombuffer

// 1. Assert: IsDetachedBuffer(arrayBuffer) is false.
// 2. Assert: There are sufficient bytes in arrayBuffer starting at byteIndex to represent a value of type.
// 3. Assert: byteIndex is an integer value ≥ 0.
// 4. Let block be arrayBuffer.[[ArrayBufferData]].
// 5. Let elementSize be the Number value of the Element Size value specified in Table 59 for Element Type type.
// 6. If IsSharedArrayBuffer(arrayBuffer) is true, then
  // 6. a. Let execution be the [[CandidateExecution]] field of the surrounding agent's Agent Record.
  // 6. b. Let eventList be the [[EventList]] field of the element in execution.[[EventsRecords]] whose [[AgentSignifier]] is AgentSignifier().
  // 6. c. If isTypedArray is true and type is "Int8", "Uint8", "Int16", "Uint16", "Int32", or "Uint32", let noTear be true; otherwise let noTear be false.
  // 6. d. Let rawValue be a List of length elementSize of nondeterministically chosen byte values.
  // 6. e. NOTE: In implementations, rawValue is the result of a non-atomic or atomic read instruction on the underlying hardware. The nondeterminism is a semantic prescription of the memory model to describe observable behaviour of hardware with weak consistency.
  // 6. f. Let readEvent be ReadSharedMemory { [[Order]]: order, [[NoTear]]: noTear, [[Block]]: block, [[ByteIndex]]: byteIndex, [[ElementSize]]: elementSize }.
  // 6. g. Append readEvent to eventList.
  // 6. h. Append Chosen Value Record { [[Event]]: readEvent, [[ChosenValue]]: rawValue } to execution.[[ChosenValues]].
// 7. Else, let rawValue be a List of elementSize containing, in order, the elementSize sequence of bytes starting with block[byteIndex].
// 8. If isLittleEndian is not present, set isLittleEndian to the value of the [[LittleEndian]] field of the surrounding agent's Agent Record.
// 9. Return RawBytesToNumber(type, rawValue, isLittleEndian).


// http://www.ecma-international.org/ecma-262/#sec-numbertorawbytes

// 1. If type is "Float32", then
  // 1. a. Let rawBytes be a List containing the 4 bytes that are the result of converting value to IEEE 754-2008 binary32 format using “Round to nearest, ties to even” rounding mode. If isLittleEndian is false, the bytes are arranged in big endian order. Otherwise, the bytes are arranged in little endian order. If value is NaN, rawBytes may be set to any implementation chosen IEEE 754-2008 binary32 format Not-a-Number encoding. An implementation must always choose the same encoding for each implementation distinguishable NaN value.
// 2. Else if type is "Float64", then
  // 2. a. Let rawBytes be a List containing the 8 bytes that are the IEEE 754-2008 binary64 format encoding of value. If isLittleEndian is false, the bytes are arranged in big endian order. Otherwise, the bytes are arranged in little endian order. If value is NaN, rawBytes may be set to any implementation chosen IEEE 754-2008 binary64 format Not-a-Number encoding. An implementation must always choose the same encoding for each implementation distinguishable NaN value.
// 3. Else,
  // 3. a. Let n be the Number value of the Element Size specified in Table 59 for Element Type type.
  // 3. b. Let convOp be the abstract operation named in the Conversion Operation column in Table 59 for Element Type type.
  // 3. c. Let intValue be convOp(value).
  // 3. d. If intValue ≥ 0, then
    // 3. d. i. Let rawBytes be a List containing the n-byte binary encoding of intValue. If isLittleEndian is false, the bytes are ordered in big endian order. Otherwise, the bytes are ordered in little endian order.
  // 3. e. Else,
    // 3. e. i. Let rawBytes be a List containing the n-byte binary 2's complement encoding of intValue. If isLittleEndian is false, the bytes are ordered in big endian order. Otherwise, the bytes are ordered in little endian order.
// 4. Return rawBytes.


// http://www.ecma-international.org/ecma-262/#sec-setvalueinbuffer

// 1. Assert: IsDetachedBuffer(arrayBuffer) is false.
// 2. Assert: There are sufficient bytes in arrayBuffer starting at byteIndex to represent a value of type.
// 3. Assert: byteIndex is an integer value ≥ 0.
// 4. Assert: Type(value) is Number.
// 5. Let block be arrayBuffer.[[ArrayBufferData]].
// 6. Let elementSize be the Number value of the Element Size value specified in Table 59 for Element Type type.
// 7. If isLittleEndian is not present, set isLittleEndian to the value of the [[LittleEndian]] field of the surrounding agent's Agent Record.
// 8. Let rawBytes be NumberToRawBytes(type, value, isLittleEndian).
// 9. If IsSharedArrayBuffer(arrayBuffer) is true, then
  // 9. a. Let execution be the [[CandidateExecution]] field of the surrounding agent's Agent Record.
  // 9. b. Let eventList be the [[EventList]] field of the element in execution.[[EventsRecords]] whose [[AgentSignifier]] is AgentSignifier().
  // 9. c. If isTypedArray is true and type is "Int8", "Uint8", "Int16", "Uint16", "Int32", or "Uint32", let noTear be true; otherwise let noTear be false.
  // 9. d. Append WriteSharedMemory { [[Order]]: order, [[NoTear]]: noTear, [[Block]]: block, [[ByteIndex]]: byteIndex, [[ElementSize]]: elementSize, [[Payload]]: rawBytes } to eventList.
// 10. Else, store the individual bytes of rawBytes into block, in order, starting at block[byteIndex].
// 11. Return NormalCompletion(undefined).


// http://www.ecma-international.org/ecma-262/#sec-getmodifysetvalueinbuffer

// 1. Assert: IsSharedArrayBuffer(arrayBuffer) is true.
// 2. Assert: There are sufficient bytes in arrayBuffer starting at byteIndex to represent a value of type.
// 3. Assert: byteIndex is an integer value ≥ 0.
// 4. Assert: Type(value) is Number.
// 5. Let block be arrayBuffer.[[ArrayBufferData]].
// 6. Let elementSize be the Number value of the Element Size value specified in Table 59 for Element Type type.
// 7. If isLittleEndian is not present, set isLittleEndian to the value of the [[LittleEndian]] field of the surrounding agent's Agent Record.
// 8. Let rawBytes be NumberToRawBytes(type, value, isLittleEndian).
// 9. Let execution be the [[CandidateExecution]] field of the surrounding agent's Agent Record.
// 10. Let eventList be the [[EventList]] field of the element in execution.[[EventsRecords]] whose [[AgentSignifier]] is AgentSignifier().
// 11. Let rawBytesRead be a List of length elementSize of nondeterministically chosen byte values.
// 12. NOTE: In implementations, rawBytesRead is the result of a load-link, of a load-exclusive, or of an operand of a read-modify-write instruction on the underlying hardware. The nondeterminism is a semantic prescription of the memory model to describe observable behaviour of hardware with weak consistency.
// 13. Let rmwEvent be ReadModifyWriteSharedMemory { [[Order]]: "SeqCst", [[NoTear]]: true, [[Block]]: block, [[ByteIndex]]: byteIndex, [[ElementSize]]: elementSize, [[Payload]]: rawBytes, [[ModifyOp]]: op }.
// 14. Append rmwEvent to eventList.
// 15. Append Chosen Value Record { [[Event]]: rmwEvent, [[ChosenValue]]: rawBytesRead } to execution.[[ChosenValues]].
// 16. Return RawBytesToNumber(type, rawBytesRead, isLittleEndian).


// http://www.ecma-international.org/ecma-262/#sec-arraybuffer-length

// 1. If NewTarget is undefined, throw a TypeError exception.
// 2. Let byteLength be ? ToIndex(length).
// 3. Return ? AllocateArrayBuffer(NewTarget, byteLength).


// http://www.ecma-international.org/ecma-262/#sec-arraybuffer.isview

// 1. If Type(arg) is not Object, return false.
// 2. If arg has a [[ViewedArrayBuffer]] internal slot, return true.
// 3. Return false.


// http://www.ecma-international.org/ecma-262/#sec-get-arraybuffer-@@species

// 1. Return the this value.


// http://www.ecma-international.org/ecma-262/#sec-get-arraybuffer.prototype.bytelength

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If O does not have an [[ArrayBufferData]] internal slot, throw a TypeError exception.
// 4. If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
// 5. If IsDetachedBuffer(O) is true, throw a TypeError exception.
// 6. Let length be O.[[ArrayBufferByteLength]].
// 7. Return length.


// http://www.ecma-international.org/ecma-262/#sec-arraybuffer.prototype.slice

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If O does not have an [[ArrayBufferData]] internal slot, throw a TypeError exception.
// 4. If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
// 5. If IsDetachedBuffer(O) is true, throw a TypeError exception.
// 6. Let len be O.[[ArrayBufferByteLength]].
// 7. Let relativeStart be ? ToInteger(start).
// 8. If relativeStart < 0, let first be max((len + relativeStart), 0); else let first be min(relativeStart, len).
// 9. If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToInteger(end).
// 10. If relativeEnd < 0, let final be max((len + relativeEnd), 0); else let final be min(relativeEnd, len).
// 11. Let newLen be max(final - first, 0).
// 12. Let ctor be ? SpeciesConstructor(O, %ArrayBuffer%).
// 13. Let new be ? Construct(ctor, « newLen »).
// 14. If new does not have an [[ArrayBufferData]] internal slot, throw a TypeError exception.
// 15. If IsSharedArrayBuffer(new) is true, throw a TypeError exception.
// 16. If IsDetachedBuffer(new) is true, throw a TypeError exception.
// 17. If SameValue(new, O) is true, throw a TypeError exception.
// 18. If new.[[ArrayBufferByteLength]] < newLen, throw a TypeError exception.
// 19. NOTE: Side-effects of the above steps may have detached O.
// 20. If IsDetachedBuffer(O) is true, throw a TypeError exception.
// 21. Let fromBuf be O.[[ArrayBufferData]].
// 22. Let toBuf be new.[[ArrayBufferData]].
// 23. Perform CopyDataBlockBytes(toBuf, 0, fromBuf, first, newLen).
// 24. Return new.


// http://www.ecma-international.org/ecma-262/#sec-allocatesharedarraybuffer

// 1. Let obj be ? OrdinaryCreateFromConstructor(constructor, "%SharedArrayBufferPrototype%", « [[ArrayBufferData]], [[ArrayBufferByteLength]] »).
// 2. Assert: byteLength is a nonnegative integer.
// 3. Let block be ? CreateSharedByteDataBlock(byteLength).
// 4. Set obj.[[ArrayBufferData]] to block.
// 5. Set obj.[[ArrayBufferByteLength]] to byteLength.
// 6. Return obj.


// http://www.ecma-international.org/ecma-262/#sec-issharedarraybuffer

// 1. Assert: Type(obj) is Object and it has an [[ArrayBufferData]] internal slot.
// 2. Let bufferData be obj.[[ArrayBufferData]].
// 3. If bufferData is null, return false.
// 4. If bufferData is a Data Block, return false.
// 5. Assert: bufferData is a Shared Data Block.
// 6. Return true.


// http://www.ecma-international.org/ecma-262/#sec-sharedarraybuffer-length

// 1. If NewTarget is undefined, throw a TypeError exception.
// 2. Let byteLength be ? ToIndex(length).
// 3. Return ? AllocateSharedArrayBuffer(NewTarget, byteLength).


// http://www.ecma-international.org/ecma-262/#sec-sharedarraybuffer-@@species

// 1. Return the this value.


// http://www.ecma-international.org/ecma-262/#sec-get-sharedarraybuffer.prototype.bytelength

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If O does not have an [[ArrayBufferData]] internal slot, throw a TypeError exception.
// 4. If IsSharedArrayBuffer(O) is false, throw a TypeError exception.
// 5. Let length be O.[[ArrayBufferByteLength]].
// 6. Return length.


// http://www.ecma-international.org/ecma-262/#sec-sharedarraybuffer.prototype.slice

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If O does not have an [[ArrayBufferData]] internal slot, throw a TypeError exception.
// 4. If IsSharedArrayBuffer(O) is false, throw a TypeError exception.
// 5. Let len be O.[[ArrayBufferByteLength]].
// 6. Let relativeStart be ? ToInteger(start).
// 7. If relativeStart < 0, let first be max((len + relativeStart), 0); else let first be min(relativeStart, len).
// 8. If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToInteger(end).
// 9. If relativeEnd < 0, let final be max((len + relativeEnd), 0); else let final be min(relativeEnd, len).
// 10. Let newLen be max(final - first, 0).
// 11. Let ctor be ? SpeciesConstructor(O, %SharedArrayBuffer%).
// 12. Let new be ? Construct(ctor, « newLen »).
// 13. If new does not have an [[ArrayBufferData]] internal slot, throw a TypeError exception.
// 14. If IsSharedArrayBuffer(new) is false, throw a TypeError exception.
// 15. If new.[[ArrayBufferData]] and O.[[ArrayBufferData]] are the same Shared Data Block values, throw a TypeError exception.
// 16. If new.[[ArrayBufferByteLength]] < newLen, throw a TypeError exception.
// 17. Let fromBuf be O.[[ArrayBufferData]].
// 18. Let toBuf be new.[[ArrayBufferData]].
// 19. Perform CopyDataBlockBytes(toBuf, 0, fromBuf, first, newLen).
// 20. Return new.


// http://www.ecma-international.org/ecma-262/#sec-getviewvalue

// 1. If Type(view) is not Object, throw a TypeError exception.
// 2. If view does not have a [[DataView]] internal slot, throw a TypeError exception.
// 3. Assert: view has a [[ViewedArrayBuffer]] internal slot.
// 4. Let getIndex be ? ToIndex(requestIndex).
// 5. Set isLittleEndian to ToBoolean(isLittleEndian).
// 6. Let buffer be view.[[ViewedArrayBuffer]].
// 7. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
// 8. Let viewOffset be view.[[ByteOffset]].
// 9. Let viewSize be view.[[ByteLength]].
// 10. Let elementSize be the Number value of the Element Size value specified in Table 59 for Element Type type.
// 11. If getIndex + elementSize > viewSize, throw a RangeError exception.
// 12. Let bufferIndex be getIndex + viewOffset.
// 13. Return GetValueFromBuffer(buffer, bufferIndex, type, false, "Unordered", isLittleEndian).


// http://www.ecma-international.org/ecma-262/#sec-setviewvalue

// 1. If Type(view) is not Object, throw a TypeError exception.
// 2. If view does not have a [[DataView]] internal slot, throw a TypeError exception.
// 3. Assert: view has a [[ViewedArrayBuffer]] internal slot.
// 4. Let getIndex be ? ToIndex(requestIndex).
// 5. Let numberValue be ? ToNumber(value).
// 6. Set isLittleEndian to ToBoolean(isLittleEndian).
// 7. Let buffer be view.[[ViewedArrayBuffer]].
// 8. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
// 9. Let viewOffset be view.[[ByteOffset]].
// 10. Let viewSize be view.[[ByteLength]].
// 11. Let elementSize be the Number value of the Element Size value specified in Table 59 for Element Type type.
// 12. If getIndex + elementSize > viewSize, throw a RangeError exception.
// 13. Let bufferIndex be getIndex + viewOffset.
// 14. Return SetValueInBuffer(buffer, bufferIndex, type, numberValue, false, "Unordered", isLittleEndian).


// http://www.ecma-international.org/ecma-262/#sec-dataview-buffer-byteoffset-bytelength

// 1. If NewTarget is undefined, throw a TypeError exception.
// 2. If Type(buffer) is not Object, throw a TypeError exception.
// 3. If buffer does not have an [[ArrayBufferData]] internal slot, throw a TypeError exception.
// 4. Let offset be ? ToIndex(byteOffset).
// 5. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
// 6. Let bufferByteLength be buffer.[[ArrayBufferByteLength]].
// 7. If offset > bufferByteLength, throw a RangeError exception.
// 8. If byteLength is either not present or undefined, then
  // 8. a. Let viewByteLength be bufferByteLength - offset.
// 9. Else,
  // 9. a. Let viewByteLength be ? ToIndex(byteLength).
  // 9. b. If offset + viewByteLength > bufferByteLength, throw a RangeError exception.
// 10. Let O be ? OrdinaryCreateFromConstructor(NewTarget, "%DataViewPrototype%", « [[DataView]], [[ViewedArrayBuffer]], [[ByteLength]], [[ByteOffset]] »).
// 11. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
// 12. Set O.[[ViewedArrayBuffer]] to buffer.
// 13. Set O.[[ByteLength]] to viewByteLength.
// 14. Set O.[[ByteOffset]] to offset.
// 15. Return O.


// http://www.ecma-international.org/ecma-262/#sec-get-dataview.prototype.buffer

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If O does not have a [[DataView]] internal slot, throw a TypeError exception.
// 4. Assert: O has a [[ViewedArrayBuffer]] internal slot.
// 5. Let buffer be O.[[ViewedArrayBuffer]].
// 6. Return buffer.


// http://www.ecma-international.org/ecma-262/#sec-get-dataview.prototype.bytelength

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If O does not have a [[DataView]] internal slot, throw a TypeError exception.
// 4. Assert: O has a [[ViewedArrayBuffer]] internal slot.
// 5. Let buffer be O.[[ViewedArrayBuffer]].
// 6. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
// 7. Let size be O.[[ByteLength]].
// 8. Return size.


// http://www.ecma-international.org/ecma-262/#sec-get-dataview.prototype.byteoffset

// 1. Let O be the this value.
// 2. If Type(O) is not Object, throw a TypeError exception.
// 3. If O does not have a [[DataView]] internal slot, throw a TypeError exception.
// 4. Assert: O has a [[ViewedArrayBuffer]] internal slot.
// 5. Let buffer be O.[[ViewedArrayBuffer]].
// 6. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
// 7. Let offset be O.[[ByteOffset]].
// 8. Return offset.


// http://www.ecma-international.org/ecma-262/#sec-dataview.prototype.getfloat32

// 1. Let v be the this value.
// 2. If littleEndian is not present, set littleEndian to false.
// 3. Return ? GetViewValue(v, byteOffset, littleEndian, "Float32").


// http://www.ecma-international.org/ecma-262/#sec-dataview.prototype.getfloat64

// 1. Let v be the this value.
// 2. If littleEndian is not present, set littleEndian to false.
// 3. Return ? GetViewValue(v, byteOffset, littleEndian, "Float64").


// http://www.ecma-international.org/ecma-262/#sec-dataview.prototype.getint8

// 1. Let v be the this value.
// 2. Return ? GetViewValue(v, byteOffset, true, "Int8").


// http://www.ecma-international.org/ecma-262/#sec-dataview.prototype.getint16

// 1. Let v be the this value.
// 2. If littleEndian is not present, set littleEndian to false.
// 3. Return ? GetViewValue(v, byteOffset, littleEndian, "Int16").


// http://www.ecma-international.org/ecma-262/#sec-dataview.prototype.getint32

// 1. Let v be the this value.
// 2. If littleEndian is not present, set littleEndian to false.
// 3. Return ? GetViewValue(v, byteOffset, littleEndian, "Int32").


// http://www.ecma-international.org/ecma-262/#sec-dataview.prototype.getuint8

// 1. Let v be the this value.
// 2. Return ? GetViewValue(v, byteOffset, true, "Uint8").


// http://www.ecma-international.org/ecma-262/#sec-dataview.prototype.getuint16

// 1. Let v be the this value.
// 2. If littleEndian is not present, set littleEndian to false.
// 3. Return ? GetViewValue(v, byteOffset, littleEndian, "Uint16").


// http://www.ecma-international.org/ecma-262/#sec-dataview.prototype.getuint32

// 1. Let v be the this value.
// 2. If littleEndian is not present, set littleEndian to false.
// 3. Return ? GetViewValue(v, byteOffset, littleEndian, "Uint32").


// http://www.ecma-international.org/ecma-262/#sec-dataview.prototype.setfloat32

// 1. Let v be the this value.
// 2. If littleEndian is not present, set littleEndian to false.
// 3. Return ? SetViewValue(v, byteOffset, littleEndian, "Float32", value).


// http://www.ecma-international.org/ecma-262/#sec-dataview.prototype.setfloat64

// 1. Let v be the this value.
// 2. If littleEndian is not present, set littleEndian to false.
// 3. Return ? SetViewValue(v, byteOffset, littleEndian, "Float64", value).


// http://www.ecma-international.org/ecma-262/#sec-dataview.prototype.setint8

// 1. Let v be the this value.
// 2. Return ? SetViewValue(v, byteOffset, true, "Int8", value).


// http://www.ecma-international.org/ecma-262/#sec-dataview.prototype.setint16

// 1. Let v be the this value.
// 2. If littleEndian is not present, set littleEndian to false.
// 3. Return ? SetViewValue(v, byteOffset, littleEndian, "Int16", value).


// http://www.ecma-international.org/ecma-262/#sec-dataview.prototype.setint32

// 1. Let v be the this value.
// 2. If littleEndian is not present, set littleEndian to false.
// 3. Return ? SetViewValue(v, byteOffset, littleEndian, "Int32", value).


// http://www.ecma-international.org/ecma-262/#sec-dataview.prototype.setuint8

// 1. Let v be the this value.
// 2. Return ? SetViewValue(v, byteOffset, true, "Uint8", value).


// http://www.ecma-international.org/ecma-262/#sec-dataview.prototype.setuint16

// 1. Let v be the this value.
// 2. If littleEndian is not present, set littleEndian to false.
// 3. Return ? SetViewValue(v, byteOffset, littleEndian, "Uint16", value).


// http://www.ecma-international.org/ecma-262/#sec-dataview.prototype.setuint32

// 1. Let v be the this value.
// 2. If littleEndian is not present, set littleEndian to false.
// 3. Return ? SetViewValue(v, byteOffset, littleEndian, "Uint32", value).


// http://www.ecma-international.org/ecma-262/#sec-validatesharedintegertypedarray

// 1. If onlyInt32 is not present, set onlyInt32 to false.
// 2. If Type(typedArray) is not Object, throw a TypeError exception.
// 3. If typedArray does not have a [[TypedArrayName]] internal slot, throw a TypeError exception.
// 4. Let typeName be typedArray.[[TypedArrayName]].
// 5. If onlyInt32 is true, then
  // 5. a. If typeName is not "Int32Array", throw a TypeError exception.
// 6. Else,
  // 6. a. If typeName is not "Int8Array", "Uint8Array", "Int16Array", "Uint16Array", "Int32Array", or "Uint32Array", throw a TypeError exception.
// 7. Assert: typedArray has a [[ViewedArrayBuffer]] internal slot.
// 8. Let buffer be typedArray.[[ViewedArrayBuffer]].
// 9. If IsSharedArrayBuffer(buffer) is false, throw a TypeError exception.
// 10. Return buffer.


// http://www.ecma-international.org/ecma-262/#sec-validateatomicaccess

// 1. Assert: typedArray is an Object that has a [[ViewedArrayBuffer]] internal slot.
// 2. Let accessIndex be ? ToIndex(requestIndex).
// 3. Let length be typedArray.[[ArrayLength]].
// 4. Assert: accessIndex ≥ 0.
// 5. If accessIndex ≥ length, throw a RangeError exception.
// 6. Return accessIndex.


// http://www.ecma-international.org/ecma-262/#sec-getwaiterlist

// 1. Assert: block is a Shared Data Block.
// 2. Assert: i and i + 3 are valid byte offsets within the memory of block.
// 3. Assert: i is divisible by 4.
// 4. Return the WaiterList that is referenced by the pair (block, i).


// http://www.ecma-international.org/ecma-262/#sec-entercriticalsection

// 1. Assert: The calling agent is not in the critical section for any WaiterList.
// 2. Wait until no agent is in the critical section for WL, then enter the critical section for WL (without allowing any other agent to enter).


// http://www.ecma-international.org/ecma-262/#sec-leavecriticalsection

// 1. Assert: The calling agent is in the critical section for WL.
// 2. Leave the critical section for WL.


// http://www.ecma-international.org/ecma-262/#sec-addwaiter

// 1. Assert: The calling agent is in the critical section for WL.
// 2. Assert: W is not on the list of waiters in any WaiterList.
// 3. Add W to the end of the list of waiters in WL.


// http://www.ecma-international.org/ecma-262/#sec-removewaiter

// 1. Assert: The calling agent is in the critical section for WL.
// 2. Assert: W is on the list of waiters in WL.
// 3. Remove W from the list of waiters in WL.


// http://www.ecma-international.org/ecma-262/#sec-removewaiters

// 1. Assert: The calling agent is in the critical section for WL.
// 2. Let L be a new empty List.
// 3. Let S be a reference to the list of waiters in WL.
// 4. Repeat, while c > 0 and S is not an empty List,
  // 4. a. Let W be the first waiter in S.
  // 4. b. Add W to the end of L.
  // 4. c. Remove W from S.
  // 4. d. Subtract 1 from c.
// 5. Return L.


// http://www.ecma-international.org/ecma-262/#sec-suspend

// 1. Assert: The calling agent is in the critical section for WL.
// 2. Assert: W is equal to AgentSignifier().
// 3. Assert: W is on the list of waiters in WL.
// 4. Assert: AgentCanSuspend() is true.
// 5. Perform LeaveCriticalSection(WL) and suspend W for up to timeout milliseconds, performing the combined operation in such a way that a notification that arrives after the critical section is exited but before the suspension takes effect is not lost. W can notify either because the timeout expired or because it was notified explicitly by another agent calling NotifyWaiter(WL, W), and not for any other reasons at all.
// 6. Perform EnterCriticalSection(WL).
// 7. If W was notified explicitly by another agent calling NotifyWaiter(WL, W), return true.
// 8. Return false.


// http://www.ecma-international.org/ecma-262/#sec-notifywaiter

// 1. Assert: The calling agent is in the critical section for WL.
// 2. Assert: W is on the list of waiters in WL.
// 3. Let execution be the [[CandidateExecution]] field of the surrounding agent's Agent Record.
// 4. Let eventsRecord be the Agent Events Record in execution.[[EventsRecords]] whose [[AgentSignifier]] is AgentSignifier().
// 5. Let agentSynchronizesWith be eventsRecord.[[AgentSynchronizesWith]].
// 6. Let notifierEventList be eventsRecord.[[EventList]].
// 7. Let waiterEventList be the [[EventList]] field of the element in execution.[[EventsRecords]] whose [[AgentSignifier]] is W.
// 8. Let notifyEvent and waitEvent be new Synchronize events.
// 9. Append notifyEvent to notifierEventList.
// 10. Append waitEvent to waiterEventList.
// 11. Append (notifyEvent, waitEvent) to agentSynchronizesWith.
// 12. Notify the agent W.


// http://www.ecma-international.org/ecma-262/#sec-atomicreadmodifywrite

// 1. Let buffer be ? ValidateSharedIntegerTypedArray(typedArray).
// 2. Let i be ? ValidateAtomicAccess(typedArray, index).
// 3. Let v be ? ToInteger(value).
// 4. Let arrayTypeName be typedArray.[[TypedArrayName]].
// 5. Let elementSize be the Number value of the Element Size value specified in Table 59 for arrayTypeName.
// 6. Let elementType be the String value of the Element Type value in Table 59 for arrayTypeName.
// 7. Let offset be typedArray.[[ByteOffset]].
// 8. Let indexedPosition be (i × elementSize) + offset.
// 9. Return GetModifySetValueInBuffer(buffer, indexedPosition, elementType, v, op).


// http://www.ecma-international.org/ecma-262/#sec-atomicload

// 1. Let buffer be ? ValidateSharedIntegerTypedArray(typedArray).
// 2. Let i be ? ValidateAtomicAccess(typedArray, index).
// 3. Let arrayTypeName be typedArray.[[TypedArrayName]].
// 4. Let elementSize be the Number value of the Element Size value specified in Table 59 for arrayTypeName.
// 5. Let elementType be the String value of the Element Type value in Table 59 for arrayTypeName.
// 6. Let offset be typedArray.[[ByteOffset]].
// 7. Let indexedPosition be (i × elementSize) + offset.
// 8. Return GetValueFromBuffer(buffer, indexedPosition, elementType, true, "SeqCst").


// http://www.ecma-international.org/ecma-262/#sec-atomics.add

// 1. Return ? AtomicReadModifyWrite(typedArray, index, value, add).


// http://www.ecma-international.org/ecma-262/#sec-atomics.and

// 1. Return ? AtomicReadModifyWrite(typedArray, index, value, and).


// http://www.ecma-international.org/ecma-262/#sec-atomics.compareexchange

// 1. Let buffer be ? ValidateSharedIntegerTypedArray(typedArray).
// 2. Let i be ? ValidateAtomicAccess(typedArray, index).
// 3. Let expected be ? ToInteger(expectedValue).
// 4. Let replacement be ? ToInteger(replacementValue).
// 5. Let arrayTypeName be typedArray.[[TypedArrayName]].
// 6. Let elementType be the String value of the Element Type value in Table 59 for arrayTypeName.
// 7. Let isLittleEndian be the value of the [[LittleEndian]] field of the surrounding agent's Agent Record.
// 8. Let expectedBytes be NumberToRawBytes(elementType, expected, isLittleEndian).
// 9. Let elementSize be the Number value of the Element Size value specified in Table 59 for arrayTypeName.
// 10. Let offset be typedArray.[[ByteOffset]].
// 11. Let indexedPosition be (i × elementSize) + offset.
// 12. Let compareExchange denote a semantic function of two List of byte values arguments that returns the second argument if the first argument is element-wise equal to expectedBytes.
// 13. Return GetModifySetValueInBuffer(buffer, indexedPosition, elementType, replacement, compareExchange).


// http://www.ecma-international.org/ecma-262/#sec-atomics.exchange

// 1. Return ? AtomicReadModifyWrite(typedArray, index, value, second).


// http://www.ecma-international.org/ecma-262/#sec-atomics.islockfree

// 1. Let n be ? ToInteger(size).
// 2. Let AR be the Agent Record of the surrounding agent.
// 3. If n equals 1, return AR.[[IsLockFree1]].
// 4. If n equals 2, return AR.[[IsLockFree2]].
// 5. If n equals 4, return true.
// 6. Return false.


// http://www.ecma-international.org/ecma-262/#sec-atomics.load

// 1. Return ? AtomicLoad(typedArray, index).


// http://www.ecma-international.org/ecma-262/#sec-atomics.or

// 1. Return ? AtomicReadModifyWrite(typedArray, index, value, or).


// http://www.ecma-international.org/ecma-262/#sec-atomics.store

// 1. Let buffer be ? ValidateSharedIntegerTypedArray(typedArray).
// 2. Let i be ? ValidateAtomicAccess(typedArray, index).
// 3. Let v be ? ToInteger(value).
// 4. Let arrayTypeName be typedArray.[[TypedArrayName]].
// 5. Let elementSize be the Number value of the Element Size value specified in Table 59 for arrayTypeName.
// 6. Let elementType be the String value of the Element Type value in Table 59 for arrayTypeName.
// 7. Let offset be typedArray.[[ByteOffset]].
// 8. Let indexedPosition be (i × elementSize) + offset.
// 9. Perform SetValueInBuffer(buffer, indexedPosition, elementType, v, true, "SeqCst").
// 10. Return v.


// http://www.ecma-international.org/ecma-262/#sec-atomics.sub

// 1. Return ? AtomicReadModifyWrite(typedArray, index, value, subtract).


// http://www.ecma-international.org/ecma-262/#sec-atomics.wait

// 1. Let buffer be ? ValidateSharedIntegerTypedArray(typedArray, true).
// 2. Let i be ? ValidateAtomicAccess(typedArray, index).
// 3. Let v be ? ToInt32(value).
// 4. Let q be ? ToNumber(timeout).
// 5. If q is NaN, let t be +∞, else let t be max(q, 0).
// 6. Let B be AgentCanSuspend().
// 7. If B is false, throw a TypeError exception.
// 8. Let block be buffer.[[ArrayBufferData]].
// 9. Let offset be typedArray.[[ByteOffset]].
// 10. Let indexedPosition be (i × 4) + offset.
// 11. Let WL be GetWaiterList(block, indexedPosition).
// 12. Perform EnterCriticalSection(WL).
// 13. Let w be ! AtomicLoad(typedArray, i).
// 14. If v is not equal to w, then
  // 14. a. Perform LeaveCriticalSection(WL).
  // 14. b. Return the String "not-equal".
// 15. Let W be AgentSignifier().
// 16. Perform AddWaiter(WL, W).
// 17. Let notified be Suspend(WL, W, t).
// 18. If notified is true, then
  // 18. a. Assert: W is not on the list of waiters in WL.
// 19. Else,
  // 19. a. Perform RemoveWaiter(WL, W).
// 20. Perform LeaveCriticalSection(WL).
// 21. If notified is true, return the String "ok".
// 22. Return the String "timed-out".


// http://www.ecma-international.org/ecma-262/#sec-atomics.notify

// 1. Let buffer be ? ValidateSharedIntegerTypedArray(typedArray, true).
// 2. Let i be ? ValidateAtomicAccess(typedArray, index).
// 3. If count is undefined, let c be +∞.
// 4. Else,
  // 4. a. Let intCount be ? ToInteger(count).
  // 4. b. Let c be max(intCount, 0).
// 5. Let block be buffer.[[ArrayBufferData]].
// 6. Let offset be typedArray.[[ByteOffset]].
// 7. Let indexedPosition be (i × 4) + offset.
// 8. Let WL be GetWaiterList(block, indexedPosition).
// 9. Let n be 0.
// 10. Perform EnterCriticalSection(WL).
// 11. Let S be RemoveWaiters(WL, c).
// 12. Repeat, while S is not an empty List,
  // 12. a. Let W be the first agent in S.
  // 12. b. Remove W from the front of S.
  // 12. c. Perform NotifyWaiter(WL, W).
  // 12. d. Add 1 to n.
// 13. Perform LeaveCriticalSection(WL).
// 14. Return n.


// http://www.ecma-international.org/ecma-262/#sec-atomics.xor

// 1. Return ? AtomicReadModifyWrite(typedArray, index, value, xor).


// http://www.ecma-international.org/ecma-262/#sec-json.parse

// 1. Let JText be ? ToString(text).
// 2. Parse JText interpreted as UTF-16 encoded Unicode points (6.1.4) as a JSON text as specified in ECMA-404. Throw a SyntaxError exception if JText is not a valid JSON text as defined in that specification.
// 3. Let scriptText be the string-concatenation of "(", JText, and ");".
// 4. Let completion be the result of parsing and evaluating scriptText as if it was the source text of an ECMAScript Script. The extended PropertyDefinitionEvaluation semantics defined in B.3.1 must not be used during the evaluation.
// 5. Let unfiltered be completion.[[Value]].
// 6. Assert: unfiltered is either a String, Number, Boolean, Null, or an Object that is defined by either an ArrayLiteral or an ObjectLiteral.
// 7. If IsCallable(reviver) is true, then
  // 7. a. Let root be ObjectCreate(%ObjectPrototype%).
  // 7. b. Let rootName be the empty String.
  // 7. c. Let status be CreateDataProperty(root, rootName, unfiltered).
  // 7. d. Assert: status is true.
  // 7. e. Return ? InternalizeJSONProperty(root, rootName).
// 8. Else,
  // 8. a. Return unfiltered.


// http://www.ecma-international.org/ecma-262/#sec-internalizejsonproperty

// 1. Let val be ? Get(holder, name).
// 2. If Type(val) is Object, then
  // 2. a. Let isArray be ? IsArray(val).
  // 2. b. If isArray is true, then
    // 2. b. i. Let I be 0.
    // 2. b. ii. Let len be ? ToLength(? Get(val, "length")).
    // 2. b. iii. Repeat, while I < len,
      // 2. b. iii. 1. Let newElement be ? InternalizeJSONProperty(val, ! ToString(I)).
      // 2. b. iii. 2. If newElement is undefined, then
        // 2. b. iii. 2. a. Perform ? val.[[Delete]](! ToString(I)).
      // 2. b. iii. 3. Else,
        // 2. b. iii. 3. a. Perform ? CreateDataProperty(val, ! ToString(I), newElement).
        // 2. b. iii. 3. b. NOTE: This algorithm intentionally does not throw an exception if CreateDataProperty returns false.
      // 2. b. iii. 4. Add 1 to I.
  // 2. c. Else,
    // 2. c. i. Let keys be ? EnumerableOwnPropertyNames(val, "key").
    // 2. c. ii. For each String P in keys, do
      // 2. c. ii. 1. Let newElement be ? InternalizeJSONProperty(val, P).
      // 2. c. ii. 2. If newElement is undefined, then
        // 2. c. ii. 2. a. Perform ? val.[[Delete]](P).
      // 2. c. ii. 3. Else,
        // 2. c. ii. 3. a. Perform ? CreateDataProperty(val, P, newElement).
        // 2. c. ii. 3. b. NOTE: This algorithm intentionally does not throw an exception if CreateDataProperty returns false.
// 3. Return ? Call(reviver, holder, « name, val »).


// http://www.ecma-international.org/ecma-262/#sec-json.stringify

// 1. Let stack be a new empty List.
// 2. Let indent be the empty String.
// 3. Let PropertyList and ReplacerFunction be undefined.
// 4. If Type(replacer) is Object, then
  // 4. a. If IsCallable(replacer) is true, then
    // 4. a. i. Set ReplacerFunction to replacer.
  // 4. b. Else,
    // 4. b. i. Let isArray be ? IsArray(replacer).
    // 4. b. ii. If isArray is true, then
      // 4. b. ii. 1. Set PropertyList to a new empty List.
      // 4. b. ii. 2. Let len be ? ToLength(? Get(replacer, "length")).
      // 4. b. ii. 3. Let k be 0.
      // 4. b. ii. 4. Repeat, while k < len,
        // 4. b. ii. 4. a. Let v be ? Get(replacer, ! ToString(k)).
        // 4. b. ii. 4. b. Let item be undefined.
        // 4. b. ii. 4. c. If Type(v) is String, set item to v.
        // 4. b. ii. 4. d. Else if Type(v) is Number, set item to ! ToString(v).
        // 4. b. ii. 4. e. Else if Type(v) is Object, then
          // 4. b. ii. 4. e. i. If v has a [[StringData]] or [[NumberData]] internal slot, set item to ? ToString(v).
        // 4. b. ii. 4. f. If item is not undefined and item is not currently an element of PropertyList, then
          // 4. b. ii. 4. f. i. Append item to the end of PropertyList.
        // 4. b. ii. 4. g. Increase k by 1.
// 5. If Type(space) is Object, then
  // 5. a. If space has a [[NumberData]] internal slot, then
    // 5. a. i. Set space to ? ToNumber(space).
  // 5. b. Else if space has a [[StringData]] internal slot, then
    // 5. b. i. Set space to ? ToString(space).
// 6. If Type(space) is Number, then
  // 6. a. Set space to min(10, ! ToInteger(space)).
  // 6. b. Let gap be the String value containing space occurrences of the code unit 0x0020 (SPACE). This will be the empty String if space is less than 1.
// 7. Else if Type(space) is String, then
  // 7. a. If the length of space is 10 or less, let gap be space; otherwise let gap be the String value consisting of the first 10 code units of space.
// 8. Else,
  // 8. a. Let gap be the empty String.
// 9. Let wrapper be ObjectCreate(%ObjectPrototype%).
// 10. Let status be CreateDataProperty(wrapper, the empty String, value).
// 11. Assert: status is true.
// 12. Return ? SerializeJSONProperty(the empty String, wrapper).


// http://www.ecma-international.org/ecma-262/#sec-serializejsonproperty

// 1. Let value be ? Get(holder, key).
// 2. If Type(value) is Object, then
  // 2. a. Let toJSON be ? Get(value, "toJSON").
  // 2. b. If IsCallable(toJSON) is true, then
    // 2. b. i. Set value to ? Call(toJSON, value, « key »).
// 3. If ReplacerFunction is not undefined, then
  // 3. a. Set value to ? Call(ReplacerFunction, holder, « key, value »).
// 4. If Type(value) is Object, then
  // 4. a. If value has a [[NumberData]] internal slot, then
    // 4. a. i. Set value to ? ToNumber(value).
  // 4. b. Else if value has a [[StringData]] internal slot, then
    // 4. b. i. Set value to ? ToString(value).
  // 4. c. Else if value has a [[BooleanData]] internal slot, then
    // 4. c. i. Set value to value.[[BooleanData]].
// 5. If value is null, return "null".
// 6. If value is true, return "true".
// 7. If value is false, return "false".
// 8. If Type(value) is String, return QuoteJSONString(value).
// 9. If Type(value) is Number, then
  // 9. a. If value is finite, return ! ToString(value).
  // 9. b. Return "null".
// 10. If Type(value) is Object and IsCallable(value) is false, then
  // 10. a. Let isArray be ? IsArray(value).
  // 10. b. If isArray is true, return ? SerializeJSONArray(value).
  // 10. c. Return ? SerializeJSONObject(value).
// 11. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-quotejsonstring

// 1. Let product be the String value consisting solely of the code unit 0x0022 (QUOTATION MARK).
// 2. Let cpList be a List containing in order the code points of value when interpreted as a sequence of UTF-16 encoded code points as described in 6.1.4.
// 3. For each code point C in cpList, do
  // 3. a. If C is listed in the Code Point column of Table 62, then
    // 3. a. i. Set product to the string-concatenation of product and the Escape Sequence for C as specified in Table 62.
  // 3. b. Else if C has a numeric value less than 0x0020 (SPACE), or if C has the same numeric value as a leading surrogate or trailing surrogate, then
    // 3. b. i. Let unit be the code unit whose numeric value is that of C.
    // 3. b. ii. Set product to the string-concatenation of product and UnicodeEscape(unit).
  // 3. c. Else,
    // 3. c. i. Set product to the string-concatenation of product and the UTF16Encoding of C.
// 4. Set product to the string-concatenation of product and the code unit 0x0022 (QUOTATION MARK).
// 5. Return product.


// http://www.ecma-international.org/ecma-262/#sec-unicodeescape

// 1. Let n be the numeric value of C.
// 2. Assert: n ≤ 0xFFFF.
// 3. Return the string-concatenation of:the code unit 0x005C (REVERSE SOLIDUS)"u"the String representation of n, formatted as a four-digit lowercase hexadecimal number, padded to the left with zeroes if necessary


// http://www.ecma-international.org/ecma-262/#sec-serializejsonobject

// 1. If stack contains value, throw a TypeError exception because the structure is cyclical.
// 2. Append value to stack.
// 3. Let stepback be indent.
// 4. Set indent to the string-concatenation of indent and gap.
// 5. If PropertyList is not undefined, then
  // 5. a. Let K be PropertyList.
// 6. Else,
  // 6. a. Let K be ? EnumerableOwnPropertyNames(value, "key").
// 7. Let partial be a new empty List.
// 8. For each element P of K, do
  // 8. a. Let strP be ? SerializeJSONProperty(P, value).
  // 8. b. If strP is not undefined, then
    // 8. b. i. Let member be QuoteJSONString(P).
    // 8. b. ii. Set member to the string-concatenation of member and ":".
    // 8. b. iii. If gap is not the empty String, then
      // 8. b. iii. 1. Set member to the string-concatenation of member and the code unit 0x0020 (SPACE).
    // 8. b. iv. Set member to the string-concatenation of member and strP.
    // 8. b. v. Append member to partial.
// 9. If partial is empty, then
  // 9. a. Let final be "{}".
// 10. Else,
  // 10. a. If gap is the empty String, then
    // 10. a. i. Let properties be the String value formed by concatenating all the element Strings of partial with each adjacent pair of Strings separated with the code unit 0x002C (COMMA). A comma is not inserted either before the first String or after the last String.
    // 10. a. ii. Let final be the string-concatenation of "{", properties, and "}".
  // 10. b. Else gap is not the empty String,
    // 10. b. i. Let separator be the string-concatenation of the code unit 0x002C (COMMA), the code unit 0x000A (LINE FEED), and indent.
    // 10. b. ii. Let properties be the String value formed by concatenating all the element Strings of partial with each adjacent pair of Strings separated with separator. The separator String is not inserted either before the first String or after the last String.
    // 10. b. iii. Let final be the string-concatenation of "{", the code unit 0x000A (LINE FEED), indent, properties, the code unit 0x000A (LINE FEED), stepback, and "}".
// 11. Remove the last element of stack.
// 12. Set indent to stepback.
// 13. Return final.


// http://www.ecma-international.org/ecma-262/#sec-serializejsonarray

// 1. If stack contains value, throw a TypeError exception because the structure is cyclical.
// 2. Append value to stack.
// 3. Let stepback be indent.
// 4. Set indent to the string-concatenation of indent and gap.
// 5. Let partial be a new empty List.
// 6. Let len be ? ToLength(? Get(value, "length")).
// 7. Let index be 0.
// 8. Repeat, while index < len
  // 8. a. Let strP be ? SerializeJSONProperty(! ToString(index), value).
  // 8. b. If strP is undefined, then
    // 8. b. i. Append "null" to partial.
  // 8. c. Else,
    // 8. c. i. Append strP to partial.
  // 8. d. Increment index by 1.
// 9. If partial is empty, then
  // 9. a. Let final be "[]".
// 10. Else,
  // 10. a. If gap is the empty String, then
    // 10. a. i. Let properties be the String value formed by concatenating all the element Strings of partial with each adjacent pair of Strings separated with the code unit 0x002C (COMMA). A comma is not inserted either before the first String or after the last String.
    // 10. a. ii. Let final be the string-concatenation of "[", properties, and "]".
  // 10. b. Else,
    // 10. b. i. Let separator be the string-concatenation of the code unit 0x002C (COMMA), the code unit 0x000A (LINE FEED), and indent.
    // 10. b. ii. Let properties be the String value formed by concatenating all the element Strings of partial with each adjacent pair of Strings separated with separator. The separator String is not inserted either before the first String or after the last String.
    // 10. b. iii. Let final be the string-concatenation of "[", the code unit 0x000A (LINE FEED), indent, properties, the code unit 0x000A (LINE FEED), stepback, and "]".
// 11. Remove the last element of stack.
// 12. Set indent to stepback.
// 13. Return final.


// http://www.ecma-international.org/ecma-262/#sec-%iteratorprototype%-@@iterator

// 1. Return the this value.


// http://www.ecma-international.org/ecma-262/#sec-asynciteratorprototype-asynciterator

// 1. Return the this value.


// http://www.ecma-international.org/ecma-262/#sec-createasyncfromsynciterator

// 1. Let asyncIterator be ! ObjectCreate(%AsyncFromSyncIteratorPrototype%, « [[SyncIteratorRecord]] »).
// 2. Set asyncIterator.[[SyncIteratorRecord]] to syncIteratorRecord.
// 3. Return ? GetIterator(asyncIterator, async).


// http://www.ecma-international.org/ecma-262/#sec-%asyncfromsynciteratorprototype%.next

// 1. Let O be the this value.
// 2. Let promiseCapability be ! NewPromiseCapability(%Promise%).
// 3. If Type(O) is not Object, or if O does not have a [[SyncIteratorRecord]] internal slot, then
  // 3. a. Let invalidIteratorError be a newly created TypeError object.
  // 3. b. Perform ! Call(promiseCapability.[[Reject]], undefined, « invalidIteratorError »).
  // 3. c. Return promiseCapability.[[Promise]].
// 4. Let syncIteratorRecord be O.[[SyncIteratorRecord]].
// 5. Let result be IteratorNext(syncIteratorRecord, value).
// 6. IfAbruptRejectPromise(result, promiseCapability).
// 7. Return ! AsyncFromSyncIteratorContinuation(result, promiseCapability).


// http://www.ecma-international.org/ecma-262/#sec-%asyncfromsynciteratorprototype%.return

// 1. Let O be the this value.
// 2. Let promiseCapability be ! NewPromiseCapability(%Promise%).
// 3. If Type(O) is not Object, or if O does not have a [[SyncIteratorRecord]] internal slot, then
  // 3. a. Let invalidIteratorError be a newly created TypeError object.
  // 3. b. Perform ! Call(promiseCapability.[[Reject]], undefined, « invalidIteratorError »).
  // 3. c. Return promiseCapability.[[Promise]].
// 4. Let syncIterator be O.[[SyncIteratorRecord]].[[Iterator]].
// 5. Let return be GetMethod(syncIterator, "return").
// 6. IfAbruptRejectPromise(return, promiseCapability).
// 7. If return is undefined, then
  // 7. a. Let iterResult be ! CreateIterResultObject(value, true).
  // 7. b. Perform ! Call(promiseCapability.[[Resolve]], undefined, « iterResult »).
  // 7. c. Return promiseCapability.[[Promise]].
// 8. Let result be Call(return, syncIterator, « value »).
// 9. IfAbruptRejectPromise(result, promiseCapability).
// 10. If Type(result) is not Object, then
  // 10. a. Perform ! Call(promiseCapability.[[Reject]], undefined, « a newly created TypeError object »).
  // 10. b. Return promiseCapability.[[Promise]].
// 11. Return ! AsyncFromSyncIteratorContinuation(result, promiseCapability).


// http://www.ecma-international.org/ecma-262/#sec-%asyncfromsynciteratorprototype%.throw

// 1. Let O be the this value.
// 2. Let promiseCapability be ! NewPromiseCapability(%Promise%).
// 3. If Type(O) is not Object, or if O does not have a [[SyncIteratorRecord]] internal slot, then
  // 3. a. Let invalidIteratorError be a newly created TypeError object.
  // 3. b. Perform ! Call(promiseCapability.[[Reject]], undefined, « invalidIteratorError »).
  // 3. c. Return promiseCapability.[[Promise]].
// 4. Let syncIterator be O.[[SyncIteratorRecord]].[[Iterator]].
// 5. Let throw be GetMethod(syncIterator, "throw").
// 6. IfAbruptRejectPromise(throw, promiseCapability).
// 7. If throw is undefined, then
  // 7. a. Perform ! Call(promiseCapability.[[Reject]], undefined, « value »).
  // 7. b. Return promiseCapability.[[Promise]].
// 8. Let result be Call(throw, syncIterator, « value »).
// 9. IfAbruptRejectPromise(result, promiseCapability).
// 10. If Type(result) is not Object, then
  // 10. a. Perform ! Call(promiseCapability.[[Reject]], undefined, « a newly created TypeError object »).
  // 10. b. Return promiseCapability.[[Promise]].
// 11. Return ! AsyncFromSyncIteratorContinuation(result, promiseCapability).


// http://www.ecma-international.org/ecma-262/#sec-async-from-sync-iterator-value-unwrap-functions

// 1. Let F be the active function object.
// 2. Return ! CreateIterResultObject(value, F.[[Done]]).


// http://www.ecma-international.org/ecma-262/#sec-asyncfromsynciteratorcontinuation

// 1. Let done be IteratorComplete(result).
// 2. IfAbruptRejectPromise(done, promiseCapability).
// 3. Let value be IteratorValue(result).
// 4. IfAbruptRejectPromise(value, promiseCapability).
// 5. Let valueWrapper be ? PromiseResolve(%Promise%, « value »).
// 6. Let steps be the algorithm steps defined in Async-from-Sync Iterator Value Unwrap Functions.
// 7. Let onFulfilled be CreateBuiltinFunction(steps, « [[Done]] »).
// 8. Set onFulfilled.[[Done]] to done.
// 9. Perform ! PerformPromiseThen(valueWrapper, onFulfilled, undefined, promiseCapability).
// 10. Return promiseCapability.[[Promise]].


// http://www.ecma-international.org/ecma-262/#sec-generatorfunction

// 1. Let C be the active function object.
// 2. Let args be the argumentsList that was passed to this function by [[Call]] or [[Construct]].
// 3. Return ? CreateDynamicFunction(C, NewTarget, "generator", args).


// http://www.ecma-international.org/ecma-262/#sec-asyncgeneratorfunction

// 1. Let C be the active function object.
// 2. Let args be the argumentsList that was passed to this function by [[Call]] or [[Construct]].
// 3. Return ? CreateDynamicFunction(C, NewTarget, "async generator", args).


// http://www.ecma-international.org/ecma-262/#sec-generator.prototype.next

// 1. Let g be the this value.
// 2. Return ? GeneratorResume(g, value).


// http://www.ecma-international.org/ecma-262/#sec-generator.prototype.return

// 1. Let g be the this value.
// 2. Let C be Completion { [[Type]]: return, [[Value]]: value, [[Target]]: empty }.
// 3. Return ? GeneratorResumeAbrupt(g, C).


// http://www.ecma-international.org/ecma-262/#sec-generator.prototype.throw

// 1. Let g be the this value.
// 2. Let C be ThrowCompletion(exception).
// 3. Return ? GeneratorResumeAbrupt(g, C).


// http://www.ecma-international.org/ecma-262/#sec-generatorstart

// 1. Assert: The value of generator.[[GeneratorState]] is undefined.
// 2. Let genContext be the running execution context.
// 3. Set the Generator component of genContext to generator.
// 4. Set the code evaluation state of genContext such that when evaluation is resumed for that execution context the following steps will be performed:
  // 4. a. Let result be the result of evaluating generatorBody.
  // 4. b. Assert: If we return here, the generator either threw an exception or performed either an implicit or explicit return.
  // 4. c. Remove genContext from the execution context stack and restore the execution context that is at the top of the execution context stack as the running execution context.
  // 4. d. Set generator.[[GeneratorState]] to "completed".
  // 4. e. Once a generator enters the "completed" state it never leaves it and its associated execution context is never resumed. Any execution state associated with generator can be discarded at this point.
  // 4. f. If result.[[Type]] is normal, let resultValue be undefined.
  // 4. g. Else if result.[[Type]] is return, let resultValue be result.[[Value]].
  // 4. h. Else,
    // 4. h. i. Assert: result.[[Type]] is throw.
    // 4. h. ii. Return Completion(result).
  // 4. i. Return CreateIterResultObject(resultValue, true).
// 5. Set generator.[[GeneratorContext]] to genContext.
// 6. Set generator.[[GeneratorState]] to "suspendedStart".
// 7. Return NormalCompletion(undefined).


// http://www.ecma-international.org/ecma-262/#sec-generatorvalidate

// 1. If Type(generator) is not Object, throw a TypeError exception.
// 2. If generator does not have a [[GeneratorState]] internal slot, throw a TypeError exception.
// 3. Assert: generator also has a [[GeneratorContext]] internal slot.
// 4. Let state be generator.[[GeneratorState]].
// 5. If state is "executing", throw a TypeError exception.
// 6. Return state.


// http://www.ecma-international.org/ecma-262/#sec-generatorresume

// 1. Let state be ? GeneratorValidate(generator).
// 2. If state is "completed", return CreateIterResultObject(undefined, true).
// 3. Assert: state is either "suspendedStart" or "suspendedYield".
// 4. Let genContext be generator.[[GeneratorContext]].
// 5. Let methodContext be the running execution context.
// 6. Suspend methodContext.
// 7. Set generator.[[GeneratorState]] to "executing".
// 8. Push genContext onto the execution context stack; genContext is now the running execution context.
// 9. Resume the suspended evaluation of genContext using NormalCompletion(value) as the result of the operation that suspended it. Let result be the value returned by the resumed computation.
// 10. Assert: When we return here, genContext has already been removed from the execution context stack and methodContext is the currently running execution context.
// 11. Return Completion(result).


// http://www.ecma-international.org/ecma-262/#sec-generatorresumeabrupt

// 1. Let state be ? GeneratorValidate(generator).
// 2. If state is "suspendedStart", then
  // 2. a. Set generator.[[GeneratorState]] to "completed".
  // 2. b. Once a generator enters the "completed" state it never leaves it and its associated execution context is never resumed. Any execution state associated with generator can be discarded at this point.
  // 2. c. Set state to "completed".
// 3. If state is "completed", then
  // 3. a. If abruptCompletion.[[Type]] is return, then
    // 3. a. i. Return CreateIterResultObject(abruptCompletion.[[Value]], true).
  // 3. b. Return Completion(abruptCompletion).
// 4. Assert: state is "suspendedYield".
// 5. Let genContext be generator.[[GeneratorContext]].
// 6. Let methodContext be the running execution context.
// 7. Suspend methodContext.
// 8. Set generator.[[GeneratorState]] to "executing".
// 9. Push genContext onto the execution context stack; genContext is now the running execution context.
// 10. Resume the suspended evaluation of genContext using abruptCompletion as the result of the operation that suspended it. Let result be the completion record returned by the resumed computation.
// 11. Assert: When we return here, genContext has already been removed from the execution context stack and methodContext is the currently running execution context.
// 12. Return Completion(result).


// http://www.ecma-international.org/ecma-262/#sec-getgeneratorkind

// 1. Let genContext be the running execution context.
// 2. If genContext does not have a Generator component, return non-generator.
// 3. Let generator be the Generator component of genContext.
// 4. If generator has an [[AsyncGeneratorState]] internal slot, return async.
// 5. Else, return sync.


// http://www.ecma-international.org/ecma-262/#sec-generatoryield

// 1. Assert: iterNextObj is an Object that implements the IteratorResult interface.
// 2. Let genContext be the running execution context.
// 3. Assert: genContext is the execution context of a generator.
// 4. Let generator be the value of the Generator component of genContext.
// 5. Assert: GetGeneratorKind() is sync.
// 6. Set generator.[[GeneratorState]] to "suspendedYield".
// 7. Remove genContext from the execution context stack and restore the execution context that is at the top of the execution context stack as the running execution context.
// 8. Set the code evaluation state of genContext such that when evaluation is resumed with a Completion resumptionValue the following steps will be performed:
  // 8. a. Return resumptionValue.
  // 8. b. NOTE: This returns to the evaluation of the YieldExpression that originally called this abstract operation.
// 9. Return NormalCompletion(iterNextObj).
// 10. NOTE: This returns to the evaluation of the operation that had most previously resumed evaluation of genContext.


// http://www.ecma-international.org/ecma-262/#sec-asyncgenerator-prototype-next

// 1. Let generator be the this value.
// 2. Let completion be NormalCompletion(value).
// 3. Return ! AsyncGeneratorEnqueue(generator, completion).


// http://www.ecma-international.org/ecma-262/#sec-asyncgenerator-prototype-return

// 1. Let generator be the this value.
// 2. Let completion be Completion { [[Type]]: return, [[Value]]: value, [[Target]]: empty }.
// 3. Return ! AsyncGeneratorEnqueue(generator, completion).


// http://www.ecma-international.org/ecma-262/#sec-asyncgenerator-prototype-throw

// 1. Let generator be the this value.
// 2. Let completion be ThrowCompletion(exception).
// 3. Return ! AsyncGeneratorEnqueue(generator, completion).


// http://www.ecma-international.org/ecma-262/#sec-asyncgeneratorstart

// 1. Assert: generator is an AsyncGenerator instance.
// 2. Assert: generator.[[AsyncGeneratorState]] is undefined.
// 3. Let genContext be the running execution context.
// 4. Set the Generator component of genContext to generator.
// 5. Set the code evaluation state of genContext such that when evaluation is resumed for that execution context the following steps will be performed:
  // 5. a. Let result be the result of evaluating generatorBody.
  // 5. b. Assert: If we return here, the async generator either threw an exception or performed either an implicit or explicit return.
  // 5. c. Remove genContext from the execution context stack and restore the execution context that is at the top of the execution context stack as the running execution context.
  // 5. d. Set generator.[[AsyncGeneratorState]] to "completed".
  // 5. e. If result is a normal completion, let resultValue be undefined.
  // 5. f. Else,
    // 5. f. i. Let resultValue be result.[[Value]].
    // 5. f. ii. If result.[[Type]] is not return, then
      // 5. f. ii. 1. Return ! AsyncGeneratorReject(generator, resultValue).
  // 5. g. Return ! AsyncGeneratorResolve(generator, resultValue, true).
// 6. Set generator.[[AsyncGeneratorContext]] to genContext.
// 7. Set generator.[[AsyncGeneratorState]] to "suspendedStart".
// 8. Set generator.[[AsyncGeneratorQueue]] to a new empty List.
// 9. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-asyncgeneratorresolve

// 1. Assert: generator is an AsyncGenerator instance.
// 2. Let queue be generator.[[AsyncGeneratorQueue]].
// 3. Assert: queue is not an empty List.
// 4. Remove the first element from queue and let next be the value of that element.
// 5. Let promiseCapability be next.[[Capability]].
// 6. Let iteratorResult be ! CreateIterResultObject(value, done).
// 7. Perform ! Call(promiseCapability.[[Resolve]], undefined, « iteratorResult »).
// 8. Perform ! AsyncGeneratorResumeNext(generator).
// 9. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-asyncgeneratorreject

// 1. Assert: generator is an AsyncGenerator instance.
// 2. Let queue be generator.[[AsyncGeneratorQueue]].
// 3. Assert: queue is not an empty List.
// 4. Remove the first element from queue and let next be the value of that element.
// 5. Let promiseCapability be next.[[Capability]].
// 6. Perform ! Call(promiseCapability.[[Reject]], undefined, « exception »).
// 7. Perform ! AsyncGeneratorResumeNext(generator).
// 8. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-asyncgeneratorresumenext

// 1. Assert: generator is an AsyncGenerator instance.
// 2. Let state be generator.[[AsyncGeneratorState]].
// 3. Assert: state is not "executing".
// 4. If state is "awaiting-return", return undefined.
// 5. Let queue be generator.[[AsyncGeneratorQueue]].
// 6. If queue is an empty List, return undefined.
// 7. Let next be the value of the first element of queue.
// 8. Assert: next is an AsyncGeneratorRequest record.
// 9. Let completion be next.[[Completion]].
// 10. If completion is an abrupt completion, then
  // 10. a. If state is "suspendedStart", then
    // 10. a. i. Set generator.[[AsyncGeneratorState]] to "completed".
    // 10. a. ii. Set state to "completed".
  // 10. b. If state is "completed", then
    // 10. b. i. If completion.[[Type]] is return, then
      // 10. b. i. 1. Set generator.[[AsyncGeneratorState]] to "awaiting-return".
      // 10. b. i. 2. Let promise be ? PromiseResolve(%Promise%, « completion.[[Value]] »).
      // 10. b. i. 3. Let stepsFulfilled be the algorithm steps defined in AsyncGeneratorResumeNext Return Processor Fulfilled Functions.
      // 10. b. i. 4. Let onFulfilled be CreateBuiltinFunction(stepsFulfilled, « [[Generator]] »).
      // 10. b. i. 5. Set onFulfilled.[[Generator]] to generator.
      // 10. b. i. 6. Let stepsRejected be the algorithm steps defined in AsyncGeneratorResumeNext Return Processor Rejected Functions.
      // 10. b. i. 7. Let onRejected be CreateBuiltinFunction(stepsRejected, « [[Generator]] »).
      // 10. b. i. 8. Set onRejected.[[Generator]] to generator.
      // 10. b. i. 9. Perform ! PerformPromiseThen(promise, onFulfilled, onRejected).
      // 10. b. i. 10. Return undefined.
    // 10. b. ii. Else,
      // 10. b. ii. 1. Assert: completion.[[Type]] is throw.
      // 10. b. ii. 2. Perform ! AsyncGeneratorReject(generator, completion.[[Value]]).
      // 10. b. ii. 3. Return undefined.
// 11. Else if state is "completed", return ! AsyncGeneratorResolve(generator, undefined, true).
// 12. Assert: state is either "suspendedStart" or "suspendedYield".
// 13. Let genContext be generator.[[AsyncGeneratorContext]].
// 14. Let callerContext be the running execution context.
// 15. Suspend callerContext.
// 16. Set generator.[[AsyncGeneratorState]] to "executing".
// 17. Push genContext onto the execution context stack; genContext is now the running execution context.
// 18. Resume the suspended evaluation of genContext using completion as the result of the operation that suspended it. Let result be the completion record returned by the resumed computation.
// 19. Assert: result is never an abrupt completion.
// 20. Assert: When we return here, genContext has already been removed from the execution context stack and callerContext is the currently running execution context.
// 21. Return undefined.


// http://www.ecma-international.org/ecma-262/#async-generator-resume-next-return-processor-fulfilled

// 1. Let F be the active function object.
// 2. Set F.[[Generator]].[[AsyncGeneratorState]] to "completed".
// 3. Return ! AsyncGeneratorResolve(F.[[Generator]], value, true).


// http://www.ecma-international.org/ecma-262/#async-generator-resume-next-return-processor-rejected

// 1. Let F be the active function object.
// 2. Set F.[[Generator]].[[AsyncGeneratorState]] to "completed".
// 3. Return ! AsyncGeneratorReject(F.[[Generator]], reason).


// http://www.ecma-international.org/ecma-262/#sec-asyncgeneratorenqueue

// 1. Assert: completion is a Completion Record.
// 2. Let promiseCapability be ! NewPromiseCapability(%Promise%).
// 3. If Type(generator) is not Object, or if generator does not have an [[AsyncGeneratorState]] internal slot, then
  // 3. a. Let badGeneratorError be a newly created TypeError object.
  // 3. b. Perform ! Call(promiseCapability.[[Reject]], undefined, « badGeneratorError »).
  // 3. c. Return promiseCapability.[[Promise]].
// 4. Let queue be generator.[[AsyncGeneratorQueue]].
// 5. Let request be AsyncGeneratorRequest { [[Completion]]: completion, [[Capability]]: promiseCapability }.
// 6. Append request to the end of queue.
// 7. Let state be generator.[[AsyncGeneratorState]].
// 8. If state is not "executing", then
  // 8. a. Perform ! AsyncGeneratorResumeNext(generator).
// 9. Return promiseCapability.[[Promise]].


// http://www.ecma-international.org/ecma-262/#sec-asyncgeneratoryield

// 1. Let genContext be the running execution context.
// 2. Assert: genContext is the execution context of a generator.
// 3. Let generator be the value of the Generator component of genContext.
// 4. Assert: GetGeneratorKind() is async.
// 5. Set value to ? Await(value).
// 6. Set generator.[[AsyncGeneratorState]] to "suspendedYield".
// 7. Remove genContext from the execution context stack and restore the execution context that is at the top of the execution context stack as the running execution context.
// 8. Set the code evaluation state of genContext such that when evaluation is resumed with a Completion resumptionValue the following steps will be performed:
  // 8. a. If resumptionValue.[[Type]] is not return, return Completion(resumptionValue).
  // 8. b. Let awaited be Await(resumptionValue.[[Value]]).
  // 8. c. If awaited.[[Type]] is throw, return Completion(awaited).
  // 8. d. Assert: awaited.[[Type]] is normal.
  // 8. e. Return Completion { [[Type]]: return, [[Value]]: awaited.[[Value]], [[Target]]: empty }.
  // 8. f. NOTE: When one of the above steps returns, it returns to the evaluation of the YieldExpression production that originally called this abstract operation.
// 9. Return ! AsyncGeneratorResolve(generator, value, false).
// 10. NOTE: This returns to the evaluation of the operation that had most previously resumed evaluation of genContext.


// http://www.ecma-international.org/ecma-262/#sec-ifabruptrejectpromise

// 1. IfAbruptRejectPromise(value, capability).

// 1. If value is an abrupt completion, then
  // 1. a. Perform ? Call(capability.[[Reject]], undefined, « value.[[Value]] »).
  // 1. b. Return capability.[[Promise]].
// 2. Else if value is a Completion Record, set value to value.[[Value]].


// http://www.ecma-international.org/ecma-262/#sec-createresolvingfunctions

// 1. Let alreadyResolved be a new Record { [[Value]]: false }.
// 2. Let stepsResolve be the algorithm steps defined in Promise Resolve Functions (25.6.1.3.2).
// 3. Let resolve be CreateBuiltinFunction(stepsResolve, « [[Promise]], [[AlreadyResolved]] »).
// 4. Set resolve.[[Promise]] to promise.
// 5. Set resolve.[[AlreadyResolved]] to alreadyResolved.
// 6. Let stepsReject be the algorithm steps defined in Promise Reject Functions (25.6.1.3.1).
// 7. Let reject be CreateBuiltinFunction(stepsReject, « [[Promise]], [[AlreadyResolved]] »).
// 8. Set reject.[[Promise]] to promise.
// 9. Set reject.[[AlreadyResolved]] to alreadyResolved.
// 10. Return a new Record { [[Resolve]]: resolve, [[Reject]]: reject }.


// http://www.ecma-international.org/ecma-262/#sec-promise-reject-functions

// 1. Let F be the active function object.
// 2. Assert: F has a [[Promise]] internal slot whose value is an Object.
// 3. Let promise be F.[[Promise]].
// 4. Let alreadyResolved be F.[[AlreadyResolved]].
// 5. If alreadyResolved.[[Value]] is true, return undefined.
// 6. Set alreadyResolved.[[Value]] to true.
// 7. Return RejectPromise(promise, reason).


// http://www.ecma-international.org/ecma-262/#sec-promise-resolve-functions

// 1. Let F be the active function object.
// 2. Assert: F has a [[Promise]] internal slot whose value is an Object.
// 3. Let promise be F.[[Promise]].
// 4. Let alreadyResolved be F.[[AlreadyResolved]].
// 5. If alreadyResolved.[[Value]] is true, return undefined.
// 6. Set alreadyResolved.[[Value]] to true.
// 7. If SameValue(resolution, promise) is true, then
  // 7. a. Let selfResolutionError be a newly created TypeError object.
  // 7. b. Return RejectPromise(promise, selfResolutionError).
// 8. If Type(resolution) is not Object, then
  // 8. a. Return FulfillPromise(promise, resolution).
// 9. Let then be Get(resolution, "then").
// 10. If then is an abrupt completion, then
  // 10. a. Return RejectPromise(promise, then.[[Value]]).
// 11. Let thenAction be then.[[Value]].
// 12. If IsCallable(thenAction) is false, then
  // 12. a. Return FulfillPromise(promise, resolution).
// 13. Perform EnqueueJob("PromiseJobs", PromiseResolveThenableJob, « promise, resolution, thenAction »).
// 14. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-fulfillpromise

// 1. Assert: The value of promise.[[PromiseState]] is "pending".
// 2. Let reactions be promise.[[PromiseFulfillReactions]].
// 3. Set promise.[[PromiseResult]] to value.
// 4. Set promise.[[PromiseFulfillReactions]] to undefined.
// 5. Set promise.[[PromiseRejectReactions]] to undefined.
// 6. Set promise.[[PromiseState]] to "fulfilled".
// 7. Return TriggerPromiseReactions(reactions, value).


// http://www.ecma-international.org/ecma-262/#sec-newpromisecapability

// 1. If IsConstructor(C) is false, throw a TypeError exception.
// 2. NOTE: C is assumed to be a constructor function that supports the parameter conventions of the Promise constructor (see 25.6.3.1).
// 3. Let promiseCapability be a new PromiseCapability { [[Promise]]: undefined, [[Resolve]]: undefined, [[Reject]]: undefined }.
// 4. Let steps be the algorithm steps defined in GetCapabilitiesExecutor Functions.
// 5. Let executor be CreateBuiltinFunction(steps, « [[Capability]] »).
// 6. Set executor.[[Capability]] to promiseCapability.
// 7. Let promise be ? Construct(C, « executor »).
// 8. If IsCallable(promiseCapability.[[Resolve]]) is false, throw a TypeError exception.
// 9. If IsCallable(promiseCapability.[[Reject]]) is false, throw a TypeError exception.
// 10. Set promiseCapability.[[Promise]] to promise.
// 11. Return promiseCapability.


// http://www.ecma-international.org/ecma-262/#sec-getcapabilitiesexecutor-functions

// 1. Let F be the active function object.
// 2. Assert: F has a [[Capability]] internal slot whose value is a PromiseCapability Record.
// 3. Let promiseCapability be F.[[Capability]].
// 4. If promiseCapability.[[Resolve]] is not undefined, throw a TypeError exception.
// 5. If promiseCapability.[[Reject]] is not undefined, throw a TypeError exception.
// 6. Set promiseCapability.[[Resolve]] to resolve.
// 7. Set promiseCapability.[[Reject]] to reject.
// 8. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-ispromise

// 1. If Type(x) is not Object, return false.
// 2. If x does not have a [[PromiseState]] internal slot, return false.
// 3. Return true.


// http://www.ecma-international.org/ecma-262/#sec-rejectpromise

// 1. Assert: The value of promise.[[PromiseState]] is "pending".
// 2. Let reactions be promise.[[PromiseRejectReactions]].
// 3. Set promise.[[PromiseResult]] to reason.
// 4. Set promise.[[PromiseFulfillReactions]] to undefined.
// 5. Set promise.[[PromiseRejectReactions]] to undefined.
// 6. Set promise.[[PromiseState]] to "rejected".
// 7. If promise.[[PromiseIsHandled]] is false, perform HostPromiseRejectionTracker(promise, "reject").
// 8. Return TriggerPromiseReactions(reactions, reason).


// http://www.ecma-international.org/ecma-262/#sec-triggerpromisereactions

// 1. For each reaction in reactions, in original insertion order, do
  // 1. a. Perform EnqueueJob("PromiseJobs", PromiseReactionJob, « reaction, argument »).
// 2. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-promisereactionjob

// 1. Assert: reaction is a PromiseReaction Record.
// 2. Let promiseCapability be reaction.[[Capability]].
// 3. Let type be reaction.[[Type]].
// 4. Let handler be reaction.[[Handler]].
// 5. If handler is undefined, then
  // 5. a. If type is "Fulfill", let handlerResult be NormalCompletion(argument).
  // 5. b. Else,
    // 5. b. i. Assert: type is "Reject".
    // 5. b. ii. Let handlerResult be ThrowCompletion(argument).
// 6. Else, let handlerResult be Call(handler, undefined, « argument »).
// 7. If promiseCapability is undefined, then
  // 7. a. Assert: handlerResult is not an abrupt completion.
  // 7. b. Return NormalCompletion(empty).
// 8. If handlerResult is an abrupt completion, then
  // 8. a. Let status be Call(promiseCapability.[[Reject]], undefined, « handlerResult.[[Value]] »).
// 9. Else,
  // 9. a. Let status be Call(promiseCapability.[[Resolve]], undefined, « handlerResult.[[Value]] »).
// 10. Return Completion(status).


// http://www.ecma-international.org/ecma-262/#sec-promiseresolvethenablejob

// 1. Let resolvingFunctions be CreateResolvingFunctions(promiseToResolve).
// 2. Let thenCallResult be Call(then, thenable, « resolvingFunctions.[[Resolve]], resolvingFunctions.[[Reject]] »).
// 3. If thenCallResult is an abrupt completion, then
  // 3. a. Let status be Call(resolvingFunctions.[[Reject]], undefined, « thenCallResult.[[Value]] »).
  // 3. b. Return Completion(status).
// 4. Return Completion(thenCallResult).


// http://www.ecma-international.org/ecma-262/#sec-promise-executor

// 1. If NewTarget is undefined, throw a TypeError exception.
// 2. If IsCallable(executor) is false, throw a TypeError exception.
// 3. Let promise be ? OrdinaryCreateFromConstructor(NewTarget, "%PromisePrototype%", « [[PromiseState]], [[PromiseResult]], [[PromiseFulfillReactions]], [[PromiseRejectReactions]], [[PromiseIsHandled]] »).
// 4. Set promise.[[PromiseState]] to "pending".
// 5. Set promise.[[PromiseFulfillReactions]] to a new empty List.
// 6. Set promise.[[PromiseRejectReactions]] to a new empty List.
// 7. Set promise.[[PromiseIsHandled]] to false.
// 8. Let resolvingFunctions be CreateResolvingFunctions(promise).
// 9. Let completion be Call(executor, undefined, « resolvingFunctions.[[Resolve]], resolvingFunctions.[[Reject]] »).
// 10. If completion is an abrupt completion, then
  // 10. a. Perform ? Call(resolvingFunctions.[[Reject]], undefined, « completion.[[Value]] »).
// 11. Return promise.


// http://www.ecma-international.org/ecma-262/#sec-promise.all

// 1. Let C be the this value.
// 2. If Type(C) is not Object, throw a TypeError exception.
// 3. Let promiseCapability be ? NewPromiseCapability(C).
// 4. Let iteratorRecord be GetIterator(iterable).
// 5. IfAbruptRejectPromise(iteratorRecord, promiseCapability).
// 6. Let result be PerformPromiseAll(iteratorRecord, C, promiseCapability).
// 7. If result is an abrupt completion, then
  // 7. a. If iteratorRecord.[[Done]] is false, set result to IteratorClose(iteratorRecord, result).
  // 7. b. IfAbruptRejectPromise(result, promiseCapability).
// 8. Return Completion(result).


// http://www.ecma-international.org/ecma-262/#sec-performpromiseall

// 1. Assert: IsConstructor(constructor) is true.
// 2. Assert: resultCapability is a PromiseCapability Record.
// 3. Let values be a new empty List.
// 4. Let remainingElementsCount be a new Record { [[Value]]: 1 }.
// 5. Let index be 0.
// 6. Repeat,
  // 6. a. Let next be IteratorStep(iteratorRecord).
  // 6. b. If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
  // 6. c. ReturnIfAbrupt(next).
  // 6. d. If next is false, then
    // 6. d. i. Set iteratorRecord.[[Done]] to true.
    // 6. d. ii. Set remainingElementsCount.[[Value]] to remainingElementsCount.[[Value]] - 1.
    // 6. d. iii. If remainingElementsCount.[[Value]] is 0, then
      // 6. d. iii. 1. Let valuesArray be CreateArrayFromList(values).
      // 6. d. iii. 2. Perform ? Call(resultCapability.[[Resolve]], undefined, « valuesArray »).
    // 6. d. iv. Return resultCapability.[[Promise]].
  // 6. e. Let nextValue be IteratorValue(next).
  // 6. f. If nextValue is an abrupt completion, set iteratorRecord.[[Done]] to true.
  // 6. g. ReturnIfAbrupt(nextValue).
  // 6. h. Append undefined to values.
  // 6. i. Let nextPromise be ? Invoke(constructor, "resolve", « nextValue »).
  // 6. j. Let steps be the algorithm steps defined in Promise.all Resolve Element Functions.
  // 6. k. Let resolveElement be CreateBuiltinFunction(steps, « [[AlreadyCalled]], [[Index]], [[Values]], [[Capability]], [[RemainingElements]] »).
  // 6. l. Set resolveElement.[[AlreadyCalled]] to a new Record { [[Value]]: false }.
  // 6. m. Set resolveElement.[[Index]] to index.
  // 6. n. Set resolveElement.[[Values]] to values.
  // 6. o. Set resolveElement.[[Capability]] to resultCapability.
  // 6. p. Set resolveElement.[[RemainingElements]] to remainingElementsCount.
  // 6. q. Set remainingElementsCount.[[Value]] to remainingElementsCount.[[Value]] + 1.
  // 6. r. Perform ? Invoke(nextPromise, "then", « resolveElement, resultCapability.[[Reject]] »).
  // 6. s. Increase index by 1.


// http://www.ecma-international.org/ecma-262/#sec-promise.all-resolve-element-functions

// 1. Let F be the active function object.
// 2. Let alreadyCalled be F.[[AlreadyCalled]].
// 3. If alreadyCalled.[[Value]] is true, return undefined.
// 4. Set alreadyCalled.[[Value]] to true.
// 5. Let index be F.[[Index]].
// 6. Let values be F.[[Values]].
// 7. Let promiseCapability be F.[[Capability]].
// 8. Let remainingElementsCount be F.[[RemainingElements]].
// 9. Set values[index] to x.
// 10. Set remainingElementsCount.[[Value]] to remainingElementsCount.[[Value]] - 1.
// 11. If remainingElementsCount.[[Value]] is 0, then
  // 11. a. Let valuesArray be CreateArrayFromList(values).
  // 11. b. Return ? Call(promiseCapability.[[Resolve]], undefined, « valuesArray »).
// 12. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-promise.race

// 1. Let C be the this value.
// 2. If Type(C) is not Object, throw a TypeError exception.
// 3. Let promiseCapability be ? NewPromiseCapability(C).
// 4. Let iteratorRecord be GetIterator(iterable).
// 5. IfAbruptRejectPromise(iteratorRecord, promiseCapability).
// 6. Let result be PerformPromiseRace(iteratorRecord, C, promiseCapability).
// 7. If result is an abrupt completion, then
  // 7. a. If iteratorRecord.[[Done]] is false, set result to IteratorClose(iteratorRecord, result).
  // 7. b. IfAbruptRejectPromise(result, promiseCapability).
// 8. Return Completion(result).


// http://www.ecma-international.org/ecma-262/#sec-performpromiserace

// 1. Assert: IsConstructor(constructor) is true.
// 2. Assert: resultCapability is a PromiseCapability Record.
// 3. Repeat,
  // 3. a. Let next be IteratorStep(iteratorRecord).
  // 3. b. If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
  // 3. c. ReturnIfAbrupt(next).
  // 3. d. If next is false, then
    // 3. d. i. Set iteratorRecord.[[Done]] to true.
    // 3. d. ii. Return resultCapability.[[Promise]].
  // 3. e. Let nextValue be IteratorValue(next).
  // 3. f. If nextValue is an abrupt completion, set iteratorRecord.[[Done]] to true.
  // 3. g. ReturnIfAbrupt(nextValue).
  // 3. h. Let nextPromise be ? Invoke(constructor, "resolve", « nextValue »).
  // 3. i. Perform ? Invoke(nextPromise, "then", « resultCapability.[[Resolve]], resultCapability.[[Reject]] »).


// http://www.ecma-international.org/ecma-262/#sec-promise.reject

// 1. Let C be the this value.
// 2. If Type(C) is not Object, throw a TypeError exception.
// 3. Let promiseCapability be ? NewPromiseCapability(C).
// 4. Perform ? Call(promiseCapability.[[Reject]], undefined, « r »).
// 5. Return promiseCapability.[[Promise]].


// http://www.ecma-international.org/ecma-262/#sec-promise.resolve

// 1. Let C be the this value.
// 2. If Type(C) is not Object, throw a TypeError exception.
// 3. Return ? PromiseResolve(C, x).


// http://www.ecma-international.org/ecma-262/#sec-promise-resolve

// 1. Assert: Type(C) is Object.
// 2. If IsPromise(x) is true, then
  // 2. a. Let xConstructor be ? Get(x, "constructor").
  // 2. b. If SameValue(xConstructor, C) is true, return x.
// 3. Let promiseCapability be ? NewPromiseCapability(C).
// 4. Perform ? Call(promiseCapability.[[Resolve]], undefined, « x »).
// 5. Return promiseCapability.[[Promise]].


// http://www.ecma-international.org/ecma-262/#sec-get-promise-@@species

// 1. Return the this value.


// http://www.ecma-international.org/ecma-262/#sec-promise.prototype.catch

// 1. Let promise be the this value.
// 2. Return ? Invoke(promise, "then", « undefined, onRejected »).


// http://www.ecma-international.org/ecma-262/#sec-promise.prototype.finally

// 1. Let promise be the this value.
// 2. If Type(promise) is not Object, throw a TypeError exception.
// 3. Let C be ? SpeciesConstructor(promise, %Promise%).
// 4. Assert: IsConstructor(C) is true.
// 5. If IsCallable(onFinally) is false, then
  // 5. a. Let thenFinally be onFinally.
  // 5. b. Let catchFinally be onFinally.
// 6. Else,
  // 6. a. Let stepsThenFinally be the algorithm steps defined in Then Finally Functions.
  // 6. b. Let thenFinally be CreateBuiltinFunction(stepsThenFinally, « [[Constructor]], [[OnFinally]] »).
  // 6. c. Set thenFinally.[[Constructor]] to C.
  // 6. d. Set thenFinally.[[OnFinally]] to onFinally.
  // 6. e. Let stepsCatchFinally be the algorithm steps defined in Catch Finally Functions.
  // 6. f. Let catchFinally be CreateBuiltinFunction(stepsCatchFinally, « [[Constructor]], [[OnFinally]] »).
  // 6. g. Set catchFinally.[[Constructor]] to C.
  // 6. h. Set catchFinally.[[OnFinally]] to onFinally.
// 7. Return ? Invoke(promise, "then", « thenFinally, catchFinally »).


// http://www.ecma-international.org/ecma-262/#sec-thenfinallyfunctions

// 1. Let F be the active function object.
// 2. Let onFinally be F.[[OnFinally]].
// 3. Assert: IsCallable(onFinally) is true.
// 4. Let result be ? Call(onFinally, undefined).
// 5. Let C be F.[[Constructor]].
// 6. Assert: IsConstructor(C) is true.
// 7. Let promise be ? PromiseResolve(C, result).
// 8. Let valueThunk be equivalent to a function that returns value.
// 9. Return ? Invoke(promise, "then", « valueThunk »).


// http://www.ecma-international.org/ecma-262/#sec-catchfinallyfunctions

// 1. Let F be the active function object.
// 2. Let onFinally be F.[[OnFinally]].
// 3. Assert: IsCallable(onFinally) is true.
// 4. Let result be ? Call(onFinally, undefined).
// 5. Let C be F.[[Constructor]].
// 6. Assert: IsConstructor(C) is true.
// 7. Let promise be ? PromiseResolve(C, result).
// 8. Let thrower be equivalent to a function that throws reason.
// 9. Return ? Invoke(promise, "then", « thrower »).


// http://www.ecma-international.org/ecma-262/#sec-promise.prototype.then

// 1. Let promise be the this value.
// 2. If IsPromise(promise) is false, throw a TypeError exception.
// 3. Let C be ? SpeciesConstructor(promise, %Promise%).
// 4. Let resultCapability be ? NewPromiseCapability(C).
// 5. Return PerformPromiseThen(promise, onFulfilled, onRejected, resultCapability).


// http://www.ecma-international.org/ecma-262/#sec-performpromisethen

// 1. Assert: IsPromise(promise) is true.
// 2. If resultCapability is present, then
  // 2. a. Assert: resultCapability is a PromiseCapability Record.
// 3. Else,
  // 3. a. Set resultCapability to undefined.
// 4. If IsCallable(onFulfilled) is false, then
  // 4. a. Set onFulfilled to undefined.
// 5. If IsCallable(onRejected) is false, then
  // 5. a. Set onRejected to undefined.
// 6. Let fulfillReaction be the PromiseReaction { [[Capability]]: resultCapability, [[Type]]: "Fulfill", [[Handler]]: onFulfilled }.
// 7. Let rejectReaction be the PromiseReaction { [[Capability]]: resultCapability, [[Type]]: "Reject", [[Handler]]: onRejected }.
// 8. If promise.[[PromiseState]] is "pending", then
  // 8. a. Append fulfillReaction as the last element of the List that is promise.[[PromiseFulfillReactions]].
  // 8. b. Append rejectReaction as the last element of the List that is promise.[[PromiseRejectReactions]].
// 9. Else if promise.[[PromiseState]] is "fulfilled", then
  // 9. a. Let value be promise.[[PromiseResult]].
  // 9. b. Perform EnqueueJob("PromiseJobs", PromiseReactionJob, « fulfillReaction, value »).
// 10. Else,
  // 10. a. Assert: The value of promise.[[PromiseState]] is "rejected".
  // 10. b. Let reason be promise.[[PromiseResult]].
  // 10. c. If promise.[[PromiseIsHandled]] is false, perform HostPromiseRejectionTracker(promise, "handle").
  // 10. d. Perform EnqueueJob("PromiseJobs", PromiseReactionJob, « rejectReaction, reason »).
// 11. Set promise.[[PromiseIsHandled]] to true.
// 12. If resultCapability is undefined, then
  // 12. a. Return undefined.
// 13. Else,
  // 13. a. Return resultCapability.[[Promise]].


// http://www.ecma-international.org/ecma-262/#sec-async-function-constructor-arguments

// 1. Let C be the active function object.
// 2. Let args be the argumentsList that was passed to this function by [[Call]] or [[Construct]].
// 3. Return CreateDynamicFunction(C, NewTarget, "async", args).


// http://www.ecma-international.org/ecma-262/#sec-async-functions-abstract-operations-async-function-start

// 1. Let runningContext be the running execution context.
// 2. Let asyncContext be a copy of runningContext.
// 3. Set the code evaluation state of asyncContext such that when evaluation is resumed for that execution context the following steps will be performed:
  // 3. a. Let result be the result of evaluating asyncFunctionBody.
  // 3. b. Assert: If we return here, the async function either threw an exception or performed an implicit or explicit return; all awaiting is done.
  // 3. c. Remove asyncContext from the execution context stack and restore the execution context that is at the top of the execution context stack as the running execution context.
  // 3. d. If result.[[Type]] is normal, then
    // 3. d. i. Perform ! Call(promiseCapability.[[Resolve]], undefined, « undefined »).
  // 3. e. Else if result.[[Type]] is return, then
    // 3. e. i. Perform ! Call(promiseCapability.[[Resolve]], undefined, « result.[[Value]] »).
  // 3. f. Else,
    // 3. f. i. Assert: result.[[Type]] is throw.
    // 3. f. ii. Perform ! Call(promiseCapability.[[Reject]], undefined, « result.[[Value]] »).
  // 3. g. Return.
// 4. Push asyncContext onto the execution context stack; asyncContext is now the running execution context.
// 5. Resume the suspended evaluation of asyncContext. Let result be the value returned by the resumed computation.
// 6. Assert: When we return here, asyncContext has already been removed from the execution context stack and runningContext is the currently running execution context.
// 7. Assert: result is a normal completion with a value of undefined. The possible sources of completion values are Await or, if the async function doesn't await anything, the step 3.g above.
// 8. Return.


// http://www.ecma-international.org/ecma-262/#sec-reflect.apply

// 1. If IsCallable(target) is false, throw a TypeError exception.
// 2. Let args be ? CreateListFromArrayLike(argumentsList).
// 3. Perform PrepareForTailCall().
// 4. Return ? Call(target, thisArgument, args).


// http://www.ecma-international.org/ecma-262/#sec-reflect.construct

// 1. If IsConstructor(target) is false, throw a TypeError exception.
// 2. If newTarget is not present, set newTarget to target.
// 3. Else if IsConstructor(newTarget) is false, throw a TypeError exception.
// 4. Let args be ? CreateListFromArrayLike(argumentsList).
// 5. Return ? Construct(target, args, newTarget).


// http://www.ecma-international.org/ecma-262/#sec-reflect.defineproperty

// 1. If Type(target) is not Object, throw a TypeError exception.
// 2. Let key be ? ToPropertyKey(propertyKey).
// 3. Let desc be ? ToPropertyDescriptor(attributes).
// 4. Return ? target.[[DefineOwnProperty]](key, desc).


// http://www.ecma-international.org/ecma-262/#sec-reflect.deleteproperty

// 1. If Type(target) is not Object, throw a TypeError exception.
// 2. Let key be ? ToPropertyKey(propertyKey).
// 3. Return ? target.[[Delete]](key).


// http://www.ecma-international.org/ecma-262/#sec-reflect.get

// 1. If Type(target) is not Object, throw a TypeError exception.
// 2. Let key be ? ToPropertyKey(propertyKey).
// 3. If receiver is not present, then
  // 3. a. Set receiver to target.
// 4. Return ? target.[[Get]](key, receiver).


// http://www.ecma-international.org/ecma-262/#sec-reflect.getownpropertydescriptor

// 1. If Type(target) is not Object, throw a TypeError exception.
// 2. Let key be ? ToPropertyKey(propertyKey).
// 3. Let desc be ? target.[[GetOwnProperty]](key).
// 4. Return FromPropertyDescriptor(desc).


// http://www.ecma-international.org/ecma-262/#sec-reflect.getprototypeof

// 1. If Type(target) is not Object, throw a TypeError exception.
// 2. Return ? target.[[GetPrototypeOf]]().


// http://www.ecma-international.org/ecma-262/#sec-reflect.has

// 1. If Type(target) is not Object, throw a TypeError exception.
// 2. Let key be ? ToPropertyKey(propertyKey).
// 3. Return ? target.[[HasProperty]](key).


// http://www.ecma-international.org/ecma-262/#sec-reflect.isextensible

// 1. If Type(target) is not Object, throw a TypeError exception.
// 2. Return ? target.[[IsExtensible]]().


// http://www.ecma-international.org/ecma-262/#sec-reflect.ownkeys

// 1. If Type(target) is not Object, throw a TypeError exception.
// 2. Let keys be ? target.[[OwnPropertyKeys]]().
// 3. Return CreateArrayFromList(keys).


// http://www.ecma-international.org/ecma-262/#sec-reflect.preventextensions

// 1. If Type(target) is not Object, throw a TypeError exception.
// 2. Return ? target.[[PreventExtensions]]().


// http://www.ecma-international.org/ecma-262/#sec-reflect.set

// 1. If Type(target) is not Object, throw a TypeError exception.
// 2. Let key be ? ToPropertyKey(propertyKey).
// 3. If receiver is not present, then
  // 3. a. Set receiver to target.
// 4. Return ? target.[[Set]](key, V, receiver).


// http://www.ecma-international.org/ecma-262/#sec-reflect.setprototypeof

// 1. If Type(target) is not Object, throw a TypeError exception.
// 2. If Type(proto) is not Object and proto is not null, throw a TypeError exception.
// 3. Return ? target.[[SetPrototypeOf]](proto).


// http://www.ecma-international.org/ecma-262/#sec-proxy-target-handler

// 1. If NewTarget is undefined, throw a TypeError exception.
// 2. Return ? ProxyCreate(target, handler).


// http://www.ecma-international.org/ecma-262/#sec-proxy.revocable

// 1. Let p be ? ProxyCreate(target, handler).
// 2. Let steps be the algorithm steps defined in Proxy Revocation Functions.
// 3. Let revoker be CreateBuiltinFunction(steps, « [[RevocableProxy]] »).
// 4. Set revoker.[[RevocableProxy]] to p.
// 5. Let result be ObjectCreate(%ObjectPrototype%).
// 6. Perform CreateDataProperty(result, "proxy", p).
// 7. Perform CreateDataProperty(result, "revoke", revoker).
// 8. Return result.


// http://www.ecma-international.org/ecma-262/#sec-proxy-revocation-functions

// 1. Let F be the active function object.
// 2. Let p be F.[[RevocableProxy]].
// 3. If p is null, return undefined.
// 4. Set F.[[RevocableProxy]] to null.
// 5. Assert: p is a Proxy object.
// 6. Set p.[[ProxyTarget]] to null.
// 7. Set p.[[ProxyHandler]] to null.
// 8. Return undefined.


// http://www.ecma-international.org/ecma-262/#sec-event-set

// 1. Let events be an empty Set.
// 2. For each Agent Events Record aer in execution.[[EventsRecords]], do
  // 2. a. For each event E in aer.[[EventList]], do
    // 2. a. i. Add E to events.
// 3. Return events.


// http://www.ecma-international.org/ecma-262/#sec-sharedatablockeventset

// 1. Let events be an empty Set.
// 2. For each event E in EventSet(execution), do
  // 2. a. If E is a ReadSharedMemory, WriteSharedMemory, or ReadModifyWriteSharedMemory event, add E to events.
// 3. Return events.


// http://www.ecma-international.org/ecma-262/#sec-synchronizeeventset

// 1. Let events be an empty Set.
// 2. For each event E in EventSet(execution), do
  // 2. a. If E is a Synchronize event, add E to events.
// 3. Return events.


// http://www.ecma-international.org/ecma-262/#sec-hosteventset

// 1. Let events be an empty Set.
// 2. For each event E in EventSet(execution), do
  // 2. a. If E is not in SharedDataBlockEventSet(execution), add E to events.
// 3. Return events.


// http://www.ecma-international.org/ecma-262/#sec-composewriteeventbytes

// 1. Let byteLocation be byteIndex.
// 2. Let bytesRead be a new empty List.
// 3. For each element W of Ws in List order, do
  // 3. a. Assert: W has byteLocation in its range.
  // 3. b. Let payloadIndex be byteLocation - W.[[ByteIndex]].
  // 3. c. If W is a WriteSharedMemory event, then
    // 3. c. i. Let byte be W.[[Payload]][payloadIndex].
  // 3. d. Else,
    // 3. d. i. Assert: W is a ReadModifyWriteSharedMemory event.
    // 3. d. ii. Let bytes be ValueOfReadEvent(execution, W).
    // 3. d. iii. Let bytesModified be W.[[ModifyOp]](bytes, W.[[Payload]]).
    // 3. d. iv. Let byte be bytesModified[payloadIndex].
  // 3. e. Append byte to bytesRead.
  // 3. f. Increment byteLocation by 1.
// 4. Return bytesRead.


// http://www.ecma-international.org/ecma-262/#sec-valueofreadevent

// 1. Assert: R is a ReadSharedMemory or ReadModifyWriteSharedMemory event.
// 2. Let Ws be execution.[[ReadsBytesFrom]](R).
// 3. Assert: Ws is a List of WriteSharedMemory or ReadModifyWriteSharedMemory events with length equal to R.[[ElementSize]].
// 4. Return ComposeWriteEventBytes(execution, R.[[ByteIndex]], Ws).


// http://www.ecma-international.org/ecma-262/#sec-valid-chosen-reads

// 1. For each ReadSharedMemory or ReadModifyWriteSharedMemory event R in SharedDataBlockEventSet(execution), do
  // 1. a. Let chosenValueRecord be the element of execution.[[ChosenValues]] whose [[Event]] field is R.
  // 1. b. Let chosenValue be chosenValueRecord.[[ChosenValue]].
  // 1. c. Let readValue be ValueOfReadEvent(execution, R).
  // 1. d. Let chosenLen be the number of elements of chosenValue.
  // 1. e. Let readLen be the number of elements of readValue.
  // 1. f. If chosenLen is not equal to readLen, then
    // 1. f. i. Return false.
  // 1. g. If chosenValue[i] is not equal to readValue[i] for any integer value i in the range 0 through chosenLen, exclusive, then
    // 1. g. i. Return false.
// 2. Return true.


// http://www.ecma-international.org/ecma-262/#sec-coherent-reads

// 1. For each ReadSharedMemory or ReadModifyWriteSharedMemory event R in SharedDataBlockEventSet(execution), do
  // 1. a. Let Ws be execution.[[ReadsBytesFrom]](R).
  // 1. b. Let byteLocation be R.[[ByteIndex]].
  // 1. c. For each element W of Ws in List order, do
    // 1. c. i. If (R, W) is in execution.[[HappensBefore]], then
      // 1. c. i. 1. Return false.
    // 1. c. ii. If there is a WriteSharedMemory or ReadModifyWriteSharedMemory event V that has byteLocation in its range such that the pairs (W, V) and (V, R) are in execution.[[HappensBefore]], then
      // 1. c. ii. 1. Return false.
    // 1. c. iii. Increment byteLocation by 1.
// 2. Return true.


// http://www.ecma-international.org/ecma-262/#sec-tear-free-aligned-reads

// 1. For each ReadSharedMemory or ReadModifyWriteSharedMemory event R in SharedDataBlockEventSet(execution), do
  // 1. a. If R.[[NoTear]] is true, then
    // 1. a. i. Assert: The remainder of dividing R.[[ByteIndex]] by R.[[ElementSize]] is 0.
    // 1. a. ii. For each event W such that (R, W) is in execution.[[ReadsFrom]] and W.[[NoTear]] is true, do
      // 1. a. ii. 1. If R and W have equal ranges, and there is an event V such that V and W have equal ranges, V.[[NoTear]] is true, W is not V, and (R, V) is in execution.[[ReadsFrom]], then
        // 1. a. ii. 1. a. Return false.
// 2. Return true.


// http://www.ecma-international.org/ecma-262/#sec-races

// 1. If E is not D, then
  // 1. a. If the pairs (E, D) and (D, E) are not in execution.[[HappensBefore]], then
    // 1. a. i. If E and D are both WriteSharedMemory or ReadModifyWriteSharedMemory events and E and D do not have disjoint ranges, then
      // 1. a. i. 1. Return true.
    // 1. a. ii. If either (E, D) or (D, E) is in execution.[[ReadsFrom]], then
      // 1. a. ii. 1. Return true.
// 2. Return false.


// http://www.ecma-international.org/ecma-262/#sec-data-races

// 1. If E and D are in a race in execution, then
  // 1. a. If E.[[Order]] is not "SeqCst" or D.[[Order]] is not "SeqCst", then
    // 1. a. i. Return true.
  // 1. b. If E and D have overlapping ranges, then
    // 1. b. i. Return true.
// 2. Return false.
