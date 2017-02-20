# Why Erlang?
> Erlang arose from Ericsson’s need to build fault-tolerant, highly-available systems - a pragmatic but effective solution to a real problem.


## Notes
-   Wanted to deal with concurrency

-   Wasn't satisfied with the provided operating system threads

-   Needed something lightweight, spwaning tens, hundreds of thousands of threads
(in short they needed lightweight fine-grained concurrency)

-   Systems were an amalgam of hardware and software, they needed to be tolerant
of failure, hard failure of hardware components(not some software raising an
exception)

-   Build in some sort of rationale for handling failure

-   Adopted the "let it fail" philosophy, "You can prevent a piece of hardware
failing", not expecting components to deal with their own failure but building
systems which handle component failure, let that philosophy pervade the design
of the language and the design of systems in the language

-   Built a language with lightweight processes, ideas of supervision. Instead of
process dealing with its own failure, another process, another component of the
system would deal with that seperately.

-   Build systems that would be up all the time. "You can't take a telecom switch
down to install new software. You need to be able to upgrade the code while the
system is running." This is known as hot code upgrade

-   Built into a language a mechanism for swapping in a new piece of code for a
running program. It could be a program in a loop, you could swap in a new piece
of code for a very tight loop that was running

-   They wanted all those features but to build those feature, the best basis was
a functional programming basis

-   Functional programming is a substrate on which this fine-grained concurrency,
this "let it fail" philosophy is built. Because Functional programming is much
simpler. You don't have a state that is updated. You simply have values that are
computed and this allowed a very elegant design that we see in Erlang.

-   The OTP layer has been added. What it does is use the functional programming
constructs, as well as the concurrency.To build generic components like a server,
a finite state machine and etc. Each time a programmer sits down, they don't have
to think about the concurrent, the failure aspects of the server. All they need
to think about is the particular design of the server functionality.This abstraction
really pays huge dividens in practice.

-   Erlang is now an open source system. Ericson still provides support though the
OTP team.

-   It used in areas like online betting, paddy power, systems that are message-intensive,
whastsApp, the heart of WhatsApp servers that run in erlang which process millions
of simultaneous messages, which are using millions of simultaneous Erlang processes.

-   Erlang is used in practice in server technologies

-   Erlang is a language which is usable, scalable and its robust.
