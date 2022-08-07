	.text
	.def	 @feat.00;
	.scl	3;
	.type	0;
	.endef
	.globl	@feat.00
.set @feat.00, 1
	.file	"source.cpp"
	.def	 _main;
	.scl	2;
	.type	32;
	.endef
	.globl	_main                           # -- Begin function main
	.p2align	4, 0x90
_main:                                  # @main
# %bb.0:
	pushl	%ebp
	movl	%esp, %ebp
	subl	$8, %esp
	movl	$0, -4(%ebp)
	movl	$15, -8(%ebp)
	movl	-8(%ebp), %eax
	addl	$10, %eax
	subl	$5, %eax
	addl	$8, %esp
	popl	%ebp
	retl
                                        # -- End function
	.addrsig
