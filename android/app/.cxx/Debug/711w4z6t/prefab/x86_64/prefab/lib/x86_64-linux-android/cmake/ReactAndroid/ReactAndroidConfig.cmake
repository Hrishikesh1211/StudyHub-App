if(NOT TARGET ReactAndroid::hermestooling)
add_library(ReactAndroid::hermestooling SHARED IMPORTED)
set_target_properties(ReactAndroid::hermestooling PROPERTIES
    IMPORTED_LOCATION "/home/ifryx/.gradle/caches/8.10.2/transforms/fb4ffc4ffe990bedb67f94481708cff7/transformed/react-android-0.76.1-debug/prefab/modules/hermestooling/libs/android.x86_64/libhermestooling.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/ifryx/.gradle/caches/8.10.2/transforms/fb4ffc4ffe990bedb67f94481708cff7/transformed/react-android-0.76.1-debug/prefab/modules/hermestooling/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

if(NOT TARGET ReactAndroid::jsctooling)
add_library(ReactAndroid::jsctooling SHARED IMPORTED)
set_target_properties(ReactAndroid::jsctooling PROPERTIES
    IMPORTED_LOCATION "/home/ifryx/.gradle/caches/8.10.2/transforms/fb4ffc4ffe990bedb67f94481708cff7/transformed/react-android-0.76.1-debug/prefab/modules/jsctooling/libs/android.x86_64/libjsctooling.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/ifryx/.gradle/caches/8.10.2/transforms/fb4ffc4ffe990bedb67f94481708cff7/transformed/react-android-0.76.1-debug/prefab/modules/jsctooling/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

if(NOT TARGET ReactAndroid::jsi)
add_library(ReactAndroid::jsi SHARED IMPORTED)
set_target_properties(ReactAndroid::jsi PROPERTIES
    IMPORTED_LOCATION "/home/ifryx/.gradle/caches/8.10.2/transforms/fb4ffc4ffe990bedb67f94481708cff7/transformed/react-android-0.76.1-debug/prefab/modules/jsi/libs/android.x86_64/libjsi.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/ifryx/.gradle/caches/8.10.2/transforms/fb4ffc4ffe990bedb67f94481708cff7/transformed/react-android-0.76.1-debug/prefab/modules/jsi/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

if(NOT TARGET ReactAndroid::reactnative)
add_library(ReactAndroid::reactnative SHARED IMPORTED)
set_target_properties(ReactAndroid::reactnative PROPERTIES
    IMPORTED_LOCATION "/home/ifryx/.gradle/caches/8.10.2/transforms/fb4ffc4ffe990bedb67f94481708cff7/transformed/react-android-0.76.1-debug/prefab/modules/reactnative/libs/android.x86_64/libreactnative.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/ifryx/.gradle/caches/8.10.2/transforms/fb4ffc4ffe990bedb67f94481708cff7/transformed/react-android-0.76.1-debug/prefab/modules/reactnative/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

