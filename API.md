# API Reference

**Classes**

Name|Description
----|-----------
[P6Namer](#p6-namer-p6namer)|*No description*



## class P6Namer  <a id="p6-namer-p6namer"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IResource](#aws-cdk-core-iresource), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IConstruct](#aws-cdk-core-iconstruct)
__Extends__: [Resource](#aws-cdk-core-resource)

### Initializer




```ts
new P6Namer(scope: Construct, id: string, props?: ResourceProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[ResourceProps](#aws-cdk-core-resourceprops)</code>)  *No description*
  * **account** (<code>string</code>)  The AWS account ID this resource belongs to. __*Default*__: the resource is in the same account as the stack it belongs to
  * **physicalName** (<code>string</code>)  The value passed in by users to the physical name prop of the resource. __*Default*__: The physical name will be allocated by CloudFormation at deployment time
  * **region** (<code>string</code>)  The AWS region this resource belongs to. __*Default*__: the resource is in the same region as the stack it belongs to




