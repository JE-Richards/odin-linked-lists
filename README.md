# Linked List Implementation: An Intermediate JavaScript Project

## About

This mini project forming part of the [JavaScript course](https://www.theodinproject.com/lessons/javascript-linked-lists) hosted by [The Odin Project](https://www.theodinproject.com/). The project provides an opportunity for students to practice implementing one of the new data structures introduced in the previous lessons.

The aim of the project is to implement the following:

- [x] A `Node` Class (or Factory) that represents each node in the linked list. Each node should have:
  - [x] A value (defaulted to `null`)
  - [x] A link to the next node in the list
- [x] A `LinkedList` Class (or factory) that will represent the full list.
- The linked list should have the following functions:
  - [x] `append(value)`: Adds a new node containing `value` to the end of the list.
  - [x] `prepend(value)`: Adds a new node containing `value` to the start of the list.
  - [x] `size`: Returns the total number of nodes in the list
  - [x] `head`: Returns the first node in the list
  - [x] `tail`: Returns the last node in the list
  - [x] `at(index)`: Returns the node at the given `index`
  - [x] `pop`: Removes the last node from the list
  - [x] `contains(value)`: Returns true if the pssed value in the list, false otherwise.
  - [x] `find(value)`: Returns the index of the node containing the `value` if it exists in the list.
  - [x] `toString`: Represents the linked list objects as strings. It's formatted to print as: `( node-value ) -> ( next-node-value ) -> null`
- Two extra credit features:
  - [x] `insertAt(value, index)`: Inserts a new node with the provided `value` at the given `index`
  - [x] `removeAt(index)`: Removes the node at the given `index`.

## To-Do

These are additional features or improvements I think could be made in a future update:

- [] Add a size property to the constructor of the linked list.
  - By keeping a rolling counter as the property of the list itself, it would simplify the `size` method and could be used to ensure that when the user passes an index to function, that the index isn't larger than the size of the list.
- [] Look to add `tail` as a property of the list itself. This way, it can be directly called in the `tail` and `pop` methods as opposed to the current implementation which iterates through the list to find the tail node.
- [] Current implementation only allows positive intiger indicies to be used. Look to allow negative indicies where `-1` represents the `tail` node.
